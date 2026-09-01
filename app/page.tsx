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
import { glossary, modules, type Module } from '@/lib/curriculum';

type View = 'home' | 'glossary' | string;

function minutesLabel(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `${hours} h${rest ? ` ${rest} min` : ''}`;
}

function PlantDiagram({ moduleId }: { moduleId: string }) {
  if (moduleId === 'puda') {
    return (
      <svg viewBox="0 0 720 330" role="img" aria-labelledby="soil-title soil-desc" className="w-full">
        <title id="soil-title">Zjednodušený půdní profil</title>
        <desc id="soil-desc">Vrstvy organického opadu, ornice, podorničí a matečného substrátu s kořeny a vodou.</desc>
        <rect width="720" height="330" rx="24" fill="#f4efe3" />
        <path d="M0 55 Q100 38 190 55T370 52T550 51T720 45V0H0Z" fill="#dfead3" />
        <path d="M0 55 Q150 42 260 56T500 52T720 48V112H0Z" fill="#5e3f26" />
        <rect y="112" width="720" height="94" fill="#8b6847" />
        <rect y="206" width="720" height="82" fill="#b18d63" />
        <rect y="288" width="720" height="42" fill="#d1b990" />
        <g stroke="#ead8b6" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M350 25v65c0 34-22 45-30 77s5 74-30 118" />
          <path d="M352 82c38 38 66 50 73 102" />
          <path d="M336 113c-48 25-79 52-82 111" />
          <path d="M406 151c31 18 54 40 60 83" />
          <path d="M295 171c-35 20-53 44-59 85" />
        </g>
        <g fontFamily="system-ui" fontSize="16" fontWeight="650" fill="#fff">
          <text x="28" y="88">Organický opad</text><text x="28" y="160">Ornice · humus a život</text>
          <text x="28" y="252">Podorničí · zásoba vody</text><text x="28" y="315" fill="#513f2e">Matečný substrát</text>
        </g>
        <g fill="#b6d79a"><circle cx="590" cy="94" r="5"/><circle cx="620" cy="86" r="3"/><circle cx="654" cy="97" r="4"/></g>
      </svg>
    );
  }

  if (moduleId === 'zavlaha' || moduleId === 'stanoviste') {
    return (
      <svg viewBox="0 0 720 330" role="img" aria-labelledby="water-title water-desc" className="w-full">
        <title id="water-title">Cesta vody zahradou</title>
        <desc id="water-desc">Déšť prochází korunou, půdou a kořenovou zónou, část se vsakuje a část vypařuje.</desc>
        <rect width="720" height="330" rx="24" fill="#edf3e8" />
        <circle cx="92" cy="70" r="34" fill="#e9b95f" />
        <g fill="#fff" opacity=".9"><ellipse cx="530" cy="62" rx="78" ry="25"/><ellipse cx="586" cy="62" rx="56" ry="34"/><ellipse cx="478" cy="66" rx="45" ry="29"/></g>
        <g stroke="#79a9c5" strokeWidth="5" strokeLinecap="round" opacity=".8"><path d="M485 102l-12 34M530 102l-12 34M575 102l-12 34M620 102l-12 34" /></g>
        <path d="M0 242Q180 214 360 242T720 232V330H0Z" fill="#7e5b3b" />
        <path d="M315 241v-92M315 174c-45-11-74-36-87-68M315 180c46-17 78-49 95-91" stroke="#3e7145" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <g fill="#5a915b"><ellipse cx="227" cy="102" rx="55" ry="24" transform="rotate(25 227 102)"/><ellipse cx="407" cy="91" rx="62" ry="25" transform="rotate(-25 407 91)"/><ellipse cx="315" cy="138" rx="55" ry="24"/></g>
        <g stroke="#d8c099" strokeWidth="3" fill="none"><path d="M315 243c-22 27-21 55-46 75M315 243c18 25 21 54 47 75M315 263l-2 59"/></g>
        <g fill="#356a7e" fontFamily="system-ui" fontSize="14" fontWeight="650"><text x="470" y="154">srážky</text><text x="430" y="285">vsak</text><text x="145" y="195">transpirace</text></g>
        <g stroke="#356a7e" strokeWidth="2.5" fill="none"><path d="M475 164l-22 47"/><path d="M427 291l-36 25"/><path d="M198 190c18-30 31-46 37-59"/></g>
      </svg>
    );
  }

  if (moduleId === 'rez') {
    return (
      <svg viewBox="0 0 720 330" role="img" aria-labelledby="cut-title cut-desc" className="w-full">
        <title id="cut-title">Správné vedení řezu větve</title>
        <desc id="cut-desc">Řez je veden vně větevního kroužku, bez pahýlu a bez poškození kmene.</desc>
        <rect width="720" height="330" rx="24" fill="#f2efe4" />
        <path d="M215 330V76c0-42 30-55 65-45 27 8 38 28 39 52l4 247" fill="#7c5636" />
        <path d="M299 122c80-6 139-35 199-98 22-23 58-15 67 8 8 20-1 39-19 56-67 63-134 95-222 106" fill="#8e6541" />
        <path d="M306 125c22 11 28 49 15 70" stroke="#caa178" strokeWidth="9" fill="none" />
        <path d="M338 116c20 18 30 45 25 76" stroke="#2d6843" strokeWidth="5" fill="none" strokeDasharray="9 7" />
        <line x1="372" y1="98" x2="337" y2="214" stroke="#d2583f" strokeWidth="5" />
        <g fontFamily="system-ui" fontSize="15" fontWeight="650"><text x="397" y="122" fill="#295f3d">správná linie</text><text x="397" y="150" fill="#b43f2c">řez do kmene</text><text x="118" y="109" fill="#6a5239">větevní kroužek</text></g>
        <path d="M385 120l-32 20M387 147l-30 12M210 104l91 53" stroke="#6a5239" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="plant-title plant-desc" className="w-full">
      <title id="plant-title">Základní toky v rostlině</title>
      <desc id="plant-desc">Kořeny přijímají vodu a minerály, listy světlo a oxid uhličitý; rostlina vytváří cukry.</desc>
      <rect width="720" height="330" rx="24" fill="#edf3e8" />
      <path d="M0 252Q180 226 360 249T720 240V330H0Z" fill="#806042" />
      <path d="M360 251V106" stroke="#417149" strokeWidth="14" strokeLinecap="round"/>
      <path d="M359 140c-65-5-106-33-124-79M360 154c63-13 108-47 126-96" stroke="#417149" strokeWidth="11" fill="none" strokeLinecap="round"/>
      <g fill="#659a61"><ellipse cx="225" cy="58" rx="67" ry="29" transform="rotate(24 225 58)"/><ellipse cx="493" cy="56" rx="72" ry="30" transform="rotate(-23 493 56)"/><ellipse cx="360" cy="119" rx="61" ry="27"/></g>
      <g stroke="#d7bd94" strokeWidth="3" fill="none"><path d="M360 250c-28 27-30 50-58 74M360 250c22 26 26 49 57 75M360 268l-2 58M334 277l-7 43M390 278l8 42"/></g>
      <g stroke="#37789b" strokeWidth="3" fill="none" strokeDasharray="7 6"><path d="M348 276V154"/><path d="M350 155l-8 14M350 155l8 14"/></g>
      <g stroke="#c9852f" strokeWidth="3" fill="none" strokeDasharray="7 6"><path d="M373 145v115"/><path d="M373 259l-8-14M373 259l8-14"/></g>
      <g fontFamily="system-ui" fontSize="15" fontWeight="650"><text x="76" y="75" fill="#3d7844">světlo + CO₂</text><text x="60" y="290" fill="#f7eee1">voda + minerály</text><text x="506" y="170" fill="#8a581d">cukry do míst růstu</text></g>
    </svg>
  );
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
          <input value={query} onChange={(event) => onSearch(event.target.value)} placeholder="Hledat kapitolu, pojem nebo postup…" className="h-10 w-full rounded-xl border bg-card pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10" />
        </label>
        <button onClick={onGlossary} className="hidden rounded-full border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted sm:block">Slovník</button>
      </div>
    </header>
  );
}

