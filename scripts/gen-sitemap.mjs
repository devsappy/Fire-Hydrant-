// Generates public/sitemap.xml from the real routes + product catalog.
// Run: node scripts/gen-sitemap.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { products } from '../src/data/products.js';

const SITE = 'https://pmenterprises.xyz';
const today = new Date().toISOString().slice(0, 10);

const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/products', changefreq: 'weekly', priority: '0.9' },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
    { path: '/projects', changefreq: 'monthly', priority: '0.8' },
    { path: '/about', changefreq: 'monthly', priority: '0.6' },
    { path: '/blog', changefreq: 'weekly', priority: '0.7' },
    { path: '/contact', changefreq: 'yearly', priority: '0.5' },
    // Projects
    { path: '/projects/anglo-india-jute-mill', changefreq: 'monthly', priority: '0.7' },
    { path: '/projects/stadmed-pvt-ltd', changefreq: 'monthly', priority: '0.7' },
    // Blog posts
    { path: '/blog/essential-fire-extinguisher-types', changefreq: 'monthly', priority: '0.6' },
    { path: '/blog/new-safety-regulations-2026', changefreq: 'monthly', priority: '0.6' },
    { path: '/blog/warehouse-sprinkler-system-upgrade', changefreq: 'monthly', priority: '0.6' },
    // Product detail pages
    ...products.map(p => ({ path: `/products/${p.id}`, changefreq: 'monthly', priority: '0.7' })),
];

const body = routes
    .map(r => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`)
    .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`sitemap.xml generated with ${routes.length} URLs (lastmod ${today}).`);
