Chiffr — Patch domaine final

Domaine marketing final : https://chiffr-devis.fr
Application future/cohérente : https://app.chiffr-devis.fr

Fichiers modifiés :
- astro.config.mjs
- src/pages/cgu.astro
- src/pages/confidentialite.astro
- src/pages/contact.astro
- src/pages/mentions-legales.astro
- src/pages/robots.txt.ts
- src/components/legal/LegalPageShell.astro
- src/components/seo/SeoHead.astro

Modifications faites :
- canonical / Astro.site vers https://chiffr-devis.fr
- robots.txt vers le sitemap final
- sitemap généré par Astro avec le nouveau site
- schema ContactPage avec la bonne URL
- textes légaux chiffr.fr -> chiffr-devis.fr
- mentions app.chiffr.fr -> app.chiffr-devis.fr

Installation :
1. Dézipper à la racine du projet chiffr-site
2. Remplacer les fichiers existants
3. Lancer : npm run build
4. Puis : git add .
5. Puis : git commit -m "Update final domain"
6. Puis : git push