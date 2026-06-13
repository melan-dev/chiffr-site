// Génère la banque d'images via l'API Replicate (flux-dev), une image = un fichier.
// Usage : node .claude/generate-bank.cjs [--limit N] [--only dossier] [--force fichier.png]
//   --limit 3            : ne génère que les 3 premières manquantes (lot de test)
//   --only 04-saisons    : ne traite qu'un dossier
//   --force <fichier>    : régénère un fichier même s'il existe (après rejet qualité)
// Reprise automatique : les fichiers déjà présents sont sautés.
const fs = require('fs');
const path = require('path');

const PROSPECTION = 'C:/Users/memed/Sites/chiffr-prospection';
const BANQUE = path.join(PROSPECTION, 'medias/banque');
const MANIFEST = path.join(PROSPECTION, 'image-bank-manifest.json');
const TOKEN_FILE = path.join(PROSPECTION, '.secrets/replicate-token.txt');

const token = process.env.REPLICATE_API_TOKEN
  || (fs.existsSync(TOKEN_FILE) ? fs.readFileSync(TOKEN_FILE, 'utf8').trim() : '');
if (!token || token.includes('COLLER')) {
  console.error('Token Replicate manquant : colle-le dans ' + TOKEN_FILE);
  process.exit(1);
}

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const limit = opt('--limit') ? parseInt(opt('--limit'), 10) : Infinity;
const only = opt('--only');
const force = opt('--force');

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const { suffix, aspect_ratio } = manifest.defaults;

const attendre = (ms) => new Promise((r) => setTimeout(r, ms));

async function generer(entry) {
  let res;
  for (let tentative = 0; ; tentative++) {
    res = await fetch(`https://api.replicate.com/v1/models/${manifest.modele}/predictions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Prefer: 'wait' },
      body: JSON.stringify({ input: {
        prompt: entry.p + suffix,
        aspect_ratio,
        output_format: 'png',
        megapixels: '1',
      } }),
    });
    if (res.status === 429 && tentative < 12) {
      // rate limit : 6 req/min sous 5 $ de crédit — on attend et on réessaie
      const corps = await res.json().catch(() => ({}));
      await attendre(((corps.retry_after || 10) + 2) * 1000);
      continue;
    }
    break;
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} : ${(await res.text()).slice(0, 300)}`);
  let pred = await res.json();
  for (let i = 0; pred.status !== 'succeeded' && i < 40; i++) {
    if (['failed', 'canceled'].includes(pred.status)) throw new Error(`statut ${pred.status} : ${pred.error}`);
    await attendre(3000);
    const poll = await fetch(pred.urls.get, { headers: { Authorization: `Bearer ${token}` } });
    pred = await poll.json();
  }
  if (pred.status !== 'succeeded') throw new Error('timeout de génération');
  const url = Array.isArray(pred.output) ? pred.output[0] : pred.output;
  const img = await fetch(url);
  return Buffer.from(await img.arrayBuffer());
}

(async () => {
  let faites = 0, sautees = 0, erreurs = [];
  for (const entry of manifest.images) {
    if (only && entry.d !== only) continue;
    const out = path.join(BANQUE, entry.d, entry.f);
    if (fs.existsSync(out) && entry.f !== force) { sautees++; continue; }
    if (faites >= limit) break;
    fs.mkdirSync(path.dirname(out), { recursive: true });
    process.stdout.write(`[${faites + 1}] ${entry.d}/${entry.f} ... `);
    try {
      fs.writeFileSync(out, await generer(entry));
      console.log('OK');
      faites++;
    } catch (e) {
      console.log('ERREUR ' + e.message);
      erreurs.push(entry.d + '/' + entry.f);
    }
    await attendre(11000); // 6 req/min max tant que le crédit est sous 5 $
  }
  console.log(`\nTerminé : ${faites} générées, ${sautees} déjà présentes, ${erreurs.length} erreurs.`);
  if (erreurs.length) console.log('À relancer : ' + erreurs.join(', '));
})();
