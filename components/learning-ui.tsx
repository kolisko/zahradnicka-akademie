'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ExternalLink, CheckCircle2, CircleAlert } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { exercises, caseStudies, gradeExercise, parseNumericAnswer } from '@/lib/assessments';
import { atlasImages, type AtlasImage } from '@/lib/atlas';
import { competencies } from '@/lib/competencies';
import { evidenceSources, paragraphEvidence, REVIEW_DATE } from '@/lib/evidence';
import { learningLessons } from '@/lib/learning';
import { modules } from '@/lib/curriculum';
import { normalizeSearch, viewHref } from '@/lib/search';
import { EXERCISE_REVISION, parseAttempt, type Attempt } from '@/lib/study-progress';
import sourceAudit from '@/lib/source-audit.json';

export function SourceAvailability({ url }: { url: string }) {
  const issues: { url: string; status: number }[] = sourceAudit.issues;
  const issue = issues.find((item) => item.url === url);
  if (!issue) return null;
  return <span className="mt-2 block text-xs text-amber-800">Při poslední HTTP kontrole: {issue.status ? `HTTP ${issue.status}` : 'spojení se nezdařilo'}. Může jít o dočasnou blokaci; dostupnost ověřte při otevření.</span>;
}

export function SourceCitations({ ids }: { ids: string[] }) {
  if (!ids.length) return null;
  return <details className="mt-3 text-sm leading-6 text-muted-foreground"><summary className="cursor-pointer text-primary underline underline-offset-4">Podklady k tomuto tvrzení ({ids.length})</summary>
    <ul className="mt-3 space-y-3">{ids.map((id) => { const s = evidenceSources[id]; return <li key={id} className="border-l-2 pl-4"><a className="font-semibold text-primary underline" href={s.url} target="_blank" rel="noreferrer">{s.title} <ExternalLink className="inline" size={13}/></a><p>{s.organisation} · {s.language === 'cs' ? 'Česky' : 'Anglicky'} · obsah porovnán {new Date(s.checkedAt).toLocaleDateString('cs-CZ', { timeZone: 'UTC' })}</p><p><strong>Místo ve zdroji:</strong> {s.locator}</p><p>{s.scope}</p></li>; })}</ul>
  </details>;
}

export function AppliedLessons({ moduleId }: { moduleId: string }) {
  const lessons = learningLessons.filter((l) => l.moduleId === moduleId);
  if (!lessons.length) return null;
  return <section className="border-t py-10"><p className="text-sm font-semibold uppercase tracking-wider text-primary">Rozšířené lekce s doloženými podklady</p><h2 className="mt-2 text-3xl font-semibold">Od principu k rozhodnutí</h2>
    <p className="mt-3 text-muted-foreground">Číselná zadání a modelové situace jsou výukové příklady. Podmínky použití jsou uvedeny u každé lekce.</p>
    <div className="mt-7 space-y-8">{lessons.map((lesson) => <article id={lesson.id} key={lesson.id} className="scroll-mt-24 rounded-2xl border bg-card p-6 sm:p-8">
      <h3 className="text-2xl font-semibold"><a href={`#${lesson.id}`} className="hover:underline">{lesson.title}</a></h3><p className="mt-3 text-primary">Cíl: {lesson.objective}</p>
      <p className="mt-2 text-sm text-muted-foreground">Porovnání citovaných tvrzení se zdroji: 7. 9. 2026 · redakční zpracování s AI · <Link className="underline" href="/redakcni-pravidla">rozsah ověření</Link></p>
      {lesson.blocks.map((block, index) => <section key={block.heading} id={`${lesson.id}-b-${index + 1}`} className={`mt-7 scroll-mt-24 ${block.kind === 'worked' ? 'rounded-xl bg-accent/50 p-5' : block.kind === 'limit' ? 'border-l-4 border-amber-600 pl-5' : ''}`}>
        <h4 className="text-lg font-semibold">{block.heading}</h4><p className="mt-3 text-base leading-8">{block.text}</p><SourceCitations ids={block.sourceIds}/>
        {!block.sourceIds.length && <p className="mt-2 text-sm text-muted-foreground">{block.kind === 'worked' ? 'Vlastní výukový příklad; předpoklady jsou součástí zadání.' : 'Redakční pracovní doporučení; nejde o citaci normy.'}</p>}
      </section>)}
      <div className="mt-6 flex flex-wrap gap-3">{lesson.exerciseIds.map((id, i) => <a className="rounded-full border px-4 py-2 text-sm font-semibold text-primary hover:bg-accent" key={id} href={`#cviceni-${id}`}>Ověřit porozumění {i + 1} →</a>)}</div>
    </article>)}</div>
  </section>;
}

