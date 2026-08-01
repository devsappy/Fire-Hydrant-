// Generates public/sitemap.xml (with image sitemap extension) from the real
// routes + product catalog + project galleries.
// Run: node scripts/gen-sitemap.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { products } from '../src/data/products.js';
import { projectGalleries } from '../src/data/projectGalleries.js';

const SITE = 'https://www.pmenterprises.xyz';
const today = new Date().toISOString().slice(0, 10);
const abs = (p) => `${SITE}${p}`;

// Featured images shown on each project detail page (mirrors ProjectOverview.jsx)
const projectFeatured = {
    'anglo-india-jute-mill': [
        '/images/projects/proj1_img1.jpeg', '/images/projects/proj1_img2.jpeg',
        '/images/projects/proj1_img3.jpeg', '/images/projects/proj1_img4.jpeg',
    ],
    'stadmed-pvt-ltd': [
        '/images/projects/medicine-factory/DSC_0788.jpg',
        '/images/projects/medicine-factory/DSC_0789.jpg',
        '/images/projects/medicine-factory/DSC_0794.jpg',
    ],
};
const projectImages = (id) => [
    ...(projectFeatured[id] || []),
    ...((projectGalleries[id] || []).slice(0, 16)),
];

const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0', images: ['/images/ui/hero-hydrant.png', '/images/ui/pmenterpriseslogo.png'] },
    { path: '/products', changefreq: 'weekly', priority: '0.9', images: products.slice(0, 20).map(p => p.image) },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
    { path: '/projects', changefreq: 'monthly', priority: '0.8', images: ['/images/projects/proj1_img1.jpeg', '/images/projects/medicine-factory/DSC_0788.jpg'] },
    { path: '/about', changefreq: 'monthly', priority: '0.6', images: ['/images/ui/aboutusbackground.png'] },
    { path: '/blog', changefreq: 'weekly', priority: '0.7' },
    { path: '/contact', changefreq: 'yearly', priority: '0.5' },
    // Projects
    { path: '/projects/anglo-india-jute-mill', changefreq: 'monthly', priority: '0.7', images: projectImages('anglo-india-jute-mill') },
    { path: '/projects/stadmed-pvt-ltd', changefreq: 'monthly', priority: '0.7', images: projectImages('stadmed-pvt-ltd') },
    // Blog posts
    { path: '/blog/essential-fire-extinguisher-types', changefreq: 'monthly', priority: '0.6', images: ['/images/blogs/blog1_img.png'] },
    { path: '/blog/new-safety-regulations-2026', changefreq: 'monthly', priority: '0.6', images: ['/images/blogs/blog2_img.png'] },
    { path: '/blog/warehouse-sprinkler-system-upgrade', changefreq: 'monthly', priority: '0.6', images: ['/images/blogs/blog3_img.png'] },
    // Product detail pages
    ...products.map(p => ({ path: `/products/${p.id}`, changefreq: 'monthly', priority: '0.7', images: [p.image] })),
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/ /g, '%20');

const body = routes.map(r => {
    const imgs = (r.images || [])
        .map(i => `    <image:image><image:loc>${esc(abs(i))}</image:loc></image:image>`)
        .join('\n');
    return `  <url>
    <loc>${abs(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>${imgs ? '\n' + imgs : ''}
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
const imgCount = routes.reduce((n, r) => n + (r.images ? r.images.length : 0), 0);
console.log(`sitemap.xml generated — ${routes.length} URLs, ${imgCount} images (lastmod ${today}).`);
