// Generates placeholder portrait avatars (monogram SVGs) for every member into
// public/people/<slug>.svg. Replace any file with a real photo (same slug,
// e.g. <slug>.jpg) and set `avatar: /people/<slug>.jpg` in the member's
// frontmatter to use the real photo instead.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MEMBERS = resolve(__dirname, '../src/content/members');
const OUT = resolve(__dirname, '../public/people');
mkdirSync(OUT, { recursive: true });

const palette = [
  ['#1a4d8f', '#205ba6'],
  ['#0e8f8a', '#16b5ad'],
  ['#7b4bd1', '#9b6ae0'],
  ['#c0512f', '#e07a4f'],
  ['#2f7d4f', '#46a06a'],
  ['#b0852b', '#d8a93f'],
  ['#3a5fb0', '#5b82d6'],
  ['#a23b6c', '#c75b8f'],
];

const files = readdirSync(MEMBERS).filter((f) => f.endsWith('.md'));
let i = 0;
for (const f of files) {
  const text = readFileSync(resolve(MEMBERS, f), 'utf8');
  const nameM = text.match(/^name:\s*(.+)$/m);
  const raw = nameM ? nameM[1].trim() : f;
  const name = raw.replace(/^["']|["']$/g, '').split(/\s*[(\（]/)[0];
  const initial = name.slice(0, 1);
  const slug = f.replace(/\.md$/, '');
  const [c1, c2] = palette[i % palette.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="${name}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
  </linearGradient></defs>
  <rect width="200" height="200" fill="url(#g)"/>
  <text x="100" y="106" font-family="PingFang SC, Microsoft YaHei, Noto Sans SC, sans-serif" font-size="92" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${initial}</text>
</svg>
`;
  writeFileSync(resolve(OUT, `${slug}.svg`), svg);
  i++;
}
console.log(`[gen-avatars] wrote ${files.length} placeholder avatars to public/people/`);
