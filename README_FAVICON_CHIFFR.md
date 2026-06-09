# Chiffr favicon — installation

1. Dézippe ce fichier à la racine du projet Astro.
2. Accepte d’écraser les fichiers existants dans `public/`.
3. Vérifie que ton layout global (`src/layouts/BaseLayout.astro`) contient les balises du fichier `FAVICON_HEAD_SNIPPET.html` dans le `<head>`.

Si ton layout contient déjà `/favicon.svg` et `/favicon.ico`, tu n’as normalement rien d’autre à faire côté code.

Après déploiement, teste :
- https://chiffr-devis.fr/favicon.ico
- https://chiffr-devis.fr/favicon.svg
- https://chiffr-devis.fr/apple-touch-icon.png

Puis demande une réindexation de la homepage dans Google Search Console.
