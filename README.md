# Zahradnická akademie

Česká odborná wiki pro teoretickou přípravu profesionálních zahradníků. Dvacet propojených modulů pokrývá biologické základy, půdu, sortiment, stanoviště, množení, realizaci, péči, řez, trávníky, ochranu rostlin, závlahu, stavby, techniku, bezpečnost, návrh, ovocnářství, skleníkové pěstování, sezonní řízení, podnikání a profesní diagnostiku.

Každá odborná kapitola obsahuje souvislý výklad, srovnávací tabulky, pracovní nebo diagnostické postupy, varování, terénní příklady a dohledatelné zdroje. Wiki poskytuje teoretický základ; nenahrazuje odbornou praxi, zákonná oprávnění ani dohled při rizikových činnostech.

## Lokální spuštění

Požadován je Node.js 22.13 nebo novější.

```bash
npm ci
npm run dev
```

Produkční kontrola:

```bash
npm audit --omit=dev --audit-level=high
npm test
npx tsc --noEmit --incremental false
npm run build
npm run audit:sources -- --report
```

## Struktura

- `lib/curriculum.ts` — studijní cesta, moduly a kontrolní otázky
- `lib/professional-content.ts` — původní výklad kapitol a bibliografie
- `lib/evidence.ts` — konkrétní vazby tvrzení na zdroje a rozsah kontroly
- `lib/learning.ts` — rozšířené lekce s řešenými příklady
- `lib/assessments.ts`, `lib/study-progress.ts` — hodnocení úloh, případové studie, oddělené místní výsledky
- `lib/atlas.ts`, `public/atlas/` — skutečné snímky a licenční metadata
- `lib/competencies.ts` — redakční mapa NSK 41-007-H
- `lib/search.ts` — vyhledávání v celém podrobném obsahu, bez rozlišení diakritiky
- `components/wiki.tsx`, `components/learning-ui.tsx` — čtečka a studijní nástroje
- `app/wiki/[moduleId]/page.tsx` — adresovatelné kapitoly; fragmenty míří na konkrétní odstavce
- `app/[reference]/page.tsx` — atlas, slovník, mapa kompetencí a redakční pravidla
- `app/layout.tsx` — metadata a společné rozvržení
- `public/` — veřejné obrazové podklady

## Rozsah ověření

Toto vydání přidává 10 rozšířených lekcí, 65 hodnocených úloh (včetně 5 obrazových), 20 případových studií a 13 licencovaných snímků. U původního výkladu je zatím doloženo 6 konkrétních odstavců; kapitolová bibliografie není recenzí každého tvrzení. Nezávislá odborná recenze celého díla dosud neproběhla. Podrobnosti jsou přímo ve wiki na `/redakcni-pravidla`.

`npm test` kontroluje integritu obsahových vazeb, výpočty, hodnocení odpovědí, odolnost místního uložení, fulltext a atlas. HTTP audit je oddělený od deterministických testů; závisí na dostupnosti cizích serverů a neprokazuje obsahovou správnost. Volba `--report` obnoví `lib/source-audit.json`, jehož poslední výsledky čte redakční stránka. Audit nevydává záznam za průběžné monitorování.

Označení „přečteno“ ani výsledek krátkého testu nepotvrzují profesní způsobilost. Volné odpovědi k případovým studiím se neodesílají ani neukládají.

Logo používá stejný symbol Leaf jako aplikace; licenční informace jsou v [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Každý snímek má vlastní autora a licenci uvedenou v atlasu.

## Bezpečnost

Zranitelnosti neoznamujte ve veřejných issues. Použijte soukromé hlášení v části **Security → Advisories → Report a vulnerability**. Podrobnosti jsou v souboru [SECURITY.md](SECURITY.md).

Repozitář používá automatický audit závislostí, Dependabot, kontrolu změn závislostí, CodeQL, secret scanning a ochranu před pushnutím tajných údajů.
