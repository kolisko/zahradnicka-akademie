'use client';

import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Clock3,
  GraduationCap,
  Leaf,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Sprout,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { glossary, modules, type Module } from '@/lib/curriculum';
import { professionalChapters, type ProfessionalChapter } from '@/lib/professional-content';
import { evidenceFor, readableLanguage } from '@/lib/evidence';
import { learningLessons } from '@/lib/learning';
import { exercises } from '@/lib/assessments';
import { atlasImages } from '@/lib/atlas';
import { normalizeSearch, searchWiki, viewHref } from '@/lib/search';
import { parseReadProgress } from '@/lib/study-progress';
import { AppliedLessons, Assessment, AtlasView, CompetenciesView, EditorialView, ModuleAtlas, SourceCitations, SourceAvailability } from '@/components/learning-ui';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type View = 'home' | 'glossary' | string;

function minutesLabel(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `${hours} h${rest ? ` ${rest} min` : ''}`;
}

function Header({ onHome, onGlossary, onSearch, query, menuOpen, setMenuOpen }: {
  onHome: () => void; onGlossary: () => void; onSearch: (value: string) => void; query: string;
  menuOpen: boolean; setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1560px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-xl border bg-card lg:hidden" aria-label="Otevřít navigaci">
          {menuOpen ? <X size={18}/> : <Menu size={18}/>}
        </button>
        <button onClick={onHome} className="flex shrink-0 items-center gap-3 text-left font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><Leaf size={18}/></span>
          <span className="hidden sm:block">Zahradnická akademie</span>
        </button>
        <label className="relative ml-auto flex w-full max-w-xl items-center">
          <Search className="absolute left-3.5 text-muted-foreground" size={16}/>
          <input aria-label="Hledat v celém výkladu, tabulkách a atlasu" value={query} onChange={(event) => onSearch(event.target.value)} placeholder="Hledat v celém obsahu…" className="h-10 w-full rounded-xl border bg-card pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10" />
        </label>
        <button onClick={onGlossary} className="hidden rounded-full border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted sm:block">Slovník</button>
      </div>
    </header>
  );
}

