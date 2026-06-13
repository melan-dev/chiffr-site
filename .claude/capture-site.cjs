// Capture des pages du site en headless pour les visuels des posts.
// Usage : node .claude/capture-site.cjs [url1] [url2] ...
// Sans argument : capture l'accueil et la page PAC.
const { chromium } = require('playwright');
const path = require('path');

const OUT_DIR = 'C:/Users/memed/Sites/chiffr-prospection/medias/captures-site';
const BASE = 'http://localhost:4399';

const targets = process.argv.length > 2
  ? process.argv.slice(2)
  : ['/', '/logiciel-devis-pompe-a-chaleur'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
  for (const t of targets) {
    const url = t.startsWith('http') ? t : BASE + t;
    const slug = t === '/' ? 'accueil' : t.replace(/^https?:\/\/[^/]+/, '').replace(/[^a-z0-9-]+/gi, '-').replace(/^-|-$/g, '');
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000); // laisse les animations d'entree se jouer
    const file = path.join(OUT_DIR, `${slug}.png`);
    await page.screenshot({ path: file });
    console.log('OK ' + file);
  }
  await browser.close();
})();
