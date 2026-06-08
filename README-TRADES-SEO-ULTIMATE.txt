Chiffr — Patch SEO ultime pages métiers

À dézipper à la racine du projet.

Remplace les 8 pages métier :
- src/pages/logiciel-devis-pompe-a-chaleur.astro
- src/pages/logiciel-devis-climatisation.astro
- src/pages/logiciel-devis-chauffagiste.astro
- src/pages/logiciel-devis-frigoriste-cvc.astro
- src/pages/logiciel-devis-vmc.astro
- src/pages/logiciel-devis-irve.astro
- src/pages/logiciel-devis-photovoltaique.astro
- src/pages/logiciel-devis-chauffe-eau-thermodynamique.astro

Objectif :
- renforcer chaque page sur une intention SEO claire ;
- garder les mêmes URLs déjà envoyées à Google ;
- améliorer titles/meta, H1, intro, lignes de devis, cas métier, FAQ et maillage ;
- conserver les CTA vers /contact tant que l’app n’est pas prête ;
- rester concret et spécialisé artisans énergie.

Après dézip :
npm run build
git add .
git commit -m "Strengthen trade SEO pages"
git push

Note :
Le build local n’a pas pu être relancé dans mon environnement à cause de la dépendance optionnelle Rollup Linux absente dans le node_modules zippé. Sur ton PC Windows, lance npm run build comme d’habitude.
