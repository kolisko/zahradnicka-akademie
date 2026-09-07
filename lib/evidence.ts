export const REVIEW_DATE = '2026-09-07';
export type EvidenceSource = { id: string; title: string; organisation: string; url: string; language: 'cs' | 'en'; locator: string; checkedAt: string; scope: string };
const source = (id: string, title: string, organisation: string, url: string, language: 'cs' | 'en', locator: string, scope: string): EvidenceSource => ({ id, title, organisation, url, language, locator, scope, checkedAt: REVIEW_DATE });
export const evidenceSources: Record<string, EvidenceSource> = Object.fromEntries([
  source('nsk', 'Sadovník/sadovnice 41-007-H', 'Národní soustava kvalifikací', 'https://www.narodnikvalifikace.cz/kvalifikace-100/hodnotici-standard', 'cs', 'Kritéria a způsoby hodnocení; platnost od 23. 12. 2025', 'Osm oblastí kvalifikace; mapa wiki je redakční pomůcka, nikoli potvrzení kvalifikace.'),
  source('fertilizer', 'Interpretace půdních rozborů a přepočet hnojiv', 'University of Minnesota Extension', 'https://extension.umn.edu/agriculture/specialty-crops/interpreting-soil-tests-for-fruit-and-vegetable-crops', 'en', 'Get to know fertilizer labels; Steps 4 and 5', 'Hmotnostní procenta, N/P₂O₅/K₂O a bilanční princip. Vlastní příklady wiki jsou přepočtené v SI; regionální dávky z Minnesoty nejsou přeneseny do ČR.'),
  source('pruning', 'Technika řezu stromů a keřů', 'University of Minnesota Extension', 'https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/pruning-trees-and-shrubs', 'en', 'Pruning large branches; When to prune', 'Zachování větevního kroužku a odlehčení větve; ne české právní podmínky.'),
  source('purdue', 'Tree Pruning Essentials', 'Purdue University Extension', 'https://extension.purdue.edu/extmedia/fnr/fnr-506-w.pdf', 'en', 'Making the Cut; Branch Removal', 'Ochranná zóna větve, odstraňovací a redukční řezy.'),
  source('groups', 'Skupiny řezu dřevin', 'Royal Horticultural Society', 'https://www.rhs.org.uk/pruning/rhs-pruning-groups', 'en', 'Pruning groups 2, 6; Rose pruning groups', 'Rozdíl kvetení na loňských a letošních výhonech. Britské kalendářní termíny se v ČR přizpůsobují průběhu vegetace.'),
  source('tomato', 'Pěstování rajčat', 'Royal Horticultural Society', 'https://www.rhs.org.uk/vegetables/tomatoes/grow-your-own', 'en', 'Training and pruning; Watering; Problem solving', 'Vedení tyčkových a keříčkových rajčat a pravidelná dostupnost vody.'),
  source('carrot', 'Pěstování mrkve', 'Royal Horticultural Society', 'https://www.rhs.org.uk/vegetables/carrots/grow-your-own', 'en', 'Preparing the ground; Sowing; Plant care', 'Přímý výsev, struktura půdy, jednocení a ochrana proti pochmurnatce.'),
  source('apple', 'Pěstování jabloní', 'Royal Horticultural Society', 'https://www.rhs.org.uk/fruit/apples/grow-your-own', 'en', 'Choosing what to grow; Rootstocks', 'Společná volba odrůdy, podnože a pěstitelského tvaru.'),
  source('pollination', 'Volba odrůd jabloně a opylovacích partnerů', 'Royal Horticultural Society', 'https://www.rhs.org.uk/fruit/apples/choosing-cultivars', 'en', 'Practical considerations; výklad pollination groups a T = Triploid', 'Časový překryv kvetení, kompatibilita a triploidní odrůdy.'),
  source('blackcurrant', 'Pěstování černého rybízu', 'Royal Horticultural Society', 'https://www.rhs.org.uk/fruit/blackcurrants/grow-your-own', 'en', 'Pruning and training', 'Obnova plodonosného dřeva u keřového černého rybízu.'),
  source('redcurrant', 'Řez červeného a bílého rybízu', 'Royal Horticultural Society', 'https://www.rhs.org.uk/fruit/redcurrants/redcurrant-pruning-and-training', 'en', 'Fruiting; Bushes – established plants', 'Krátký plodonosný obrost na starším dřevě; samostatné postupy pro kordony.'),
  source('por', 'Registr přípravků na ochranu rostlin', 'ÚKZÚZ', 'https://ukzuz.gov.cz/public/app/eagriapp/POR/', 'cs', 'Úvod; Registr; Opatření ÚKZÚZ; Ukončení používání', 'Oficiální denně aktualizované údaje o povoleních. Konkrétní přípravek se musí ověřit v okamžiku použití.'),
  source('ior', 'Integrovaná ochrana rostlin', 'ÚKZÚZ', 'https://ukzuz.gov.cz/public/portal/ukzuz/udrzitelne-zemedelstvi/integrovana-ochrana-rostlin', 'cs', 'Obecné zásady integrované ochrany rostlin', 'Prevence, sledování a odůvodnění výběru ochranného opatření.'),
  source('diagnostics', 'Diagnostika rostlin', 'NC State Extension', 'https://content.ces.ncsu.edu/extension-gardener-handbook/7-diagnostics', 'en', 'The Diagnostic Process', 'Oddělení příznaku od příčiny, historie a srovnání zdravého a poškozeného materiálu.'),
  source('fao', 'Crop evapotranspiration — FAO 56, kapitola 5', 'FAO; Allen, Pereira, Raes a Smith', 'https://www.fao.org/4/X0490E/x0490e0a.htm', 'en', 'Crop coefficient approach; rovnice 56 a meze standardních podmínek', 'Metoda ETc = Kc × ETo; dosazené hodnoty ve wiki jsou výukové zadání.'),
  source('fao-water', 'Vodní bilance kořenové zóny — FAO 56, kapitola 8', 'FAO; Allen, Pereira, Raes a Smith', 'https://www.fao.org/4/X0490E/x0490e0e.htm', 'en', 'Soil water balance; rovnice 85; Forecasting or allocating irrigations', 'Přítoky, odtoky, počáteční zásoba a využitelná kapacita půdy v bilančním modelu.'),
  source('epa', 'Kontrola závlahové soustavy', 'US Environmental Protection Agency', 'https://www.epa.gov/watersense/sprinkler-spruce-up', 'en', 'Inspect; Connect; Direct; Select', 'Kontrola netěsností, směru postřiku a provozu soustavy.'),
  source('cck', 'Standardy první pomoci včetně změn 2026', 'Český červený kříž', 'https://www.cervenykriz.eu/standardy-poskytovani-pp', 'cs', 'Změnové listy účinné od 1. 1. 2026', 'Evidence aktuální verze českých standardů, nikoli náhrada nácviku.'),
  source('cck-exam', 'Základní vyšetření — změnový list 2026', 'Český červený kříž', 'https://www.cervenykriz.eu/files/files/nastenka/ZMEN_LIST_SPP/1_2_Zakladni_vysetreni.pdf', 'cs', 'Strana 1, část A', 'Okamžité volání tísňové linky při zjištění poruchy vědomí.'),
  source('cck-cpr', 'Resuscitace dospělých — změnový list 2026', 'Český červený kříž', 'https://www.cervenykriz.eu/files/files/nastenka/ZMEN_LIST_SPP/2_1_KPR_dospely.pdf', 'cs', 'Strany 1–2, Postup první pomoci', 'Volání při nereagování, kontrola normálního dýchání, stlačování hrudníku a AED.'),
].map((item) => [item.id, item]));

