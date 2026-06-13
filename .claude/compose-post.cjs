// Compose un visuel de post 1080x1350 : photo + accroche aux couleurs Chiffr.
// Usage : node .claude/compose-post.cjs [job.json]
// job.json : { "image": "...", "accroche": "...", "sousTitre": "...", "sortie": "nom.png" }
// Sans argument : job de démo.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SITE = path.resolve(__dirname, '..');
const OUT_DIR = 'C:/Users/memed/Sites/chiffr-prospection/medias/cartes-graphiques';
const FONTS = path.join(SITE, 'node_modules', '@fontsource-variable');

const job = process.argv[2]
  ? JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
  : {
      image: path.join(SITE, 'public/images/home/pac-unit-v2.webp'),
      accroche: 'La journée sur les chantiers,\npas les soirées sur les devis.',
      sousTitre: 'Chiffr — le logiciel devis & factures des artisans de l’énergie',
      sortie: 'demo-pac.png',
    };

// Tout est inline en data URI : Chromium bloque les ressources file:// depuis setContent.
const dataUri = (p, mime) => `data:${mime};base64,` + fs.readFileSync(p).toString('base64');
const mimes = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
const imgUri = dataUri(job.image, mimes[path.extname(job.image).toLowerCase()] || 'image/png');

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'Lora'; src: url('${dataUri(path.join(FONTS, 'lora/files/lora-latin-wght-normal.woff2'), 'font/woff2')}') format('woff2-variations'); font-weight: 400 700; }
  @font-face { font-family: 'Inter'; src: url('${dataUri(path.join(FONTS, 'inter/files/inter-latin-wght-normal.woff2'), 'font/woff2')}') format('woff2-variations'); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1080px; height: 1350px; position: relative; overflow: hidden; background: #0C1420; }
  .photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .voile { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(12,20,32,.18) 0%, rgba(12,20,32,0) 28%, rgba(12,20,32,.46) 58%, rgba(4,56,64,.94) 100%); }
  .badge { position: absolute; top: 56px; left: 56px; display: flex; align-items: center; gap: 18px; }
  .badge .c { width: 72px; height: 72px; border-radius: 18px; background: #FFF7EC; color: #064850;
    font: 700 44px/72px 'Lora', serif; text-align: center; box-shadow: 0 6px 24px rgba(12,20,32,.35); }
  .badge .nom { font: 600 40px 'Inter', sans-serif; color: #FFF7EC; letter-spacing: .01em; text-shadow: 0 2px 12px rgba(12,20,32,.5); }
  .bloc { position: absolute; left: 56px; right: 56px; bottom: 64px; }
  .filet { width: 96px; height: 6px; border-radius: 3px; background: #B96134; margin-bottom: 36px; }
  h1 { font: 600 78px/1.18 'Lora', serif; color: #FFF7EC; white-space: pre-line; letter-spacing: -0.01em; margin-bottom: 28px; }
  .sous { font: 400 31px/1.45 'Inter', sans-serif; color: rgba(255,247,236,.82); margin-bottom: 44px; max-width: 880px; }
  .pied { display: flex; align-items: center; gap: 16px; font: 600 30px 'Inter', sans-serif; color: #FFF7EC; }
  .pied .point { width: 12px; height: 12px; border-radius: 50%; background: #B96134; }
</style></head><body>
  <img class="photo" src="${imgUri}">
  <div class="voile"></div>
  <div class="badge"><div class="c">C</div><div class="nom">Chiffr</div></div>
  <div class="bloc">
    <div class="filet"></div>
    <h1>${job.accroche}</h1>
    ${job.sousTitre ? `<div class="sous">${job.sousTitre}</div>` : ''}
    <div class="pied"><div class="point"></div>chiffr-devis.fr</div>
  </div>
</body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(OUT_DIR, job.sortie);
  await page.screenshot({ path: out });
  await browser.close();
  console.log('OK ' + out);
})();
