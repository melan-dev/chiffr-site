// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chiffr-devis.fr',
  // Cloudflare Pages sert les pages en /page/ et redirige /page → /page/ (308).
  // On aligne sitemap + URLs sur le slash final pour éviter les redirections
  // vues par Google (« Erreur liée à des redirections »).
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});