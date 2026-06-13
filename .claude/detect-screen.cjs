// Détecte les 4 coins de l'écran (zone claire) d'un appareil dans une photo.
// Usage : node .claude/detect-screen.cjs <photo> <x0> <y0> <x1> <y1>
// La bbox doit contenir l'écran et un peu de marge, mais EXCLURE les zones claires du décor.
// Sortie : JSON { tl, tr, br, bl } prêt à coller dans job-screen.json.
const sharp = require('sharp');

const [photo, x0, y0, x1, y1] = process.argv.slice(2);
const bbox = { x0: +x0, y0: +y0, x1: +x1, y1: +y1 };

(async () => {
  const { data, info } = await sharp(photo).raw().toBuffer({ resolveWithObject: true });
  const W = info.width, ch = info.channels;
  const clair = (x, y) => {
    const i = (y * W + x) * ch;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // crème/blanc : lumineux, faiblement saturé, pas un ton chair (g proche de r)
    return r > 185 && g > 175 && b > 150 && (r - b) < 70 && (g >= r - 25);
  };
  const sombre = (x, y) => {
    const i = (y * W + x) * ch;
    return Math.max(data[i], data[i + 1], data[i + 2]) < 70;
  };
  const sombreVers = (x, y, dir, portee) => {
    for (let k = 1; k <= portee; k++) {
      const xx = x + dir * k;
      if (xx < bbox.x0 || xx > bbox.x1) return false;
      if (sombre(xx, y)) return true;
    }
    return false;
  };
  const RUN_MIN = 30;   // longueur de plage claire minimale (évite les points isolés)
  const PORTEE = 110;   // distance max au contour sombre de l'appareil, de chaque côté

  const runsParLigne = new Map();
  for (let y = bbox.y0; y <= bbox.y1; y++) {
    let debut = -1, meilleures = null;
    for (let x = bbox.x0; x <= bbox.x1 + 1; x++) {
      const ok = x <= bbox.x1 && clair(x, y);
      if (ok && debut < 0) debut = x;
      if (!ok && debut >= 0) {
        const fin = x - 1, len = x - debut;
        // l'écran est bordé par le contour sombre de l'appareil des deux côtés
        if (len >= RUN_MIN && sombreVers(debut, y, -1, PORTEE) && sombreVers(fin, y, 1, PORTEE)
            && (!meilleures || len > meilleures[1] - meilleures[0])) meilleures = [debut, fin];
        debut = -1;
      }
    }
    if (meilleures) runsParLigne.set(y, meilleures);
  }
  if (!runsParLigne.size) { console.error('Aucune zone claire détectée dans la bbox.'); process.exit(1); }

  const lignes = [...runsParLigne.keys()].sort((a, b) => a - b);
  const yTop = lignes[0], yBot = lignes[lignes.length - 1];
  let xMin = Infinity, xMinY = 0, xMax = -Infinity, xMaxY = 0;
  for (const [y, [a, b]] of runsParLigne) {
    if (a < xMin) { xMin = a; xMinY = y; }
    if (b > xMax) { xMax = b; xMaxY = y; }
  }
  const milieu = (r) => Math.round((r[0] + r[1]) / 2);
  // extrêmes d'un rectangle incliné (rotation < 45°) = ses 4 coins
  const haut = [milieu(runsParLigne.get(yTop)), yTop];
  const bas = [milieu(runsParLigne.get(yBot)), yBot];
  const gauche = [xMin, xMinY];
  const droite = [xMax, xMaxY];

  // attribution tl/tr/br/bl selon l'inclinaison (le point haut est-il à gauche ou à droite ?)
  let corners;
  if (haut[0] <= bas[0]) corners = { tl: haut, tr: droite, br: bas, bl: gauche };
  else corners = { tl: gauche, tr: haut, br: droite, bl: bas };

  console.log(JSON.stringify({ corners }, null, 2));
  // échantillon des bords mesurés, pour ajustement par régression
  console.log('y;xgauche;xdroite');
  const pas = Math.max(10, Math.round((yBot - yTop) / 24));
  for (let y = yTop; y <= yBot; y += pas) {
    const r = runsParLigne.get(y);
    if (r) console.log(`${y};${r[0]};${r[1]}`);
  }
})();