function Sidebar({ view, onNavigate, completed, mobile = false }: { view: View; onNavigate: () => void; completed: string[]; mobile?: boolean }) {
  return (
    <aside className={`${mobile ? 'fixed inset-x-0 top-16 z-30 max-h-[calc(100vh-4rem)] overflow-y-auto border-b shadow-xl lg:hidden' : 'sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto border-r lg:block'} bg-background px-4 py-6`}>
      <Link href="/" onClick={onNavigate} className={`mb-5 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${view === 'home' ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'}`}>
        <BookOpen size={17}/> Přehled studia
      </Link>
      <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{modules.length} odborných modulů</p>
      <nav className="space-y-1" aria-label="Studijní moduly">
        {modules.map((module, index) => (
          <Link key={module.id} href={viewHref(module.id)} onClick={onNavigate} aria-current={view === module.id ? 'page' : undefined} className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${view === module.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
            <span className="w-5 font-mono text-[11px] opacity-65">{String(index + 1).padStart(2, '0')}</span>
            <span className="min-w-0 flex-1 truncate">{module.title}</span>
            {completed.includes(module.id) && <CheckCircle2 size={15} className={view === module.id ? 'text-white' : 'text-primary'}/>}
          </Link>
        ))}
      </nav>
      <nav aria-label="Referenční části" className="mt-5 space-y-2">{[['atlas', 'Fotografický atlas'], ['competencies', 'Mapa kompetencí'], ['glossary', 'Odborný slovník'], ['editorial', 'Zdroje a recenze']].map(([id, label]) => <Link key={id} href={viewHref(id)} onClick={onNavigate} aria-current={view === id ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold ${view === id ? 'bg-accent' : 'bg-card hover:bg-muted'}`}><BookMarked size={17}/>{label}</Link>)}</nav>
      <div className="mt-5 rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between text-sm font-semibold"><span>Označeno jako přečtené</span><span>{completed.length}/{modules.length}</span></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${completed.length / modules.length * 100}%` }}/></div>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">Označení je uložené pouze v tomto zařízení.</p>
      </div>
    </aside>
  );
}

function HomeView({ onView, completed }: { onView: (view: View) => void; completed: string[] }) {
  const totalSections = Object.values(professionalChapters).reduce((sum, chapter) => sum + chapter.sections.length, 0);
  const professionalCount = Object.keys(professionalChapters).length;
  const totalSources = new Set(Object.values(professionalChapters).flatMap((chapter) => chapter.sources.map((source) => source.url))).size;
  const totalProcedures = Object.values(professionalChapters).reduce((sum, chapter) => sum + chapter.sections.filter((section) => section.procedure).length, 0);
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <section className="grid items-center gap-8 border-b pb-12 xl:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><Sprout size={14}/> Odborná wiki · {professionalCount}/{modules.length} modulů</div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.07] tracking-[-0.045em] sm:text-6xl">Od kořenů k řemeslu.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Systematická česká učebnice pro budoucí profesionální zahradníky. Odborné kapitoly obsahují souvislý výklad, tabulky, diagnostické postupy, případové studie a dohledatelné zdroje.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => onView('botanika')} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15">Začít první kapitolou <ArrowRight size={16}/></button>
            <Link href="/kompetence" className="inline-flex items-center rounded-full border bg-card px-5 py-3 text-sm font-medium hover:bg-accent">Mapa znalostí a kompetencí</Link>
          </div>
        </div>
        <aside className="overflow-hidden rounded-[2rem] border bg-card shadow-xl shadow-primary/10">
          <div className="p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Kontrolní rámec obsahu</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Tvrzení musí být dohledatelné</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
              <li><strong className="text-foreground">Průběžná zdrojová kontrola:</strong> u doplněných lekcí a vybraných odstavců najdete konkrétní zdroj, jazyk a datum kontroly. Ostatní výklad není dosud ověřen tvrzení po tvrzení.</li>
              <li><strong className="text-foreground">Postup místo dojmu:</strong> účel, jednotlivé kroky a povinný záznam výsledku.</li>
              <li><strong className="text-foreground">Bezpečnostní hranice:</strong> upozornění, kdy postup zastavit a přizvat oprávněného specialistu.</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 border-t text-center text-xs">
            <div className="p-4"><strong className="block text-lg text-primary">{totalSources}</strong>zdrojů</div>
            <div className="border-x p-4"><strong className="block text-lg text-primary">{totalProcedures}</strong>postupů</div>
            <div className="p-4"><strong className="block text-lg text-primary">{totalSections}</strong>oddílů výkladu</div>
          </div>
        </aside>
      </section>

      <section aria-label="Studijní nástroje" className="grid gap-4 border-b py-8 sm:grid-cols-3">
        <Link href="/atlas" className="rounded-2xl border bg-card p-5 hover:border-primary"><h2 className="font-semibold">{atlasImages.length} skutečných snímků</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Znaky dřevin, příznaky poškození a kontext řezu. S autorem, licencí a limity určení.</p></Link>
        <Link href="/wiki/pece#quiz-pece" className="rounded-2xl border bg-card p-5 hover:border-primary"><h2 className="font-semibold">{exercises.length} hodnocených úloh</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Výpočty, rozhodování i poznávání z fotografie. Vysvětlení chyb a návrat k výkladu.</p></Link>
        <Link href="/redakcni-pravidla" className="rounded-2xl border bg-card p-5 hover:border-primary"><h2 className="font-semibold">Otevřený stav recenze</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{learningLessons.length} rozšířených lekcí s citacemi. Nezávislá odborná recenze zatím neproběhla.</p></Link>
      </section>

      <section className="py-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Studijní cesta</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Dvacet propojených modulů</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Studujte v pořadí, nebo otevřete právě to téma, které řešíte v zahradě.</p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, index) => (
            <button key={module.id} onClick={() => onView(module.id)} className="group flex min-h-52 flex-col rounded-2xl border bg-card p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg">
              <div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-primary">MODUL {String(index + 1).padStart(2, '0')}</span>{completed.includes(module.id) && <CheckCircle2 size={18} className="text-primary"/>}</div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight">{module.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{module.subtitle}</p>
              <span className={`mt-4 w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${professionalChapters[module.id] ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{professionalChapters[module.id] ? 'ODBORNÁ KAPITOLA' : 'ZATÍM STRUČNÁ OSNOVA'}</span>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground"><span>{professionalChapters[module.id]?.sections.length ?? module.lessons.length} oddílů</span><span>{exercises.filter((item) => item.moduleId === module.id).length} úloh</span><ArrowRight size={16} className="ml-auto text-primary transition group-hover:translate-x-1"/></div>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 border-t py-12 lg:grid-cols-3">
        <div className="rounded-2xl bg-primary p-6 text-primary-foreground"><GraduationCap size={24}/><h3 className="mt-8 text-xl font-semibold">Jak wiki studovat</h3><p className="mt-2 text-sm leading-6 text-white/75">Začněte botanikou, půdou a stanovištěm. U každé lekce si vysvětlete příčinu vlastními slovy a teprve potom otevřete kontrolní odpověď.</p></div>
        <div className="rounded-2xl border bg-card p-6"><ShieldCheck size={24} className="text-primary"/><h3 className="mt-8 text-xl font-semibold">Bezpečné hranice</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Wiki nenahrazuje odborné oprávnění pro práci ve výšce, s přípravky, elektřinou nebo rizikovými stromy. U každého oboru ukazuje, kdy přizvat specialistu.</p></div>
        <div className="rounded-2xl border bg-card p-6"><BookMarked size={24} className="text-primary"/><h3 className="mt-8 text-xl font-semibold">Odborné opory</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Obsah vychází ze standardní botaniky, pedologie, zahradnické praxe, integrované ochrany a moderních arboristických principů. Právní informace vždy ověřujte v aktuálním znění.</p></div>
      </section>
    </div>
  );
}

function ProfessionalContent({ chapter }: { chapter: ProfessionalChapter }) {
  return (
    <div className="py-10">
      <div className="mb-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <span>{chapter.edition}</span><span>•</span><span>{chapter.sections.length} oddílů výkladu</span>
        </div>
        <p className="mt-4 max-w-3xl leading-7">{chapter.abstract}</p>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Konkrétní zdrojové vazby jsou uvedené u vybraných odstavců a v rozšířených lekcích. Zbývající výklad čeká na kontrolu jednotlivých tvrzení; seznam literatury sám o sobě není odbornou recenzí. <Link href="/redakcni-pravidla" className="underline">Rozsah a datum kontroly</Link>.</p>
        <div className="mt-4 flex flex-wrap gap-2">{chapter.prerequisites.map((item) => <span key={item} className="rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">Předpoklad: {item}</span>)}</div>
      </div>

      <div className="space-y-8">
        {chapter.sections.map((section, sectionIndex) => (
          <section key={section.title} id={`${chapter.moduleId}-professional-${sectionIndex + 1}`} className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm sm:p-9">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{section.title}</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90">
              {section.paragraphs.map((paragraph, paragraphIndex) => <div key={paragraphIndex} id={`${chapter.moduleId}-professional-${sectionIndex + 1}-p-${paragraphIndex + 1}`} className="scroll-mt-24"><p>{paragraph}</p><SourceCitations ids={evidenceFor(chapter.moduleId, sectionIndex + 1, paragraphIndex + 1)?.sources ?? []}/></div>)}
            </div>

            {section.table && (
              <div className="mt-8 overflow-hidden rounded-xl border">
                <div className="border-b bg-muted/70 px-4 py-3 text-sm font-semibold">{section.table.caption}</div>
                <Table>
                  <TableHeader><TableRow>{section.table.headers.map((header) => <TableHead key={header} className="min-w-40 whitespace-normal px-4 py-3 align-top text-xs font-semibold">{header}</TableHead>)}</TableRow></TableHeader>
                  <TableBody>{section.table.rows.map((row, rowIndex) => <TableRow key={`${section.title}-${rowIndex}`}>{row.map((cell, cellIndex) => <TableCell key={`${cellIndex}-${cell.slice(0, 20)}`} className="min-w-40 whitespace-normal px-4 py-3 align-top text-sm leading-6 text-muted-foreground first:font-semibold first:text-foreground">{cell}</TableCell>)}</TableRow>)}</TableBody>
                </Table>
              </div>
            )}

            {section.procedure && (
              <aside className="mt-8 rounded-2xl bg-[#203c2b] p-6 text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Pracovní protokol</p>
                <h3 className="mt-2 text-xl font-semibold">{section.procedure.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75"><strong className="text-white">Cíl:</strong> {section.procedure.purpose}</p>
                <ol className="mt-5 space-y-3">{section.procedure.steps.map((step, stepIndex) => <li key={step} className="flex gap-3 text-sm leading-6"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 font-mono text-xs">{stepIndex + 1}</span><span>{step}</span></li>)}</ol>
                <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-5 text-white/70"><strong className="text-white">Povinný záznam:</strong> {section.procedure.record}</p>
              </aside>
            )}

            {section.fieldExample && <aside className="mt-7 rounded-xl border-l-4 border-primary bg-accent/45 p-5"><h3 className="font-semibold">{section.fieldExample.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{section.fieldExample.text}</p></aside>}
            {section.warning && <aside className="mt-7 flex gap-3 rounded-xl bg-[#f5e6cc] p-5 text-sm leading-6 text-[#5a3d18]"><CircleAlert size={19} className="mt-0.5 shrink-0"/><p><strong>Pozor:</strong> {section.warning}</p></aside>}
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border bg-card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Odborné zdroje kapitoly</p>
        <h2 className="mt-2 text-2xl font-semibold">Použitá opora a další studium</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Doplňková literatura, nikoli potvrzení každého tvrzení výše. Dostupnost odkazu není důkaz věcné správnosti. U zdrojů bez jazykových metadat není jazyk odhadován; zahraniční zdroje doplňují český výklad.</p>
        <div className="mt-6 divide-y">{chapter.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group grid gap-2 py-4 sm:grid-cols-[1fr_1.2fr_auto]"><div><strong className="text-sm group-hover:text-primary">{source.title}</strong><div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><span>{source.organisation}</span><span className="rounded-full border px-2 py-0.5 font-semibold text-foreground">{readableLanguage(source)}</span></div></div><p className="text-sm leading-6 text-muted-foreground">{source.scope}<SourceAvailability url={source.url}/></p><ArrowRight size={16} className="mt-1 text-primary"/></a>)}</div>
      </section>
    </div>
  );
}

function ModuleView({ module, onView, completed, toggleCompleted }: { module: Module; onView: (view: View) => void; completed: string[]; toggleCompleted: (id: string) => void }) {
  const index = modules.findIndex((item) => item.id === module.id);
  const [openChecks, setOpenChecks] = useState<number[]>([]);
  const professionalChapter = professionalChapters[module.id];
  return (
    <article className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <button onClick={() => onView('home')} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={16}/> Všechny moduly</button>
      <header className="border-b pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><span>Modul {String(index + 1).padStart(2, '0')}</span><span className="text-border">•</span><span>{module.level}</span></div>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{module.title}</h1>
        <p className="mt-3 text-xl text-muted-foreground">{module.subtitle}</p>
        <p className="mt-7 max-w-3xl text-base leading-7">{module.overview}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm"><Clock3 size={15}/> Plán studia: {minutesLabel(module.minutes)}</span>
          <span className="rounded-full border bg-card px-4 py-2 text-sm">{professionalChapter?.sections.length ?? module.lessons.length} oddílů</span>
          <button onClick={() => toggleCompleted(module.id)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${completed.includes(module.id) ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
            {completed.includes(module.id) ? <><Check size={15}/> Přečteno</> : 'Označit jako přečtené'}
          </button>
        </div>
      </header>

      <section className="grid gap-6 border-b py-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Cíle studia — ne potvrzení praktické způsobilosti</p>
          <ul className="mt-5 space-y-4">{module.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-6"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check size={13}/></span>{outcome}</li>)}</ul>
        </div>
        <nav className="rounded-2xl border bg-card p-6" aria-label="Oddíly odborné kapitoly">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Obsah odborné kapitoly</p>
          <ol className="mt-5 space-y-3">
            {(professionalChapter?.sections ?? []).map((section, sectionIndex) => (
              <li key={section.title}>
                <a href={`#${module.id}-professional-${sectionIndex + 1}`} className="group flex gap-3 text-sm leading-5 text-muted-foreground hover:text-foreground">
                  <span className="font-mono text-xs font-semibold text-primary">{String(sectionIndex + 1).padStart(2, '0')}</span>
                  <span className="group-hover:underline">{section.title.replace(/^\d+\.\s*/, '')}</span>
                </a>
              </li>
            ))}
          </ol>
          <ul className="mt-5 space-y-3 border-t pt-4 text-sm">{learningLessons.filter((lesson) => lesson.moduleId === module.id).map((lesson) => <li key={lesson.id}><a href={`#${lesson.id}`} className="text-primary underline">Rozšíření: {lesson.title}</a></li>)}{['botanika', 'rostliny', 'ochrana', 'rez'].includes(module.id) && <li><a href={`#atlas-${module.id}`} className="text-primary underline">Obrazové studium</a></li>}<li><a href={`#quiz-${module.id}`} className="font-semibold text-primary underline">Hodnocený test a případová studie</a></li><li><a href="#sebekontrola" className="text-primary underline">Otázky pro vlastní vysvětlení</a></li></ul>
        </nav>
      </section>

      {professionalChapter ? <ProfessionalContent chapter={professionalChapter}/> : <div className="py-10">
        <aside className="mb-7 flex gap-3 rounded-2xl border border-[#b9873f]/35 bg-[#f7eddc] p-5 text-sm leading-6 text-[#5a3d18]"><CircleAlert size={19} className="mt-0.5 shrink-0"/><p><strong>Tato kapitola zatím není v odborném standardu.</strong> Níže uvedený obsah je pracovní osnova a nesmí být považován za úplnou profesní přípravu.</p></aside>
        <div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Výklad</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Lekce modulu</h2></div><Play size={20} className="text-primary" aria-hidden="true"/></div>
        <div className="space-y-5">
          {module.lessons.map((lesson, lessonIndex) => (
            <section key={lesson.title} id={`${module.id}-${lessonIndex + 1}`} className="scroll-mt-24 rounded-2xl border bg-card p-6 sm:p-8">
              <div className="flex gap-4"><span className="mt-1 font-mono text-xs font-semibold text-primary">{String(lessonIndex + 1).padStart(2, '0')}</span><div className="min-w-0"><h3 className="text-2xl font-semibold tracking-tight">{lesson.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{lesson.lead}</p></div></div>
              <ul className="ml-0 mt-6 space-y-3 sm:ml-10">{lesson.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6"><ChevronRight size={16} className="mt-1 shrink-0 text-primary"/>{point}</li>)}</ul>
              {lesson.note && <aside className="ml-0 mt-6 flex gap-3 rounded-xl bg-accent/70 p-4 text-sm leading-6 sm:ml-10"><CircleAlert size={18} className="mt-0.5 shrink-0 text-primary"/><div><strong>Odborná poznámka:</strong> {lesson.note}</div></aside>}
            </section>
          ))}
        </div>
      </div>}

      <AppliedLessons moduleId={module.id}/>
      <ModuleAtlas moduleId={module.id}/>
      <Assessment moduleId={module.id}/>

      <section id="sebekontrola" className="scroll-mt-24 border-t py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sebekontrola</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Dokážete vysvětlit proč?</h2>
        <div className="mt-6 space-y-3">{module.checks.map((check, checkIndex) => {
          const isOpen = openChecks.includes(checkIndex);
          return <div key={check.question} className="overflow-hidden rounded-2xl border bg-card"><button onClick={() => setOpenChecks(isOpen ? openChecks.filter((item) => item !== checkIndex) : [...openChecks, checkIndex])} className="flex w-full items-center gap-4 p-5 text-left font-semibold"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted font-mono text-xs">Q{checkIndex + 1}</span><span className="flex-1">{check.question}</span><ChevronDown size={18} className={`transition ${isOpen ? 'rotate-180' : ''}`}/></button>{isOpen && <div className="border-t bg-accent/35 px-5 py-4 text-sm leading-6 text-accent-foreground sm:pl-[4.25rem]">{check.answer}</div>}</div>;
        })}</div>
      </section>

      <footer className="flex items-center justify-between border-t py-8">
        <button onClick={() => onView(index > 0 ? modules[index - 1].id : 'home')} className="inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft size={16}/>{index > 0 ? modules[index - 1].title : 'Přehled'}</button>
        {index < modules.length - 1 && <button onClick={() => onView(modules[index + 1].id)} className="inline-flex items-center gap-2 text-right text-sm font-semibold text-primary">{modules[index + 1].title}<ArrowRight size={16}/></button>}
      </footer>
    </article>
  );
}

function GlossaryView() {
  const [filter, setFilter] = useState('');
  const entries = glossary.map(([term, definition], index) => ({ term, definition, index })).filter(({ term, definition }) => normalizeSearch(`${term} ${definition}`).includes(normalizeSearch(filter)));
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Referenční část</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Odborný slovník</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Rychlá vysvětlení pojmů používaných napříč všemi moduly.</p>
      <label className="relative mt-7 flex items-center"><Search className="absolute left-4 text-muted-foreground" size={17}/><input aria-label="Filtrovat slovník" value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filtrovat pojmy…" className="h-12 w-full rounded-xl border bg-card pl-11 pr-4 text-sm outline-none focus:ring-4 focus:ring-primary/10"/></label>
      <dl className="mt-7 divide-y rounded-2xl border bg-card px-6">{entries.map(({ term, definition, index }) => <div key={term} id={`pojem-${index}`} className="grid scroll-mt-24 gap-2 py-5 sm:grid-cols-[190px_1fr]"><dt className="font-semibold text-primary">{term}</dt><dd className="text-sm leading-6 text-muted-foreground">{definition}</dd></div>)}</dl>
      {!entries.length && <p role="status" className="mt-6">Žádný odpovídající pojem. Zkuste kratší výraz.</p>}
    </div>
  );
}