export type ParagraphEvidence = { moduleId: string; section: number; paragraph: number; sources: string[]; note: string };
// Explicit, one-based paragraph coordinates. Never infer verification from a chapter bibliography.
export const paragraphEvidence: ParagraphEvidence[] = [
  { moduleId: 'rez', section: 2, paragraph: 1, sources: ['purdue'], note: 'Ohraničování poškození a význam velikosti rány.' },
  { moduleId: 'rez', section: 2, paragraph: 2, sources: ['purdue'], note: 'Poloha řezu vůči ochranné zóně větve; atypický spoj vyžaduje posouzení.' },
  { moduleId: 'rez', section: 2, paragraph: 4, sources: ['pruning', 'purdue'], note: 'Třístupňové odlehčení a konečný řez bez stržení kůry.' },
  { moduleId: 'pece', section: 4, paragraph: 2, sources: ['fertilizer', 'diagnostics'], note: 'Interpretace rozboru v souvislosti s rostlinou a stanovištěm.' },
  { moduleId: 'pece', section: 4, paragraph: 3, sources: ['fertilizer'], note: 'Přepočet procent; kontrolní výpočet 1 kg × 0,10 = 0,10 kg N.' },
  { moduleId: 'bezpecnost', section: 9, paragraph: 2, sources: ['cck-exam', 'cck-cpr'], note: 'Text opraven podle změnových listů účinných od 1. 1. 2026: volat již při nereagování.' },
];

export function evidenceFor(moduleId: string, section: number, paragraph: number) {
  return paragraphEvidence.find((item) => item.moduleId === moduleId && item.section === section && item.paragraph === paragraph);
}

export function readableLanguage(source: { url: string; language?: 'cs' | 'en' }) {
  if (source.language) return source.language === 'cs' ? 'Česky' : 'Anglicky';
  const url = new URL(source.url);
  if (url.hostname.endsWith('.cz') || /\/legal-content\/CS\//i.test(url.pathname)) return 'Česky';
  return 'Jazyk neuveden';
}
