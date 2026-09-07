import { professionalChapters } from '../lib/professional-content.ts';
import { evidenceSources } from '../lib/evidence.ts';
import { atlasImages } from '../lib/atlas.ts';
import { writeFile } from 'node:fs/promises';

const TIMEOUT_MS = 20_000;
const CONCURRENCY = 10;
const USER_AGENT = 'Mozilla/5.0 (compatible; ZahradnickaAkademie-LinkAudit/1.0)';

const references = [...Object.entries(professionalChapters).flatMap(([chapterId, chapter]) =>
  chapter.sources.map((source) => ({ chapterId, ...source })),
), ...Object.values(evidenceSources).map((source) => ({ chapterId: `evidence:${source.id}`, ...source })), ...atlasImages.flatMap((asset) => [{ chapterId: `atlas:${asset.id}`, title: asset.titleCs, url: asset.sourcePage }, { chapterId: `license:${asset.id}`, title: asset.license, url: asset.licenseUrl }])];

const unique = [...new Map(references.map((source) => [source.url, source])).values()];

async function request(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method,
      redirect: 'manual',
      headers: {
        'user-agent': USER_AGENT,
      },
      signal: controller.signal,
    });

    if (response.body) await response.body.cancel();
    return {
      status: response.status,
      location: response.headers.get('location'),
      error: null,
    };
  } catch (error) {
    return {
      status: 0,
      location: null,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function inspect(source) {
  let result = await request(source.url, 'HEAD');
  if (result.status === 0 || result.status >= 400) {
    result = await request(source.url, 'GET');
  }
  if (result.status === 0 || result.status >= 400) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    result = await request(source.url, 'GET');
  }
  return { ...source, ...result };
}

const results = [];
let cursor = 0;

async function worker() {
  while (cursor < unique.length) {
    const current = unique[cursor++];
    results.push(await inspect(current));
  }
}

await Promise.all(Array.from({ length: Math.min(CONCURRENCY, unique.length) }, worker));

const rank = (result) => {
  if (result.status === 0 || result.status >= 400) return 0;
  if (result.status >= 300) return 1;
  return 2;
};

results.sort((a, b) => rank(a) - rank(b) || a.status - b.status || a.url.localeCompare(b.url));

const failed = results.filter((result) => result.status === 0 || result.status >= 400);
const redirected = results.filter((result) => result.status >= 300 && result.status < 400);
const passed = results.length - failed.length - redirected.length;

console.log(`Zdrojových odkazů: ${references.length} (${unique.length} unikátních)`);
console.log(`Přímá odpověď 2xx: ${passed}`);
console.log(`Přesměrování: ${redirected.length}`);
console.log(`Chyba nebo blokace: ${failed.length}`);
console.log('Technická kontrola HTTP není odborná recenze a neodhalí všechny obsahové či soft-404 chyby.');

if (process.argv.includes('--report')) {
  await writeFile(new URL('../lib/source-audit.json', import.meta.url), `${JSON.stringify({ checkedAt: new Date().toISOString(), scope: 'HTTP dostupnost bibliografie, konkrétních citací a původu/licencí atlasu. Ne obsahová recenze.', references: references.length, unique: unique.length, passed, redirected: redirected.length, failed: failed.length, issues: [...failed, ...redirected].map(({ url, status, location, error }) => ({ url, status, location, error })) }, null, 2)}\n`);
}

for (const result of [...failed, ...redirected]) {
  const detail = result.error ?? result.location ?? '';
  console.log(`${result.status || 'ERR'}\t${result.chapterId}\t${result.url}${detail ? `\t${detail}` : ''}`);
}

if (failed.length || redirected.length) process.exitCode = 1;
