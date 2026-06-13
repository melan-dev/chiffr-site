// Incruste une vraie capture d'app dans l'écran d'une photo (montage en perspective).
// Usage : node .claude/replace-screen.cjs job.json
// job.json : {
//   "photo": "chemin de la photo d'origine",
//   "screen": "chemin de la capture à incruster",
//   "corners": { "tl": [x,y], "tr": [x,y], "br": [x,y], "bl": [x,y] },  // coins écran dans la photo
//   "out": "chemin de sortie (.png ou .webp)",
//   "align": "left" | "center" | "right",  // recadrage si ratios différents (cover)
//   "radius": 2,                            // arrondi des coins, en unités locales (0-6)
//   "glare": 0.06,                          // reflet diagonal (0 = aucun)
//   "debug": false                          // true : quadrilatère rouge seul, pour calage
// }
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');

const job = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

// homographie : carré local 100x100 -> quadrilatère cible (Gauss 8x8)
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

const dataUri = async (p) => 'data:image/png;base64,' + (await sharp(p).png().toBuffer()).toString('base64');

(async () => {
  const meta = await sharp(job.photo).metadata();
  const W = meta.width, H = meta.height;
  const m3d = homographie(job.corners);
  const photoUri = await dataUri(job.photo);

  let calque;
  if (job.debug) {
    calque = `<div style="position:absolute;left:0;top:0;width:100px;height:100px;transform-origin:0 0;transform:${m3d};background:rgba(255,0,0,.45);"></div>`;
  } else {
    const screenUri = await dataUri(job.screen);
    const glare = job.glare
      ? `<div style="position:absolute;inset:0;background:linear-gradient(115deg, rgba(255,255,255,${job.glare}) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0) 62%, rgba(255,255,255,${job.glare * 0.6}) 100%);"></div>`
      : '';
    calque = `<div style="position:absolute;left:0;top:0;width:100px;height:100px;transform-origin:0 0;transform:${m3d};overflow:hidden;border-radius:${job.radius || 0}px;">
      <img src="${screenUri}" style="width:100%;height:100%;object-fit:cover;object-position:${job.align || 'center'} top;display:block;">
      ${glare}
    </div>`;
  }

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0}</style></head>
  <body style="width:${W}px;height:${H}px;position:relative;overflow:hidden;">
    <img src="${photoUri}" style="position:absolute;inset:0;width:100%;height:100%;">
    ${calque}
  </body></html>`;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  const png = await page.screenshot();
  await browser.close();

  if (job.out.endsWith('.webp')) await sharp(png).webp({ quality: 92 }).toFile(job.out);
  else fs.writeFileSync(job.out, png);
  console.log('OK ' + job.out);
})();
