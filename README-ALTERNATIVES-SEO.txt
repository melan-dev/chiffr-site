Chiffr — Patch SEO pages alternatives concurrents

À dézipper à la racine du projet chiffr-site.

Remplace uniquement :
- src/data/competitorAlternatives.ts
- src/pages/alternatives-logiciels-devis-batiment.astro

Objectif :
- renforcer toutes les pages alternatives concurrents ;
- améliorer les titles/meta, H1, intros, comparatifs, FAQ et maillage ;
- garder un ton prudent, sans dénigrement, sans faux classement et sans chiffres inventés ;
- positionner Chiffr comme alternative spécialisée artisans énergie ;
- garder les mêmes URLs déjà envoyées à Google.

Pages renforcées :
- /alternative-obat
- /alternative-tolteck
- /alternative-costructor
- /alternative-batappli
- /alternative-progbat
- /alternative-sage-batigest
- /alternative-ebp-batiment
- /alternative-henrri
- /alternative-axonaut
- /alternative-abby
- /alternative-evoliz
- /alternative-artinove
- /alternatives-logiciels-devis-batiment

Build testé :
- npm run build OK
- 67 pages générées
- sitemap-index.xml généré

Après dézip :
npm run build
git add .
git commit -m "Strengthen alternatives SEO pages"
git push
