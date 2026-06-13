// Pipeline complet : détection des 4 bords d'écran + régression robuste + composition
// + vérification numérique de non-débordement.
// Usage : node .claude/process-screen.cjs job.json
// job.json : { photo, screen, bbox: [x0,y0,x1,y1], align, radius, glare, out,
//              corners (optionnel : court-circuite la détection), debugQuad (optionnel) }
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');

const job = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

function homographie(c) {
  const src = [[0, 0], [100, 0], [100, 100], [0, 100]];
  const dst = [c.tl, c.tr, c.br, c.bl];
  const A = [], b = [];
  for (let i = 0; i < 4; i++) {
    const [sx, sy] = src[i], [dx, dy] = dst[i];
    A.push([sx, sy, 1, 0, 0, 0, -sx * dx, -sy * dx]); b.push(dx);
    A.push([0, 0, 0, sx, sy, 1, -sx * dy, -sy * dy]); b.push(dy);
  }
  for (let col = 0; col < 8; col++) {
    let piv = col;
    for (let r = col + 1; r < 8; r++) if (Math.abs(A[r][col]) > Math.abs(A[piv][col])) piv = r;
    [A[col], A[piv]] = [A[piv], A[col]]; [b[col], b[piv]] = [b[piv], b[col]];
    for (let r = col + 1; r < 8; r++) {
      const f = A[r][col] / A[col][col];
      for (let k = col; k < 8; k++) A[r][k] -= f * A[col][k];
      b[r] -= f * b[col];
    }
  }
  const h = new Array(8);
  for (let r = 7; r >= 0; r--) {
    let s = b[r];
    for (let k = r + 1; k < 8; k++) s -= A[r][k] * h[k];
    h[r] = s / A[r][r];
  }
  return `matrix3d(${h[0]},${h[3]},0,${h[6]},${h[1]},${h[4]},0,${h[7]},0,0,1,0,${h[2]},${h[5]},0,1)`;
}

// ajustement v = a + b*u par Theil-Sen (médiane des pentes — robuste aux aberrants),
// puis raffinage moindres carrés sur les inliers à ±4px
function fitRobuste(points) {
  const n = points.length;
  if (n < 6) return { a: 0, b: 0, inliers: 0, total: n };
  const pentes = [];
  for (let k = 0; k < 4000; k++) {
    const i = Math.floor((k * 7919) % n), j = Math.floor((k * 104729 + 13) % n);
    const du = points[j][0] - points[i][0];
    if (Math.abs(du) < 8) continue;
    pentes.push((points[j][1] - points[i][1]) / du);
  }
  pentes.sort((a, b) => a - b);
  const b0 = pentes[Math.floor(pentes.length / 2)];
  const inters = points.map(([u, v]) => v - b0 * u).sort((a, b) => a - b);
  const a0 = inters[Math.floor(inters.length / 2)];
  const inliers = points.filter(([u, v]) => Math.abs(v - (a0 + b0 * u)) <= 4);
  if (inliers.length < 6) return { a: a0, b: b0, inliers: inliers.length, total: n };
  let su = 0, sv = 0, suu = 0, suv = 0;
  const m = inliers.length;
  for (const [u, v] of inliers) { su += u; sv += v; suu += u * u; suv += u * v; }
  const b1 = (m * suv - su * sv) / (m * suu - su * su);
  const a1 = (sv - b1 * su) / m;
  return { a: a1, b: b1, inliers: m, total: n };
}

function intersection(vert, horiz) {
  // vert : x = a1 + b1*y ; horiz : y = a2 + b2*x
  const y = (horiz.a + horiz.b * vert.a) / (1 - horiz.b * vert.b);
  const x = vert.a + vert.b * y;
  return [Math.round(x), Math.round(y)];
}

