// Best-effort static prerender of the built SPA so crawlers & AI bots get
// fully-rendered HTML (incl. react-helmet meta) for every route.
// Runs after `vite build`. If a browser can't launch, it skips gracefully
// and the normal SPA is deployed — the build never fails because of this.
import http from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join, extname } from 'node:path';
import { products } from '../src/data/products.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '../dist');
const PORT = 5179;

const ROUTES = [
    '/', '/products', '/services', '/projects', '/about', '/blog', '/contact',
    '/projects/anglo-india-jute-mill', '/projects/stadmed-pvt-ltd', '/projects/digha-hotel',
    '/blog/essential-fire-extinguisher-types',
    '/blog/new-safety-regulations-2026',
    '/blog/warehouse-sprinkler-system-upgrade',
    ...products.map(p => `/products/${p.id}`),
];

const MIME = {
    '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
    '.css': 'text/css', '.json': 'application/json', '.png': 'image/png',
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
    '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain',
    '.xml': 'application/xml', '.woff2': 'font/woff2', '.woff': 'font/woff',
};

async function main() {
    if (!existsSync(join(DIST, 'index.html'))) {
        console.log('[prerender] dist/index.html missing — skipping');
        return;
    }
    const template = readFileSync(join(DIST, 'index.html'), 'utf8');

    let puppeteer;
    try {
        puppeteer = (await import('puppeteer')).default;
    } catch {
        console.log('[prerender] puppeteer not available — skipping (SPA shipped as-is)');
        return;
    }

    // Static server that serves real assets, and the SPA shell for routes
    const server = http.createServer((req, res) => {
        try {
            const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
            const filePath = join(DIST, urlPath);
            if (extname(urlPath) && existsSync(filePath) && statSync(filePath).isFile()) {
                res.writeHead(200, { 'content-type': MIME[extname(urlPath)] || 'application/octet-stream' });
                res.end(readFileSync(filePath));
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end(template);
            }
        } catch {
            res.writeHead(500); res.end('error');
        }
    });
    await new Promise(r => server.listen(PORT, r));

    let browser;
    try {
        browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    } catch (e) {
        console.log('[prerender] could not launch Chromium — skipping:', e.message);
        await new Promise(r => server.close(r));
        return;
    }

    let ok = 0;
    for (const route of ROUTES) {
        const page = await browser.newPage();
        try {
            await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
            await page.waitForSelector('.site-footer', { timeout: 8000 }).catch(() => {});
            await new Promise(r => setTimeout(r, 250));
            const inner = await page.evaluate(() => {
                // De-duplicate SEO tags: the static index.html shell + react-helmet
                // both emit title/meta/canonical. Keep helmet's (per-page) copy.
                const head = document.head;
                // react-helmet injects <title> first → keep first, drop the rest
                head.querySelectorAll('title').forEach((t, i) => { if (i > 0) t.remove(); });
                // helmet appends meta/canonical last → keep the last of each key
                const seen = new Map();
                head.querySelectorAll('meta[name], meta[property], link[rel="canonical"]').forEach(el => {
                    const key = el.tagName + '|' + (el.getAttribute('name') || el.getAttribute('property') || 'canonical');
                    if (seen.has(key)) seen.get(key).remove();
                    seen.set(key, el);
                });
                return document.documentElement.outerHTML;
            });
            const html = '<!doctype html>\n' + inner;
            const outDir = route === '/' ? DIST : join(DIST, route);
            mkdirSync(outDir, { recursive: true });
            writeFileSync(join(outDir, 'index.html'), html);
            ok++;
        } catch (e) {
            console.log('[prerender] failed', route, '—', e.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    await new Promise(r => server.close(r));
    console.log(`[prerender] done — ${ok}/${ROUTES.length} routes prerendered`);
}

main().catch(e => {
    console.log('[prerender] skipped due to error:', e.message);
    process.exit(0); // never fail the build
});
