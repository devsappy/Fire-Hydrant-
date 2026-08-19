import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = process.argv[2] || 'public/images';
const MAX_DIM = 1600;
const MIN_SIZE_BYTES = 80 * 1024; // only touch files worth compressing

function walk(dir, out = []) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const st = statSync(full);
        if (st.isDirectory()) walk(full, out);
        else out.push({ path: full, size: st.size });
    }
    return out;
}

const files = walk(ROOT).filter(f => {
    const ext = extname(f.path).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext) && f.size >= MIN_SIZE_BYTES;
});

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

for (const f of files) {
    const ext = extname(f.path).toLowerCase();
    const tmp = f.path + '.tmp';
    try {
        const img = sharp(f.path, { failOn: 'none' });
        const meta = await img.metadata();
        let pipeline = img.rotate(); // auto-orient from EXIF, then strip
        if (meta.width && meta.height && Math.max(meta.width, meta.height) > MAX_DIM) {
            pipeline = pipeline.resize({
                width: meta.width >= meta.height ? MAX_DIM : null,
                height: meta.height > meta.width ? MAX_DIM : null,
                withoutEnlargement: true,
            });
        }
        if (ext === '.png') {
            pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 82, effort: 10 });
        } else {
            pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
        }
        await pipeline.toFile(tmp);
        const newSize = statSync(tmp).size;
        if (newSize > 0 && newSize < f.size) {
            renameSync(tmp, f.path);
            totalBefore += f.size;
            totalAfter += newSize;
            processed++;
        } else {
            try { unlinkSync(tmp); } catch {}
            skipped++;
        }
    } catch (err) {
        console.error(`FAILED: ${f.path} — ${err.message}`);
        skipped++;
    }
}

console.log(`\nProcessed: ${processed}, skipped/failed: ${skipped}`);
console.log(`Before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`After:  ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`Saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB (${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%)`);