function ImageCredits({ asset }: { asset: AtlasImage }) {
  return <div className="mt-3 text-sm leading-6 text-muted-foreground"><p>{asset.creator} · <a href={asset.licenseUrl} target="_blank" rel="noreferrer" className="underline">{asset.license}</a> · <a href={asset.sourcePage} target="_blank" rel="noreferrer" className="underline">Původní soubor a určení</a></p><p>{asset.changesCs}</p></div>;
}

export function AtlasFigure({ asset, compact = false }: { asset: AtlasImage; compact?: boolean }) {
  const [failed, setFailed] = useState(false);
  return <figure className="min-w-0">
    {failed ? <p role="status" className="grid min-h-48 place-items-center rounded-lg bg-muted p-5">Snímek se nepodařilo načíst. Otevřete původní soubor v odkazu níže.</p> : <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Zvětšit: ${asset.titleCs}`}><img src={asset.src} alt={`${asset.titleCs}. ${asset.descriptionCs}`} loading="lazy" decoding="async" width={960} height={960} className={`${compact ? 'h-60' : 'h-80'} w-full rounded-xl border bg-white object-contain`} onError={() => setFailed(true)}/></a>}
    <figcaption className="mt-4"><h3 className="text-xl font-semibold">{asset.titleCs}</h3><p className="mt-1 italic text-primary">{asset.taxon}</p><p className="mt-3 leading-7">{asset.descriptionCs}</p><p className="mt-3 border-l-2 border-amber-500 pl-3 text-sm leading-6"><strong>Meze určení:</strong> {asset.diagnosticLimit}</p><ImageCredits asset={asset}/></figcaption>
  </figure>;
}

export function ModuleAtlas({ moduleId }: { moduleId: string }) {
  const ids: Record<string, string[]> = { botanika: ['dub-letni-pupeny', 'javor-mlec-pupeny'], rostliny: ['dub-letni-list', 'javor-mlec-list', 'lipa-srdcita-list'], ochrana: ['msice-detail', 'padli-jablonove', 'strupovitost-jablone-list'], rez: ['rez-obrastajici-rana'] };
  const assets = (ids[moduleId] ?? []).map((id) => atlasImages.find((a) => a.id === id)!);
  if (!assets.length) return null;
  return <section id={`atlas-${moduleId}`} className="scroll-mt-24 border-t py-10"><h2 className="text-3xl font-semibold">Obrazové podklady</h2><div className="mt-7 grid gap-7 md:grid-cols-2">{assets.map((a) => <AtlasFigure key={a.id} asset={a} compact/>)}</div>
    {moduleId === 'rez' && <aside className="mt-6 rounded-xl border p-5"><h3 className="font-semibold">Poloha kroužku a třířezová metoda</h3><p className="mt-2 leading-7">Odborná schémata a fotografie jednotlivých řezů najdete na stranách 9–11 příručky Purdue. Český výklad: hřebínek kůry = branch bark ridge; větevní kroužek = branch collar; spodní zářez = undercut; horní odlehčovací řez = topcut; konečný řez = stub cut.</p><a href="https://extension.purdue.edu/extmedia/fnr/fnr-506-w.pdf#page=9" target="_blank" rel="noreferrer" className="mt-3 inline-block font-semibold text-primary underline">Otevřít originální schéma · PDF · anglicky ↗</a></aside>}
    <Link href="/atlas" className="mt-7 inline-block font-semibold text-primary underline">Celý atlas a porovnání snímků →</Link>
  </section>;
}

export function AtlasView() {
  const [filter, setFilter] = useState(''); const [category, setCategory] = useState('Vše'); const [selected, setSelected] = useState<string[]>([]);
  const images = atlasImages.filter((a) => (category === 'Vše' || a.category === category) && normalizeSearch(`${a.titleCs} ${a.taxon} ${a.descriptionCs}`).includes(normalizeSearch(filter)));
  const toggle = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : prev.length < 2 ? [...prev, id] : prev);
  return <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8"><h1 className="text-4xl font-semibold">Obrazový atlas</h1><p className="mt-4 max-w-3xl leading-8">{atlasImages.length} skutečných fotografií a skenů s doloženým původem. Pro určení kombinujte více znaků. Fotografie choroby slouží ke srovnání, sama nepotvrzuje diagnózu jiné rostliny.</p>
    <label className="mt-6 block"><span className="text-sm font-semibold">Hledat český nebo botanický název</span><input value={filter} onChange={(e) => setFilter(e.target.value)} className="mt-2 h-12 w-full rounded-xl border bg-card px-4" placeholder="Například dub, Acer, pupeny…"/></label>
    <div className="mt-4 flex flex-wrap gap-2" aria-label="Kategorie atlasu">{['Vše', 'Poznávání rostlin', 'Choroby a škůdci', 'Řez'].map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm ${category === item ? 'bg-primary text-white' : 'bg-card'}`}>{item}</button>)}</div>
    {selected.length > 0 && <section className="mt-8 rounded-2xl border-2 border-primary bg-card p-5"><div className="flex items-center justify-between gap-4"><h2 className="text-2xl font-semibold">Porovnání ({selected.length}/2)</h2><button className="text-sm underline" onClick={() => setSelected([])}>Zrušit výběr</button></div><p className="mt-3 text-sm text-muted-foreground">Porovnávejte tvar a postavení znaků. Snímky nejsou ve stejném měřítku; pro velikost použijte měřítko přímo v obrazu.</p><div className="mt-5 grid gap-7 md:grid-cols-2">{selected.map((id) => <AtlasFigure key={id} asset={atlasImages.find((a) => a.id === id)!}/>)}</div></section>}
    <p className="mt-6 text-sm text-muted-foreground" role="status">Zobrazeno {images.length} snímků. K porovnání vyberte nejvýše dva.</p>
    <div className="mt-5 grid gap-6 lg:grid-cols-2">{images.map((asset) => <article id={asset.id} key={asset.id} className="scroll-mt-24 rounded-2xl border bg-card p-5"><AtlasFigure asset={asset}/><button aria-pressed={selected.includes(asset.id)} disabled={!selected.includes(asset.id) && selected.length >= 2} className="mt-4 rounded-full border px-4 py-2 text-sm font-semibold disabled:opacity-40" onClick={() => toggle(asset.id)}>{selected.includes(asset.id) ? 'Odebrat z porovnání' : 'Přidat k porovnání'}</button></article>)}</div>
    {!images.length && <p className="mt-8 rounded-xl border p-6">Žádný snímek neodpovídá filtru. Zkuste český název nebo jinou kategorii.</p>}
  </div>;
}

