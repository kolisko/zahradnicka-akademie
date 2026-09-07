import { glossary, modules } from './curriculum.ts';
import { professionalChapters } from './professional-content.ts';
import { learningLessons } from './learning.ts';
import { atlasImages } from './atlas.ts';

export function normalizeSearch(text: string) { return text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('cs').replace(/\s+/g, ' ').trim(); }
export function viewHref(view: string) {
  const reference: Record<string, string> = { home: '/', glossary: '/slovnik', atlas: '/atlas', competencies: '/kompetence', editorial: '/redakcni-pravidla' };
  return Object.hasOwn(reference, view) ? reference[view] : `/wiki/${encodeURIComponent(view)}`;
}
export type SearchEntry = { id: string; title: string; context: string; text: string; href: string; category: string };
export function buildSearchIndex(): SearchEntry[] {
  const index: SearchEntry[] = [];
  for (const module of modules) {
    index.push({ id: module.id, title: module.title, context: module.title, text: [module.subtitle, module.overview, ...module.outcomes].join(' '), href: viewHref(module.id), category: 'Kapitola' });
    const chapter = professionalChapters[module.id];
    for (const [sectionIndex, section] of (chapter?.sections ?? []).entries()) {
      const id = `${module.id}-professional-${sectionIndex + 1}`;
      for (const [paragraphIndex, text] of section.paragraphs.entries()) index.push({ id: `${id}-p-${paragraphIndex + 1}`, title: section.title, context: module.title, text, href: `${viewHref(module.id)}#${id}-p-${paragraphIndex + 1}`, category: 'Výklad' });
      const extra = [section.table?.caption, ...(section.table?.headers ?? []), ...(section.table?.rows.flat() ?? []), section.procedure?.title, section.procedure?.purpose, ...(section.procedure?.steps ?? []), section.procedure?.record, section.warning, section.fieldExample?.title, section.fieldExample?.text].filter(Boolean).join(' ');
      if (extra) index.push({ id, title: section.title, context: module.title, text: extra, href: `${viewHref(module.id)}#${id}`, category: 'Postup / tabulka' });
    }
  }
  for (const lesson of learningLessons) for (const [blockIndex, block] of lesson.blocks.entries()) index.push({ id: `${lesson.id}-${blockIndex}`, title: `${lesson.title} — ${block.heading}`, context: modules.find((m) => m.id === lesson.moduleId)!.title, text: block.text, href: `${viewHref(lesson.moduleId)}#${lesson.id}-b-${blockIndex + 1}`, category: 'Řešená lekce' });
  for (const [i, [term, definition]] of glossary.entries()) index.push({ id: `glossary-${i}`, title: term, context: 'Odborný slovník', text: definition, href: `/slovnik#pojem-${i}`, category: 'Pojem' });
  for (const asset of atlasImages) index.push({ id: `atlas-${asset.id}`, title: asset.titleCs, context: asset.category, text: `${asset.taxon} ${asset.descriptionCs} ${asset.diagnosticLimit}`, href: `/atlas#${asset.id}`, category: 'Atlas' });
  return index;
}
const index = buildSearchIndex();
export function searchWiki(query: string): (SearchEntry & { snippet: string })[] {
  const needle = normalizeSearch(query);
  if (needle.length < 2) return [];
  const tokens = needle.split(' ');
  return index.map((entry) => {
    const title = normalizeSearch(entry.title), text = normalizeSearch(entry.text);
    const combined = `${title} ${normalizeSearch(entry.context)} ${text}`;
    if (!tokens.every((token) => combined.includes(token))) return null;
    const position = Math.max(0, text.indexOf(tokens[0]));
    const start = Math.max(0, position - 70);
    return { ...entry, snippet: `${start ? '…' : ''}${entry.text.slice(start, start + 220)}${entry.text.length > start + 220 ? '…' : ''}`, rank: (title.includes(needle) ? 20 : 0) + (text.includes(needle) ? 5 : 0) + (entry.category === 'Řešená lekce' ? 2 : 0) };
  }).filter((entry) => entry !== null).sort((a, b) => b.rank - a.rank || a.title.localeCompare(b.title, 'cs'));
}
