import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { modules, glossary } from '../lib/curriculum.ts';
import { professionalChapters } from '../lib/professional-content.ts';
import { atlasImages } from '../lib/atlas.ts';
import { exercises, caseStudies, parseNumericAnswer, gradeExercise } from '../lib/assessments.ts';
import { learningLessons } from '../lib/learning.ts';
import { competencies } from '../lib/competencies.ts';
import { evidenceSources, paragraphEvidence, evidenceFor, readableLanguage } from '../lib/evidence.ts';
import { normalizeSearch, buildSearchIndex, searchWiki, viewHref } from '../lib/search.ts';
import { EXERCISE_REVISION, parseReadProgress, parseAttempt } from '../lib/study-progress.ts';

const moduleIds = modules.map((m) => m.id);
const ids = new Set(['/', '/atlas', '/kompetence', '/slovnik', '/redakcni-pravidla']);
for (const m of modules) {
  const path = viewHref(m.id);
  ids.add(path); ids.add(`${path}#quiz-${m.id}`);
  for (const [i, section] of professionalChapters[m.id].sections.entries()) {
    ids.add(`${path}#${m.id}-professional-${i + 1}`);
    for (const [j] of section.paragraphs.entries()) ids.add(`${path}#${m.id}-professional-${i + 1}-p-${j + 1}`);
  }
}
for (const lesson of learningLessons) {
  ids.add(`${viewHref(lesson.moduleId)}#${lesson.id}`);
  lesson.blocks.forEach((_, i) => ids.add(`${viewHref(lesson.moduleId)}#${lesson.id}-b-${i + 1}`));
}
for (const q of exercises) ids.add(`${viewHref(q.moduleId)}#cviceni-${q.id}`);
for (const a of atlasImages) ids.add(`/atlas#${a.id}`);
glossary.forEach((_, i) => ids.add(`/slovnik#pojem-${i}`));
const validLink = (href) => assert.ok(ids.has(href), `Unresolved content link: ${href}`);

test('every module has a real chapter, graded questions and one case study', () => {
  assert.equal(modules.length, 20);
  assert.equal(new Set(moduleIds).size, 20);
  for (const m of modules) {
    assert.ok(professionalChapters[m.id].sections.length >= 8, m.id);
    assert.ok(exercises.filter((q) => q.moduleId === m.id).length >= 3, m.id);
    assert.equal(caseStudies.filter((c) => c.moduleId === m.id).length, 1, m.id);
  }
});

test('all assessment answers, explanations, reading links and image references are valid', () => {
  assert.equal(new Set(exercises.map((q) => q.id)).size, exercises.length);
  for (const q of exercises) {
    assert.ok(moduleIds.includes(q.moduleId)); validLink(q.reading);
    assert.ok(q.explanation.length > 25);
    if (q.imageId) assert.ok(atlasImages.some((a) => a.id === q.imageId));
    if (q.kind === 'choice') {
      assert.ok(q.choices.length >= 3);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.choices.length);
      q.choices.forEach((answer, index) => { assert.ok(answer.explanation.length > 20); assert.equal(gradeExercise(q, String(index)), index === q.correct, q.id); });
      assert.equal(gradeExercise(q, ''), false); assert.equal(gradeExercise(q, 'NaN'), false);
    } else {
      assert.ok(Number.isFinite(q.expected)); assert.ok(q.unit);
      assert.equal(gradeExercise(q, String(q.expected)), true, q.id);
      assert.equal(gradeExercise(q, String(q.expected).replace('.', ',')), true, q.id);
      assert.equal(gradeExercise(q, String(q.expected + 1)), false, q.id);
      assert.equal(gradeExercise(q, ''), false, q.id);
    }
  }
});

test('numeric inputs accept Czech decimals/grouping but reject non-numeric answers', () => {
  for (const [input, expected] of [['4,8', 4.8], [' 1 334 ', 1334], ['1\u00a0334', 1334], ['.5', 0.5], ['-2', -2], ['0', 0]]) assert.equal(parseNumericAnswer(input), expected);
  for (const input of ['', ' ', 'NaN', 'Infinity', '4,8 kg', '1,2,3', '1+2', '0x10', '1e3', '1.2.3', '1 2', '1\n334']) assert.equal(parseNumericAnswer(input), null, input);
});

test('worked calculation results are independently recomputed', () => {
  const expected = { 'pece-n': 120 * 4 / .1 / 1000, 'zavlaha-objem': 10 * 60 / .8, 'zavlaha-cas': 750 / 300 * 60, 'ovocnarstvi-mrkev': Math.ceil(800 / (.8 * .75)), 'podnikani-marze': 800 / (1 - .2), 'sklenik-dli': 200 * 10 * 3600 / 1e6, 'sezona-stupnodny': [12, 8, 15].reduce((sum, value) => sum + Math.max(value - 10, 0), 0) };
  for (const [id, value] of Object.entries(expected)) assert.equal(exercises.find((q) => q.id === id).expected, value, id);
  assert.equal(gradeExercise(exercises.find((q) => q.id === 'ovocnarstvi-mrkev'), '1333'), false);
  assert.equal(gradeExercise(exercises.find((q) => q.id === 'pece-n'), '4,82'), false);
});