export default function Wiki({ initialView = 'home' }: { initialView?: string }) {
  const router = useRouter();
  const view = initialView;
  const [query, setQuery] = useState('');
  const [completed, setCompleted] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resultLimit, setResultLimit] = useState(20);
  const [storageWarning, setStorageWarning] = useState(false);

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- Read validated browser-only storage after SSR to avoid a hydration mismatch.
    try { setCompleted(parseReadProgress(window.localStorage.getItem('zahradnicka-akademie-progress'), modules.map((module) => module.id))); } catch { setStorageWarning(true); }
  }, []);

  const results = useMemo(() => searchWiki(query), [query]);

  const navigate = (next: View) => { setQuery(''); setMenuOpen(false); router.push(viewHref(next)); };
  const toggleCompleted = (id: string) => {
    const next = completed.includes(id) ? completed.filter((item) => item !== id) : [...completed, id];
    setCompleted(next); try { window.localStorage.setItem('zahradnicka-akademie-progress', JSON.stringify(next)); } catch { setStorageWarning(true); }
  };
  const activeModule = modules.find((module) => module.id === view);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onHome={() => navigate('home')} onGlossary={() => navigate('glossary')} onSearch={(value) => { setQuery(value); setResultLimit(20); }} query={query} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {menuOpen && <Sidebar view={view} onNavigate={() => { setQuery(''); setMenuOpen(false); }} completed={completed} mobile/>}
      <div className="mx-auto grid max-w-[1560px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar view={view} onNavigate={() => { setQuery(''); setMenuOpen(false); }} completed={completed}/>
        <div className="min-w-0">
          {storageWarning && <p role="status" className="m-4 rounded-xl border bg-accent p-4 text-sm">Prohlížeč nepovoluje místní ukládání. Označení přečtených kapitol zůstane jen do zavření stránky.</p>}
          {query.trim().length >= 2 ? (
            <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Výsledky hledání</p>
              <h1 className="mt-3 text-3xl font-semibold">„{query}“</h1>
              <p role="status" className="mt-2 text-sm text-muted-foreground">Nalezených míst: {results.length}. Hledání zahrnuje odstavce, tabulky, postupy, rozšířené lekce, slovník a atlas; funguje i bez diakritiky.</p>
              <div className="mt-7 space-y-3">{results.length ? results.slice(0, resultLimit).map((result) => <Link key={result.id} href={result.href} onClick={() => setQuery('')} className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm hover:border-primary/35"><Search size={17} className="mt-1 shrink-0 text-primary"/><div><p className="mb-2 text-xs font-semibold text-primary">{result.category} · {result.context}</p><h2 className="font-semibold">{result.title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{result.snippet}</p></div><ArrowRight size={16} className="ml-auto mt-1 shrink-0"/></Link>) : <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">Zkuste obecnější pojem, například „kořen“, „zálivka“ nebo „řez“.</div>}</div>
              {results.length > resultLimit && <button onClick={() => setResultLimit(resultLimit + 20)} className="mt-6 rounded-full border bg-card px-5 py-3 font-semibold">Dalších {Math.min(20, results.length - resultLimit)} výsledků</button>}
            </section>
          ) : view === 'home' ? <HomeView onView={navigate} completed={completed}/> : view === 'glossary' ? <GlossaryView/> : view === 'atlas' ? <AtlasView/> : view === 'competencies' ? <CompetenciesView/> : view === 'editorial' ? <EditorialView/> : activeModule ? <ModuleView key={activeModule.id} module={activeModule} onView={navigate} completed={completed} toggleCompleted={toggleCompleted}/> : null}
        </div>
      </div>
    </main>
  );
}
