// Construit l'index de la banque d'images pour la routine de posts.
// Source : le manifest (les prompts décrivent fidèlement les images validées)
// + les fichiers bonus hors manifest (ex. tableau-electrique-fouillis).
const fs = require('fs');
const path = require('path');

const PROSPECTION = 'C:/Users/memed/Sites/chiffr-prospection';
const MANIFEST = path.join(PROSPECTION, 'image-bank-manifest.json');
const BANQUE = path.join(PROSPECTION, 'medias/banque');
const INDEX = path.join(PROSPECTION, 'medias', 'index-images.json');

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));

const tagsDe = (entry) => {
  const t = new Set();
  entry.d.split('/').forEach((part) => t.add(part.replace(/^\d+-/, '')));
  entry.f.replace('.png', '').split('-').forEach((mot) => { if (mot.length > 2 && !/^\d+$/.test(mot)) t.add(mot); });
  return [...t];
};

const index = {
  regles: {
    anti_repetition_jours: 30,
    usage: "La routine choisit une image selon les tags et le sujet du post, vérifie que sa dernière utilisation date de plus de 30 jours, puis ajoute la date dans 'utilisations'.",
    rappel: "Toutes ces images sont des ILLUSTRATIONS - ne jamais les légender comme de vrais chantiers ou clients Chiffr. Les captures réelles du produit sont dans chiffr-site/public/images/chiffr-ui/ et via capture-site.cjs."
  },
  images: [],
};

for (const entry of manifest.images) {
  const chemin = path.join(BANQUE, entry.d, entry.f);
  if (!fs.existsSync(chemin)) { console.warn('MANQUANTE : ' + entry.d + '/' + entry.f); continue; }
  index.images.push({ fichier: entry.d + '/' + entry.f, description_en: entry.p, tags: tagsDe(entry), utilisations: [] });
}

// bonus hors manifest
const bonus = { d: '03-details-materiel', f: 'tableau-electrique-fouillis.png', p: 'Messy residential electrical panel with tangled colorful wires spilling around breaker rows - useful for before/after renovation posts.' };
if (fs.existsSync(path.join(BANQUE, bonus.d, bonus.f))) {
  index.images.push({ fichier: bonus.d + '/' + bonus.f, description_en: bonus.p, tags: ['details-materiel', 'tableau', 'electrique', 'fouillis', 'avant-apres'], utilisations: [] });
}

fs.writeFileSync(INDEX, JSON.stringify(index, null, 2));
console.log(`Index écrit : ${index.images.length} images.`);
