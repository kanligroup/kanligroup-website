// Fetches live Google Scholar metrics for Kan Li's profile and writes them to
// src/src/data/scholar.json. Runs at build time so the site always shows
// real-time citation data. Fails gracefully (keeps last good cache).
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, '../src/data');
const OUT = resolve(DATA_DIR, 'scholar.json');

const USER = 'vWZDbKIAAAAJ';
const SCHOLAR_URL = `https://scholar.google.com/citations?user=${USER}&hl=en`;
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

function parse(html) {
  const start = html.indexOf('id="gsc_rsb_st"');
  if (start < 0) throw new Error('metrics table not found in Scholar HTML');
  const table = html.slice(start, start + 2600);
  const rows = [...table.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => m[1]);
  const metrics = {};
  for (const row of rows) {
    const labelM = row.match(/gsc_rsb_sc1">[^>]*>([^<]+)</);
    if (!labelM) continue;
    const label = labelM[1].trim();
    const nums = [...row.matchAll(/gsc_rsb_std">(\d+)</g)].map((m) => parseInt(m[1], 10));
    if (nums.length >= 2) metrics[label] = { all: nums[0], since: nums[1] };
  }
  const get = (k) => metrics[k] || { all: null, since: null };
  const c = get('Citations');
  const h = get('h-index');
  const i = get('i10-index');
  return {
    citations: c.all,
    citationsSince: c.since,
    hIndex: h.all,
    hIndexSince: h.since,
    i10: i.all,
    i10Since: i.since,
  };
}

async function main() {
  const now = new Date().toISOString();
  try {
    const res = await fetch(SCHOLAR_URL, {
      headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    const m = parse(html);
    const data = {
      ...m,
      fetchedAt: now,
      source: SCHOLAR_URL,
      live: true,
      error: null,
    };
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
    console.log('[fetch-scholar] OK', JSON.stringify(m), '->', OUT);
  } catch (e) {
    let prev = null;
    try {
      if (existsSync(OUT)) prev = JSON.parse(readFileSync(OUT, 'utf8'));
    } catch {
      /* ignore */
    }
    const data = {
      citations: prev?.citations ?? null,
      citationsSince: prev?.citationsSince ?? null,
      hIndex: prev?.hIndex ?? null,
      hIndexSince: prev?.hIndexSince ?? null,
      i10: prev?.i10 ?? null,
      i10Since: prev?.i10Since ?? null,
      fetchedAt: now,
      source: SCHOLAR_URL,
      live: false,
      error: String(e.message || e),
    };
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
    console.warn('[fetch-scholar] FAILED, wrote fallback cache:', data.error);
  }
}

main();