function Sidebar({ view, onView, completed, mobile = false }: { view: View; onView: (view: View) => void; completed: string[]; mobile?: boolean }) {
  return (
    <aside className={`${mobile ? 'fixed inset-x-0 top-16 z-30 max-h-[calc(100vh-4rem)] overflow-y-auto border-b shadow-xl lg:hidden' : 'sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto border-r lg:block'} bg-background px-4 py-6`}>
      <button onClick={() => onView('home')} className={`mb-5 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${view === 'home' ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'}`}>
        <BookOpen size={17}/> Přehled studia
      </button>
      <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{modules.length} odborných modulů</p>
      <nav className="space-y-1" aria-label="Studijní moduly">
        {modules.map((module, index) => (
          <button key={module.id} onClick={() => onView(module.id)} className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${view === module.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
            <span className="w-5 font-mono text-[11px] opacity-65">{String(index + 1).padStart(2, '0')}</span>
            <span className="min-w-0 flex-1 truncate">{module.title}</span>
            {completed.includes(module.id) && <CheckCircle2 size={15} className={view === module.id ? 'text-white' : 'text-primary'}/>} 
          </button>
        ))}
      </nav>
      <button onClick={() => onView('glossary')} className={`mt-5 flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold ${view === 'glossary' ? 'bg-accent' : 'bg-card hover:bg-muted'}`}>
        <BookMarked size={17}/> Odborný slovník
      </button>
      <div className="mt-5 rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between text-sm font-semibold"><span>Postup studiem</span><span>{completed.length}/{modules.length}</span></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${completed.length / modules.length * 100}%` }}/></div>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">Označení je uložené pouze v tomto zařízení.</p>
      </div>
    </aside>
  );
}

function HomeView({ onView, completed }: { onView: (view: View) => void; completed: string[] }) {
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const totalChecks = modules.reduce((sum, module) => sum + module.checks.length, 0);
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <section className="grid items-center gap-8 border-b pb-12 xl:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><Sprout size={14}/> Kompletní teoretická příprava</div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.07] tracking-[-0.045em] sm:text-6xl">Od kořenů k řemeslu.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Systematická česká wiki pro budoucí profesionální zahradníky. Vysvětluje biologii, diagnostiku, realizaci, péči, techniku, bezpečnost i vedení zakázky.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => onView('botanika')} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15">Začít první kapitolou <ArrowRight size={16}/></button>
            <span className="inline-flex items-center rounded-full border bg-card px-5 py-3 text-sm font-medium">{totalLessons} lekcí · {totalChecks} kontrolních otázek</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border bg-card shadow-xl shadow-primary/10">
          <img src="/og.png" alt="Zdravá rostlina s odkrytým kořenovým systémem v půdním profilu" className="aspect-video w-full object-cover" />
          <div className="grid grid-cols-3 border-t text-center text-xs">
            <div className="p-3"><strong className="block text-lg text-primary">{modules.length}</strong>modulů</div>
            <div className="border-x p-3"><strong className="block text-lg text-primary">{totalLessons}</strong>lekcí</div>
            <div className="p-3"><strong className="block text-lg text-primary">4</strong>oblasti praxe</div>
          </div>
        </div>
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
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Clock3 size={14}/>{minutesLabel(module.minutes)}</span><span>{module.lessons.length} lekcí</span><ArrowRight size={16} className="ml-auto text-primary transition group-hover:translate-x-1"/></div>
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

function ModuleView({ module, onView, completed, toggleCompleted }: { module: Module; onView: (view: View) => void; completed: string[]; toggleCompleted: (id: string) => void }) {
  const index = modules.findIndex((item) => item.id === module.id);
  const [openChecks, setOpenChecks] = useState<number[]>([]);
  return (
    <article className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <button onClick={() => onView('home')} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={16}/> Všechny moduly</button>
      <header className="border-b pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><span>Modul {String(index + 1).padStart(2, '0')}</span><span className="text-border">•</span><span>{module.level}</span></div>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{module.title}</h1>
        <p className="mt-3 text-xl text-muted-foreground">{module.subtitle}</p>
        <p className="mt-7 max-w-3xl text-base leading-7">{module.overview}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm"><Clock3 size={15}/> {minutesLabel(module.minutes)}</span>
          <span className="rounded-full border bg-card px-4 py-2 text-sm">{module.lessons.length} lekcí</span>
          <button onClick={() => toggleCompleted(module.id)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${completed.includes(module.id) ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
            {completed.includes(module.id) ? <><Check size={15}/> Nastudováno</> : 'Označit jako nastudované'}
          </button>
        </div>
      </header>

      <section className="grid gap-6 border-b py-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Po dokončení dokážete</p>
          <ul className="mt-5 space-y-4">{module.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-6"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check size={13}/></span>{outcome}</li>)}</ul>
        </div>
        <div className="overflow-hidden rounded-2xl border bg-card p-2"><PlantDiagram moduleId={module.id}/><p className="px-3 pb-3 pt-1 text-xs leading-5 text-muted-foreground">Výkladový obraz: sledujte vztah mezi strukturou, tokem látek a pěstitelským rozhodnutím.</p></div>
      </section>

      <div className="py-10">
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
      </div>

      <section className="border-t py-10">
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
  const entries = glossary.filter(([term, definition]) => `${term} ${definition}`.toLocaleLowerCase('cs').includes(filter.toLocaleLowerCase('cs')));
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Referenční část</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Odborný slovník</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Rychlá vysvětlení pojmů používaných napříč všemi moduly.</p>
      <label className="relative mt-7 flex items-center"><Search className="absolute left-4 text-muted-foreground" size={17}/><input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filtrovat pojmy…" className="h-12 w-full rounded-xl border bg-card pl-11 pr-4 text-sm outline-none focus:ring-4 focus:ring-primary/10"/></label>
      <dl className="mt-7 divide-y rounded-2xl border bg-card px-6">{entries.map(([term, definition]) => <div key={term} className="grid gap-2 py-5 sm:grid-cols-[190px_1fr]"><dt className="font-semibold text-primary">{term}</dt><dd className="text-sm leading-6 text-muted-foreground">{definition}</dd></div>)}</dl>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [query, setQuery] = useState('');
  const [completed, setCompleted] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('zahradnicka-akademie-progress');
    if (saved) { try { setCompleted(JSON.parse(saved)); } catch { /* ignore invalid local preference */ } }
  }, []);

  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('cs');
    if (needle.length < 2) return [];
    return modules.flatMap((module) => {
      const moduleMatch = `${module.title} ${module.subtitle} ${module.overview}`.toLocaleLowerCase('cs').includes(needle);
      const lessons = module.lessons.filter((lesson) => `${lesson.title} ${lesson.lead} ${lesson.points.join(' ')}`.toLocaleLowerCase('cs').includes(needle));
      return moduleMatch || lessons.length ? [{ module, lessons }] : [];
    }).slice(0, 8);
  }, [query]);

  const navigate = (next: View) => { setView(next); setQuery(''); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const toggleCompleted = (id: string) => {
    const next = completed.includes(id) ? completed.filter((item) => item !== id) : [...completed, id];
    setCompleted(next); window.localStorage.setItem('zahradnicka-akademie-progress', JSON.stringify(next));
  };
  const activeModule = modules.find((module) => module.id === view);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onHome={() => navigate('home')} onGlossary={() => navigate('glossary')} onSearch={setQuery} query={query} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {menuOpen && <Sidebar view={view} onView={navigate} completed={completed} mobile/>}
      <div className="mx-auto grid max-w-[1560px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar view={view} onView={navigate} completed={completed}/>
        <div className="min-w-0">
          {query.trim().length >= 2 ? (
            <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Výsledky hledání</p>
              <h1 className="mt-3 text-3xl font-semibold">„{query}“</h1>
              <p className="mt-2 text-sm text-muted-foreground">Nalezeno v {results.length} modulech</p>
              <div className="mt-7 space-y-3">{results.length ? results.map(({ module, lessons }) => <button key={module.id} onClick={() => navigate(module.id)} className="flex w-full items-start gap-4 rounded-2xl border bg-card p-5 text-left shadow-sm hover:border-primary/35"><Search size={17} className="mt-1 shrink-0 text-primary"/><div><h2 className="font-semibold">{module.title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{lessons.length ? lessons.map((lesson) => lesson.title).join(' · ') : module.subtitle}</p></div><ArrowRight size={16} className="ml-auto mt-1 shrink-0"/></button>) : <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">Zkuste obecnější pojem, například „kořen“, „zálivka“ nebo „řez“.</div>}</div>
            </section>
          ) : view === 'home' ? <HomeView onView={navigate} completed={completed}/> : view === 'glossary' ? <GlossaryView/> : activeModule ? <ModuleView module={activeModule} onView={navigate} completed={completed} toggleCompleted={toggleCompleted}/> : null}
        </div>
      </div>
    </main>
  );
}