export function Assessment({ moduleId }: { moduleId: string }) {
  const questions = exercises.filter((q) => q.moduleId === moduleId);
  const [answers, setAnswers] = useState<Record<string, string>>({}); const [graded, setGraded] = useState(false); const [error, setError] = useState('');
  const [previous, setPrevious] = useState<Attempt | null>(null); const [storageError, setStorageError] = useState(false);
  const [caseAnswer, setCaseAnswer] = useState(''); const [showRubric, setShowRubric] = useState(false);
  const caseStudy = caseStudies.find((c) => c.moduleId === moduleId);
  // oxlint-disable-next-line react/set-state-in-effect -- Hydrate the external localStorage value after SSR, keeping the initial server/client render identical.
  useEffect(() => { try { setPrevious(parseAttempt(localStorage.getItem(`zahradnicka-test-${moduleId}`), questions.length)); } catch { setStorageError(true); } }, [moduleId, questions.length]);
  const score = questions.filter((q) => gradeExercise(q, answers[q.id] ?? '')).length;
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const missing = questions.find((q) => !answers[q.id]?.trim() || (q.kind === 'number' && parseNumericAnswer(answers[q.id]) === null));
    if (missing) { setError('Vyplňte všechny odpovědi. U výpočtů zadejte pouze číslo v uvedené jednotce, desetinná čárka je povolena.'); document.getElementById(`cviceni-${missing.id}`)?.scrollIntoView({ block: 'center' }); return; }
    setError(''); setGraded(true);
    const result: Attempt = { revision: EXERCISE_REVISION, total: questions.length, correct: score, at: new Date().toISOString(), wrongIds: questions.filter((q) => !gradeExercise(q, answers[q.id] ?? '')).map((q) => q.id) };
    setPrevious(result);
    try { localStorage.setItem(`zahradnicka-test-${moduleId}`, JSON.stringify(result)); } catch { setStorageError(true); }
  }
  return <section id={`quiz-${moduleId}`} className="scroll-mt-24 border-t py-10"><h2 className="text-3xl font-semibold">Ověřte porozumění</h2><p className="mt-3 leading-7 text-muted-foreground">{questions.length} hodnocených úloh. Nejdřív odpovězte, poté se zobrazí vysvětlení všech možností a odkazy k doplnění znalostí. Výsledky se ukládají pouze v tomto zařízení.</p>
    {previous && !graded && <p className="mt-4 rounded-xl bg-accent p-4">Poslední pokus: {previous.correct}/{previous.total} · {new Date(previous.at).toLocaleDateString('cs-CZ')}. Označení kapitoly jako přečtené je samostatné.</p>}
    <form onSubmit={submit} className="mt-6 space-y-5">
      {questions.map((q, index) => { const correct = gradeExercise(q, answers[q.id] ?? ''); const asset = atlasImages.find((a) => a.id === q.imageId); return <fieldset key={q.id} id={`cviceni-${q.id}`} className="scroll-mt-24 rounded-2xl border bg-card p-5 sm:p-7" disabled={graded}>
        <legend className="px-2 text-sm font-semibold text-primary">Úloha {index + 1} · {q.imageId ? 'Poznávačka' : q.kind === 'number' ? 'Výpočet' : 'Rozhodnutí'}</legend><p id={`otazka-${q.id}`} className="text-lg font-semibold leading-7">{q.prompt}</p>
        {asset && <div className="mt-4"><img src={asset.src} alt={`Referenční snímek k úloze ${index + 1}; popis se zobrazí po vyhodnocení.`} width={960} height={960} loading="lazy" className="h-72 w-full rounded-xl bg-white object-contain"/>{graded ? <p className="mt-3">{asset.titleCs} — {asset.descriptionCs}</p> : null}<ImageCredits asset={asset}/></div>}
        {q.kind === 'choice' ? <RadioGroup className="mt-5" value={answers[q.id] ?? ''} disabled={graded} aria-labelledby={`otazka-${q.id}`} onValueChange={(value) => setAnswers((a) => ({ ...a, [q.id]: String(value) }))}>{q.choices!.map((option, i) => <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${graded && i === q.correct ? 'border-primary bg-accent/60' : ''}`}><RadioGroupItem className="mt-1 shrink-0" value={String(i)}/><span className="leading-7">{option.text}{graded && <span className="mt-2 block text-sm text-muted-foreground">{i === q.correct ? 'Správně: ' : 'Proč ne: '}{option.explanation}</span>}</span></label>)}</RadioGroup> : <label className="mt-4 block"><span className="text-sm">Odpověď v {q.unit}</span><input inputMode="decimal" value={answers[q.id] ?? ''} onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))} className="mt-2 block h-12 w-full max-w-xs rounded-xl border bg-background px-4" aria-describedby={`otazka-${q.id}`}/></label>}
        {graded && <div className={`mt-5 rounded-xl p-4 ${correct ? 'bg-accent' : 'bg-amber-100 text-amber-950'}`}><p className="flex items-center gap-2 font-semibold">{correct ? <CheckCircle2 size={18}/> : <CircleAlert size={18}/>} {correct ? 'Správně' : 'K doplnění'}</p><p className="mt-2 leading-7">{q.explanation}</p><Link className="mt-3 inline-block font-semibold underline" href={q.reading}>Vrátit se k výkladu →</Link></div>}
      </fieldset>; })}
      {error && <p role="alert" className="rounded-xl bg-amber-100 p-4 text-amber-950">{error}</p>}
      {graded ? <div role="status" className="rounded-2xl border-2 border-primary p-6"><p className="text-2xl font-semibold">Výsledek {score}/{questions.length} ({Math.round(score / questions.length * 100)} %)</p><p className="mt-2 leading-7">{score === questions.length ? 'Všechny úlohy tohoto pokusu jsou správně.' : 'Projděte vysvětlení chyb a navazující výklad.'} Výsledek tohoto krátkého testu není osvědčení odborné způsobilosti.</p><button type="button" className="mt-4 rounded-full bg-primary px-5 py-3 font-semibold text-white" onClick={() => { setAnswers({}); setGraded(false); setError(''); }}>Nový pokus</button></div> : <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Vyhodnotit odpovědi</button>}
      {storageError && <p role="status" className="text-sm text-amber-800">Prohlížeč nepovolil místní uložení. Výsledek je dostupný v této relaci.</p>}
    </form>
    {caseStudy && <section className="mt-8 rounded-2xl border bg-card p-6"><h3 className="text-xl font-semibold">Případová studie: vysvětlete vlastní postup</h3><p className="mt-3 leading-7">{caseStudy.prompt}</p><label className="mt-4 block"><span className="text-sm font-semibold">Vaše zdůvodnění</span><textarea value={caseAnswer} onChange={(e) => setCaseAnswer(e.target.value)} rows={5} className="mt-2 w-full rounded-xl border bg-background p-4" placeholder="Pozorování → hypotézy → ověření → rozhodnutí → kontrola výsledku"/></label><button className="mt-4 rounded-full border px-5 py-2 font-semibold disabled:opacity-40" disabled={!caseAnswer.trim()} onClick={() => setShowRubric(!showRubric)}>{showRubric ? 'Skrýt kritéria' : 'Porovnat s kritérii řešení'}</button>{showRubric && <div className="mt-5"><ul className="list-disc space-y-2 pl-6">{caseStudy.rubric.map((item) => <li key={item} className="leading-7">{item}</li>)}</ul><p className="mt-4 text-sm text-muted-foreground">Jde o sebehodnocení podle kritérií, nikoli automatické posouzení volného textu. Odpověď se neodesílá ani neukládá.</p></div>}</section>}
  </section>;
}

export function CompetenciesView() {
  return <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8"><h1 className="text-4xl font-semibold">Mapa profesních znalostí</h1><p className="mt-4 max-w-4xl leading-8">Tato redakční mapa propojuje osm oblastí kvalifikace Sadovník/sadovnice 41-007-H s výkladem a konkrétními úlohami. Je to jedna z profesních specializací; nepokrývá sama všechny zahradnické profese ani nepotvrzuje připravenost ke zkoušce.</p><SourceCitations ids={['nsk']}/>
    <div className="mt-8 space-y-6">{competencies.map((c) => <section key={c.id} id={c.id} className="scroll-mt-24 rounded-2xl border bg-card p-6"><h2 className="text-2xl font-semibold">{c.title}</h2><p className="mt-3 leading-7">{c.requirement}</p><div className="mt-5 grid gap-6 md:grid-cols-2"><div><h3 className="font-semibold">Co nastudovat</h3><ul className="mt-2 space-y-2">{c.reading.map((r) => <li key={r.href}><Link href={r.href} className="text-primary underline">{r.label} →</Link></li>)}</ul><h3 className="mt-4 font-semibold">Co máte umět doložit</h3><p className="mt-2 leading-7">{c.evidence}</p></div><div><h3 className="font-semibold">Ověřit znalosti</h3><ul className="mt-2 space-y-2">{c.exerciseIds.map((id) => { const q = exercises.find((e) => e.id === id)!; return <li key={id}><Link href={`/wiki/${q.moduleId}#cviceni-${id}`} className="text-primary underline">{q.prompt}</Link></li>; })}</ul></div></div><p className="mt-5 rounded-xl bg-muted p-4 text-sm leading-6"><strong>Co zatím tato mapa neověřuje:</strong> {c.remaining}</p></section>)}</div>
    <h2 className="mt-12 text-2xl font-semibold">Navazující studium všech 20 modulů</h2><p className="mt-3 leading-7 text-muted-foreground">Následující cíle jsou cíle wiki, nikoli další citovaná kritéria NSK. Každý modul má vlastní hodnocené úlohy a případovou studii.</p><div className="mt-6 overflow-hidden rounded-xl border"><Table><TableHeader><TableRow><TableHead>Modul</TableHead><TableHead>Studijní cíle</TableHead><TableHead>Úlohy</TableHead></TableRow></TableHeader><TableBody>{modules.map((m) => <TableRow key={m.id}><TableCell className="whitespace-normal align-top"><Link href={viewHref(m.id)} className="font-semibold text-primary underline">{m.title}</Link></TableCell><TableCell className="whitespace-normal leading-7">{m.outcomes.join(' · ')}</TableCell><TableCell><Link href={`${viewHref(m.id)}#quiz-${m.id}`} className="text-primary underline">{exercises.filter((q) => q.moduleId === m.id).length} + případ</Link></TableCell></TableRow>)}</TableBody></Table></div>
  </div>;
}

export function EditorialView() {
  return <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8"><h1 className="text-4xl font-semibold">Zdroje a stav odborné revize</h1><p className="mt-5 text-lg leading-8">Každé ověření má konkrétní rozsah. Funkční odkaz neprokazuje správnost textu a vlastní výukový příklad není citace odborného standardu.</p>
    <section className="mt-8 rounded-2xl border bg-card p-6"><h2 className="text-2xl font-semibold">Kdo a co ověřil</h2><dl className="mt-4 space-y-4 leading-7"><div><dt className="font-semibold">Zpracování</dt><dd>Redakční zpracování s pomocí AI (Codex), porovnání vybraných tvrzení s uvedenými primárními podklady dne 7. 9. 2026.</dd></div><div><dt className="font-semibold">Rozsah tohoto vydání</dt><dd>{paragraphEvidence.length} jednotlivých odstavců původního výkladu má výslovnou vazbu na zdroj. Přibylo {learningLessons.length} rozšířených lekcí s citacemi u podložených bloků. Ostatní původní text má kapitolovou bibliografii a čeká na ověření jednotlivých tvrzení.</dd></div><div><dt className="font-semibold">Nezávislá odborná recenze</dt><dd>Dosud neprovedena. Wiki proto neuvádí jméno odborného garanta ani netvrdí, že celý obsah prošel odbornou recenzí.</dd></div></dl></section>
    <section className="mt-8 rounded-2xl border bg-card p-6"><h2 className="text-2xl font-semibold">Technická kontrola odkazů</h2><p className="mt-3 leading-7">Dne {new Date(sourceAudit.checkedAt).toLocaleDateString('cs-CZ', { timeZone: 'UTC' })} zkontrolováno {sourceAudit.unique} různých adres v bibliografii, citacích a licencích atlasu: {sourceAudit.passed} přímých odpovědí 2xx, {sourceAudit.redirected} přesměrování, {sourceAudit.failed} chyb nebo blokací.</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Jde o poslední naměřený stav, nikoli záruku budoucí dostupnosti. HTTP kontrola neodhalí všechny obsahové chyby ani stránky, které místo chyby vracejí kód 200. Věcná kontrola citovaných tvrzení je samostatná.</p></section>
    <section className="mt-8 space-y-4 leading-8"><h2 className="text-2xl font-semibold">Jak číst citace</h2><p>U doloženého odstavce otevřete „Podklady k tomuto tvrzení“. Najdete instituci, jazyk, přesné místo ve zdroji, datum porovnání a rozsah použití. Anglický text má vlastní české vysvětlení; místní právní režim a pěstitelské termíny se z ciziny automaticky nepřenášejí.</p><p>Výpočty uvádějí vlastní zadaná čísla, jednotky a kontrolu výsledku. Dávka ve cvičení není doporučením pro neznámou rostlinu. U přípravků na ochranu rostlin je rozhodující aktuální české povolení konkrétního použití.</p><p>Obrazový atlas obsahuje existující snímky s uvedeným autorem, licencí, původním souborem a omezením určení. Není úplným určovacím klíčem. Cizí odborná schémata bez potvrzeného oprávnění k převzetí zpřístupňujeme odkazem na originál.</p></section>
    <section className="mt-8"><h2 className="text-2xl font-semibold">Záznam věcných změn</h2><ul className="mt-4 list-disc space-y-3 pl-6 leading-7"><li><Link className="text-primary underline" href="/wiki/bezpecnost#bezpecnost-professional-9-p-2">První pomoc:</Link> opraveno načasování volání při nereagování podle českého změnového listu 2026.</li><li>Odstraněny odhadované počty tiskových stran a plošné tvrzení, že všechny stránky byly obsahově ověřeny.</li><li>Výsledky testů se evidují odděleně od ručního označení kapitoly jako přečtené.</li></ul></section>
    <section className="mt-8 rounded-2xl border p-6"><h2 className="text-2xl font-semibold">Nahlásit opravu</h2><p className="mt-3 leading-7">Uveďte adresu odstavce, přesné problematické tvrzení, navrženou opravu a odborný podklad. Ve veřejném hlášení neposílejte údaje klientů ani neveřejnou dokumentaci.</p><a className="mt-4 inline-block font-semibold text-primary underline" href="https://github.com/kolisko/zahradnicka-akademie/issues/new" target="_blank" rel="noreferrer">Otevřít hlášení na GitHubu ↗</a></section>
    <p className="mt-8 text-sm text-muted-foreground">Datum redakčního vydání: {REVIEW_DATE}. Odkazy a obsah se mohou od posledního ověření změnit.</p>
  </article>;
}