test('new lessons and competency map have existing targets and source IDs', () => {
  assert.equal(new Set(learningLessons.map((l) => l.id)).size, learningLessons.length);
  for (const lesson of learningLessons) {
    assert.ok(moduleIds.includes(lesson.moduleId)); assert.ok(lesson.blocks.length >= 3);
    for (const block of lesson.blocks) for (const sourceId of block.sourceIds) assert.ok(evidenceSources[sourceId], sourceId);
    for (const id of lesson.exerciseIds) assert.ok(exercises.some((q) => q.id === id && q.moduleId === lesson.moduleId), id);
  }
  for (const c of competencies) {
    c.modules.forEach((id) => assert.ok(moduleIds.includes(id)));
    c.reading.forEach((r) => validLink(r.href));
    c.exerciseIds.forEach((id) => assert.ok(exercises.some((q) => q.id === id), id));
    assert.ok(c.remaining.length > 40);
  }
});

test('paragraph evidence never silently verifies a whole chapter', () => {
  assert.equal(evidenceFor('botanika', 1, 1), undefined);
  for (const item of paragraphEvidence) {
    assert.ok(professionalChapters[item.moduleId].sections[item.section - 1].paragraphs[item.paragraph - 1]);
    item.sources.forEach((id) => assert.ok(evidenceSources[id]));
    assert.deepEqual(evidenceFor(item.moduleId, item.section, item.paragraph), item);
  }
  for (const source of Object.values(evidenceSources)) {
    assert.equal(new URL(source.url).protocol, 'https:');
    assert.ok(['cs', 'en'].includes(source.language));
    assert.ok(Number.isFinite(Date.parse(source.checkedAt))); assert.ok(source.locator.length > 8);
  }
  assert.equal(readableLanguage({url: 'https://example.com'}), 'Jazyk neuveden');
  assert.equal(readableLanguage({url: 'https://example.com', language: 'cs'}), 'Česky');
});

test('fulltext reaches detailed paragraphs omitted by the original outline search', () => {
  for (const [query, module] of [['kavitaci', 'botanika'], ['fertirigace', 'sklenik'], ['biofix', 'sezona']]) assert.ok(searchWiki(query).some((r) => r.href.startsWith(`/wiki/${module}#`) && r.category === 'Výklad'), query);
  assert.ok(searchWiki('kavitace').some((r) => r.href.startsWith('/wiki/botanika#') && r.category === 'Postup / tabulka'));
  assert.deepEqual(searchWiki('půdní').map((r) => r.id), searchWiki('pudni').map((r) => r.id));
  assert.equal(normalizeSearch('  VĚTEVNÍ   KROUŽEK '), 'vetevni krouzek');
  assert.ok(searchWiki('krouzek rez').some((r) => r.href.startsWith('/wiki/rez#')));
  assert.ok(searchWiki('Quercus').some((r) => r.category === 'Atlas'));
  assert.ok(searchWiki('750').some((r) => r.category === 'Řešená lekce'));
  assert.deepEqual(searchWiki(''), []); assert.deepEqual(searchWiki('a'), []); assert.deepEqual(searchWiki('nenalezitelnexyz123'), []);
});

test('all fulltext results have a unique identity and an exact rendered-content target', () => {
  const index = buildSearchIndex(); assert.ok(index.length > 700);
  assert.equal(index.length, new Set(index.map((r) => r.id)).size);
  index.forEach((entry) => validLink(entry.href));
  assert.ok(index.some((r) => r.category === 'Postup / tabulka'));
  assert.ok(index.some((r) => r.category === 'Pojem'));
});

test('read flags reject damaged, stale and duplicate values', () => {
  assert.deepEqual(parseReadProgress('{broken', moduleIds), []);
  assert.deepEqual(parseReadProgress('"botanika"', moduleIds), []);
  assert.deepEqual(parseReadProgress('["botanika","botanika","gone",5]', moduleIds), ['botanika']);
  assert.deepEqual(parseReadProgress(null, moduleIds), []);
});

test('saved scores reject incompatible revisions and inconsistent counts', () => {
  const good = { revision: EXERCISE_REVISION, total: 3, correct: 2, at: '2026-09-07T10:00:00Z', wrongIds: ['example'] };
  assert.deepEqual(parseAttempt(JSON.stringify(good), 3), good);
  for (const patch of [{ revision: 'old' }, { total: 4 }, { correct: 4 }, { correct: -1 }, { correct: 2.5 }, { wrongIds: [] }, { wrongIds: [8] }, { wrongIds: ['example', 'example'] }, { at: 'nonsense' }, { at: 123 }]) assert.equal(parseAttempt(JSON.stringify({ ...good, ...patch }), 3), null);
  assert.equal(parseAttempt('{broken', 3), null);
});

test('atlas stores actual local JPEGs with complete attribution and limits', async () => {
  assert.equal(atlasImages.length, 13);
  assert.equal(new Set(atlasImages.map((a) => a.id)).size, atlasImages.length);
  for (const a of atlasImages) {
    assert.equal(new URL(a.sourcePage).hostname, 'commons.wikimedia.org');
    assert.ok(a.creator && a.license && a.licenseUrl && a.changesCs);
    assert.ok(a.diagnosticLimit.length > 40 && a.descriptionCs.length > 40);
    assert.match(a.src, /^\/atlas\/[a-z-]+\.jpg$/);
    const bytes = await readFile(new URL(`../public${a.src}`, import.meta.url));
    assert.ok(bytes.length > 5000, a.id); assert.equal(bytes[0], 0xff); assert.equal(bytes[1], 0xd8);
  }
});

test('favicon uses the same Leaf geometry as the application icon', async () => {
  const svg = await readFile(new URL('../public/favicon.svg', import.meta.url), 'utf8');
  const installed = await readFile(new URL('../node_modules/lucide-react/dist/esm/icons/leaf.mjs', import.meta.url), 'utf8');
  const paths = [...installed.matchAll(/d: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(paths.length, 2); paths.forEach((path) => assert.ok(svg.includes(path)));
});