(async () => {
  const { data, info } = await sharp(job.photo).raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, ch = info.channels;
  const [x0, y0, x1, y1] = job.bbox || [0, 0, W - 1, H - 1];

  const clair = (x, y) => {
    const i = (y * W + x) * ch;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    return r > 185 && g > 175 && b > 150 && (r - b) < 70 && (g >= r - 25);
  };
  const sombre = (x, y) => {
    const i = (y * W + x) * ch;
    return Math.max(data[i], data[i + 1], data[i + 2]) < 70;
  };
  const sombreVers = (x, y, dx, dy, portee) => {
    for (let k = 1; k <= portee; k++) {
      const xx = x + dx * k, yy = y + dy * k;
      if (xx < x0 || xx > x1 || yy < y0 || yy > y1) return false;
      if (sombre(xx, yy)) return true;
    }
    return false;
  };
  const PORTEE = 110, RUN_MIN = 40;

  let corners = job.corners;
  if (!corners) {
    // bord = transition contour sombre -> écran clair soutenu, cherchée depuis l'extérieur
    const transition = (u, vMin, vMax, dir, horizontal) => {
      // dir=+1 : balaye de vMin vers vMax ; dir=-1 : l'inverse. Retourne v du 1er pixel écran.
      const debut = dir > 0 ? vMin + 6 : vMax - 6;
      const fin = dir > 0 ? vMax - 14 : vMin + 14;
      for (let v = debut; dir > 0 ? v <= fin : v >= fin; v += dir) {
        const [x, y] = horizontal ? [v, u] : [u, v];
        if (!clair(x, y)) continue;
        let nClair = 0, nSombre = 0;
        for (let k = 0; k < 14; k++) {
          const [xc, yc] = horizontal ? [v + dir * k, u] : [u, v + dir * k];
          if (clair(xc, yc)) nClair++;
        }
        for (let k = 1; k <= 7; k++) {
          const [xs, ys] = horizontal ? [v - dir * k, u] : [u, v - dir * k];
          if (sombre(xs, ys)) nSombre++;
        }
        if (nClair >= 11 && nSombre >= 3) return v;
        if (nClair < 6) v += dir * 3; // zone de contenu : avance plus vite
      }
      return null;
    };
    const gauche = [], droite = [], haut = [], bas = [];
    for (let y = y0; y <= y1; y += 2) {
      const g = transition(y, x0, x1, 1, true);
      if (g !== null) gauche.push([y, g]);
      const d = transition(y, x0, x1, -1, true);
      if (d !== null) droite.push([y, d]);
    }
    for (let x = x0; x <= x1; x += 2) {
      const t = transition(x, y0, y1, 1, false);
      if (t !== null) haut.push([x, t]);
      const b = transition(x, y0, y1, -1, false);
      if (b !== null) bas.push([x, b]);
    }

    const eGauche = fitRobuste(gauche);  // x = a + b*y
    const eDroite = fitRobuste(droite);
    const eHaut = fitRobuste(haut);      // y = a + b*x
    const eBas = fitRobuste(bas);
    corners = {
      tl: intersection(eGauche, eHaut), tr: intersection(eDroite, eHaut),
      br: intersection(eDroite, eBas), bl: intersection(eGauche, eBas),
    };
    console.log('Bords ajustés (inliers/total) : gauche ' + eGauche.inliers + '/' + eGauche.total
      + ', droite ' + eDroite.inliers + '/' + eDroite.total
      + ', haut ' + eHaut.inliers + '/' + eHaut.total
      + ', bas ' + eBas.inliers + '/' + eBas.total);
    console.log('Coins : ' + JSON.stringify(corners));
    if (job.diag) {
      console.log('droites : gauche x=' + eGauche.a.toFixed(1) + '+' + eGauche.b.toFixed(4) + '*y'
        + ' | droite x=' + eDroite.a.toFixed(1) + '+' + eDroite.b.toFixed(4) + '*y'
        + ' | haut y=' + eHaut.a.toFixed(1) + '+' + eHaut.b.toFixed(4) + '*x'
        + ' | bas y=' + eBas.a.toFixed(1) + '+' + eBas.b.toFixed(4) + '*x');
      const dump = (nom, pts) => {
        const pas = Math.max(1, Math.floor(pts.length / 12));
        console.log(nom + ' : ' + pts.filter((_, i) => i % pas === 0).map(([u, v]) => u + '>' + v).join(' '));
      };
      dump('candidats gauche (y>x)', gauche); dump('candidats droite (y>x)', droite);
      dump('candidats haut (x>y)', haut); dump('candidats bas (x>y)', bas);
    }
  }

  // composition
  const dataUri = async (p) => 'data:image/png;base64,' + (await sharp(p).png().toBuffer()).toString('base64');
  const photoUri = await dataUri(job.photo);
  const m3d = homographie(corners);
  let calque;
  if (job.debugQuad) {
    calque = `<div style="position:absolute;left:0;top:0;width:100px;height:100px;transform-origin:0 0;transform:${m3d};background:rgba(255,0,0,.45);"></div>`;
  } else {
    const screenUri = await dataUri(job.screen);
    const glare = job.glare
      ? `<div style="position:absolute;inset:0;background:linear-gradient(115deg, rgba(255,255,255,${job.glare}) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0) 62%, rgba(255,255,255,${job.glare * 0.6}) 100%);"></div>` : '';
    calque = `<div style="position:absolute;left:0;top:0;width:100px;height:100px;transform-origin:0 0;transform:${m3d};overflow:hidden;border-radius:${job.radius || 0}px;">
      <img src="${screenUri}" style="width:100%;height:100%;object-fit:cover;object-position:${job.align || 'center'} top;display:block;">${glare}</div>`;
  }
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0}</style></head>
  <body style="width:${W}px;height:${H}px;position:relative;overflow:hidden;">
    <img src="${photoUri}" style="position:absolute;inset:0;width:100%;height:100%;">${calque}</body></html>`;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  const png = await page.screenshot();
  await browser.close();

  if (!job.debugQuad) {
    // vérification : hors du quad gonflé de 8px, le composite doit être identique à l'original
    const comp = await sharp(png).raw().toBuffer({ resolveWithObject: true });
    const cd = comp.data, cw = comp.info.width;
    const pts = [corners.tl, corners.tr, corners.br, corners.bl];
    const cx = pts.reduce((s, p) => s + p[0], 0) / 4, cy = pts.reduce((s, p) => s + p[1], 0) / 4;
    const gonfle = pts.map(([px, py]) => {
      const dx = px - cx, dy = py - cy, n = Math.hypot(dx, dy);
      return [px + (dx / n) * 11, py + (dy / n) * 11];
    });
    const dansQuad = (x, y, q) => {
      for (let i = 0; i < 4; i++) {
        const [ax, ay] = q[i], [bx, by] = q[(i + 1) % 4];
        if ((bx - ax) * (y - ay) - (by - ay) * (x - ax) < 0) return false;
      }
      return true;
    };
    let diffs = 0, testes = 0;
    for (let y = Math.max(0, y0 - 20); y < Math.min(H, y1 + 20); y += 2) {
      for (let x = Math.max(0, x0 - 20); x < Math.min(W, x1 + 20); x += 2) {
        if (dansQuad(x, y, gonfle)) continue;
        testes++;
        const io = (y * W + x) * ch, ic = (y * cw + x) * comp.info.channels;
        if (Math.abs(data[io] - cd[ic]) > 12 || Math.abs(data[io + 1] - cd[ic + 1]) > 12) diffs++;
      }
    }
    const pct = (100 * diffs / Math.max(1, testes)).toFixed(2);
    console.log(`Vérif débordement : ${diffs}/${testes} pixels modifiés hors quad+11px (${pct} %)` + (diffs / testes > 0.002 ? '  ⚠ DÉBORDEMENT PROBABLE' : '  ok'));
  }

  if (job.out.endsWith('.webp')) await sharp(png).webp({ quality: 92 }).toFile(job.out);
  else fs.writeFileSync(job.out, png);
  console.log('OK ' + job.out);
})();
