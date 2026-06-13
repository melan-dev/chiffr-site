// Vague 4 : les surfaces arrière/avant de vans génèrent toujours badges et plaques.
// Parade : van loin dans le cadre (badges sub-pixel) — l'ambiance prime sur le véhicule.
const fs = require('fs');
const path = require('path');

const PROSPECTION = 'C:/Users/memed/Sites/chiffr-prospection';
const MANIFEST = path.join(PROSPECTION, 'image-bank-manifest.json');
const BANQUE = path.join(PROSPECTION, 'medias/banque');

const corrections = {
  'hiver-camionnette-neige.png': 'Snowy residential French street at dusk, a small white work van parked far down the street tiny in the frame, warm light glowing from house windows, fresh tire tracks and footprints in the snow, cold blue hour mood.',
  'intersaison-brume-matin.png': 'Empty suburban French street in early morning autumn mist, a work van with roof ladder parked far away down the street tiny in the frame, streetlights still glowing, dew on hedges, quiet before the workday.',
};

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
let patched = 0;
for (const entry of manifest.images) {
  if (corrections[entry.f]) {
    entry.p = corrections[entry.f];
    patched++;
    const cible = path.join(BANQUE, entry.d, entry.f);
    if (fs.existsSync(cible)) fs.unlinkSync(cible);
  }
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`${patched} prompts corrigés, fichiers supprimés.`);
