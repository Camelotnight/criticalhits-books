import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://books.criticalhits.net',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // The thank-you page is noindex, so it stays out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you/') })],
});
