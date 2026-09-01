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
npm run build
```

## Struktura

- `lib/curriculum.ts` — studijní cesta, moduly a kontrolní otázky
- `lib/professional-content.ts` — úplný odborný obsah kapitol a zdroje
- `app/page.tsx` — čtečka wiki, vyhledávání a studijní postup
- `app/layout.tsx` — metadata a společné rozvržení
- `public/` — veřejné obrazové podklady

## Bezpečnost

Zranitelnosti neoznamujte ve veřejných issues. Použijte soukromé hlášení v části **Security → Advisories → Report a vulnerability**. Podrobnosti jsou v souboru [SECURITY.md](SECURITY.md).

Repozitář používá automatický audit závislostí, Dependabot, kontrolu změn závislostí, CodeQL, secret scanning a ochranu před pushnutím tajných údajů.
