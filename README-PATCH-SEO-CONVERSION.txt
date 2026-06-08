Chiffr — Patch SEO / conversion / pré-lancement final

À dézipper à la racine du projet chiffr-site.

Objectif :
- garder les URLs déjà envoyées à Google ;
- améliorer le site sans casser l’indexation ;
- mettre tous les CTA en mode pré-lancement vers /contact ;
- renforcer les pages alternatives et le maillage ;
- remettre le BaseLayout stable avec menu mobile <dialog> ;
- finaliser le domaine chiffr-devis.fr ;
- ajouter redirection www -> domaine principal et headers Cloudflare.

Fichiers modifiés/ajoutés :
- astro.config.mjs
- public/_headers
- public/_redirects
- src/components/CompetitorAlternativePage.astro
- src/components/QuoteModelPdfPreview.astro
- src/components/SeoGuidePage.astro
- src/components/TradeLanding.astro
- src/components/UseCaseAlternativePage.astro
- src/components/legal/LegalPageShell.astro
- src/components/seo/SeoHead.astro
- src/data/competitorAlternatives.ts
- src/data/seoGuides.ts
- src/data/useCaseAlternatives.ts
- src/layouts/BaseLayout.astro
- src/pages/[slug].astro
- src/pages/alternatives-logiciels-devis-batiment.astro
- src/pages/cgu.astro
- src/pages/confidentialite.astro
- src/pages/contact.astro
- src/pages/fonctionnalites.astro
- src/pages/guides-devis-artisans-energie.astro
- src/pages/index.astro
- src/pages/mentions-legales.astro
- src/pages/modeles-devis.astro
- src/pages/robots.txt.ts
- src/pages/tarifs.astro

Après dézip :
1. npm run build
2. git add .
3. git commit -m "Improve SEO conversion and access CTAs"
4. git push

Contrôles faits par script :
- Plus aucun lien direct https://app.chiffr.fr dans src/public.
- Domaine marketing remplacé par chiffr-devis.fr.
- CTA de lancement remplacés par Demander un accès.
