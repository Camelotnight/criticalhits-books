// Fails if a banned word or phrase appears anywhere in the repo or the built site.
// The list is stored as hashes so that this public script doesn't itself name what it guards.
// To add a term: node -e "console.log(require('crypto').createHash('sha256').update('<term in lowercase>').digest('hex').slice(0,16))"
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const banned = new Set([
  '6f130cfc098f8676', '7766bdb93180f4c2', 'd5f29c56ba0bd969', '50b636a7a4a60650', '7cbf602f73599bcd',
  'd579eb4efafcd212', '153b3cec6c6b9f99', '56fa46221dbb017a', '12707aa39fecfb88', '725229a9cda16588',
]);
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);

const skip = new Set(['node_modules', '.git', '.astro']);
const textFile = /\.(astro|ts|js|mjs|css|html|md|txt|svg|xml|json|yml|yaml)$|^CNAME$/;
const hits = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) { walk(path); continue; }
    if (!textFile.test(name)) continue;
    readFileSync(path, 'utf8').split('\n').forEach((line, i) => {
      const words = line.toLowerCase().match(/[a-z0-9]+/g) ?? [];
      words.forEach((w, j) => {
        const grams = [w, `${w} ${words[j + 1]}`];
        if (grams.some((g) => banned.has(hash(g)))) hits.push(`${path}:${i + 1}`);
      });
    });
  }
};
walk('.');

if (hits.length) {
  console.error('Spoiler check FAILED at:\n' + [...new Set(hits)].join('\n'));
  process.exit(1);
}
console.log('Spoiler check passed.');
