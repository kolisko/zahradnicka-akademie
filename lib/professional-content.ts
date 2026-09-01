export type ProfessionalTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ProfessionalProcedure = {
  title: string;
  purpose: string;
  steps: string[];
  record: string;
};

export type ProfessionalSection = {
  title: string;
  paragraphs: string[];
  table?: ProfessionalTable;
  procedure?: ProfessionalProcedure;
  warning?: string;
  fieldExample?: { title: string; text: string };
};

export type ProfessionalSource = {
  title: string;
  organisation: string;
  url: string;
  scope: string;
};

export type ProfessionalChapter = {
  moduleId: string;
  edition: string;
  estimatedPages: number;
  prerequisites: string[];
  abstract: string;
  sections: ProfessionalSection[];
  sources: ProfessionalSource[];
};

export const professionalChapters: Record<string, ProfessionalChapter> = {
  botanika: {
    moduleId: 'botanika',
    edition: 'Odborná verze 1.0',
    estimatedPages: 28,
    prerequisites: ['základní chemie', 'jednotky tlaku a koncentrace', 'práce s lupou'],
    abstract: 'Tato kapitola vytváří fyziologický základ pro všechna pěstitelská rozhodnutí. Neučí pouze názvy orgánů, ale vysvětluje, jak stavba pletiv určuje reakci rostliny na výsadbu, zálivku, řez, teplotu, světlo a poškození.',
    sections: [
      {
        title: '1. Rostlina jako otevřený biologický systém',
        paragraphs: [
          'Rostlina nepřijímá hotovou „potravu“ z půdy. Z půdy získává vodu a minerální ionty, ze vzduchu oxid uhličitý a ze záření energii. Organické látky vznikají uvnitř rostliny. Toto rozlišení je pro praxi zásadní: hnojivo nedokáže nahradit nedostatek světla, poškozený kořen ani nefunkční listovou plochu. Přehnojení zastíněné nebo přemokřené rostliny obvykle zvýší osmotický stres a může problém zhoršit.',
          'Rostlina je současně zdrojově–spotřebitelský systém. Zralé osvětlené listy bývají zdrojem asimilátů; rostoucí vrcholy, kořeny, květy, plody a zásobní orgány jsou místy spotřeby nebo ukládání. Směr toku ve floému se proto neřídí jednoduchým pravidlem „shora dolů“. Závisí na tom, která část právě cukry vyrábí a která je spotřebovává. Po přesazení nebo silném řezu se poměr zdrojů a spotřebičů náhle mění.',
          'Životní procesy probíhají v mezích daných genotypem a prostředím. Každý faktor má minimum, optimum a maximum. Výkon neurčuje průměr všech podmínek, ale často nejsilnější omezení: může jím být nedostatek kyslíku v kořenové zóně, vysoká teplota listu, nedostupné železo při vysokém pH nebo malá listová plocha. Profesionální diagnostika proto hledá limitující faktor, ne automaticky „nedostatek živin“.',
        ],
        table: {
          caption: 'Vstupy, procesy a praktické důsledky',
          headers: ['Vstup nebo proces', 'Kde se uplatňuje', 'Co zahradník ovlivňuje', 'Typická chybná interpretace'],
          rows: [
            ['Světlo', 'chloroplasty, převážně listy', 'volba stanoviště, spon, řez koruny', 'více hnojiva nahradí stín'],
            ['CO₂', 'mezofyl listu', 'proudění vzduchu, listová plocha', 'uhlík rostlina získává hlavně z půdy'],
            ['Voda', 'celá rostlina', 'půda, kořenový prostor, závlaha, mulč', 'mokrá půda vždy znamená dostatek vody pro rostlinu'],
            ['Minerální ionty', 'kořen a metabolismus', 'pH, sorpce, hnojení, zdraví kořenů', 'každé žloutnutí je nedostatek dusíku'],
            ['Kyslík', 'dýchající pletiva včetně kořenů', 'struktura půdy, drenáž, zhutnění', 'kořen ve vodě má vše potřebné'],
          ],
        },
        fieldExample: { title: 'Příklad: přihnojená pokojová rostlina ve tmě', text: 'Rostlina vytváří dlouhé slabé výhony, substrát zůstává dlouho mokrý a okraje listů hnědnou. Primární problém je nízká fotosyntéza a pomalá spotřeba vody; přidané soli dále snižují vodní potenciál substrátu. Náprava začíná světlem, vodním režimem a kontrolou kořenů, nikoli další dávkou hnojiva.' },
      },
      {
        title: '2. Buňka, pletiva a místa růstu',
        paragraphs: [
          'Buněčná stěna z celulózy omezuje objem buňky a společně s vodou vytváří turgor. Plazmatická membrána selektivně řídí pohyb látek, vakuola ukládá vodu, ionty, organické kyseliny i obranné látky a chloroplasty převádějí světelnou energii. Mitochondrie uvolňují energii dýcháním ve všech živých částech rostliny, nejen v listech. Nedostatek kyslíku v nasycené půdě proto zasahuje aktivní kořenové buňky, i když je nadzemní část na vzduchu.',
          'Primární růst do délky vzniká v apikálních meristémech kořenů a výhonů. Sekundární tloustnutí dřevin zajišťuje vaskulární kambium, které vytváří sekundární xylém směrem dovnitř a sekundární floém ven. Korkové kambium tvoří ochranná pletiva. Po obvodu kmene tedy nejsou všechny vrstvy stejně živé ani stejně významné. Poškození úzkého pásu kambia po celém obvodu může přerušit spojení kořenů a koruny, i když velká část dřeva zůstane mechanicky přítomná.',
          'Parenchym je metabolicky aktivní a často ukládá zásoby; kolenchym zpevňuje mladé rostoucí části a sklerenchym poskytuje pevnost zralým částem. Krycí pletiva omezují ztrátu vody a vstup patogenů. Průduchy tvořené svěracími buňkami propojují fotosyntézu s vodním režimem. Jejich otevření umožňuje příjem CO₂, současně však zvyšuje výpar. Rostlina proto neustále vyvažuje uhlíkový zisk a ztrátu vody.',
        ],
        table: {
          caption: 'Pletiva důležitá pro zahradnickou praxi',
          headers: ['Pletivo', 'Hlavní funkce', 'Kde jej hledat', 'Praktický význam'],
          rows: [
            ['Apikální meristém', 'primární růst', 'vrchol výhonu, špička kořene', 'poškození terminálu mění architekturu; kořenová špička je citlivá k suchu'],
            ['Kambium', 'sekundární vodivá pletiva', 'tenký prstenec mezi dřevem a lýkem', 'kontakt kambia rozhoduje o srůstu roubu'],
            ['Xylém', 'voda, ionty, mechanická opora', 'dřevo', 'kavitace a poškození vodivých drah omezují zásobení koruny'],
            ['Floém', 'transport asimilátů a signálů', 'vnitřní část kůry', 'obvodové poškození odřízne kořeny od cukrů'],
            ['Periderm a pokožka', 'ochrana a regulace výměny', 'povrch orgánů', 'oděr, úžeh či trvalé zvlhčení otevírají cestu poškození'],
          ],
        },
        warning: 'Pojem „míza“ je příliš obecný. Xylémová tekutina a floémová šťáva mají rozdílné složení, tlak i směr pohybu; při odborném vysvětlení je rozlišujte.',
      },
      {
        title: '3. Kořenový systém, rhizosféra a příjem',
        paragraphs: [
          'Kořen není zmenšený podzemní strom. Jeho architektura reaguje na kyslík, mechanický odpor, vodu, živiny a sousední organismy. U většiny zahradních dřevin se velká část aktivních jemných kořenů nachází v dobře provzdušněných svrchních horizontech a sahá daleko za průmět koruny. Přesná hloubka a šířka se liší podle druhu a půdy; univerzální představa hlubokého „zrcadlového“ kořene je chybná.',
          'Kořenová špička je chráněna čepičkou, za ní leží dělivá a prodlužovací zóna a dále zóna diferenciace s kořenovými vlásky. Vlásky mají krátkou životnost a výrazně zvětšují absorpční povrch. Při vyschnutí balu, anaerobióze, vysoké koncentraci solí nebo nešetrné manipulaci ztrácí rostlina právě nejaktivnější absorpční struktury. Staré silné kořeny slouží hlavně k transportu, zásobě a kotvení.',
          'Rhizosféra je úzká zóna ovlivněná kořenovými výměšky a mikroorganismy. Mykorhizní houby mohou zlepšovat získávání vody a některých živin, zejména fosforu, ale fungují jen v kompatibilním vztahu a vhodném prostředí. Komerční inokulum není automatickou opravou přemokřené, zasolené nebo stavebně zhutněné půdy. Nejprve se odstraňuje fyzikální a chemická příčina.',
          'Kořeny potřebují kyslík pro tvorbu ATP aktivním dýcháním. V pórech naplněných vodou se plyny šíří mnohem pomaleji než ve vzduchu. Dlouhé nasycení proto omezuje aktivní příjem iontů a růst kořenů a podporuje organismy snášející anaerobní prostředí. Nadzemním projevem může být vadnutí, zakrnění, chloróza nebo opad — tedy stejné znaky jako při suchu.',
        ],
        procedure: {
          title: 'Diagnostika vadnutí bez automatického zalití',
          purpose: 'Rozlišit nedostatek vody od selhání kořenů, přemokření a přerušeného transportu.',
          steps: [
            'Určete druh, datum výsadby, velikost balu, průběh počasí a poslední zálivky.',
            'Změřte nebo hmatem ověřte vlhkost na povrchu, uvnitř původního balu a v okolní půdě alespoň ve dvou hloubkách.',
            'Odkryjte kořenový krček. Hledejte příliš hlubokou výsadbu, mulč na kůře, mechanické poškození a zápach po anaerobním rozkladu.',
            'Prohlédněte přechod zdravé a poškozené tkáně, jemné kořeny a případné spirálovité kořeny nádoby.',
            'Porovnejte rozložení příznaků s trasou závlahy, terénem, zhutněním a osluněním. Zapište alternativní hypotézy.',
            'Zvolte nejmenší ověřovací zásah a stanovte datum kontroly; nepřidávejte současně vodu, hnojivo i fungicid.',
          ],
          record: 'Fotografie celku a krčku, vlhkost ve třech bodech, počasí, objem dodané vody, hypotéza a reakce po 24–72 hodinách.',
        },
      },
      {
        title: '4. Fotosyntéza, dýchání a uhlíková bilance',
        paragraphs: [
          'Souhrnná rovnice fotosyntézy 6 CO₂ + 6 H₂O + světelná energie → C₆H₁₂O₆ + 6 O₂ zjednodušuje mnoho dílčích reakcí. Světelné reakce probíhají v tylakoidních membránách a vytvářejí ATP a redukční sílu; Calvinův cyklus ve stromatu váže uhlík. Výsledkem nejsou jen zásobní cukry, ale uhlíkové kostry pro celulózu, lignin, aminokyseliny, lipidy a obranné látky.',
          'Rychlost fotosyntézy roste se světlem jen do nasycení. Pod kompenzačním bodem se fotosyntézou vytvoří méně energie, než rostlina spotřebuje dýcháním. Dlouhodobě zastíněná slunná rostlina proto čerpá zásoby, omezuje kořeny a postupně slábne. Náhlé přesunutí stínového listu na plné slunce však může způsobit fotoinhibici a úžeh, protože anatomie a ochranné mechanismy listu vznikaly za jiných podmínek.',
          'C₃ rostliny vážou CO₂ přímo v Calvinově cyklu a při vysoké teplotě a nízkém CO₂ trpí fotorespirací. C₄ rostliny prostorově koncentrují CO₂ a mívají výhodu v teple a silném světle; patří sem například kukuřice a řada teplomilných trav. CAM rostliny časově oddělují příjem CO₂ a jeho využití: průduchy otevírají převážně v noci, což šetří vodu. Tyto strategie vysvětlují, proč nelze všem rostlinám nastavit stejné světlo, teplotu a závlahu.',
          'Dýchání spotřebovává substráty a kyslík a uvolňuje energii pro údržbu, iontové pumpy, růst a obranu. S teplotou se do určité meze zrychluje. Teplé noci tak mohou zvýšit spotřebu zásob, aniž by přinesly fotosyntetický zisk. Po silném odlistění zůstávají živé kořeny a dřevo spotřebiteli; rostlina reaguje z rezerv. Opakované odlistění nebo nevhodně intenzivní řez rezervy vyčerpává.',
        ],
        table: {
          caption: 'C₃, C₄ a CAM — praktické srovnání',
          headers: ['Strategie', 'Otevírání průduchů', 'Typická výhoda', 'Příklady', 'Pěstitelský důsledek'],
          rows: [
            ['C₃', 've dne', 'mírné podmínky, široké rozšíření', 'většina dřevin a zeleniny', 'za horka roste vodní stres a fotorespirace'],
            ['C₄', 've dne', 'teplo a vysoká intenzita světla', 'kukuřice, proso, řada trav', 'v chladu má pomalejší nástup; v létě vysoká výkonnost'],
            ['CAM', 'převážně v noci', 'mimořádná úspora vody', 'rozchodníky, agáve, mnoho sukulentů', 'přemokření a málo světla bývá větší riziko než krátké sucho'],
          ],
        },
        fieldExample: { title: 'Příklad: letní „zmlazení“ živého plotu', text: 'Odstranění většiny listové plochy během horka současně snižuje tvorbu cukrů a odhaluje dříve zastíněnou kůru a listy. Roste teplota pletiv, vodní stres i spotřeba rezerv na náhradní růst. Správný rozsah a termín se odvozují od druhu, vitality a dostupnosti vody, ne pouze od požadovaného tvaru.' },
      },
      {
        title: '5. Vodní potenciál, transpirace a transport',
        paragraphs: [
          'Voda se pohybuje po gradientu celkového vodního potenciálu Ψw, přibližně vyjádřeného součtem osmotického, tlakového, gravitačního a matricového potenciálu. Čistá voda za referenčních podmínek má potenciál nula; rozpuštěné látky a vazba na povrchy jej snižují. Voda tedy neputuje prostě „tam, kde je jí méně“, ale z místa s vyšším potenciálem do místa s nižším potenciálem.',
          'Transpirace z buněčných stěn mezofylu vytváří napětí v souvislém vodním sloupci xylému. Koheze mezi molekulami vody a adheze ke stěnám cév umožňují přenos tohoto tahu až ke kořenům. Průduchy regulují hlavní odpor na cestě do atmosféry. Při vysokém deficitu tlaku vodní páry, větru nebo teplotě listu roste výparový požadavek; uzavření průduchů šetří vodu, ale současně omezuje příjem CO₂ a chlazení listu.',
          'Při velkém napětí může dojít ke kavitaci a embolii xylému. Druhy se liší odolností i schopností obnovy vodivosti. Zahradnickým důsledkem je význam souvislé dostupnosti vody během rašení, přesazení a horka. Jednorázové zaplavení povrchu nemusí zvlhčit celý bal: suchý organický substrát může být hydrofobní a voda proteče mezerou mezi balem a půdou.',
          'Floémový transport se vysvětluje tlakovým tokem: v místě zdroje se naložením cukrů sníží vodní potenciál, přiteče voda z xylému a vznikne tlak; v místě spotřeby se cukry vyloží. Poškození kůry proto může zastavit zásobení kořenů, i když xylém ještě krátce vede vodu vzhůru. U zaškrceného kmene se problém nadzemní části může projevit se zpožděním.',
        ],
        table: {
          caption: 'Složky vodního potenciálu',
          headers: ['Složka', 'Značka', 'Význam', 'Praktický příklad'],
          rows: [
            ['Osmotická', 'Ψs', 'rozpuštěné látky snižují potenciál', 'zasolený substrát ztěžuje příjem vody'],
            ['Tlaková', 'Ψp', 'turgor nebo napětí v xylému', 'ztráta turgoru se projeví vadnutím'],
            ['Matricová', 'Ψm', 'vazba vody na povrchy', 'suchý jíl drží zbylou vodu pro kořen velmi pevně'],
            ['Gravitační', 'Ψg', 'vliv výšky vodního sloupce', 'významný u vysokých stromů a převýšení systému'],
          ],
        },
        warning: 'Viditelné vadnutí je pozdní a nespecifický symptom. Rozhodnutí o zálivce musí vycházet také z vlhkosti v aktivní kořenové zóně, nikoli pouze z povrchu půdy.',
      },
      {
        title: '6. Hormony, dormance, kvetení a rozmnožování',
        paragraphs: [
          'Rostlinné hormony nejsou jednoduché „zapínače“. Jejich účinek závisí na koncentraci, citlivosti pletiva, poměru k jiným signálům a vývojové fázi. Auxin z růstového vrcholu podporuje prodlužování a podílí se na apikální dominanci; cytokininy vznikající mimo jiné v kořenech podporují dělení a růst pupenů. Po odstranění terminálu se mění jejich poměr a boční pupeny mohou vyrašit.',
          'Gibereliny podporují prodlužování, klíčení a u některých druhů kvetení. Kyselina abscisová se účastní odpovědi na sucho, uzavírání průduchů a dormance semen. Etylen je plyn ovlivňující zrání, opad a stresové reakce. Mechanické poškození, zaplavení nebo skladování plodů v uzavřeném prostoru mohou změnit jeho koncentraci. Praktická reakce proto není shodná napříč druhy a orgány.',
          'Dormance pupenů a semen chrání rostlinu před růstem v nevhodnou dobu. Endodormance je řízena uvnitř orgánu a často vyžaduje splnění chladové potřeby; ekodormance přetrvává kvůli vnějším podmínkám, například nízké teplotě. Teplá epizoda po splnění chladové potřeby může urychlit rašení a zvýšit riziko poškození pozdním mrazem.',
          'Přechod ke kvetení může řídit délka dne, teplota, stáří a zásobní stav. Krátkodenní a dlouhodenní označení popisuje reakci na kritickou délku noci, nikoli prostou oblibu krátkého či dlouhého dne. Po opylení pyl klíčí na blizně, pylová láčka roste k vajíčku a u krytosemenných dochází k dvojímu oplození. Neúspěšná násada může vzniknout neslučitelným pylem, nesoučasným kvetením, mrazem, deštěm, nedostatkem opylovačů i výživovým stresem.',
        ],
        table: {
          caption: 'Hlavní regulátory a typické zahradnické souvislosti',
          headers: ['Regulátor', 'Vybrané účinky', 'Příklad z praxe', 'Časté zjednodušení'],
          rows: [
            ['Auxiny', 'polarita, prodlužování, adventivní kořeny', 'kořenící přípravky, reakce na řez vrcholu', 'auxin vždy podporuje každý kořen'],
            ['Cytokininy', 'dělení buněk, růst pupenů', 'rovnováha kořen–výhon po přesazení', 'více cytokininu vždy znamená více zdravého růstu'],
            ['Gibereliny', 'prodlužování, klíčení, kvetení', 'přerušení některých typů dormance', 'účinek je stejný pro všechny druhy'],
            ['ABA', 'stres ze sucha, dormance', 'uzavření průduchů, klid semen', 'jde pouze o inhibitor růstu'],
            ['Etylen', 'zrání, opad, stres', 'společné skladování plodů', 'působí jen na dozrávající ovoce'],
          ],
        },
        procedure: {
          title: 'Rozbor slabého kvetení nebo násady plodů',
          purpose: 'Oddělit problém založení květu, poškození květu, opylení, oplození a raného opadu.',
          steps: [
            'Ověřte druh, kultivar, podnož, věk, způsob kvetení a potřebu opylovače.',
            'Zjistěte, zda květní pupeny vznikly a zda byly odstraněny řezem nebo poškozeny zimou.',
            'Zapište průběh teplot, deště a větru v době květu a časovou shodu s opylovačem.',
            'Rozřízněte reprezentativní květy a mladé plody a hledejte zhnědlá nebo prázdná pletiva.',
            'Posuďte růstovou sílu, dusíkatou výživu, vláhu a předchozí úrodu.',
            'Navrhněte zásah až podle určené fáze selhání; přidání opylovače nevyřeší květy zničené mrazem.',
          ],
          record: 'Kultivar a podnož, termín květu, opylovač, minimální teploty, fotografie řezu květem/plodem a procento násady na označených větvích.',
        },
      },
    ],
    sources: [
      { title: 'Biology 2e — Plant Form and Physiology', organisation: 'OpenStax', url: 'https://openstax.org/books/biology-2e/pages/30-introduction', scope: 'stavba orgánů, pletiva, transport a reakce rostlin' },
      { title: 'Transport of Water and Solutes in Plants', organisation: 'OpenStax', url: 'https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants', scope: 'vodní potenciál, xylém, floém a transpirace' },
      { title: 'Overview of Photosynthesis', organisation: 'OpenStax', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis', scope: 'světelné reakce, Calvinův cyklus a stavba listu' },
      { title: 'Level 2 Certificate in the Principles of Plant Growth and Development', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/education-learning/pdf/qualifications/level-2/level-2-cert-in-the-principles-of-plant-growth.pdf', scope: 'profesní rozsah a požadované výsledky učení' },
    ],
  },

  puda: {
    moduleId: 'puda',
    edition: 'Odborná verze 1.0',
    estimatedPages: 31,
    prerequisites: ['základy botaniky', 'procenta a objemové jednotky', 'bezpečný odběr vzorku'],
    abstract: 'Kapitola chápe půdu jako propojený fyzikální, chemický a biologický systém. Cílem je umět půdu popsat, měřit, interpretovat a měnit pouze tak, aby zásah řešil příčinu a nepoškodil dlouhodobé funkce.',
    sections: [
      {
        title: '1. Minerální část, textura a struktura',
        paragraphs: [
          'Minerální jemnozem tvoří částice písku, prachu a jílu. Textura je jejich relativně stálý poměr; struktura je proměnlivé uspořádání částic do agregátů a pórů. Přidání několika pytlů písku do těžké půdy obvykle nezmění texturovou třídu, ale může vytvořit hutnou směs s menším podílem stabilních pórů. Reálně lze zlepšovat především strukturu, organickou hmotu, biologickou aktivitu, odvodnění a způsob zatěžování.',
          'Písek vytváří velké póry a rychlý odtok, má malý specifický povrch a obvykle nižší schopnost poutat živiny. Jíl má obrovský povrch, elektrický náboj a vysokou schopnost zadržovat vodu a ionty; část vody je však poutána tak silně, že není pro kořeny dostupná. Prach je mezi nimi velikostí, ale půdy s vysokým podílem prachu jsou citlivé k rozplavení, krustě a erozi.',
          'Dobrá drobtovitá struktura kombinuje makropóry pro rychlý vsak, odvod a výměnu plynů s mikropóry držícími vodu. Deskovitá, masivní nebo zhutněná struktura omezuje svislé proudění i průnik kořenů. Strukturu hodnotíme na neporušeném agregátu a profilu, nikoli na rozmělněném laboratorním vzorku. Stav se mění s vlhkostí: mokrý jíl je plastický a citlivý k deformaci, suchý může být velmi tvrdý.',
        ],
        table: {
          caption: 'Textura a typická reakce v zahradě',
          headers: ['Převládající frakce', 'Vodní režim', 'Živiny', 'Hlavní riziko', 'Preferovaný směr nápravy'],
          rows: [
            ['Písek', 'rychlý vsak a vysychání', 'nižší sorpce, snadnější vyplavení', 'sucho a kolísání', 'organická hmota, pokryv, dělené dávky vody a živin'],
            ['Prach', 'střední retence, povrch může těsnit', 'střední', 'krusta a eroze', 'pokryv, stabilní agregáty, šetrné zpracování'],
            ['Jíl', 'pomalý vsak, vysoká zásoba', 'vysoká sorpce', 'zhutnění a nedostatek vzduchu', 'práce za vhodné vlhkosti, organická hmota, omezení pojezdu'],
            ['Organická půda/substrát', 'vysoká retence, po vyschnutí hydrofobie', 'proměnlivá', 'sesedání, zasolení, rozklad', 'stabilní složky, kontrola EC a zavlažování'],
          ],
        },
        procedure: {
          title: 'Orientační stanovení textury hmatem',
          purpose: 'Předběžně rozlišit písčitou, hlinitou a jílovitou půdu před laboratorním rozborem.',
          steps: [
            'Odeberte jemnozem bez kamenů a organických zbytků z reprezentativní hloubky.',
            'Pomalu přidávejte vodu, dokud lze vzorek tvarovat, ale nelepí se jako bláto.',
            'Třete mezi prsty: písek zřetelně skřípe, prach působí moučnatě a jíl hladce a lepivě.',
            'Zkuste vytvořit kuličku a tenkou stužku mezi palcem a ukazovákem; délka a pevnost stužky rostou s obsahem jílu.',
            'Výsledek zapisujte jako orientační a ověřte jej laboratorně, pokud rozhoduje o nákladném zásahu.',
          ],
          record: 'Místo, hloubka, vlhkost, barva, zápach, délka stužky, podíl kamenů a fotografie profilu.',
        },
      },
      {
        title: '2. Póry, voda, vzduch a zhutnění',
        paragraphs: [
          'Celková pórovitost vyjadřuje část objemu půdy tvořenou póry. Stejná pórovitost však může mít rozdílnou funkci podle velikosti a propojení pórů. Makropóry vznikají mezi agregáty, kořeny a činností živočichů; po dešti se vyprázdní a vedou vzduch. Mikropóry drží vodu kapilárními silami. Ideální stav proto není maximální zadržení vody, ale rovnováha vody a vzduchu.',
          'Polní kapacita je orientační stav po odtoku gravitační vody; bod trvalého vadnutí stav, kdy modelová rostlina již nedokáže obnovit turgor. Rozdíl představuje využitelnou vodní kapacitu, ale skutečná dostupnost závisí na druhu, kořenové hloubce, osmotickém potenciálu a rychlosti odběru. V jemné půdě může zůstávat mnoho vody, která je poutána příliš silně.',
          'Objemová hmotnost je hmotnost suché půdy na celkový objem včetně pórů. Vyšší hodnota obvykle znamená méně pórů, ale kritická hranice se liší texturou: přirozeně písčitá půda má vyšší objemovou hmotnost než organická nebo jílovitá, aniž by byla stejně zhutněná. Proto se měření interpretuje spolu s texturou, kořeny, strukturou, penetračním odporem a vsakem.',
          'Zhutnění nevzniká jen těžkou technikou. Opakovaná chůze, práce na mokré půdě, vibrace a sklad materiálu vytvářejí souvislé vrstvy s malou vodivostí. Jednorázové hluboké kypření bez změny provozu mívá krátký účinek; půda se znovu uzavře. Trvalá náprava vyžaduje řízení pohybu, organickou hmotu, kořeny a čas.',
        ],
        table: {
          caption: 'Terénní indikátory fyzikálního problému',
          headers: ['Pozorování', 'Možná příčina', 'Ověřovací krok', 'Nevhodná zkratka'],
          rows: [
            ['Kaluže po běžném dešti', 'krusta, zhutněná vrstva, vysoká hladina vody', 'sonda, profil, infiltrační test, výšky', 'automaticky přidat drenážní trubku'],
            ['Kořeny rostou vodorovně po vrstvě', 'mechanický nebo kyslíkový odpor', 'profil přes rozhraní vrstev', 'hnojit pro silnější kořeny'],
            ['Šedé skvrny a rezavé konkrece', 'periodické zamokření a redoxní procesy', 'profil v různých sezonách', 'hodnotit pouze momentální suchý stav'],
            ['Tvrdá půda po vyschnutí', 'jíl, masivní struktura nebo zhutnění', 'textura + agregáty + objemová hmotnost', 'zaměnit každou tvrdost za zhutnění'],
          ],
        },
        warning: 'Vsakovací zkouška měří konkrétní místo, počáteční vlhkost a způsob provedení. Jedno číslo nelze bez opakování použít pro celý pozemek ani pro dimenzování rizikové stavby.',
      },
      {
        title: '3. Půdní reakce, sorpce, salinita a živiny',
        paragraphs: [
          'pH je záporný dekadický logaritmus aktivity vodíkových iontů, takže rozdíl jedné jednotky představuje přibližně desetinásobnou změnu. Ovlivňuje rozpustnost minerálů, povrchový náboj, mikroorganismy a formy živin. Optimální rozsah není univerzální. Vřesovištní rostliny vyžadují kyselé podmínky, mnohé běžné zahradní druhy mírně kyselé až neutrální a některé vápenomilné druhy snášejí zásaditější půdu.',
          'Kationtová výměnná kapacita vyjadřuje množství kladně nabitých iontů, které půda může vratně poutat. Zvyšuje ji jíl a stabilní organická hmota; závisí i na typu jílových minerálů a pH. Vysoká sorpce tlumí výkyvy, ale neznamená automatickou dostupnost. Iont může být v půdě přítomen, ale v nevhodné formě, mimo aktivní kořeny nebo v konkurenci s jinými ionty.',
          'Elektrická vodivost roztoku slouží jako ukazatel celkové koncentrace rozpustných solí. Interpretace závisí na metodě extrakce, teplotě, plodině a substrátu; čísla z různých metod nelze přímo porovnávat. Vysoká koncentrace snižuje osmotický potenciál a nutí kořen vydat více energie k příjmu vody. Poškození se proto podobá suchu: vadnutí, okrajové nekrózy a omezení růstu.',
          'Dusík je součástí aminokyselin, nukleových kyselin a chlorofylu; fosfor se účastní přenosu energie a membrán; draslík reguluje osmotické procesy a enzymy. Vápník stabilizuje buněčné stěny a membrány, hořčík je centrální atom chlorofylu a síra součást některých aminokyselin. Označení „hlavní“ a „stopový“ vyjadřuje množství, nikoli důležitost.',
        ],
        table: {
          caption: 'Orientace v pH — nikoli univerzální recept',
          headers: ['Rozsah pH', 'Obecná interpretace', 'Časté riziko', 'Co ověřit před korekcí'],
          rows: [
            ['< 5,0', 'silně kyselé', 'toxicita Al/Mn, nízká dostupnost některých živin', 'druh rostliny, pufrační kapacita, laboratorní potřeba vápnění'],
            ['5,0–6,0', 'kyselé až mírně kyselé', 'pro část druhů optimální, pro jiné omezení', 'požadavky konkrétní výsadby'],
            ['6,0–7,0', 'mírně kyselé až neutrální', 'široká dostupnost živin pro mnoho plodin', 'organická hmota, P, salinita'],
            ['7,0–8,0', 'neutrální až mírně zásadité', 'chlorózy Fe/Mn u citlivých druhů', 'uhličitany, alkalita závlahové vody'],
            ['> 8,0', 'zásadité', 'sodicita nebo omezení mikroprvků', 'Na, EC, uhličitany; odborný plán nápravy'],
          ],
        },
        fieldExample: { title: 'Příklad: chloróza mladých listů', text: 'Mezižilková chloróza nejmladších listů může odpovídat nedostupnosti železa, ale diagnózu nelze postavit jen na barvě. Ověřuje se druh, pH a alkalita, stav kořenů, zamokření, nedávné vápnění i obraz na více rostlinách. Přidání železa bez odstranění vysokého pH nebo poškození kořenů může mít jen krátký účinek.' },
      },
      {
        title: '4. Organická hmota, půdní organismy a koloběh živin',
        paragraphs: [
          'Půdní organická hmota zahrnuje živé organismy, čerstvé zbytky, rozkládající se frakce i stabilnější humusové látky. Jediné procento „humusu“ proto nepopisuje rychlost mineralizace, stabilitu agregátů ani biologickou aktivitu. Význam závisí na poměru uhlíku a dusíku, ligninu, velikosti částic, teplotě, vlhkosti a přístupu kyslíku.',
          'Bakterie a houby rozkládají látky pomocí enzymů, prvoci a drobní živočichové regulují jejich populace a uvolňují živiny, žížaly promíchávají materiál a vytvářejí makropóry. Potravní síť není sama o sobě zárukou zdraví: některé organismy jsou patogenní a aktivitu může zvýšit i rozklad nadbytku snadno dostupného uhlíku, který dočasně spotřebuje minerální dusík.',
          'Poměr C:N pomáhá odhadnout, zda mikroorganismy dusík uvolní, nebo dočasně zabudují do biomasy. Dřevní štěpka na povrchu zpravidla nespotřebuje významné množství dusíku z hlubší kořenové zóny, ale její zapravení do půdy vytváří mnohem větší kontakt a může imobilizaci zvýšit. Způsob použití je proto stejně důležitý jako materiál.',
          'Kompost není jednotný výrobek. Hodnotí se původ surovin, vyzrálost, stabilita, obsah solí, pH, živiny, nečistoty a případná fytotoxicita. Nevyzrálý materiál může spotřebovávat kyslík, zahřívat se nebo obsahovat organické kyseliny a amoniak. Profesionální použití vyžaduje specifikaci produktu a dávku odvozenou od cíle, ne pouze označení „organický“.',
        ],
        table: {
          caption: 'Organické materiály a jejich rozdílné funkce',
          headers: ['Materiál', 'Hlavní funkce', 'Riziko', 'Vhodné použití'],
          rows: [
            ['Vyzrálý kompost', 'organická hmota a živiny', 'salinita, variabilita, nadbytek P', 'dávka podle rozboru a cíle'],
            ['Dřevní štěpka', 'povrchový mulč, ochrana a uhlík', 'kontakt s kmenem, zapravení', 'souvislá povrchová vrstva mimo krček'],
            ['Čerstvý hnůj', 'rychlejší živiny a organika', 'amoniak, patogeny, semena, popálení', 'kompostování a termín podle plodiny a pravidel'],
            ['Listovka', 'struktura a vodní režim', 'nízký obsah živin, pomalá výroba', 'substráty a povrchová organická vrstva'],
          ],
        },
      },
      {
        title: '5. Odběr vzorku a interpretace rozboru',
        paragraphs: [
          'Laboratorní výsledek je jen tak reprezentativní jako odběr. Heterogenní pozemek se rozděluje podle využití, historie, půdy a viditelných problémů. Zdravá a poškozená zóna se často vzorkují odděleně, aby se rozdíl nerozředil. Jednotlivý vzorek se skládá z více dílčích vpichů rovnoměrně rozmístěných po homogenní ploše.',
          'Hloubka se volí podle cíle: jiná je pro trávník, zeleninový záhon, povrchovou kontaminaci a kořenovou zónu dřeviny. Odstraňuje se povrchový opad, nikoli diagnosticky významná minerální vrstva. Nepřidávají se místa u hromady kompostu, cesty nebo hnojivového granulátu, pokud nereprezentují plochu. Nářadí a nádoba nesmějí vzorek kontaminovat.',
          'Výsledek musí uvádět použitou analytickou metodu a jednotky. „Vysoký fosfor“ z jedné extrakční metody nelze mechanicky vložit do doporučení založeného na jiné metodě. Doporučení laboratoře se propojuje s druhem, objemem půdy, pH, organickou hmotou, závlahou a plánovaným výnosem či estetickým cílem.',
          'Listová analýza měří stav rostliny, půdní analýza zásobu nebo dostupnost v půdě. Navzájem se doplňují. Listová koncentrace se mění stářím listu, sezonou, násadou plodů a ředěním rychlým růstem. Odběr musí respektovat předepsanou část a termín pro danou plodinu.',
        ],
        procedure: {
          title: 'Složený půdní vzorek pro běžný záhon',
          purpose: 'Získat reprezentativní materiál pro chemický rozbor homogenní plochy.',
          steps: [
            'Rozdělte pozemek na homogenní celky podle půdy, využití, terénu, historie a příznaků.',
            'Zvolte a zapište jednotnou hloubku odpovídající cíli rozboru.',
            'Odeberte čistým nástrojem více dílčích vzorků v pravidelném obrazci; vynechte nereprezentativní anomálie.',
            'Dílčí vzorky promíchejte v čisté nádobě, odstraňte kameny a odeberte množství požadované laboratoří.',
            'Vzorek označte kódem, datem, hloubkou, plochou, kulturou a posledním hnojením.',
            'Doručte a skladujte podle pokynů laboratoře; pro biologické a minerální dusíkové analýzy mohou platit přísnější podmínky.',
          ],
          record: 'Mapa odběrů, počet vpichů, hloubka, počasí a vlhkost, historie vstupů, cílové rostliny a požadované analýzy.',
        },
        warning: 'Nevápněte ani nehnojte pouze podle barevné stupnice domácí sady, pokud zásah ovlivní velkou plochu, citlivé rostliny nebo dlouhodobé pH. Vyžádejte laboratorní metodu a dávkové doporučení.',
      },
      {
        title: '6. Náprava půdy jako řízený zásah',
        paragraphs: [
          'Náprava začíná definicí funkce: zvýšit vsak, dodat využitelný objem pro kořeny, upravit pH, snížit salinitu nebo obnovit organickou hmotu. Jeden zásah nemůže automaticky plnit všechny cíle. Například přidání kompostu může zlepšit agregaci a biologii, ale nevyřeší vysokou hladinu podzemní vody ani nepropustnou stavební vrstvu.',
          'Při zhutnění se nejprve zastaví příčina: pojezd, skladování, chůze nebo práce za mokra. Mechanické kypření se provádí při vlhkosti, kdy se půda rozpadá a nemaže; musí protnout omezující vrstvu a nesmí poškodit významné kořeny či sítě. Následuje stabilizace kořeny, organickým pokryvem a řízeným provozem.',
          'Úprava pH je chemická změna s časovým průběhem. Potřeba vápnění nezávisí jen na pH, ale na pufrační schopnosti; stejné zvýšení vyžaduje v jílovité či organické půdě jinou dávku než v písku. Okyselování elementární sírou závisí na mikrobiální oxidaci, teplotě, vlhkosti a alkalitě vody. Prudké a lokální dávky mohou poškodit kořeny.',
          'Zasolení se řeší odstraněním zdroje a, pokud je k dispozici kvalitní voda a funkční odtok, řízeným proplachem. Proplach bez drenáže přesune soli jen hlouběji nebo vytvoří zamokření. U sodických půd může být nutný zdroj vápníku a odborný plán, protože samotná voda nerozptýlenou strukturu neopraví.',
        ],
        table: {
          caption: 'Od symptomu k nápravě',
          headers: ['Cíl', 'Nejdříve měřit', 'Možné zásahy', 'Kontrola výsledku'],
          rows: [
            ['Zlepšit vsak', 'profil, textura, struktura, infiltrace, výšky', 'pokryv, řízení provozu, kypření, odvodnění podle příčiny', 'opakovaný test a stav po dešti'],
            ['Upravit pH', 'pH, pufrační potřeba, karbonáty, voda', 'vápnění nebo řízené okyselení', 'laboratorní kontrola s odstupem'],
            ['Snížit salinitu', 'EC metodou laboratoře, zdroj vody a solí', 'zastavit zdroj, proplach při funkční drenáži', 'EC a reakce nového růstu'],
            ['Zvýšit organickou hmotu', 'výchozí stav, P, EC, stabilita materiálu', 'kompost, kořeny, mulč, omezení narušování', 'trend v letech, struktura a infiltrace'],
          ],
        },
        fieldExample: { title: 'Příklad: nový záhon na stavební navážce', text: 'Vrchních 20 cm dovezené zeminy může zakrývat zhutněné podloží. Rostliny první rok využijí nový horizont, později voda stojí na rozhraní a kořeny se stáčejí do stran. Plošné přihnojení nezmění hydraulickou bariéru. Diagnostika vyžaduje profil přes rozhraní a náprava musí řešit podloží, výšky a odtok před výsadbou.' },
      },
    ],
    sources: [
      { title: 'Soil Health Assessment', organisation: 'USDA Natural Resources Conservation Service', url: 'https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-assessment', scope: 'fyzikální, chemické a biologické indikátory půdy' },
      { title: 'Soil Health Educators Guide', organisation: 'USDA Natural Resources Conservation Service', url: 'https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-educators-guide', scope: 'terénní měření textury, infiltrace, objemové hmotnosti a organické hmoty' },
      { title: 'National Agronomy Manual — Soils', organisation: 'USDA Natural Resources Conservation Service', url: 'https://www.nrcs.usda.gov/sites/default/files/2022-10/National-Agronomy-Manual.pdf', scope: 'struktura, pórovitost, objemová hmotnost a zpracovatelnost' },
      { title: 'Technical factsheets on horticulture crop management', organisation: 'Food and Agriculture Organization of the United Nations', url: 'https://www.fao.org/plant-production-protection/resources/publications/technical-factsheets-series-on-horticulture-crops-management/en', scope: 'voda, výživa, půda a chráněné pěstování' },
      { title: 'Level 2 Certificate in the Principles of Plant Growth and Development', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/education-learning/pdf/qualifications/level-2/level-2-cert-in-the-principles-of-plant-growth.pdf', scope: 'profesní rozsah půdoznalství a výživy' },
    ],
  },

  rostliny: {
    moduleId: 'rostliny',
    edition: 'Odborná verze 1.0',
    estimatedPages: 26,
    prerequisites: ['botanická morfologie', 'práce s lupou', 'základy stanovištní ekologie'],
    abstract: 'Profesionální určování není hádání podle fotografie květu. Kapitola učí popsat rostlinu standardizovanými znaky, pracovat s vědeckým názvem, ověřit identitu ve více zdrojích a převést botanické určení do bezpečné volby pro konkrétní stanoviště.',
    sections: [
      {
        title: '1. Identita rostliny a taxonomický záznam',
        paragraphs: [
          'Vědecké jméno je pracovní identifikátor, nikoli ozdoba seznamu. Binomické jméno tvoří rodové jméno s velkým počátečním písmenem a druhové epiteton s malým; obě části se píší kurzívou. Autor jména, poddruh, varieta, hybridní znak a kultivar doplňují různé druhy informace. Kultivar se píše bez kurzívy v jednoduchých uvozovkách, například Acer campestre ‘Elsrijk’. Obchodní značka nemusí být kultivar a nesmí jej v technickém seznamu nahrazovat.',
          'Taxonomie se mění, protože nové důkazy upravují hranice rodů a druhů. Starší jméno může být synonymem, ne nutně chybou. Profesionální záznam proto uchovává název použitý v projektu, přijaté jméno podle zvolené autoritativní databáze, případné synonymum a datum ověření. Bez data nelze později rozlišit chybu od legitimní změny taxonomie.',
          'Identita kultivaru se neověřuje pouze podle druhu. Rozhodují znaky deklarované při jeho popisu a pravost množitelského materiálu. Rostlina vypěstovaná ze semene kultivaru obvykle není tentýž kultivar, protože sexuální rozmnožování geny rekombinuje. U podnožovaných dřevin se navíc eviduje podnož, protože ovlivňuje vzrůst, kořeny i provozní nároky.',
        ],
        table: {
          caption: 'Jak číst úplné jméno rostliny',
          headers: ['Prvek', 'Význam', 'Zápis', 'Příklad'],
          rows: [
            ['Rod', 'skupina příbuzných druhů', 'velké písmeno, kurzíva', 'Acer'],
            ['Druh', 'taxonomická jednotka pod rodem', 'malé písmeno, kurzíva', 'campestre'],
            ['Hybrid', 'kříženec taxonů', 'znak ×', 'Platanus × hispanica'],
            ['Kultivar', 'udržovaná pěstovaná forma', 'jednoduché uvozovky, bez kurzívy', '‘Elsrijk’'],
            ['Obchodní označení', 'marketingové jméno', 'podle registračních pravidel', 'nemusí být totožné s kultivarem'],
          ],
        },
        warning: 'Aplikace rozpoznávající rostliny může vytvořit kandidátní seznam, ale sama není dostatečným dokladem identity pro projekt, nákup, toxikologické rozhodnutí ani regulovaný druh.',
      },
      {
        title: '2. Systematický morfologický popis',
        paragraphs: [
          'Určování začíná popisem neznámého vzorku bez předčasného přiřazení jména. Zaznamenává se životní forma, habitus, typ výhonu, postavení listů, přítomnost palistů, typ a členění listu, žilnatina, okraj, ochlupení, pupeny, jizvy, kůra, květenství, stavba květu, plod a semeno. Každý znak musí být pozorován na více typických částech, protože juvenilní, stínové, poškozené a bujné výhony mohou vypadat odlišně.',
          'Postavení listů je zvlášť hodnotné: střídavé, vstřícné, přeslenité nebo přízemní. U složeného listu je nutné rozlišit lístek od celého listu; pupen se nachází v úžlabí celého listu, nikoli jednotlivého lístku. Tato kontrola brání častému omylu, kdy je lichozpeřený list považován za větévku s jednoduchými listy.',
          'Květ se popisuje podle souměrnosti, počtu a srůstu obalů, tyčinek, postavení semeníku a typu květenství. Plod není obecné označení pro „bobuli“: rozlišují se mimo jiné nažky, oříšky, lusky, tobolky, peckovice, malvice a pravé bobule. Pro určování dřevin mimo sezonu jsou klíčové pupeny, uspořádání větvení, listové jizvy, lenticely, dřeň, trny a textura kůry.',
        ],
        table: {
          caption: 'Minimální fotografická dokumentace neznámé rostliny',
          headers: ['Záběr', 'Co musí být vidět', 'Měřítko', 'Proč je důležitý'],
          rows: [
            ['Celek', 'habitus a okolní stanoviště', 'osoba nebo známý objekt', 'ukazuje velikost, růst a kontext'],
            ['Výhon', 'uzly, postavení listů a pupeny', 'pravítko', 'rozlišuje větvení a listové uspořádání'],
            ['List', 'líc, rub, řapík a báze', 'milimetrové měřítko', 'nese většinu vegetativních znaků'],
            ['Květ/plod', 'celek i řez', 'pravítko', 'ověřuje generativní znaky'],
            ['Kůra/pupen', 'ostrý detail bez digitálního zoomu', 'malé měřítko', 'umožňuje zimní určení dřeviny'],
          ],
        },
        procedure: {
          title: 'Určení neznámé rostliny s auditní stopou',
          purpose: 'Dospět k ověřenému jménu, které lze bezpečně použít v dokumentaci.',
          steps: [
            'Zapište lokalitu, datum, stanoviště, životní formu a přibližnou velikost.',
            'Pořiďte standardní sadu fotografií a popište znaky bez použití názvu kandidáta.',
            'Určete čeleď nebo širší skupinu pomocí určovacího klíče, nikoli obrázkové podobnosti.',
            'Dojděte ke kandidátnímu druhu a porovnejte každý diagnostický znak v popisu, včetně znaků, které kandidát vylučují.',
            'Ověřte přijaté jméno, synonyma a rozšíření v autoritativní taxonomické databázi.',
            'U rizikového rozhodnutí požádejte specialistu nebo herbář; uveďte míru jistoty a chybějící znak.',
          ],
          record: 'Původní fotografie, popis znaků, použitý klíč a vydání, kandidáti, vylučovací znaky, přijaté jméno, databáze a datum ověření.',
        },
      },
      {
        title: '3. Určení musí předcházet pěstitelskému doporučení',
        paragraphs: [
          'Po určení se teprve zjišťují biologické a provozní vlastnosti. Rodové doporučení je často příliš široké: druhy téhož rodu mohou pocházet z mokřadů i suchých skal, být keřem nebo stromem a reagovat rozdílně na mráz, pH či řez. Kultivar může měnit velikost, habitus a barvu, ale nemusí změnit základní potřebu druhu. Každá vlastnost se proto váže k přesnému taxonu a zdroji.',
          'Otužilost popisuje přežití určitého chladu, ne celkovou vhodnost klimatu. Rostlinu může poškodit předčasné rašení, pozdní mráz, vysušující vítr, střídání teplot, letní horko nebo nedostatečná délka vegetace. Zóny minimálních teplot jsou pouze první filtr. Profesionální výběr kombinuje extrémy, mikroklima, půdní vodu, tepelnou sumu a provenienci materiálu.',
          'Konečná velikost není pevné číslo. Závisí na věku, klimatu, půdě, konkurenci, podnoži a vedení, ale katalogový interval umožňuje rozpoznat zjevnou kolizi. Posuzuje se šířka koruny, výška, rychlost růstu, kořenový prostor, opad, plody, trny, lámavost, toxicita a reakce na řez. „Lze udržovat řezem“ není omluva pro systematicky špatně zvolený taxon.',
        ],
        table: {
          caption: 'Minimální karta druhu pro projekt',
          headers: ['Oblast', 'Povinné údaje', 'Důkaz'],
          rows: [
            ['Identita', 'přijaté jméno, kultivar, synonymum', 'taxonomická databáze a dodavatel'],
            ['Prostor', 'výška, šířka, habitus, tempo', 'více dlouhodobých zdrojů'],
            ['Stanoviště', 'světlo, voda, pH, textura, vítr, teplota', 'odborné popisy a místní zkušenost'],
            ['Rizika', 'toxicita, alergie, invazivita, trny, plody', 'regulační a odborné databáze'],
            ['Péče', 'řez, opora, zálivka, obnova', 'biologie druhu a provozní plán'],
          ],
        },
        fieldExample: { title: 'Příklad: „malý strom“ pod vedením', text: 'Prodejní výška 250 cm neříká nic o konečném objemu. Projektant musí ověřit dospělou výšku a šířku, rychlost růstu, bezpečný odstup od vedení a možnost změny stanoviště. Volba velkého stromu s plánem pravidelného sesazování vytváří trvalý náklad a biologicky nevhodný zásah.' },
      },
      {
        title: '4. Plevel, invazní taxon a biologické riziko',
        paragraphs: [
          'Plevel je provozní pojem: rostlina nežádoucí na konkrétním místě. Invazní nepůvodní druh je ekologická kategorie spojená se šířením a dopadem; regulovaný druh je právní kategorie. Tyto množiny se překrývají, ale nejsou totožné. Běžný původní druh může být plevelem v záhonu, aniž by byl invazní, a invazní druh může být na pozemku záměrně pěstován v rozporu s pravidly.',
          'Strategie regulace vychází ze životního cyklu. Jednoleté druhy se zastavují před tvorbou semen a omezením narušované půdy. Vytrvalé druhy s oddenky, hlízami nebo kořenovými výběžky se mohou po fragmentaci množit; nevhodná rotavace problém rozšíří. U dřevin je třeba počítat s pařezovou a kořenovou výmladností. Likvidace nadzemní části není automaticky likvidací organismu.',
          'Před prací se posuzuje toxicita při požití, kožní dráždivost, fototoxicita, alergenní pyl, trny, latex a riziko pro zvířata. U neznámé rostliny se ochranné prostředky volí konzervativně a materiál se nekompostuje, dokud není znám způsob bezpečné likvidace. Právní seznamy a povolené postupy se mění, proto se ověřují k datu zásahu.',
        ],
        procedure: {
          title: 'Rozhodnutí o regulaci neznámé nežádoucí rostliny',
          purpose: 'Zabránit rozšíření, expozici pracovníků a nelegálnímu nakládání.',
          steps: [
            'Práci omezte tak, aby nevznikala semena, fragmenty ani kontaminovaná zemina.',
            'Určete taxon a vývojovou fázi; zaznamenejte rozsah populace a sousední pozemky.',
            'Ověřte vegetativní obnovovací orgány, toxicitu a právní status v aktuálních zdrojích.',
            'Zvolte metodu podle životního cyklu a cíle: prevence semen, vyčerpání zásob, odstranění orgánů nebo odborně povolený přípravek.',
            'Stanovte způsob přepravy a likvidace, aby se materiál nerozšířil.',
            'Naplánujte kontroly nejméně po dobu odpovídající perzistenci orgánů a semenné banky.',
          ],
          record: 'Mapa populace, fotografie, potvrzené jméno, právní zdroj a datum, metoda, množství odpadu, termíny následných kontrol.',
        },
      },
    ],
    sources: [
      { title: 'Plants of the World Online', organisation: 'Royal Botanic Gardens, Kew', url: 'https://powo.science.kew.org/', scope: 'přijatá jména, synonyma, rozšíření a taxonomická opora' },
      { title: 'World Checklist of Vascular Plants — methodology', organisation: 'Royal Botanic Gardens, Kew', url: 'https://powo.science.kew.org/about-wcvp', scope: 'způsob aktualizace a rozhodování o přijatých jménech' },
      { title: 'Plant Finder and Selector', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/plants/search-form', scope: 'pěstitelské vlastnosti, otužilost a zahradní použití' },
      { title: 'EPPO Global Database', organisation: 'European and Mediterranean Plant Protection Organization', url: 'https://www.eppo.int/RESOURCES/eppo_databases/global_database', scope: 'taxony, škodlivé organismy, hostitelé a regulační informace' },
      { title: 'EPPO Lists of Invasive Alien Plants', organisation: 'EPPO', url: 'https://www.eppo.int/ACTIVITIES/invasive_alien_plants/iap_lists', scope: 'aktuálně hodnocené invazní rostliny a rizikové seznamy' },
    ],
  },

  stanoviste: {
    moduleId: 'stanoviste',
    edition: 'Odborná verze 1.0',
    estimatedPages: 27,
    prerequisites: ['botanika', 'půdní profil', 'základy měření a mapování'],
    abstract: 'Stanovištní analýza převádí proměnlivé podmínky pozemku do mapy omezení a příležitostí. Kapitola učí měřit světlo, teplotu, vodu, vítr a provoz v prostoru i čase a volit rostliny podle kombinace stresů, nikoli podle jediného katalogového symbolu.',
    sections: [
      {
        title: '1. Stanoviště je časoprostorová mozaika',
        paragraphs: [
          'Makroklima popisuje širší oblast, topoklima polohu ve svahu a krajině a mikroklima bezprostřední okolí rostliny. Na jediném pozemku může být jižní stěna o mnoho stupňů teplejší než zastíněná sníženina, přestože obě místa sdílejí stejnou klimatickou stanici. Projektová analýza proto nezačíná seznamem rostlin, ale mapou ploch, hran, proudění a sezonních změn.',
          'Podmínky nejsou nezávislé. Vítr zvyšuje výpar a mechanické zatížení; asfalt zvyšuje tepelný tok a často omezuje kořenový prostor; stín stromu znamená současně zachycení srážek a kořenovou konkurenci. Označení „polostín“ nevystihuje rozdíl mezi ranním sluncem, ostrým západním sluncem a světlým rozptýleným stínem.',
          'Analýza musí zachytit i provoz: chůzi, pojezd, sníh se solí, odkládání materiálu, zavlažovací dosah, psy, děti, odraz světla od skla a budoucí stavbu. Biologicky vhodné místo může být provozně neudržitelné. Naopak správné technické uspořádání může výrazně rozšířit využitelný kořenový prostor a dostupnost vody.',
        ],
        table: {
          caption: 'Vrstvy stanovištní mapy',
          headers: ['Vrstva', 'Co zaznamenat', 'Kdy měřit', 'Rozhodnutí, které ovlivňuje'],
          rows: [
            ['Slunce a stín', 'hodiny přímého slunce, zdroj stínu, odraz', 'více hodin a sezon', 'výběr druhu, spon, závlaha'],
            ['Voda', 'přítok, odtok, vsak, kaluže, okapy', 'sucho i déšť', 'modelace, půda, dešťová zahrada'],
            ['Teplota', 'horké povrchy, mrazové kapsy, zimní osvit', 'extrémy a přechodná období', 'otužilost, rašení, ochrana'],
            ['Vítr', 'směr, nárazy, turbulence, průchody', 'různé směry počasí', 'kotvení, větrolam, výpar'],
            ['Provoz', 'trasy, zatížení, sůl, servisní přístup', 'pracovní i volný den', 'ochrana půdy, bezpečnost, údržba'],
          ],
        },
        procedure: {
          title: 'Sedmidenní základní audit stanoviště',
          purpose: 'Vytvořit první ověřenou mapu před výběrem rostlin nebo návrhem zásahu.',
          steps: [
            'Založte měřítkový plán se severem, výškami, stavbami, sítěmi a stávající vegetací.',
            'Ve třech časech dne zakreslete přímé slunce a stín; uveďte datum a oblačnost.',
            'Po dešti zaznamenejte přítok, louže, erozní stopy a dobu mizení vody.',
            'Odeberte půdní sondy v každé odlišné zóně a zapište profil, vlhkost, kořeny a zhutnění.',
            'Během větru označte závětrná místa, zrychlené proudění mezi stavbami a turbulence za překážkami.',
            'Zmapujte provoz, sůl, odhazování sněhu, servisní přístupy a zdroje tepla.',
            'Seznamte limity a příležitosti a u každého uveďte důkaz, sezonní nejistotu a potřebné další měření.',
          ],
          record: 'Datovaný plán, fotografie ze stejných bodů, počasí, půdní sondy, srážka, doba odtoku a seznam předpokladů k ověření.',
        },
      },
      {
        title: '2. Světlo, teplota a fenologické riziko',
        paragraphs: [
          'Pro fotosyntézu je relevantní množství fotosynteticky aktivního záření, ale v běžné praxi se často začíná délkou a kvalitou přímého osvitu. Hodiny samy nestačí: dvě hodiny poledního letního slunce mají jinou intenzitu a tepelný účinek než dvě hodiny zimního rána. Listy adaptované na stín bývají tenčí a pracují efektivněji při nízkém světle, ale mají nižší kapacitu a menší ochranu proti náhlému nadbytku.',
          'Teplota vzduchu není teplota listu, pupenu ani kořenů. Tmavý povrch a závětří mohou list zahřát nad vzduch, zatímco jasná bezvětrná noc ochlazuje povrchy vyzařováním. Pozdní mráz v době květu může poškodit reprodukční pletiva, i když dřevo danou zimní minimální teplotu běžně snáší. Otužilost a mrazové riziko kvetení jsou tedy rozdílné parametry.',
          'Studený vzduch je hustší a za klidné noci stéká po svahu do sníženin. Plot, val nebo hustá výsadba může odtok zadržet a vytvořit mrazovou kapsu. Jižní expozice urychluje jarní vývoj, což může zvýšit riziko následného mrazu. Druh z teplého regionu nemusí být automaticky bezpečnější; důležité je načasování dormance a rašení.',
        ],
        table: {
          caption: 'Rozlišení světelných situací',
          headers: ['Situace', 'Hlavní charakter', 'Typické riziko', 'Co ověřit'],
          rows: [
            ['Ranní slunce', 'nižší teplota, rychlé oschnutí', 'časné jarní prohřátí', 'délka a zimní průběh'],
            ['Západní slunce', 'vysoká teplota odpoledne', 'úžeh a vodní stres', 'odraz a dostupná voda'],
            ['Suchý stín pod stromem', 'málo světla i vody', 'konkurence kořenů', 'srážkový stín a kořenový profil'],
            ['Světlý stín', 'rozptýlené záření bez úpalu', 'nedostatek pro slunné druhy', 'celodenní intenzita a sezonní změna'],
          ],
        },
        warning: 'Označení plné slunce, polostín a stín je orientační. Pro drahou nebo dlouhověkou výsadbu vždy popište dobu, intenzitu, sezonu a zdroj stínu.',
      },
      {
        title: '3. Voda v profilu a na povrchu pozemku',
        paragraphs: [
          'Vodní režim začíná bilanční otázkou: odkud voda přichází, jak rychle se vsakuje, kde se ukládá, kudy odtéká a jak rychle se ztrácí evapotranspirací. Roční úhrn srážek nevypovídá o dostupnosti během kritického období. Intenzivní liják na zhutněné půdě může odtéct, zatímco dlouhé období s malými srážkami nenaplní hlubší profil.',
          'Rozhraní vrstev může vodu dočasně zadržet. Jemnější zemina nad hrubší vrstvou nepředává vodu okamžitě, dokud se dostatečně nenasytí; jednoduchá vrstva štěrku na dně nádoby nebo výsadbové jámy proto nemusí zlepšit odvod a může vytvořit zavěšenou vodu výše. Odtok vyžaduje souvislou hydraulickou cestu a bezpečné místo, kam voda smí směřovat.',
          'Kořenová dostupnost je kombinací objemu, potenciálu a rychlosti. Na mělké půdě nad skalou může být po dešti mokro a po týdnu sucho. V jílu je velká zásoba, ale pomalý přenos k rychle transpirujícím kořenům. Návrh musí zohlednit kořenovou hloubku druhu, plochu nezpevněné půdy, mulč, konkurenci a možnost závlahy během ujímání.',
        ],
        table: {
          caption: 'Hydrologické pozorování a důsledky',
          headers: ['Jev', 'Možné vysvětlení', 'Nutné ověření', 'Návrhová reakce'],
          rows: [
            ['Rychlý povrchový odtok', 'krusta, sklon, intenzivní déšť', 'infiltrace a struktura', 'zpomalení, pokryv, terénní prvky'],
            ['Voda v jámě, okolí suché', 'texturové rozhraní nebo utěsnění boků', 'profil přes okraj jámy', 'plošná příprava a spojení s půdou'],
            ['Mokro v zimě, sucho v létě', 'sezonní hladina a malá zásoba', 'sondy v obou obdobích', 'druhy snášející oba extrémy'],
            ['Sucho pod korunou', 'intercepce a konkurence', 'vlhkost po dešti a kořeny', 'pokryv tolerantní k suchému stínu'],
          ],
        },
        fieldExample: { title: 'Příklad: dešťová zahrada bez přepadu', text: 'Mělká sníženina může zvládnout běžnou srážku, ale při extrému se naplní. Bez bezpečného přepadu voda zamíří k domu nebo sousedovi. Návrh proto potřebuje infiltrační podklad, objem, zvolenou návrhovou událost, volnou výšku a předvídatelnou cestu přebytku.' },
      },
      {
        title: '4. Vítr, městský stres a odolná výsadba',
        paragraphs: [
          'Vítr zvyšuje výměnu vzduchu a osychání listů, ale také transpiraci, mechanické namáhání a zimní vysychání. Nepropustná bariéra vytváří silné turbulence v závětří; účinný větrolam část proudění filtruje a chráněná vzdálenost závisí na výšce, propustnosti a orientaci. Úzké průchody mezi budovami mohou vítr naopak zrychlit.',
          'Městské stanoviště kombinuje omezený kořenový prostor, zhutnění, tepelné sálání, zasolení, odražené světlo, poškození a nepravidelnou vodu. Tolerance jednoho stresu neznamená toleranci jejich kombinace. Druh snášející sucho v hluboké půdě nemusí zvládnout malou zasolenou jámu s horkým povrchem.',
          'Odolnost nevzniká pouze seznamem „odolných druhů“. Vytváří ji dostatečný využitelný půdní objem, spojení kořenových prostorů, ochrana povrchu, kvalitní sadební materiál, správná výsadba a následná péče. Druhová a věková rozmanitost omezuje riziko plošného selhání jedním škůdcem nebo extrémem, ale směs musí být provozně a stanovištně kompatibilní.',
        ],
        procedure: {
          title: 'Výběr druhu pomocí vylučovacích filtrů',
          purpose: 'Zabránit výběru podle vzhledu dříve, než jsou splněny biologické a provozní podmínky.',
          steps: [
            'Vylučte taxony, které nesplní bezpečnost, prostor, právní status nebo minimální teplotu.',
            'Vylučte taxony nekompatibilní s půdní vodou, pH, zasolením a dostupným kořenovým objemem.',
            'Posuďte kombinované stresy: horko + sucho, mokro + mráz, stín + konkurence, vítr + stálezelenost.',
            'Porovnejte dospělou velikost a provozní projevy s vedením, stavbou, cestou a údržbou.',
            'Teprve mezi biologicky vhodnými kandidáty vybírejte habitus, kvetení, barvu a cenu.',
            'Zapište rozhodovací důvody, nejistoty, náhradní taxon a požadavky následné péče.',
          ],
          record: 'Stanovištní karta, seznam vyloučených taxonů s důvodem, zdroje vlastností, finální kandidáti a podmínky úspěchu.',
        },
      },
    ],
    sources: [
      { title: 'Choosing Plants Wisely', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/choosing-plants-wisely', scope: 'provázání půdy, klimatu a potřeb rostliny' },
      { title: 'Consider Soil pH Before Selecting Trees and Shrubs', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/consider-soil-ph-before-selecting-trees-and-shrubs-for-landscape-use', scope: 'pH jako vylučovací kritérium výběru dřevin' },
      { title: 'Developing a Tree Planting Plan', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/developing-a-tree-planting-plan-for-your-community-project', scope: 'terénní posouzení kořenového prostoru, sítí a městských stresů' },
      { title: 'Farmland Assessment Checklist', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/farmland-assessment-checklist', scope: 'mikroklima, mrazové kapsy, voda, vítr a topografie' },
      { title: 'Soil Health Assessment', organisation: 'USDA Natural Resources Conservation Service', url: 'https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-assessment', scope: 'infiltrace, půdní voda, struktura a kořenové podmínky' },
    ],
  },

  mnozeni: {
    moduleId: 'mnozeni',
    edition: 'Odborná verze 1.0',
    estimatedPages: 34,
    prerequisites: ['botanika a fyziologie', 'základy rostlinné taxonomie', 'hygiena práce'],
    abstract: 'Množení je řízená výroba nové rostliny, nikoli pouhé zasetí nebo zapíchnutí výhonu. Kapitola propojuje genetiku, dormanci, regeneraci pletiv, volbu matečného materiálu, prostředí množárny a evidenci úspěšnosti tak, aby bylo možné metodu navrhnout, provést, vyhodnotit a opakovat.',
    sections: [
      {
        title: '1. Volba rozmnožovací strategie: semenáč, klon, nebo kombinace',
        paragraphs: [
          'Generativní množení začíná meiózou, opylením a oplozením. Potomstvo proto není genetickou kopií matečné rostliny. Variabilita je žádoucí při šlechtění, obnově geneticky pestrých populací a u druhů, jejichž semenáče jsou dostatečně vyrovnané; je nevhodná tam, kde zákazník očekává přesné zachování kultivaru, panašování, pohlaví, habitu nebo vlastností plodu. Osivo odebrané z hybridu F1 zpravidla neposkytne stejné, jednotné potomstvo jako původní hybrid.',
          'Vegetativní množení využívá schopnost rostlinných buněk a orgánů obnovit chybějící struktury. Řízky, hřížení, dělení, odnože a mikropropagace vytvářejí klon, avšak genetická shoda nezaručuje stejný vzhled: fenotyp mění podnož, stáří pletiva, výživa, světlo, infekce i epigenetický stav. Klonování zároveň kopíruje systémové viry a další patogeny, pokud nebyl matečný materiál zdravotně ověřen.',
          'Roubování a očkování spojuje geneticky odlišnou nadzemní část s podnoží. Výsledná rostlina není geneticky jednotný organismus: podnož ovlivňuje růstovou sílu, nástup plodnosti, ukotvení, půdní adaptaci a někdy odolnost, zatímco roub nese převážnou část znaků koruny a plodu. Rozhodnutí proto musí uvádět nejen kultivar, ale i podnož, mezikmen, výšku štěpování a kompatibilitu.',
          'Profesionální volba metody vychází z cílové shody, biologické proveditelnosti, množství výchozího materiálu, sezony, vybavení, času do prodejní velikosti a přijatelné ztrátovosti. Nejrychlejší úkon nemusí být nejlevnější proces: metoda s nízkou ujímavostí spotřebuje více matečnic, prostoru, práce a následného třídění. Pro každou výrobní dávku se proto stanovuje očekávaný počet prodejných rostlin, nikoli pouze počet založených kusů.',
        ],
        table: {
          caption: 'Rozhodovací matice metod množení',
          headers: ['Metoda', 'Genetický výsledek', 'Hlavní výhoda', 'Hlavní omezení', 'Typické použití'],
          rows: [
            ['Osivo', 'variabilní potomstvo', 'velký počet, kořen od počátku bez řezu', 'dormance a nevyrovnanost', 'podnože, letničky, druhové dřeviny'],
            ['Řízky', 'klon', 'rychlé a prostorově účinné', 'druhově rozdílné zakořeňování, vadnutí', 'keře, trvalky, některé dřeviny'],
            ['Dělení / odnože', 'klon', 'nový kus už má kořen i pupeny', 'malý multiplikační koeficient', 'trsnaté trvalky, oddenkaté rostliny'],
            ['Hřížení', 'klon', 'výhon je do zakořenění zásoben matečnicí', 'málo kusů a dlouhé trvání', 'obtížně řízkovatelné keře a liány'],
            ['Roubování / očkování', 'kombinace roubu a podnože', 'zachování kultivaru a vlastností podnože', 'kompatibilita a vysoká dovednost', 'ovocné a okrasné dřeviny'],
            ['Mikropropagace', 'obvykle klon', 'velmi vysoký multiplikační koeficient', 'laboratoř, kontaminace, somaklonální odchylky', 'elitní a bezvirózní materiál, velké série'],
          ],
        },
        fieldExample: { title: 'Příklad: výsev semen okrasného kultivaru', text: 'Z modře kvetoucího kultivaru vznikne směs potomků s různou barvou a habitem. Nejde o selhání klíčení, ale o chybnou volbu rozmnožovací strategie. Má-li být zachován kultivar, musí se použít spolehlivá vegetativní metoda a zdravotně kontrolovaná matečnice.' },
      },
      {
        title: '2. Osivo: kvalita, dormance, předosevní příprava a klíčení',
        paragraphs: [
          'Partie osiva se neposuzuje pouze podle hmotnosti. Rozlišuje se čistota, pravost druhu a kultivaru, klíčivost, energie klíčení, vlhkost, zdravotní stav a datum zkoušky. Klíčivost udává podíl normálních klíčenců za předepsaných podmínek; vzcházivost v provozu bývá nižší kvůli substrátu, teplotním výkyvům, patogenům a manipulaci. Výsevní norma proto zohledňuje laboratorní klíčivost i očekávané ztráty a požadovaný počet použitelných rostlin.',
          'Ke klíčení musí být embryo živé, vnitřní bloky dormance odstraněné a prostředí musí poskytovat vhodnou vodu, kyslík, teplotu a u některých druhů světlo nebo tmu. Nasátí vody aktivuje metabolismus; v přemokřeném jemném substrátu však klesá difuze kyslíku a semeno může zahynout. Výsevní hloubka se řídí velikostí semene a jeho světelnou reakcí, nikoli univerzálním násobkem: drobná světloklíčivá semena se obvykle nezakrývají souvislou vrstvou.',
          'Fyzikální dormanci vytváří nepropustný osemení a odstraňuje ji skarifikace. Fyziologická dormance vyžaduje změny v embryu, často určitou dobu vlhkého chladu nebo tepla; tomu odpovídá stratifikace. Morfologická dormance znamená nedovyvinuté embryo a kombinovaná dormance vyžaduje více kroků ve správném pořadí. Recept se vždy váže ke konkrétnímu taxonu, původu a čerstvosti osiva; nahodilé prodlužování chladu může snížit životnost nebo vyvolat předčasné klíčení.',
          'Po vyklíčení se mění limitující faktor. Rostlina spotřebuje zásoby a potřebuje dostatečné světlo, přiměřenou teplotu, vzdušný kořenový prostor a postupně i živiny. Příliš teplé prostředí s nízkým světlem vytváří vytáhlé, mechanicky slabé sazenice. Padání klíčních rostlin omezuje čistota, vzdušný substrát, nepřehoustlý výsev, větrání a správná zálivka; fungicid nemůže napravit trvale anaerobní a přehuštěný porost.',
        ],
        table: {
          caption: 'Diagnostika nevzcházejícího výsevu',
          headers: ['Pozorování', 'Možná příčina', 'Ověření', 'Nápravné rozhodnutí'],
          rows: [
            ['Semeno zůstává tvrdé a nenabobtná', 'nepropustné osemení', 'řez / test příjmu vody', 'druhově ověřená skarifikace'],
            ['Semeno nabobtná, embryo je pevné, neklíčí', 'fyziologická dormance', 'historie skladování a požadavky taxonu', 'vlhká teplá/chladná stratifikace'],
            ['Semena měknou a zapáchají', 'nedostatek kyslíku nebo infekce', 'vlhkost, pórovitost, hygiena', 'vzdušnější médium a řízená zálivka'],
            ['Klíček vznikne a u báze se položí', 'padání klíčních rostlin', 'hustota, cirkulace, léze krčku', 'sanitace, řidší výsev, režim vody'],
            ['Semenáče jsou dlouhé a světlé', 'málo světla vůči teplotě', 'intenzita a vzdálenost světla', 'více světla, nižší teplota, včasné pikýrování'],
          ],
        },
        procedure: {
          title: 'Maloparcelní zkouška osiva před výrobním výsevem',
          purpose: 'Ověřit klíčivost a vhodný režim bez rizika celé partie.',
          steps: [
            'Zaznamenejte dodavatele, číslo partie, taxon, sklizeň, skladování, deklarovanou klíčivost a případné moření.',
            'Náhodně odeberte reprezentativní semena; nevytřiďujte pouze největší kusy.',
            'Založte alespoň dvě opakování se známým počtem semen a kontrolní variantu bez experimentálního ošetření.',
            'Udržujte druhově vhodnou teplotu, vlhkost, kyslík a světlo; každý zásah a odchylku zapisujte.',
            'V pravidelných intervalech počítejte normální klíčence, abnormální klíčence, mrtvá a dosud tvrdá semena.',
            'Spočítejte procento a rychlost klíčení, odhadněte provozní rezervu a teprve poté určete výsevní normu.',
          ],
          record: 'Číslo partie, varianta, počet semen, denní kumulativní klíčení, fotografie, teplota, datum a rozhodnutí o použití partie.',
        },
        warning: 'Koncentrované kyseliny používané při některých laboratorních skarifikacích patří do vybaveného provozu s proškolením a posouzením rizik. Pro běžnou zahradnickou výrobu se bez ověřeného postupu volí bezpečnější mechanická, tepelná nebo biologická metoda.',
      },
      {
        title: '3. Řízkování: fyziologie adventivních kořenů a řízení prostředí',
        paragraphs: [
          'Odříznutý výhon ztratil kořeny, ale listy nadále transpirují. První úkol množárny je proto udržet vodní bilanci, aniž by se médium trvale nasytilo. Vysoká relativní vlhkost, mlžení, zastínění a omezení listové plochy snižují ztráty; příliš mokré listy, stojatý vzduch a nízká hygiena současně zvyšují infekční tlak. Kořenová zóna může být mírně teplejší než vzduch, aby podporovala tvorbu kořenů bez nadměrného růstu výhonu.',
          'Adventivní kořeny vznikají z kompetentních buněk v okolí cévních svazků, kambia nebo kalusu podle druhu. Kalus není totéž co kořen a jeho přítomnost není důkazem úspěchu. Juvenilní, zdravé a přiměřeně vyživené pletivo často koření lépe než stárnoucí kvetoucí výhon. Auxinový přípravek může zvýšit rychlost nebo podíl zakořenění, ale nevytvoří schopnost kořenit u biologicky nevhodného materiálu a při vysoké dávce poškozuje pletivo.',
          'Měkké řízky se odebírají z mladého růstu, rychle koření a rychle vadnou. Polovyzrálé řízky spojují dozrávající bázi s aktivním vrcholem; dřevité řízky se odebírají v klidu a mají menší nároky na ochranu proti vadnutí, ale koření déle. Stonkový řízek musí zachovat polaritu a obvykle obsahuje uzel; listové, listopupenové a kořenové řízky fungují jen u taxonů schopných regenerovat chybějící orgány.',
          'Množitelské médium musí řízek mechanicky držet, mít dostatek vzduchu i dostupné vody, být čisté, rovnoměrné a málo zasolené. Vysoká zásoba živin před vytvořením kořenů není výhodou. Pevně stlačený jemný substrát omezuje kyslík; příliš hrubé a vysychavé médium přeruší vodní kontakt. Recept se proto hodnotí podle fyzikálních vlastností po zalití a během celé doby zakořeňování, ne podle názvu jedné složky.',
        ],
        table: {
          caption: 'Typy řízků a kritické body',
          headers: ['Typ', 'Výchozí pletivo', 'Typický termín', 'Hlavní riziko', 'Příklady'],
          rows: [
            ['Měkký / bylinný', 'mladý nekvetoucí výhon', 'aktivní růst', 'rychlé vadnutí a hniloba', 'Pelargonium, Fuchsia, Salvia'],
            ['Polovyzrálý', 'částečně vyzrálý letošní výhon', 'léto až časný podzim', 'kolísavé vyzrávání', 'Lavandula, Ilex, mnoho stálezelených keřů'],
            ['Dřevitý', 'vyzrálý jednoletý výhon', 'od opadu listů do konce klidu', 'pomalé kořenění a obrácená polarita', 'Cornus, Salix, Ribes'],
            ['Listový / listopupenový', 'list nebo list + pupen', 'podle taxonu, často pod krytem', 'vytvoří kořeny, ale ne výhon', 'Begonia, Streptocarpus, Camellia'],
            ['Kořenový', 'úsek zdravého kořene', 'obvykle období klidu', 'ztráta polarity a návrat k zelené formě', 'Papaver orientale, Acanthus, Primula'],
          ],
        },
        procedure: {
          title: 'Standardní pracovní dávka stonkových řízků',
          purpose: 'Zajistit opakovatelný odběr, přípravu a hodnocení zakořenění.',
          steps: [
            'Vyberte pravou, zdravou a evidovanou matečnici; den před odběrem upravte vodní stav bez přemokření.',
            'Odebírejte v chladné části dne čistým nástrojem a materiál ihned označte a chraňte před sluncem a prouděním vzduchu.',
            'Roztřiďte výhony podle vyzrálosti, odstraňte květy, spodní listy a poškozené kusy; zachovejte polaritu.',
            'Proveďte druhově ověřený bazální řez, případné poranění a přesně dávkovaný auxin bez kontaminace zásobního balení.',
            'Zapíchněte do předem navlhčeného, vzdušného média tak, aby báze měla kontakt a listy se zbytečně nepřekrývaly.',
            'Nastavte světlo, vzdušnou a kořenovou teplotu, vlhkost a větrání; sledujte vadnutí, kondenzaci a choroby.',
            'Hodnocení provádějte na vzorku: podíl živých kusů, kalusu, kořenů, počet a délka kořenů. Netrhejte opakovaně celou dávku.',
            'Po vytvoření funkčních kořenů postupně snižujte vlhkost, zvyšujte světlo a přejděte k výživě; přesazujte před přerůstáním kořenů.',
          ],
          record: 'Kód matečnice, pozice výhonu, datum, typ řízku, ošetření, médium, prostředí, počet založených a procento prodejných rostlin.',
        },
      },
      {
        title: '4. Dělení, oddělování a hřížení',
        paragraphs: [
          'Dělení rozpojuje vícevrcholový nebo oddenkový celek na části, z nichž každá musí nést životaschopný pupen či růstový bod a dostatečný kořenový systém. Není vhodné pro každý druh. Rostliny s jediným kůlovým kořenem nebo citlivou korunou mohou dělení snášet špatně. Cílem není získat maximální počet nejmenších dílů, ale počet kvalitních jednotek, které se bez dlouhého oslabení ujmou.',
          'Termín se volí tak, aby rostlina nebyla v plném květu a měla čas obnovit kořeny před hlavním stresem. Jarní dělení poskytuje vegetační sezonu k ujmutí; podzimní dělení vyžaduje před mrazem dostatek času. Dužnaté kořeny a oddenky se řežou čistě, poškozené a nemocné části se vyřazují. Nová výsadbová hloubka respektuje anatomii koruny: příliš hluboké zasazení kosatce nebo pivoňky může zásadně omezit růst či kvetení.',
          'Oddělování využívá přirozené dceřiné cibule, hlízy, odnože, stolony nebo mladé růžice. Je nutné rozlišit orgány, protože jejich orientace, dormance, zásobní funkce a citlivost k poranění se liší. U cibulových šupin či hlíz má význam zdraví zásobního pletiva a ochrana řezných ploch; plesnivý matečný orgán není vhodným výrobním materiálem.',
          'Při hřížení zůstává výhon během tvorby kořenů spojen s matečnicí. Zranění, ohnutí, zastínění báze a auxin mohou podpořit adventivní kořeny. Jednoduché, vrcholové, paprskovité a vlnovité hřížení pracují s výhonem u země; vzdušné hřížení obaluje poraněnou část vlhkým médiem nad zemí. Oddělení se provádí až po vzniku kořenového systému schopného samostatné vodní bilance.',
        ],
        table: {
          caption: 'Co musí obsahovat životaschopný oddělek',
          headers: ['Struktura', 'Nezbytná část', 'Kontrola kvality', 'Častá chyba'],
          rows: [
            ['Trsnatá trvalka', 'pupeny / výhony a kořeny', 'pevná zdravá koruna', 'díl bez růstového bodu'],
            ['Oddenek', 'uzel nebo pupen a kořeny', 'zdravé zásobní pletivo', 'příliš hluboká výsadba'],
            ['Cibule', 'bazální ploténka a zdravé šupiny', 'bez měkké hniloby', 'poranění nebo zasypání nevhodnou hloubkou'],
            ['Odnož', 'spojení s vlastním kořenem nebo schopnost kořenit', 'dostatečný kořenový objem', 'předčasné oddělení'],
            ['Hříženec', 'zakořeněná část a životaschopný pupen', 'kořeny vyplňují médium', 'oddělení podle času, ne podle kořenů'],
          ],
        },
        fieldExample: { title: 'Příklad: dělení staré hosty', text: 'Odumírající střed a menší listy ukazují přehuštění. Den předem se upraví vláha, trs se vyzvedne mimo horko, rozdělí na kusy s několika zdravými pupeny a kořeny, poškozené středy se vyřadí a díly se ihned chrání před vyschnutím. Počet oddělků je menší než teoretické maximum, ale ztráty po výsadbě jsou výrazně nižší.' },
      },
      {
        title: '5. Roubování a očkování: kompatibilita, srůst a následné vedení',
        paragraphs: [
          'Srůst začíná těsným spojením živých řezných ploch, tvorbou hojivého pletiva a nového vodivého propojení. Kambia nemusí vytvořit plošně dokonalou shodu, ale musí se dotýkat alespoň na jedné souvislé straně. Zaschlé, znečištěné nebo rozdrcené řezy srůst omezují. Mechanicky pevný spoj v prvních týdnech ještě nemusí mít dostatečně obnovený xylém a floém.',
          'Kompatibilita bývá nejvyšší v rámci druhu a klesá s taxonomickou vzdáleností, ale není zaručena ani mezi příbuznými taxony. Pozdní inkompatibilita se může projevit po letech slabým srůstem, zduřením, lámáním nebo rozdílným tempem růstu. Podnož se vybírá podle půdy, klimatu, cílové velikosti, opory, nástupu plodnosti a chorob; slabě rostoucí podnož často vyžaduje kvalitnější stanoviště a trvalejší oporu, nikoli méně péče.',
          'Rouby se odebírají z pravých, zdravých a vyzrálých jednoletých výhonů ve správné dormanci a skladují tak, aby nevyschly ani předčasně nevyrašily. Podnož a roub musí být v metodou požadované fyziologické fázi. Kopulace s jazýčkem se hodí pro podobné průměry, roubování do rozštěpu pro přeroubování silnější větve a očkování využívá jediný pupen; konkrétní metoda se nevolí pouze podle osobní obliby.',
          'Po ujmutí se odstraňují konkurenční výhony podnože, kontroluje se zaškrcení úvazku, chrání křehký nový letorost a postupně se buduje koruna. U ovocných dřevin je nutné trvale rozeznávat místo štěpování: jeho zahrnutí zeminou může vést k zakořenění kultivaru nad podnoží a ke ztrátě jejího růstového účinku. Záznam o kombinaci podnože a roubu je součást identity rostliny.',
        ],
        procedure: {
          title: 'Kontrolní postup kopulace stejně silného roubu a podnože',
          purpose: 'Vytvořit čistý, stabilní spoj s prokazatelným kontaktem kambia.',
          steps: [
            'Ověřte identitu, zdravotní stav, kompatibilitu, dormanci roubu a aktivitu podnože požadovanou zvolenou metodou.',
            'Připravte ostrý dezinfikovaný nůž, vázací materiál, štítky a ochranu ran; roub chraňte před vysycháním.',
            'Na podnoži a roubu vytvořte jediným tahem hladké odpovídající šikmé plochy; řezů se nedotýkejte prsty.',
            'Přiložte části se správnou polaritou a srovnejte kambium alespoň po jedné straně, zvlášť při malém rozdílu průměrů.',
            'Spoj bez posunu pevně ovažte a odkryté plochy chraňte podle metody; ihned označte kultivar, podnož a datum.',
            'Udržujte vhodnou teplotu a vodní stav, ale zabraňte kondenzaci a infekci; pravidelně kontrolujte srůst.',
            'Po vyrašení veďte jeden cílový výhon, odstraňujte obrost podnože a včas uvolněte nerozložitelný úvazek.',
          ],
          record: 'Zdroj a kód roubu, podnož, metoda, pracovník, datum, podmínky, ujmutí po kontrolních termínech a pozdní vady srůstu.',
        },
        warning: 'Roubovací nůž řeže tahem směrem k tělu a vyžaduje nacvičený úchop, ostrou čepel a pevnou oporu materiálu. Výuka techniky patří nejprve na cvičném materiálu pod dohledem; text nenahrazuje bezpečný praktický nácvik.',
      },
      {
        title: '6. Matečnice, hygiena, aklimatizace a výrobní evidence',
        paragraphs: [
          'Matečnice je výrobní zdroj s doloženou identitou. Musí být označena, zdravá, bez podezření na systémové infekce a vedena tak, aby poskytovala fyziologicky vhodné výhony. Přehnojená měkká pletiva mohou být náchylná k hnilobě, stresovaná a stará pletiva špatně regenerují. Odběr z náhodné rostliny bez historie znemožňuje zpětně řešit záměnu nebo plošnou chorobu.',
          'Čistota znamená oddělení čisté a špinavé zóny, dezinfekci pracovních ploch a nástrojů mezi rizikovými dávkami, čisté nádoby, zdravotně vhodnou vodu a rychlé odstranění napadených kusů. Sterilita není v běžné množárně dosažitelná; cílem je snížit inokulum a zabránit přenosu. Nástroj se nesmí máčet do společné zásoby stimulátoru, pokud by ji mohl kontaminovat.',
          'Zakořenělá rostlina z prostředí s vysokou vlhkostí má málo funkční kutikulu a průduchy adaptované na jiné podmínky. Otužování proto postupně snižuje vzdušnou vlhkost, zvyšuje proudění a světlo a přibližuje teplotu cílovému provozu. Náhlé sejmutí krytu za slunečného dne může zničit i dobře zakořeněnou dávku. Přesazení se řídí funkčností kořenů a kořenovým poměrem, nikoli jen kalendářem.',
          'Evidence uzavírá výrobní cyklus. Procento zakořenění samo nestačí: sleduje se pravost, zdravotní vyřazení, kvalita kořenů, ztráty po přesazení, čas a podíl prodejných kusů. Rozdělení velké dávky na varianty umožní ověřit termín, koncentraci auxinu nebo médium. Bez kontrolní varianty a jasného značení se změna procesu mění v dojem, nikoli v poznatek.',
        ],
        table: {
          caption: 'Minimální ukazatele výrobní dávky',
          headers: ['Ukazatel', 'Výpočet / záznam', 'Co odhaluje', 'Kdy hodnotit'],
          rows: [
            ['Ujmutí', 'živé a zakořenělé / založené kusy', 'biologický a environmentální úspěch', 'před přesazením'],
            ['Přežití po přesazení', 'živé / přesazené kusy', 'kvalitu kořenů a otužování', 'po stanoveném intervalu'],
            ['Prodejná výtěžnost', 'prodejné / založené kusy', 'skutečnou efektivitu procesu', 'na konci cyklu'],
            ['Dny do expedice', 'datum expedice − datum založení', 'obrátku prostoru a práce', 'na konci cyklu'],
            ['Zdravotní vyřazení', 'vyřazené kusy podle příčiny', 'hygienu a zdroj infekce', 'průběžně'],
            ['Pravost', 'ověřené neshody a záměny', 'spolehlivost značení', 'průběžně a před expedicí'],
          ],
        },
        procedure: {
          title: 'Karanténa a příjem nového matečného materiálu',
          purpose: 'Omezit zavlečení škůdců, patogenů a záměn do množárny.',
          steps: [
            'Před dodáním stanovte požadovaný původ, rostlinolékařské doklady, pravost a způsob značení.',
            'Příjem proveďte mimo čistou matečnici; zkontrolujte obal, kořeny, listy, pupeny a shodu počtu.',
            'Každé položce přidělte interní kód a zachovejte vazbu na dodavatele a šarži.',
            'Umístěte materiál do oddělené pozorovací zóny, používejte vyhrazené nástroje a sledujte celý relevantní cyklus škůdce.',
            'Podezřelé příznaky fotografujte, izolujte a podle rizika odešlete k odbornému určení nebo diagnostice.',
            'Do matečnice přesuňte pouze schválené kusy; zapište rozhodnutí, datum a osobu, která uvolnění provedla.',
          ],
          record: 'Dodavatel, šarže, doklady, fotografie příjmu, karanténní místo, kontroly, diagnostické výsledky a datum uvolnění či likvidace.',
        },
      },
    ],
    sources: [
      { title: 'Extension Gardener Handbook — Propagation', organisation: 'NC State Extension', url: 'https://content.ces.ncsu.edu/extension-gardener-handbook/13-propagation', scope: 'osivo, dormance, řízky, hřížení, dělení, roubování a mikropropagace' },
      { title: 'Level 2 Certificate in the Principles of Plant Growth, Propagation and Development', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/education-learning/pdf/qualifications/level-2/q-qao-qualification-specification-level-2-popg.pdf', scope: 'profesní rozsah metod, materiálů a výsledků učení' },
      { title: 'Propagation Techniques', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/propagation/techniques', scope: 'praktické členění generativních a vegetativních metod' },
      { title: 'Cuttings: Hardwood', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/propagation/hardwood-cuttings', scope: 'termín, výběr a příprava dřevitých řízků' },
      { title: 'How and When to Divide Perennials', organisation: 'University of Minnesota Extension', url: 'https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/dividing-perennials', scope: 'indikace, termín a provedení dělení trvalek' },
    ],
  },

  realizace: {
    moduleId: 'realizace',
    edition: 'Odborná verze 1.0',
    estimatedPages: 36,
    prerequisites: ['stanovištní analýza', 'půda', 'sortiment a nomenklatura', 'BOZP na pracovišti'],
    abstract: 'Realizace převádí projekt do živého systému, který se musí ujmout. Kapitola pokrývá přípravu zakázky, ochranu půdy, přejímku rostlin, manipulaci, výsadbu dřevin a záhonů, předání i následnou péči. Důraz je na kontrolovatelné parametry, dokumentaci skutečného provedení a včasné odmítnutí vad.',
    sections: [
      {
        title: '1. Předrealizační kontrola: projekt, místo, odpovědnost a logistika',
        paragraphs: [
          'Realizace nezačíná výkopem, ale kontrolou shody mezi dokumentací a skutečností. Ověřují se hranice, vlastnictví a přístup, sítě, výšky, odvodnění, ochranná pásma, stávající dřeviny, půdní podmínky, výkaz výměr, specifikace rostlin a následná péče. Rozpor se zapisuje a řeší před zakrytím konstrukce nebo objednáním materiálu. Zahradník nesmí změnit taxon, úroveň terénu ani technické řešení jen proto, že je to na místě pohodlnější.',
          'Zakázka se rozděluje do kontrolních bodů: převzetí staveniště, dokončení zemních prací, přejímka půdy, vytyčení, přejímka rostlin, výsadba, závlahová zkouška a předání. U prací, které se zakryjí, se pořizuje fotografie s měřítkem a polohou ještě před zásypem. Dodací list dokazuje dodání, nikoli kvalitu; kvalitu potvrzuje samostatná kontrola podle smluvní specifikace a relevantního standardu.',
          'Logistika chrání živý materiál. Dodávka se plánuje co nejblíže výsadbě, připraví se stíněné závětří, voda, způsob vykládky a odpovědná osoba. Holé kořeny nesmějí oschnout ani promrznout, kořenové baly se nezvedají za kmen a koruny se při přepravě nesmějí odírat. Dočasné založení není skládka: rostliny zůstávají označené, zavlažené, chráněné a dohledatelné podle šarže.',
          'Plán prací musí respektovat počasí a půdu. Zpracování mokré jílovité půdy ničí strukturu a pojezd vytváří dlouhodobé zhutnění; výsadba do zmrzlé nebo zaplavené půdy brání kontaktu kořenů a následné péči. Při nevhodných podmínkách je odborným výkonem práci zastavit, místo chránit a změnu zaznamenat, nikoli splnit termín za cenu skryté vady.',
        ],
        table: {
          caption: 'Kontrolní body před zahájením výsadby',
          headers: ['Kontrola', 'Doklad / měření', 'Kritérium pokračování', 'Důsledek neshody'],
          rows: [
            ['Sítě a omezení', 'vyjádření správců, vytyčení v terénu', 'bezpečný a povolený prostor', 'změna polohy nebo technologie'],
            ['Výšky a odtok', 'nivelační body, spád, přepad', 'voda neohrožuje stavby ani výsadbu', 'oprava modelace před výsadbou'],
            ['Půda', 'profil, hutnění, rozbor, původ dodávky', 'odpovídá projektu a lze ji zpracovat', 'odmítnutí, náprava nebo změna specifikace'],
            ['Rostliny', 'soupis, štítky, rozměry a zdravotní stav', 'pravé a bez nepřijatelných vad', 'karanténa, reklamace nebo výměna'],
            ['Závlaha', 'zdroj, průtok, tlak a kvalita', 'lze zavlažit celý kořenový prostor', 'dočasné zásobování a oprava systému'],
            ['Následná péče', 'odpovědnost, intervaly, rozpočet', 'zajištěna od dne výsadby', 'nebezpečí selhání i správné výsadby'],
          ],
        },
        procedure: {
          title: 'Předávací kontrola staveniště před měkkými sadovými úpravami',
          purpose: 'Zabránit zakrytí vad předchozích profesí výsadbou.',
          steps: [
            'Porovnejte aktuální výkres s geodetickými body, hranicemi, skutečnými sítěmi a dokončenými konstrukcemi.',
            'Projděte odtokové trasy při dešti nebo kontrolované zkoušce; ověřte vpusti, přepady a úrovně u budov.',
            'V každé odlišné ploše otevřete půdní sondu a zkontrolujte vrstvy, suť, mazlavé rozhraní, kořeny, vodu a zhutnění.',
            'Označte chráněné plochy, kořenové zóny, skládky, trasy strojů a místa, kam se materiál nesmí ukládat.',
            'Sepište neshody s polohou, fotografií, odpovědnou osobou a termínem nápravy.',
            'Zahájení potvrďte až po uzavření kritických neshod; podmíněné převzetí musí přesně uvádět omezení.',
          ],
          record: 'Datovaný protokol, výkres se zákresem, fotografie, půdní sondy, neshody, odpovědnosti a podpis oprávněných osob.',
        },
      },
      {
        title: '2. Ochrana, manipulace a příprava půdy',
        paragraphs: [
          'Půda není inertní výplň. Odděleně se zachází s humózní ornicí a podorničím; během skrývky, skladování a rozprostření se omezuje zhutnění, mísení, eroze a dlouhé anaerobní uložení. Po hromadě ornice se nejezdí a její přemístění se plánuje při vhodné vlhkosti. Dovážená zemina musí mít doložený původ a vlastnosti, protože barva a obchodní název neprokazují texturu, salinitu, kontaminaci ani životaschopné vytrvalé plevele.',
          'Zhutnění se hodnotí v profilu, ne jen na nakypřeném povrchu. Mělké rotavátorování může vytvořit pěkné seťové lůžko nad nepropustnou deskou. Náprava musí překročit zhutněnou vrstvu a vytvořit spojité póry, přičemž se nesmí poškodit sítě nebo kořeny stávajících stromů. Práce s příliš mokrou půdou maže póry a vytváří hrudky, které pozdější přidání kompostu automaticky neopraví.',
          'Organická hmota se používá podle cíle a rozboru. Stabilní kompost může zlepšit povrchovou strukturu a biologickou aktivitu, ale velká dávka může zvýšit fosfor, soli, sesedání nebo vododržnost. Výsadbová jáma s velmi odlišným bohatým substrátem může zadržovat vodu a podporovat kořeny, aby zůstaly v omezeném prostoru. U dřevin se proto přednostně zlepšuje širší kořenový prostor a fyzikální návaznost na okolní půdu.',
          'Definitivní modelace určuje hospodaření s vodou na desítky let. Povrchy se připravují s rezervou na mulč, ale kořenové krčky nesmějí skončit v prohlubni nebo pod navážkou. Dešťová voda se smí soustředit jen tam, kde je ověřen vsak, objem a bezpečný přepad. Erozně citlivý povrch se nenechává bez ochrany; používá se etapizace, dočasný pokryv nebo vhodná protierozní stabilizace.',
        ],
        table: {
          caption: 'Půdní vady po stavební činnosti',
          headers: ['Vada', 'Terénní znak', 'Důkaz', 'Směr nápravy'],
          rows: [
            ['Zhutnění', 'odpor sondě, deskovité vrstvy, mělké kořeny', 'profil a penetrometr při srovnatelné vlhkosti', 'omezení pojezdu, hloubkové kypření podle podmínek'],
            ['Stavební suť', 'kusy malty, betonu a fólií', 'sondy v rastru', 'odstranění a náhrada podle rozsahu'],
            ['Zamazaný povrch / bok jámy', 'hladké lesklé stěny', 'vizuální kontrola při výkopu', 'rozrušení za vhodné vlhkosti a plošná příprava'],
            ['Nevhodná navážka', 'cizí zápach, heterogenita, vysoké EC', 'laboratorní rozbor a dodací dokumentace', 'odmítnutí nebo řízená náhrada'],
            ['Přerušený odtok', 'stojatá voda nad rozhraním', 'sonda po dešti a zkouška cesty odtoku', 'technické propojení a bezpečný recipient'],
          ],
        },
        warning: 'Mechanické kypření v kořenové zóně stávajícího stromu může přesekat kosterní kořeny a zhoršit stabilitu. Rozsah zásahu se vždy odvozuje od průzkumu kořenů a arboristického posouzení, nikoli pouze od hranice budoucího záhonu.',
      },
      {
        title: '3. Přejímka školkařského materiálu a ochrana do výsadby',
        paragraphs: [
          'Specifikace musí být jednoznačná: úplné botanické jméno a kultivar, počet, velikostní kategorie a způsob měření, forma výpěstku, počet přesazení nebo úprava kořenů, typ balu či kontejneru a případně původ či rostlinolékařský status. Obchodní zkratka bez definice umožňuje dodat biologicky i cenově odlišný materiál. Náhrada taxonu je projektová změna, protože může změnit velikost, bezpečnost, ekologickou funkci i režim péče.',
          'Při přejímce se kontroluje pravost, celková vitalita, architektura, mechanické rány, choroby a škůdci, poměr koruny a kořenů a kvalita kořenového systému. U stromu se hledá kořenový náběh a první hlavní kořeny; bal nesmí být rozpadlý ani zbytečně zasypaný nad krčkem. Kontejnerová rostlina má být prokořeněná tak, aby držela pohromadě, ale ne s hustými spirálovitými nebo zaškrcujícími kořeny bez možnosti nápravy.',
          'Holokořenný materiál se hodnotí podle množství, rozložení a čerstvosti kořenů. Vyschlé kořenové špičky nelze napravit pozdějším zalitím. U balových rostlin se zvedá za bal pomocí vhodné techniky; uchopení za kmen vytváří skryté poškození kořenového krčku. Koruna se chrání při přepravě, ale neprodyšné obalení na slunci může způsobit přehřátí.',
          'Vadný materiál se oddělí, označí a dokumentuje před výsadbou. Zasazením rostliny se důkazní situace zhorší a často se fakticky převezme odpovědnost za vadu. Přijaté kusy se ukládají ve stínu a závětří, kořeny zůstávají vlhké, nádoby stabilní a štítky čitelné. Doba do výsadby se minimalizuje a péče o dočasně uložené rostliny má jmenovanou odpovědnou osobu.',
        ],
        table: {
          caption: 'Příklady přijatelných a nepřijatelných znaků',
          headers: ['Část', 'Přijatelný znak', 'Kritická vada', 'Rozhodnutí'],
          rows: [
            ['Kořenový krček', 'dohledatelný, bez škrcení', 'hluboko v balu, poškozený nebo obtočený kořen', 'odkrytí a posouzení; odmítnout nenapravitelné'],
            ['Bal', 'pevný, přiměřený, vlhký', 'rozpadlý, vyschlý, deformovaný', 'izolace a reklamace'],
            ['Kontejner', 'rovnoměrné mladé kořeny', 'silné spirály a dřevnaté škrtící kořeny', 'náprava jen u lehké vady, jinak odmítnout'],
            ['Kmen / hlavní výhon', 'bez závažné rány a nevhodné vidlice', 'prasklina, oděr po obvodu, nestabilní kodominance', 'posoudit proti specifikaci a cíli'],
            ['Zdravotní stav', 'bez regulovaných a aktivních závažných organismů', 'podezřelý škůdce, hniloba, systémové příznaky', 'karanténa, diagnostika, odmítnutí'],
            ['Identita', 'štítek navázaný na dodávku a plán', 'nejasný nebo zaměněný taxon', 'nevysazovat do potvrzení'],
          ],
        },
        procedure: {
          title: 'Přejímka dodávky rostlin',
          purpose: 'Rozhodnout o přijetí dříve, než se materiál smísí nebo vysadí.',
          steps: [
            'Převezměte dodací dokumenty, šarže, doklady a seznam objednaných specifikací.',
            'Zkontrolujte podmínky dopravy, čas, teplotu, vyschnutí, mechanické zajištění a čistotu vozidla.',
            'Spočítejte a identifikujte položky; u velké dávky stanovte reprezentativní vzorek a zvlášť kontrolujte podezřelé kusy.',
            'Změřte předepsané rozměry správným způsobem a prohlédněte korunu, kmen, krček, bal, nádobu a dostupné kořeny.',
            'Rozdělte dodávku na přijatou, podmíněně přijatou a odmítnutou; skupiny fyzicky oddělte a označte.',
            'Pořiďte fotografie s měřítkem a číslem položky a neshody ihned odešlete odpovědné osobě a dodavateli.',
            'Přijatý materiál bez prodlení uložte do připravených podmínek a zaznamenejte osobu odpovědnou za vodu a ochranu.',
          ],
          record: 'Dodací list, specifikace, čísla šarží, počet a výsledek kontroly, fotografie vad, rozhodnutí a podmínky dočasného uložení.',
        },
      },
      {
        title: '4. Výsadba stromu: poloha krčku, kořenový prostor, kotvení a voda',
        paragraphs: [
          'Poloha stromu se nejprve ověří vůči sítím, stavbám, rozhledům, korunovému prostoru a skutečnému terénu. Výsadbový prostor má být široký a fyzikálně propojený s okolní půdou; jeho hloubka se odvozuje od polohy prvních hlavních kořenů, nikoli automaticky od výšky nádoby. Kořenový náběh a první strukturální kořeny musí po sesednutí odpovídat výsledné úrovni terénu. Příliš hluboká výsadba snižuje provzdušnění a podporuje sekundární či škrtící kořeny.',
          'Strom se usadí na pevné neporušené nebo stabilizované dno, aby neklesal. U holých kořenů se kořeny přirozeně rozloží bez ohýbání vzhůru; u kontejneru se odstraní nádoba a řeší se spirálovité kořeny podle rozsahu. U balu se po usazení uvolní či odstraní materiály z horní části tak, aby nebránily krčku a budoucímu růstu, v souladu s konkrétní technologií a stabilitou balu. Zásyp se provádí po vrstvách s vodou a jemným přitlačením, ne hutněním strojem.',
          'Kotvení se používá jen v nutném rozsahu a musí stabilizovat kořenový bal, nikoli znehybnit celý kmen. Mírný pohyb kmene podporuje adaptivní růst; odírání, úzký úvazek nebo pozdní odstranění způsobuje rány a zaškrcení. Volba podzemního či nadzemního systému závisí na velikosti, balu, půdě, větru, provozu a bezpečnosti. Kotvení má plán kontrol a termín odstranění, nikoli neurčitou trvalou životnost.',
          'Po výsadbě se celý objem jámy rovnoměrně nasytí, aby se odstranily velké vzduchové kapsy a vytvořil kontakt. Zálivková mísa nebo lem usnadní cílené dávky; množství a interval se řídí velikostí balu, půdou, počasím a měřenou vlhkostí. Mulč omezuje výpar a konkurenci, ale nesmí tvořit kužel na kmeni ani překrýt krček. Řez při výsadbě opravuje jen poškození nebo konkrétní odborný důvod; kvalitní školkařský strom se nesmí plošně „vyvážit“ zkrácením koruny.',
        ],
        table: {
          caption: 'Kontrola stromu v okamžiku dokončení výsadby',
          headers: ['Parametr', 'Správný stav', 'Typická skrytá vada', 'Kontrola'],
          rows: [
            ['Hloubka', 'první hlavní kořeny v úrovni výsledného terénu', 'krček byl už ve školce zasypán v balu', 'odkrytí před měřením jámy'],
            ['Dno', 'pevné a stabilní pod balem', 'nakypřená hluboká kapsa způsobí pokles', 'zkouška stability před zásypem'],
            ['Kořeny', 'radiální a neškrcené', 'spirály po stěně nádoby', 'kontrola po sejmutí nádoby'],
            ['Kotvení', 'stabilní bal, volný neodírající úvazek', 'pevný kmen a pohybující se bal', 'kontrola při zatlačení na kmen'],
            ['Zálivka', 'provlhčený bal i zásyp', 'voda protekla mezerou mimo suchý bal', 'sonda po zálivce na více místech'],
            ['Mulč', 'rovnoměrná vrstva mimo kmen a krček', 'mulčovací sopka', 'vizuální kontrola a měření'],
          ],
        },
        procedure: {
          title: 'Kontrolovaný postup výsadby stromu s balem',
          purpose: 'Zajistit správnou hloubku, kontakt půdy, stabilitu a dohledatelnost provedení.',
          steps: [
            'Potvrďte polohu, sítě, výslednou úroveň, odtok a požadovaný kořenový prostor; strom předem zavlažte podle stavu balu.',
            'Na vrchu balu odkryjte první hlavní kořeny a změřte skutečnou vzdálenost od nich ke dnu balu.',
            'Vykopejte široký prostor s neglazovanými boky a pevným dnem v hloubce odpovídající tomuto měření a sesednutí.',
            'Strom zvedejte za bal, usaďte svisle ve správné orientaci a znovu zkontrolujte výšku vůči nivelačnímu bodu.',
            'Nainstalujte kotvení bez poranění kořenů; uvolněte horní část obalu balu podle použitého materiálu a standardu.',
            'Zasypávejte vhodnou zeminou po vrstvách, průběžně zavlažujte a odstraňujte kapsy bez nadměrného zhutnění.',
            'Vytvořte zálivkový prostor, proveďte vstupní zálivku, aplikujte mulč mimo krček a chraňte kmen podle rizika.',
            'Označte strom, vyfotografujte krček a kotvení a stanovte konkrétní plán kontrol, zálivek a odstranění opory.',
          ],
          record: 'Taxon a šarže, poloha, datum, skutečná hloubka kořenů v balu, úpravy kořenů, typ kotvení, vstupní zálivka, fotografie a pracovníci.',
        },
        warning: 'Paušální dávka vody ani pevný kalendář nejsou bezpečné bez kontroly vlhkosti. Stejný objem se v písku rychle ztratí, v jílu může vyplnit póry bez kyslíku a v suchém kontejnerovém balu může protéct po jeho obvodu.',
      },
      {
        title: '5. Keře, živé ploty, trvalky, cibuloviny a plošné výsadby',
        paragraphs: [
          'Záhon se vytyčuje podle souřadnic, hran a sponu v projektu. Spon vyjadřuje vzdálenost, hustota počet kusů na plochu; jejich záměna mění množství i dobu zapojení. Před rozložením rostlin se ověří skutečná plocha, okraje, průchody, budoucí rozměr taxonů a rytmus směsi. Rostliny se nevysazují postupně přímo z dodávkových vozíků bez celkového rozložení, protože záměna se odhalí až příliš pozdě.',
          'Keř a trvalka se obvykle sázejí v úrovni, v níž rostly, s výjimkami danými jejich biologií. Koruna nesmí zůstat zavěšená nad dutinou ani utopená pod zeminou. U kontejneru se kontrolují obtočené kořeny a suché hydrofobní médium. Výsadbová jamka musí umožnit rozložení kořenů, ale plošná příprava půdy je důležitější než izolované kapsy kvalitního substrátu.',
          'Holokořenný živý plot se vysazuje v období klidu do připravené rýhy; kořeny zůstávají po celou dobu chráněné před větrem a sluncem. Víceřadé výsadby se rozmisťují střídavě podle dokumentace. Hloubka odpovídá původnímu kořenovému krčku, kořeny se nezalamují do úzkého otvoru. Po výsadbě následuje pevný kontakt půdy, zálivka a druhově vhodný zakládací řez, nikoli automatické stejné zkrácení stálezelených a opadavých druhů.',
          'Cibule, hlízy a oddenky se rozlišují, protože vyžadují jinou orientaci a hloubku. Ta se odvozuje od druhu, velikosti orgánu, půdy a cílového efektu; značka na obalu je výchozí specifikace, ne náhrada odborného určení. Ve směsných trvalkových výsadbách musí dokumentace umožnit pozdější rozlišení cílových rostlin od plevelů, jinak první údržba může projekt zničit.',
        ],
        table: {
          caption: 'Rozhodující parametry plošné výsadby',
          headers: ['Typ výsadby', 'Vytyčení', 'Kontrola hloubky', 'Kritická následná péče'],
          rows: [
            ['Solitérní keř', 'osa a dospělý prostor', 'původní úroveň krčku', 'hluboká zálivka a výchovný řez jen dle potřeby'],
            ['Živý plot', 'linie, řady, počet na metr', 'nezalomené kořeny a krček', 'souvislý pás bez plevelů, doplnění výpadků'],
            ['Trvalkový záhon', 'rastr nebo moduly směsi', 'koruna podle druhu', 'rozpoznání druhů, časná pletí a voda'],
            ['Půdopokryvné rostliny', 'kusy na m² a rovnoměrnost', 'kontakt kořenového balu', 'potlačení plevelů do zapojení'],
            ['Cibuloviny', 'skupiny, vrstvy a mapa', 'orientace a druhová hloubka', 'ochrana listů do zatažení'],
          ],
        },
        fieldExample: { title: 'Příklad: trvalkový záhon podle kusů, ne podle rastru', text: 'Celkový počet rostlin může sedět, ale při náhodném sázení od jednoho okraje se silné druhy soustředí do jedné části a jemné výsadby zmizí. Správný postup nejprve rozloží všechny druhy v definovaných modulech, zkontroluje rytmus a hustotu z více pohledů a teprve potom zahájí výsadbu.' },
      },
      {
        title: '6. Předání, ujímací péče a hodnocení výsledku',
        paragraphs: [
          'Dokončená výsadba není biologicky samostatná. Předání rozlišuje vady realizace od budoucí péče a stanovuje, kdo, kdy a podle čeho zavlažuje, pleje, kontroluje kotvení, doplňuje mulč a nahrazuje výpadky. U stromů trvá fáze ujímání déle než jedna zálivka a často několik sezon; kořenový systém musí postupně kolonizovat okolní půdu.',
          'Zálivkový plán obsahuje kontrolu vlhkosti, orientační dávky, místa aplikace a pravidla změny podle počasí. Voda musí proniknout do původního balu i okolní kořenové zóny. Mělké časté smáčení povrchu podporuje plevele a neověřuje stav hlouběji; naopak jednorázová extrémní dávka může odtéct nebo vyplnit póry. Záznam objemu bez kontroly výsledné vlhkosti je neúplný.',
          'Přejímací kontrola hodnotí polohu a počet rostlin, pravost, hloubku, stabilitu, modelaci, mulč, funkci závlahy, čistotu, poškození a shodu s dokumentací. Výjimky a odsouhlasené náhrady se zakreslí do dokumentace skutečného provedení. Fotografie mají identifikovat místo a měřítko, nikoli jen vytvořit estetickou galerii.',
          'Úspěch se neposuzuje pouze přežitím. Rostlina může být živá, ale bez přírůstu, s odumírající korunou nebo s trvale vadným krčkem. Sleduje se vitalita, přírůst, vývoj kořenového prostoru, zdravotní stav, stabilita, pokryv půdy a plnění projektované funkce. Opakované výpadky stejného druhu na stejném místě jsou signálem k analýze příčiny, nikoli k nekonečné výměně kus za kus.',
        ],
        table: {
          caption: 'Minimální plán kontrol po výsadbě',
          headers: ['Termín', 'Co ověřit', 'Typický zásah', 'Záznam'],
          rows: [
            ['Ihned', 'hloubka, stabilita, zálivka, poškození', 'oprava před opuštěním stavby', 'přejímací protokol a fotografie'],
            ['První týdny', 'vlhkost balu, vadnutí, sednutí zeminy', 'upravit režim vody a stabilitu', 'objem vody, srážka, vlhkost'],
            ['Po silném větru / dešti', 'kotvení, eroze, stojatá voda', 'srovnat, uvolnit úvazek, obnovit povrch', 'mimořádná kontrola'],
            ['Během první sezony', 'přírůst, plevele, škůdci, mulč', 'cílená péče podle příčiny', 'stav po jednotlivých plochách'],
            ['Před zimou a po ní', 'vyzrání, okusy, mrazové a solné škody', 'ochrana a oprava', 'fotobody a výpadky'],
            ['Před koncem záruky', 'vitalita a plnění funkce', 'náhrady a odstranění příčin', 'společný protokol stran'],
          ],
        },
        procedure: {
          title: 'Technické předání dokončené výsadby',
          purpose: 'Převést dílo do péče se zachováním důkazů, odpovědností a kritérií kvality.',
          steps: [
            'Projděte plochu podle výkresu a ověřte počty, taxony, polohy, rozměry, spon a schválené změny.',
            'Namátkově odkryjte kritické body: krčky, tloušťku mulče, funkci kotvení a vlhkost kořenových balů.',
            'Spusťte závlahu po zónách, změřte průtok nebo výdej a ověřte, že voda dopadá do cílové kořenové plochy.',
            'Sepište vady, jejich závažnost, odpovědnou stranu a termín odstranění; kritické vady nepřebírejte bez výhrady.',
            'Předejte dokumentaci skutečného provedení, dodací a zdravotní doklady, návody, záruky a evidenci vstupních zálivek.',
            'Projděte plán ujímací péče s konkrétní osobou a stanovte kontrolní termíny, komunikační cestu a práh zásahu.',
            'Po odstranění vad proveďte uzavírací kontrolu a archivujte konečný protokol s fotografiemi.',
          ],
          record: 'Dokumentace skutečného provedení, protokol vad, závlahová zkouška, plán péče, odpovědnosti, záruky, fotografie a podpisy.',
        },
      },
    ],
    sources: [
      { title: 'SPPK A02 001 — Výsadba stromů', organisation: 'Agentura ochrany přírody a krajiny ČR', url: 'https://aopk.gov.cz/platne-standardy', scope: 'český oborový standard pro přípravu, výsadbu, kotvení a péči o stromy' },
      { title: 'SPPK A02 003 — Výsadba a řez keřů a lián', organisation: 'Agentura ochrany přírody a krajiny ČR', url: 'https://aopk.gov.cz/documents/20121/8775398/SPPKA02003_VYSADBA%2BA%2BREZ%2BKERU_REVIZE%2BI_k%2Bvyd%C3%A1n%C3%AD2022v2.pdf', scope: 'požadavky na materiál, přípravu, výsadbu a péči o keře a liány' },
      { title: 'European Tree Planting Standard', organisation: 'European Arboricultural Standards', url: 'https://www.europeanarboriculturalstandards.eu/etpls', scope: 'evropský rámec kvality sadebního materiálu, výsadby, kotvení, mulče a zavlažování' },
      { title: 'Planting Ornamentals', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/planting-ornamentals', scope: 'přejímka, kořenový náběh, typy výpěstků a technika výsadby' },
      { title: 'Guidelines for Planting Trees and Shrubs', organisation: 'University of Massachusetts Amherst', url: 'https://www.umass.edu/agriculture-food-environment/landscape/fact-sheets/guidelines-for-planting-trees-shrubs', scope: 'hloubka výsadby, šířka jámy, krček a zásyp' },
      { title: 'Guidelines on Biodiversity-Friendly Afforestation, Reforestation and Tree Planting', organisation: 'European Commission', url: 'https://environment.ec.europa.eu/publications/guidelines-biodiversity-friendly-afforestation-reforestation-and-tree-planting_en', scope: 'ekologické zásady plánování a dlouhodobé funkce výsadeb' },
    ],
  },

  pece: {
    moduleId: 'pece',
    edition: 'Odborná verze 1.0',
    estimatedPages: 35,
    prerequisites: ['botanika a vodní režim rostlin', 'půda', 'stanovištní analýza', 'realizace výsadeb'],
    abstract: 'Péče je řízený cyklus pozorování, diagnózy, zásahu a kontroly výsledku. Kapitola učí převést projektový cíl do měřitelných standardů údržby, řídit vodu a půdní povrch, rozhodovat o výživě podle důkazů, regulovat konkurenci a udržet novou výsadbu do biologické samostatnosti bez automatických nebo nadbytečných zásahů.',
    sections: [
      {
        title: '1. Péče jako řízený systém, nikoli kalendář úkonů',
        paragraphs: [
          'Údržba začíná definicí cílového stavu. U nového stromu může být cílem stabilní krček, funkční kořenový prostor, přiměřený přírůst a postupné odstranění kotvení; u trvalkového záhonu zapojení cílových druhů, nízký tlak plevelů a zachování zamýšlené struktury. Výrok „záhon je udržovaný“ není kontrolovatelný, dokud není převeden na pozorovatelné parametry, přijatelné odchylky a termín kontroly.',
          'Rozlišuje se dokončovací péče bezprostředně po realizaci, rozvojová neboli ujímací péče a dlouhodobá udržovací péče. Hranice nejsou dány jedním datem. Rostlina je ujmutá tehdy, když vytvořila funkční kořeny do okolní půdy a běžné výkyvy zvládá režimem odpovídajícím danému stanovišti. Velký přesazovaný strom, malý keř a předpěstovaná trvalka dosahují této fáze v rozdílném čase.',
          'Každá návštěva má pořadí: bezpečnostní obhlídka, porovnání s posledním stavem, kontrola vody a kořenového krčku, zjištění příčiny odchylky, nejmenší účinný zásah a záznam. Automatické provedení seznamu může škodit: zálivka po dlouhém dešti vytěsní kyslík, každoroční přisypání mulče zahrne krček a plošné hnojení prodlouží měkký růst před zimou.',
          'Plán péče musí určit odpovědnost a zdroje. Nestačí napsat „zalévat dle potřeby“; je třeba uvést, kdo potřebu měří, jakým způsobem, kde získá vodu, jaký je dosah hadice či kapacita cisterny, kdo přebírá mimořádnou kontrolu po vichřici a kdo smí změnit režim. Nedostupná voda nebo chybějící pracovní kapacita je konstrukční vada plánu, nikoli smůla počasí.',
        ],
        table: {
          caption: 'Převod cíle výsadby na kontrolovatelné ukazatele',
          headers: ['Cíl', 'Ukazatel', 'Metoda kontroly', 'Spouštěč zásahu'],
          rows: [
            ['Ujmutí stromu', 'vitalita, přírůst, voda v balu i okolí', 'fotobody, měření výhonů, půdní sonda', 'vadnutí nebo suchý profil před trvalým poškozením'],
            ['Stabilita', 'pohyb balu, úvazek, náklon', 'kontrola po větru a při mírném zatlačení', 'pohyb balu, oděr nebo zaškrcení'],
            ['Zapojení záhonu', 'pokryv cílových druhů a holá půda', 'stálé plochy a fotografie shora', 'zvětšující se mezery nebo ústup kosterních druhů'],
            ['Regulace plevelů', 'druh, počet a reprodukční stav', 'mapa ohnisek', 'zásah před vysemeněním či tvorbou oddenků'],
            ['Funkce půdy', 'vsak, struktura, pokryv, zhutnění', 'infiltrační pozorování a půdní profil', 'odtok, krusta, anaerobní zápach nebo omezené kořeny'],
          ],
        },
        procedure: {
          title: 'Standardní kontrolní návštěva výsadby',
          purpose: 'Oddělit pozorování od zásahu a vytvářet srovnatelnou historii plochy.',
          steps: [
            'Zkontrolujte rizika pro lidi a majetek, změny provozu, poškození po počasí a funkci závlahy.',
            'Pořiďte fotografie ze stejných bodů a zapište fenologii, poslední srážky, teplotní extrémy a předchozí zásahy.',
            'Projděte celou plochu a označte odchylky; teprve potom detailně zkoumejte reprezentativní a nejhorší místa.',
            'Ověřte vlhkost v původních balech i okolní půdě, stav krčků, mulče, kořenové konkurence a odtoku.',
            'U každé odchylky uveďte nejméně dvě možné příčiny a důkaz, který je rozliší.',
            'Proveďte pouze schválený a odůvodněný zásah, zaznamenejte materiál, množství, čas a rozsah.',
            'Stanovte datum kontroly a měřitelný očekávaný výsledek; urgentní nebo nejasné riziko eskalujte.',
          ],
          record: 'Datum, pracovníci, počasí, srážky a závlaha, fotobody, zjištění, hypotéza, zásah, spotřeba, odchylky a termín kontroly.',
        },
      },
      {
        title: '2. Zálivka podle bilance a skutečně provlhčeného objemu',
        paragraphs: [
          'Potřeba závlahy vzniká rozdílem mezi zásobou využitelné vody v kořenové zóně a ztrátami evapotranspirací, odtokem a průsakem. Srážkový úhrn není automaticky využitá voda: prudký déšť může odtéct, koruna část zachytí a mulč může rozdělit tok nerovnoměrně. Naopak chladné období s nízkým výparem může udržet jíl nasycený dlouho po posledním dešti. Rozhodnutí se proto opírá o měření v cílové hloubce a znalost půdy.',
          'U nově vysazené rostliny jsou dvě hydraulicky odlišné zóny: původní bal a okolní zemina. Rašelinový kontejnerový bal může po vyschnutí odpuzovat vodu, zatímco těžká okolní půda zůstává mokrá; hladina vody v zálivkové míse pak neprokazuje zvlhčení kořenů. Sonda se vkládá do více bodů v balu, na jeho rozhraní a za okraj jámy. U plošné výsadby se kontrolují nejvyšší, nejnižší, okrajové a nejvzdálenější části závlahové zóny.',
          'Dávka musí provlhčit cílový objem bez eroze, odtoku a dlouhé anaerobiózy. Písčitá půda přijme vodu rychle, ale malou zásobu brzy ztratí; jemná zhutněná půda vyžaduje pomalejší aplikaci a delší interval pro vsak. Kapková závlaha omezuje smáčení listů, ale ucpaná nebo špatně rozmístěná kapka vytvoří suchá místa. Závlahový vak u kmene může zásobit bal, ne však automaticky rozšiřující se kořeny za jeho okrajem.',
          'Příznaky nedostatku a nadbytku vody se překrývají: vadnutí, chloróza, opad a slabý růst mohou vzniknout oběma extrémy. Rozlišuje je stav půdy, kořenů, zápach, rozložení po terénu a časová vazba na závlahu. Trvale mokrá půda není bezpečná zásoba; při nedostatku kyslíku kořeny ztrácejí schopnost vodu přijímat. Zálivka při vadnutí bez ověření je proto diagnostická chyba.',
        ],
        table: {
          caption: 'Metody kontroly vodního režimu',
          headers: ['Metoda', 'Co skutečně ukazuje', 'Výhoda', 'Omezení'],
          rows: [
            ['Ruční půdní sonda', 'odpor, přítomnost vody a profil v bodě', 'rychlá a levná', 'subjektivní, nutno kalibrovat pro půdu'],
            ['Hmatová zkouška', 'konzistenci odebraného vzorku', 'odliší extrémní sucho a nasycení', 'závisí na textuře a zkušenosti'],
            ['Tenzometr', 'matricový sací tlak v rozsahu přístroje', 'dobrý spouštěč v jedné půdě', 'vyžaduje kontakt, údržbu a více hloubek'],
            ['Objemové čidlo', 'dielektrický odhad obsahu vody', 'průběžný trend', 'nutná půdní kalibrace; jediný bod nereprezentuje plochu'],
            ['Sběrné nádoby', 'rovnoměrnost postřiku a dodanou výšku', 'odhalí špatné trysky a překryv', 'neukazuje vsak ani vodu v kořenech'],
            ['Vodní audit / průtokoměr', 'skutečný výdej zóny', 'kontrola spotřeby a netěsností', 'bez půdního měření neříká dostupnost'],
          ],
        },
        procedure: {
          title: 'Stanovení a ověření jedné zálivkové dávky',
          purpose: 'Převést odhad vody na měřenou aplikaci, která zasáhne cílovou kořenovou zónu.',
          steps: [
            'Vymezte cílovou plochu a hloubku, typ půdy, velikost balu a místa s odlišným odtokem nebo stínem.',
            'Před zálivkou zkontrolujte vlhkost alespoň v balu a ve dvou vzdálenostech a hloubkách okolní půdy.',
            'Změřte průtok zařízení naplněním nádoby známého objemu za známý čas nebo odečtem průtokoměru.',
            'Aplikujte vodu pomalu a rovnoměrně; při odtoku dávku rozdělte do cyklů s přestávkou na vsak.',
            'Po době potřebné k redistribuci otevřete malé kontrolní sondy a zjistěte skutečnou hloubku a šířku provlhčení.',
            'Upravte čas nebo počet aplikačních míst tak, aby nezůstával suchý bal ani nasycené kapsy.',
            'Další termín určete podle rychlosti vysychání, předpovědi a citlivosti rostlin; ne pouze opakováním dne v týdnu.',
          ],
          record: 'Zóna, datum, srážky, půdní stav před a po, průtok, délka, vypočtený objem, odtok, hloubka provlhčení a další kontrola.',
        },
        warning: 'Časové intervaly publikované v obecných návodech jsou pouze výchozí orientace. Profesionální režim je musí upravit podle velikosti balu, půdy, počasí, expozice a výsledku měření; jinak hrozí současně přesušení jedné a přemokření jiné části výsadby.',
      },
      {
        title: '3. Půdní povrch, mulč, zhutnění a kořenová konkurence',
        paragraphs: [
          'Půdní povrch řídí příjem srážek, výpar, teplotu, přísun organické hmoty a mechanické poškození. Holá jemně zpracovaná půda se může rozplavit, vytvořit krustu a erodovat. Trávník až ke kmeni soutěží o vodu a živiny a přivádí sekačku do kontaktu s kůrou. Široký vegetační nebo organicky mulčovaný pás proto často zlepšuje podmínky více než bodové hnojení.',
          'Organický mulč omezuje výpar a klíčení části plevelů, zmírňuje teplotní výkyvy a při rozkladu ovlivňuje svrchní horizont. Účinek závisí na materiálu, zrnitosti a tloušťce. Jemný nebo zplstnatělý materiál může omezit vsak a výměnu plynů; hrubá dřevní štěpka vytváří stabilnější póry. Rozklad dřeva na povrchu není totéž jako jeho zapravení do půdy, kde může mikrobiální rozklad dočasně silněji ovlivnit dostupný dusík.',
          'Mulč se doplňuje až po změření zbylé vrstvy. Každoroční automatické přisypání bez kontroly vytváří příliš hluboký profil. Kořenový náběh, kmen a koruny citlivých trvalek zůstávají volné. Mulčovací „sopka“ udržuje kůru vlhkou, zakrývá vady hloubky výsadby, podporuje adventivní a škrtící kořeny a poskytuje úkryt hlodavcům.',
          'Zhutnění se omezuje organizací pohybu, nikoli opakovaným povrchovým nakypřením. Trasy, skladování a servisní přístup se drží mimo kořenový prostor. Pokud je náprava potřebná u stávajících dřevin, volí se podle profilu, kořenů a příčiny; hluboké mechanické kypření může kořeny poškodit. Cílem je obnovit spojitou pórovitost a odstranit zdroj zatížení, ne vytvořit krátkodobě měkký povrch.',
        ],
        table: {
          caption: 'Volba a kontrola půdního pokryvu',
          headers: ['Pokryv', 'Přínos', 'Riziko', 'Kontrolní otázka'],
          rows: [
            ['Hrubší dřevní štěpka', 'stabilní pokryv, vsak, ochrana proti pojezdu', 'přímý kontakt s kůrou, zavlečení příměsí', 'je krček volný a vrstva stále propustná?'],
            ['Kůra / jemný organický mulč', 'estetika a omezení klíčení', 'zplstnatění a rychlé vrstvení', 'není nová vrstva přidávána na příliš silnou starou?'],
            ['Kompost jako povrchová vrstva', 'živiny a organická hmota', 'salinita, fosfor, plevele', 'odpovídá rozbor a dávka skutečné potřebě?'],
            ['Minerální mulč', 'trvanlivost a specifický vzhled', 'přehřívání, změna chemismu, mísení s půdou', 'je kompatibilní s taxony a tepelnou zátěží?'],
            ['Živý bylinný pokryv', 'biodiverzita, infiltrace a dlouhodobý povrch', 'konkurence během zakládání', 'je pokryv druhově a provozně kompatibilní?'],
          ],
        },
        fieldExample: { title: 'Příklad: strom v pravidelně obnovované mulčovací sopce', text: 'Kmen zdánlivě vstupuje do mulče bez náběhu. Po opatrném odkrytí se zjistí, že první kořeny jsou hluboko a nad nimi vznikají adventivní kořeny obtáčející kmen. Náprava není další vrstva: nejprve se určí skutečný krček a rozsah kořenů, posoudí bezpečnost zásahu a upraví se okolní úroveň i budoucí režim doplňování.' },
      },
      {
        title: '4. Výživa jako diagnóza: půda, list, růst a dávka',
        paragraphs: [
          'Hnojivo dodává ionty, nikoli energii ani organickou potravu. Slabý růst může způsobit nedostatek světla, poškozené kořeny, zhutnění, nevhodné pH, sucho, přemokření nebo choroba; přidání živin v těchto situacích může zvýšit salinitu a potřebu vody. První otázkou proto není „jaké hnojivo“, ale zda omezení skutečně vzniká dostupností konkrétní živiny.',
          'Půdní rozbor popisuje pH, zásobu vybraných prvků a někdy elektrickou vodivost či organickou hmotu. Listová analýza ukazuje stav rostlinné tkáně v definované fázi a musí se porovnávat s odpovídajícími referencemi. Samotná barva listu je nespecifická: chlorózu může způsobit nedostatek dusíku, nepřístupné železo při vysokém pH, poškození kořenů nebo některé patogeny. Rozložení na starých či mladých listech pomáhá, ale nenahrazuje historii a měření.',
          'Dávka se počítá podle plochy nebo objemu kořenového prostoru a procenta živiny v produktu. Označení N–P–K udává hmotnostní podíl deklarovaných živin v právně dané formě; kilogram výrobku není kilogram dusíku. Příklad: výrobek s 10 % N obsahuje 0,10 kg dusíku v 1 kg. Celková dávka se dělí jen tehdy, pokud to odpovídá půdě, druhu, formě hnojiva a riziku vyplavení.',
          'Termín respektuje aktivní kořeny, vodu a vyzrávání. Vysoký pozdní dusík může prodloužit měkký růst, který je citlivější k mrazu a některým škůdcům. Suché nebo zasolené kořenové prostředí se nehnojí bez nápravy vody. Listová výživa může rychle korigovat vybraný nedostatek v malé dávce, ale její plocha a trvání jsou omezené a neřeší nevhodné pH nebo nefunkční kořenový prostor.',
        ],
        table: {
          caption: 'Důkazy před rozhodnutím o hnojení',
          headers: ['Důkaz', 'Co podporuje', 'Co neprokazuje', 'Správné použití'],
          rows: [
            ['Půdní rozbor', 'pH a dostupnost měřených prvků', 'že kořeny jsou zdravé a prvek přijímají', 'volba prvku, dávky a úpravy pH'],
            ['Listová analýza', 'obsah prvků v definované tkáni', 'příčinu odchylky bez kontextu', 'porovnání se standardem druhu a fáze'],
            ['Příznak', 'místo pro cílené vyšetření', 'jednoznačný nedostatek', 'mapa rozložení a diferenciální diagnóza'],
            ['Přírůst', 'dlouhodobou reakci a vitalitu', 'samotnou živinovou příčinu', 'srovnání s druhem, věkem a cílem'],
            ['Historie zásahů', 'riziko salinity, antagonismu a časovou vazbu', 'aktuální koncentraci', 'interpretace měření a prevence opakování'],
          ],
        },
        procedure: {
          title: 'Rozhodnutí o korekční výživě',
          purpose: 'Použít hnojivo pouze tehdy, když je zvolený prvek, dávka a termín podložený.',
          steps: [
            'Ověřte taxon, věk, fázi růstu, cíl péče a přesné rozložení příznaků.',
            'Zkontrolujte světlo, kořeny, vlhkost, odtok, zhutnění, pH, salinitu, škůdce a poslední aplikace.',
            'Odeberte reprezentativní půdní a případně listový vzorek podle pokynů laboratoře; nemíchejte odlišné zóny.',
            'Interpretujte výsledky společně s mobilitou prvku a druhem rostliny, nikoli podle univerzální barevné tabulky.',
            'Spočítejte množství skutečné živiny a výrobku, zkontrolujte limity etikety, plochu, počasí a riziko odtoku.',
            'Je-li to možné, ošetřete kontrolovanou část a ponechte srovnávací plochu; současně neměňte více faktorů.',
            'Vyhodnoťte nový růst a laboratorní či vizuální ukazatel ve vhodném termínu; stará poškozená tkáň se nemusí opravit.',
          ],
          record: 'Vzorkovací mapa, laboratoř a výsledky, produkt, šarže, výpočet živiny, plocha, dávka, počasí, aplikátor a následná odezva.',
        },
      },
      {
        title: '5. Plevel, spontánní vývoj a obnova bylinných výsadeb',
        paragraphs: [
          'Plevel je rostlina nežádoucí vzhledem k cíli plochy, nikoli biologická skupina. Stejný druh může být cennou součástí květnaté plochy a nepřijatelným konkurentem v produkčním záhonu. Regulace začíná správným určením, znalostí životního cyklu a mapou ohnisek. Jednoletý druh se řídí hlavně zabráněním tvorby semen; oddenkatý vytrvalý druh vyžaduje vyčerpání nebo odstranění obnovovacích orgánů.',
          'Semenná banka reaguje na narušení, světlo a teplotu. Hluboké nebo časté obracení půdy může vynést nová semena, rozřezat oddenky a poškodit mělké kořeny cílových rostlin. Mělké pletí malých semenáčů za vhodné vlhkosti je levnější než pozdní vytrhávání vzrostlých rostlin. Odstraněný materiál se třídí podle schopnosti dozrát, zakořenit nebo šířit se z úlomků; ne každý patří na běžný kompost.',
          'Prevence kombinuje čistý materiál, zakrytí půdy, rychlé zapojení, hygienu mechanizace a kontrolu hran. Mulč snižuje část vzcházení, ale nevyřeší již přítomné silné oddenky. Hustší spon není univerzální náprava, protože může později zvýšit konkurenci a choroby. Nejodolnější systém využívá více pater a dobu aktivity cílových rostlin tak, aby zůstávalo málo dlouhodobě volných nik.',
          'Trvalková výsadba se vyvíjí. Některé krátkověké druhy ustoupí, jiné se rozsejí a kosterní druhy zvětší objem. Péče musí rozlišit očekávanou sukcesi od selhání: mechanické udržování původního počtu každého kusu může popřít záměr dynamické směsi, zatímco nekontrolovaný expanzivní druh může zničit kompozici. Změny se dokumentují a dosadba se rozhoduje podle funkce, ne podle prázdného místa samotného.',
        ],
        table: {
          caption: 'Regulace podle životní strategie plevele',
          headers: ['Strategie', 'Rozpoznávací znak', 'Priorita zásahu', 'Častá chyba'],
          rows: [
            ['Jednoletý semenný', 'rychlý cyklus a mnoho semen', 'odstranit před dozráním semen', 'nechat vysemenit při odkladu práce'],
            ['Dvouletý', 'první rok růžice, druhý květ', 'odstranit růžici nebo před květem', 'sekat až po dozrání semen'],
            ['Vytrvalý kořenový', 'obnova z kořene či kořenových pupenů', 'opakované oslabení / cílené odstranění', 'jednorázově utrhnout na povrchu'],
            ['Oddenkatý', 'vodorovné podzemní výběžky', 'nešířit úlomky a vymezit ohnisko', 'frézovat a roznést oddenky'],
            ['Dřevnatějící nálet', 'semenáček keře nebo stromu', 'vyjmout včas i s kořenem', 'opakovaně seřezávat a vytvořit silný pařez'],
          ],
        },
        fieldExample: { title: 'Příklad: pýr v nově zamulčovaném záhonu', text: 'Silné oddenky byly přítomné už před realizací. Vrstva mulče omezí nové semenáče, ale pýr jí proroste a při ručním trhání se oddenky rozlámou. Řešení začíná mapou ohniska a systematickým vyčerpáním či odstraněním podzemních orgánů; pouhé dosypávání mulče spotřebuje materiál bez odstranění příčiny.' },
      },
      {
        title: '6. Kotvení, ochrany, extrémy a uzavření ujímací péče',
        paragraphs: [
          'Kotvení a ochrany jsou dočasné technické systémy s vlastním plánem kontrol. Úvazek se posuzuje po větru, po sesednutí půdy a během tloustnutí kmene. Musí stabilizovat bal bez oděru a zaškrcení; uvolněný kůl, který tluče do kmene, je aktivní zdroj rány. Odstranění se řídí stabilitou kořenového systému a specifikací, ne tím, že se na kůly zapomnělo.',
          'Ochrana proti okusu, sekačce, slunci nebo mrazu musí odpovídat konkrétnímu riziku a nesmí vytvářet nové. Těsný neprůhledný chránič může zadržovat vlhkost, ukrývat hlodavce nebo zaškrtit kmen; světlý prodyšný materiál se instaluje s možností kontroly. Kmen a báze se prohlížejí pod ochranou, nikoli jen zvenku. Chemické posypy a slaná břečka se řeší u zdroje, směrováním odtoku a výběrem kompatibilních rostlin.',
          'Před extrémem se připravuje prioritní seznam podle zranitelnosti a hodnoty. Za sucha mají přednost nové výsadby, nádoby a mělké kořeny; před mokrým sněhem se kontrolují nevhodné úvazky a konstrukce, nikoli agresivně odlehčuje zdravá koruna na poslední chvíli. Po mrazu, krupobití nebo suchu se životaschopnost hodnotí opakovaně, protože rozsah poškození může být zpočátku nejasný. Odumřelé a bezpečnostně rizikové části se odlišují od tkání, které mohou obnovit růst.',
          'Ujímací péče se neuzavírá pouhým uplynutím záruky. Protokol musí doložit životaschopnost, stabilitu, správnou polohu krčku, funkční závlahu, odstranění nebo plán odstranění dočasných prvků, stav půdy, akceptované výpadky a převzetí dlouhodobým správcem. Opakované úhyny na stejném místě se vyšetřují; náhrada identickým kusem bez změny podmínek není náprava.',
        ],
        table: {
          caption: 'Kontrola dočasných prvků',
          headers: ['Prvek', 'Funkce', 'Porucha', 'Konec použití'],
          rows: [
            ['Nadzemní kotvení', 'stabilizace kořenového balu', 'oděr, povolení, zaškrcení, vyvrácený kůl', 'po prokázané stabilizaci kořeny'],
            ['Podzemní kotvení', 'stabilizace bez kůlů', 'skrytá porucha nebo poškození balu', 'podle systému; stav se ověřuje nepřímo'],
            ['Chránič kmene', 'okus a mechanické poškození', 'vlhko, hlodavci, zaškrcení', 'po zániku rizika nebo nahrazení vhodnější ochranou'],
            ['Zálivkový vak', 'pomalá dávka do omezené plochy', 'ucpání, přehřátí, trvalá vlhkost u kůry', 'když zavlažování musí přejít do širší zóny'],
            ['Zálivková mísa', 'zachycení dávky', 'prohlubeň u krčku, eroze, stojatá voda', 'po ujmutí srovnat podle finální modelace'],
          ],
        },
        procedure: {
          title: 'Roční audit rozvojové péče',
          purpose: 'Rozhodnout, zda výsadba postupuje k samostatnosti a co se musí změnit v další sezoně.',
          steps: [
            'Porovnejte fotobody, výpadky, přírůst a fenologii s výchozím stavem a cílovými ukazateli.',
            'Vyhodnoťte záznamy srážek, závlah, poruch systému, spotřeby vody a míst s opakovaným stresem.',
            'Zkontrolujte krčky, kořeny, stabilitu, úvazky, ochrany, mulč, zhutnění, plevele a půdní pokryv.',
            'Rozdělte problémy na vadu realizace, nedostatek péče, změnu stanoviště, biotické poškození a nejisté případy.',
            'U opakovaných výpadků otevřete profil a stanovte příčinu před objednáním náhrady.',
            'Aktualizujte četnost, priority, rozpočet, odpovědnosti a měřitelné prahy pro další sezonu.',
            'Písemně potvrďte prvky předané do dlouhodobé péče a termíny odstranění všech dočasných systémů.',
          ],
          record: 'Roční souhrn po plochách, míra přežití, vitalita, voda, výpadky podle příčin, změny režimu, rozpočet a odpovědnosti.',
        },
      },
    ],
    sources: [
      { title: 'SPPK A02 001 — Výsadba stromů', organisation: 'Agentura ochrany přírody a krajiny ČR', url: 'https://aopk.gov.cz/documents/20121/8775405/02001_VYSADBA_STROMU_REVIZE_I_2021.pdf', scope: 'dokončovací a rozvojová péče, zálivka, kotvení, mulč a kontroly' },
      { title: 'European Tree Planting Standard', organisation: 'European Arboricultural Standards', url: 'https://www.europeanarboriculturalstandards.eu/etpls', scope: 'evropské požadavky na povýsadbovou péči a přechod k samostatnosti stromu' },
      { title: 'Meeting the Watering Needs of a Newly Planted Tree', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/meeting-the-watering-needs-of-a-newly-planted-tree', scope: 'vodní režim, půdní kontrola, nedostatek a nadbytek vody' },
      { title: 'Mulching Landscape Trees', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/mulching-landscape-trees', scope: 'funkce mulče, šířka, hloubka a rizika mulčovacích sopek' },
      { title: 'Trees and Shrub Soil Management', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/trees-lawns-and-landscaping/trees-and-shrubs/soil-management', scope: 'půdní rozbory, hnojení, kyslík a management povrchu' },
      { title: 'Planting Ornamentals — Care After Planting', organisation: 'Penn State Extension', url: 'https://extension.psu.edu/planting-ornamentals', scope: 'ujímací péče o stromy, keře a plošné výsadby' },
    ],
  },

  rez: {
    moduleId: 'rez',
    edition: 'Odborná verze 1.0',
    estimatedPages: 43,
    prerequisites: ['botanika a sekundární růst', 'určování dřevin', 'stanovištní analýza', 'bezpečnost práce'],
    abstract: 'Řez je nevratné odebrání živých nebo mrtvých částí dřeviny za přesně definovaným cílem. Kapitola propojuje architekturu stromu, kompartementalizaci poškození, mechaniku větvení, druh a fenologii s technikou jednotlivých řezů, výchovou mladých stromů, managementem dospělých korun a odlišnými systémy řezu keřů a ovocných dřevin.',
    sections: [
      {
        title: '1. Rozhodnutí před řezem: cíl, strom, okolí a hranice kompetence',
        paragraphs: [
          'Nejdříve se formuluje problém, který má řez řešit. Přítomnost větví sama o sobě není důvodem. Cílem může být zapěstování stabilní architektury, odstranění konkrétního rizika, získání průchozího profilu, odstup od překážky, obnova kvetoucího keře nebo řízení plodného obrostu. Cíl musí popsat, která část a proč se mění, jaký je přijatelný rozsah a co se má po zásahu kontrolovat.',
          'Předřezový průzkum zahrnuje identitu a přirozený habitus taxonu, vývojovou fázi, vitalitu, architekturu, předchozí řezy, vady spojů, kořenový prostor a aktuální stres. Stejný řez má jiný dopad na mladý vitální strom a na starý strom s malou funkční listovou plochou. Posuzuje se i fenologie a druhově specifická schopnost ohraničovat poškození; cílem je odebírat jen to, co je nutné.',
          'Okolí určuje provozní cíl i bezpečnost práce. Zaznamenávají se lidé, doprava, majetek, elektrická vedení, podzemní sítě, chráněné organismy, přístup techniky a cílová zóna dopadu. Hnízdo, dutina nebo mikrohabitat není „odpad“; může mít právní a ekologický význam. Práce se odloží nebo upraví, pokud nelze ochránit lidi, strom, půdu a živočichy.',
          'Rozhodnutí o řezu neznamená oprávnění jej provést. Práce ve výšce, s motorovou pilou v koruně, u elektrického vedení, na narušeném stromě nebo s řízeným spouštěním částí vyžaduje odpovídající výcvik, vybavení, záchranný plán a často specializovaného arboristu. Pozemní zahradník musí umět riziko rozpoznat a bezpečně předat, ne improvizovat za hranicí kompetence.',
        ],
        table: {
          caption: 'Od neurčitého požadavku k odborné specifikaci',
          headers: ['Neurčitý požadavek', 'Co je nutné zjistit', 'Příklad měřitelné specifikace', 'Nevhodná zkratka'],
          rows: [
            ['„Zmenšit strom“', 'důvod, směr, metry, vitalita a stabilita', 'lokální redukce k fasádě o určenou délku na vhodné postranní větve', 'plošně useknout vrchol'],
            ['„Prosvětlit korunu“', 'které větve a jaký problém', 'odstranit konkrétní křížící se a poškozené větve do stanoveného průměru', 'rovnoměrně vybrat vnitřek koruny'],
            ['„Zvednout korunu“', 'cílový profil a poměr koruny ke kmeni', 'postupné odstranění či subordinace označených větví', 'jednorázově odstranit všechny spodní větve'],
            ['„Omladit keř“', 'způsob obnovy a kvetení', 've třech letech odstranit nejstarší výhony od báze', 'sestřihnout celý keř ve stejné výšce'],
            ['„Zdravotní řez“', 'konkrétní vady, rozsah a minimální průměr', 'odstranit suché a zlomené větve nad cílovou zónou dle specifikace', 'použít název bez popisu výsledku'],
          ],
        },
        procedure: {
          title: 'Předřezový průzkum ze země',
          purpose: 'Stanovit nebo odmítnout zásah před prvním řezem a určit, zda je nutné odborné posouzení.',
          steps: [
            'Potvrďte taxon, vlastnictví, ochranný režim, zadání a důvod zásahu; nejasné povolení řešte před prací.',
            'Obejděte strom ze všech stran a prohlédněte bázi, kmen, větvení, korunu, suché části, dutiny, plodnice a náklon.',
            'Zmapujte cíle pádu, veřejný provoz, majetek, vedení, přístup, stav půdy a možnost vymezení pracoviště.',
            'Zkontrolujte hnízda, obsazené dutiny a další biotopové prvky; stanovte právní či odbornou konzultaci.',
            'Určete cíl, technologii, dotčené části, maximální velikost ran a rozsah odebrané listové plochy.',
            'Vyhodnoťte kompetenci, pracovní polohu, nástroje, záchranu a počasí; při nejistotě práci nepřijímejte.',
            'Pořiďte výchozí fotografie a zakreslete plán; změny zjištěné v koruně musí schválit odpovědná osoba.',
          ],
          record: 'Identita stromu, poloha, cíl, technologie, rozsah, vady, biotopy, rizika, povolení, fotografie a osoba schvalující změnu.',
        },
      },
      {
        title: '2. Biologie rány a technika jednotlivého řezu',
        paragraphs: [
          'Strom poškození nezhojí návratem původní tkáně. Chemicky a anatomicky je ohraničí a z okrajů jej postupně překrývá nové dřevo. Úspěch závisí na vitalitě, druhu, velikosti a poloze rány i na zachování přirozené ochranné zóny větve. Velká rána zpřístupní větší objem dřeva a uzavírá se déle; proto je výhodnější včas odstranit nebo podřídit malé problematické větve.',
          'U nasazení běžné boční větve se hledá větevní límeček či kroužek a hřebínek kůry. Odstraňovací řez vede těsně vně ochranné zóny, nesmí být zarovnaný s kmenem ani ponechat dlouhý pahýl. U kodominantního větvení nemusí být typický límeček vyvinutý a spoj může obsahovat zarostlou kůru; takovou strukturu nelze řešit slepým geometrickým pravidlem.',
          'Redukční řez zkracuje větev na vhodnou postranní větev nebo výhon schopný převzít tok a architektonickou roli. Třetinové pravidlo je vodítko: ponechaná větev má mít dostatečný průměr vůči odstraňované části, aby omezila masivní tvorbu výmladků a odumírání pahýlu. Není to povolení odstranit třetinu koruny. Přesný výběr se řídí architekturou, vitalitou a technologií.',
          'Těžká větev se odstraňuje postupně, aby její hmotnost nestrhla kůru a lýko pod řezem. První odlehčovací řez zespodu přeruší dráhu trhliny, druhý shora odstraní hmotnost a třetí dokončí pahýl u větevního kroužku. Rána má být hladká bez třepení. Běžné zatírání není standardní náhradou správného řezu; výjimka musí vycházet z konkrétního patogenu, taxonu nebo metodiky.',
        ],
        table: {
          caption: 'Základní typy řezů na větev a jejich účel',
          headers: ['Typ řezu', 'Co se zachovává', 'Správný výsledek', 'Typická chyba'],
          rows: [
            ['Odstraňovací na větevní kroužek', 'ochranná zóna kmene / mateřské větve', 'rána vně límečku bez pahýlu', 'řez na plocho do kmene'],
            ['Redukční na postranní větev', 'životaschopný pokračující výhon', 'plynulé pokračování a přiměřený průměr', 'řez na slabý výhon nebo do holého dřeva'],
            ['Řez na pupen', 'zvolený zdravý pupen', 'malý šikmý řez s krátkým odstupem', 'pahýl nebo poškození pupenu'],
            ['Třístupňové odstranění', 'kůra a kroužek po odlehčení', 'bez stržení pod místem řezu', 'jediný horní řez těžké větve'],
            ['Řez výmladku', 'zdravá kůra v místě původu', 'odstranění bez velké rány v okolí', 'ponechaný dlouhý čípek či oděr kmene'],
          ],
        },
        procedure: {
          title: 'Odstranění těžší větve bez stržení kůry',
          purpose: 'Oddělit hmotnost větve dříve, než se provede konečný přesný řez.',
          steps: [
            'Určete hmotnost, napětí, směr pohybu a cílovou zónu; při riziku nekontrolovaného pádu použijte kvalifikovaný tým.',
            'Najděte větevní hřebínek a kroužek a označte konečnou řeznou linii vně ochranné zóny.',
            'Ve vzdálenosti od konečné linie proveďte mělký spodní zářez, který zastaví trhání kůry.',
            'O něco dále od kmene řežte shora, dokud se odlehčená část bezpečně neoddělí.',
            'Zbylý lehký pahýl odřízněte po označené linii bez zásahu do kroužku a bez přidržování rukou v dráze nástroje.',
            'Zkontrolujte hladkost, stržení kůry, poškození okolních větví a pracoviště; ránu bez důvodu nenatírejte.',
          ],
          record: 'Strom a větev, důvod, konečný průměr rány, použitá technika, poškození, fotografie před a po a pracovník.',
        },
        warning: 'Kodominantní spoj se zarostlou kůrou nemusí mít čitelný větevní kroužek a jeho odstranění může vytvořit velmi velkou ránu. U silných os nejde o běžný „řez podle kroužku“, ale o strukturální rozhodnutí vyžadující arboristické posouzení.',
      },
      {
        title: '3. Výchova mladého stromu a prevence budoucích velkých ran',
        paragraphs: [
          'Výchovný řez vytváří architekturu slučitelnou s přirozeným habitem a budoucím provozem. Nejde o okamžitě symetrickou korunu. Určuje se dočasný nebo trvalý terminál podle formy taxonu, vhodně rozmístěné kosterní větve, postupná výška nasazení koruny a větve, které je třeba ponechat dočasně pro tloustnutí kmene a ochranu kůry. Převislé, vícekmenné a sloupovité kultivary se nevnucují do schématu jediného průběžného kmene.',
          'Konkurenční výhon se nemusí vždy odstranit naráz. Subordinace jeho zkrácením zachová listovou plochu a menší ránu, ale převede růstovou převahu na cílovou osu. V dalších cyklech se větev znovu podřídí nebo odstraní, dokud je malá. Tím se minimalizují rány na kmeni a zároveň se zabrání vzniku těsného kodominantního spojení s vysokým budoucím zatížením.',
          'Větve pod budoucím průchozím profilem se odstraňují postupně. Předčasné vyholení kmene snižuje listovou plochu, omezuje tloustnutí a vystavuje kůru slunci; pozdní odstranění vytvoří velké rány. Plán proto pracuje s cílovou výškou, aktuálním poměrem koruny a kmene, rychlostí růstu a intervalem návratu. Každý cyklus upraví malé množství nejdůležitějších struktur.',
          'Povýsadbový řez napravuje poškození a závažné strukturální vady, ale nemá automaticky kompenzovat ztrátu kořenů plošným zkrácením. Prioritou po výsadbě je vodní režim a uchování funkční listové plochy. Intenzivnější výchova začíná podle ujmutí a vitality; strom ve stresu se nejprve stabilizuje, pokud není nutné odstranit bezpečnostní problém.',
        ],
        table: {
          caption: 'Priority výchovného řezu',
          headers: ['Priorita', 'Co hledat', 'Obvyklá reakce', 'Dlouhodobý důvod'],
          rows: [
            ['Poškozené a mrtvé části', 'zlom, oděr, odumření', 'přesný řez jen nutné části', 'zabránit dalšímu trhání a odstranit riziko'],
            ['Konkurenční osy', 'podobně silný vzpřímený výhon', 'včasná subordinace, později případné odstranění', 'omezit slabé kodominantní spojení'],
            ['Nevhodně přeslenité větve', 'více silných větví v jedné úrovni', 'výběr a postupné podřízení', 'rozložit zatížení a rány po kmeni'],
            ['Dočasné spodní větve', 'budoucí kolize s profilem', 'ponechat malé, průběžně podřizovat', 'tloustnutí a ochrana kmene bez pozdní velké rány'],
            ['Křížení a tření', 'kontakt s budoucím poškozením', 'vybrat větev podle role a kvality spoje', 'předejít ráně a zahuštění'],
          ],
        },
        procedure: {
          title: 'Návrh třícyklové výchovy mladého stromu',
          purpose: 'Rozdělit strukturální změnu do malých, předvídatelných zásahů.',
          steps: [
            'Určete přirozenou architekturu taxonu, cílový profil, konečnou funkci a očekávaný prostor koruny.',
            'Označte cílovou osu či osy, perspektivní kosterní větve, konkurenty, dočasné větve a poškození.',
            'V prvním cyklu odstraňte jen kritické části a silné konkurenty raději podřiďte vhodnému postrannímu výhonu.',
            'Zkontrolujte, že po řezu zůstává dostatečná a rovnoměrně rozmístěná živá koruna; nevytvářejte shluk ran.',
            'Pro druhý a třetí cyklus zakreslete, které větve se znovu podřídí, kdy se odstraní a jak se bude zvyšovat profil.',
            'Interval stanovte podle růstu a vady, obvykle v řádu několika vegetačních období, nikoli bez kontroly na pevné datum.',
            'Při každé návratové návštěvě plán přehodnoťte podle skutečné reakce stromu.',
          ],
          record: 'Fotografie s označenými osami a větvemi, cílový profil, řezy prvního cyklu, plán dalších cyklů, interval a kritérium změny.',
        },
        fieldExample: { title: 'Příklad: dvě konkurenční špičky po zlomu terminálu', text: 'Na mladém stromu vyrostly dvě podobně silné vzpřímené osy. Okamžité odstranění jedné u kmene by vytvořilo zbytečně velkou ránu a výrazně snížilo listovou plochu. Vybere se perspektivnější pokračování, druhá osa se redukuje na vhodnou boční větev a odstraní až v dalším cyklu, pokud je strom vitální a rána bude menší.' },
      },
      {
        title: '4. Dospělý strom: zdravotní, bezpečnostní a redukční zásahy',
        paragraphs: [
          'U dospělého stromu je cílem stabilita a funkce při co nejmenší ztrátě živé koruny. Zdravotní zásah se zaměřuje na jasně definované poškozené, odumřelé, křížící se či jinak problematické části podle specifikace. Bezpečnostní řez řeší bezprostředně relevantní suché či zlomené větve vůči cílové zóně; není synonymem kompletního estetického vyčištění koruny.',
          'Lokální redukce mění konkrétní část koruny kvůli překážce, profilu nebo stabilitě. Koncové větve se převádějí na vhodné postranní větve a zachovává se přirozený obrys v rozumné míře. Rozsah se popisuje směrem, délkou v metrech, výslednou vzdáleností a maximálním průměrem ran, ne pouze procentem. Stejné procento výšky a objemu koruny nejsou totožné veličiny.',
          'Obvodová redukce snižuje pákové působení na celý strom nebo jeho významnou část a musí vycházet z hodnocení stability. Odebrání malé délky na periferii může výrazně snížit moment, aniž by vznikly velké rány uvnitř koruny. Špatně provedené sesazení neboli topping odřízne osy bez vhodných pokračování, ničí architekturu, otevírá velké rány a vyvolává svazky slabě připojených výmladků. Není běžnou metodou zmenšení zdravého stromu.',
          'Starý nebo biotopově významný strom nemusí odpovídat modelu mladé symetrické koruny. Stabilní suché dřevo, dutiny a odumírající části mohou mít vysokou ekologickou hodnotu a odstraňují se podle skutečného rizika a cílové zóny. U stromu výjimečné hodnoty se volí speciální metodika, menší opakované zásahy a často kombinace s úpravou provozu nebo stanoviště.',
        ],
        table: {
          caption: 'Rozlišení hlavních technologií dospělých stromů',
          headers: ['Technologie / cíl', 'Rozsah', 'Co musí specifikace uvést', 'Co jí není'],
          rows: [
            ['Zdravotní řez', 'vybrané vadné větve v celé koruně', 'typ vady a minimální / maximální průměr', 'automatické odvětvení každé suché větvičky'],
            ['Bezpečnostní řez', 'části relevantní pro aktuální bezpečnost', 'cílová zóna a nebezpečné části', 'celková redukce koruny'],
            ['Lokální redukce k překážce', 'jedna strana nebo sektor', 'směr, metry, výsledný odstup a průměr ran', 'jednostranné useknutí bez postranních větví'],
            ['Lokální stabilizační redukce', 'zatížená větev či sektor', 'důvod stability a rozsah periferie', 'odstranění kosterní větve bez hodnocení'],
            ['Obvodová redukce', 'periferie významné části koruny', 'výsledné rozměry a procento listové plochy', 'topping nebo sesazení na pahýly'],
            ['Úprava profilu', 'spodní či boční větve v koridoru', 'požadovaná výška/šířka a etapizace', 'vyholení velké části kmene najednou'],
          ],
        },
        warning: 'Viditelná dutina nebo plodnice neříká sama o sobě, zda strom musí být pokácen nebo seřezán. Zároveň ji nelze ignorovat. Význam závisí na rozsahu, druhu dřeviny a houby, zatížení, reakčním růstu a cílové zóně; rozhodnutí patří kvalifikovanému hodnotiteli stromů.',
      },
      {
        title: '5. Keře, růže a popínavé dřeviny: řez podle obnovy a kvetení',
        paragraphs: [
          'Keř nemá automaticky zmenšenou stromovou korunu. Některé druhy pravidelně obnovují výhony od báze, jiné stavějí trvalou kostru a ze starého dřeva raší slabě. Základní volba je mezi průklestem celých nejstarších výhonů u země, zkrácením na postranní výhon, lehkým tvarováním a výjimečným hlubokým zmlazením. Plošné sestřižení všech konců vytváří hustý obal a holé vnitřní části a často ničí přirozený habitus.',
          'Termín se váže k místu založení květních pupenů. Keře kvetoucí brzy na výhonech vytvořených v minulém roce se obnovují převážně po odkvětu, aby měly čas založit nové kvetoucí dřevo. Druhy kvetoucí na koncích letošních výhonů se často řežou před začátkem růstu. Toto pravidlo má výjimky podle taxonu, klimatu a cíle; před řezem se ověřuje konkrétní skupina a poloha pupenů.',
          'Obnovovací řez od báze odstraňuje v každém cyklu část nejstarších nebo poškozených výhonů a ponechává věkově smíšenou kostru. Zmlazení celé rostliny na nízkou bázi je mnohem silnější zásah a funguje pouze u druhů schopných spolehlivě rašit ze starého dřeva nebo kořenového krčku. U oslabeného, stálezeleného nebo málo regenerujícího keře může vést k úhynu.',
          'Růže se řežou podle skupiny a způsobu kvetení. Jednou kvetoucí pnoucí a sadové růže nesou významnou část květů na starším dřevě, opakovaně kvetoucí skupiny se vedou jinak. U popínavých dřevin se rozlišuje hlavní trvalá kostra a boční kvetoucí obrost; výhony se vyvazují podle mechanismu přichycení a opora se kontroluje na budoucí hmotnost. Řez nemůže nahradit poddimenzovanou konstrukci.',
        ],
        table: {
          caption: 'Rozhodování o řezu keře',
          headers: ['Růstový typ', 'Kde vzniká nový růst / květ', 'Preferovaný zásah', 'Riziko chybného řezu'],
          rows: [
            ['Bázově obnovující opadavý keř', 'nové výhony od země, často květ na loňském dřevě', 'průběžně odstranit nejstarší výhony od báze', 'koule mladých konců nad starou holou bází'],
            ['Keř kvetoucí na letošním dřevě', 'nové jarní výhony', 'druhově přiměřený předjarní/jarní řez', 'pozdní řez odstraní květní výhony'],
            ['Časně kvetoucí keř na starším dřevě', 'pupeny založené předchozí sezonu', 'obnova po odkvětu', 'zimní řez odstraní většinu květů'],
            ['Stálezelený kosterní keř', 'omezené rašení ze starého dřeva', 'lehký selektivní řez v bezpečném termínu', 'hluboké zmlazení do holého dřeva'],
            ['Tvarovaný živý plot', 'hustý povrch na pravidelně řezaném obrostu', 'kuželovitý profil a správný termín', 'širší vršek zastíní bázi; řez do neobnovujícího dřeva'],
          ],
        },
        procedure: {
          title: 'Tříletá obnova přestárlého bázově rašícího keře',
          purpose: 'Obnovit věkovou strukturu bez jednorázové ztráty celé koruny a kvetení.',
          steps: [
            'Určete taxon, schopnost bazální obnovy, dobu kvetení, vitalitu a přítomnost mladých náhradních výhonů.',
            'Po vhodném termínu označte odlišně nejstarší, střední, mladé, poškozené a křížící se výhony.',
            'V prvním roce odstraňte u báze pouze přiměřenou část nejstarších výhonů a zachovejte nejlepší mladé náhrady.',
            'Výhony nekrátíte plošně v jedné výšce; potřebnou redukci veďte na přirozenou boční větev.',
            'Sledujte reakční růst, vodu a kvetení a ve druhém roce upravte plán podle skutečné obnovy.',
            'Ve třetím cyklu dokončete odstranění přestárlých os a stabilizujte věkově smíšenou strukturu.',
          ],
          record: 'Taxon, kvetení, počet výhonů podle věku, odebrané osy v jednotlivých letech, fotografie báze a reakce.',
        },
      },
      {
        title: '6. Ovocný řez: vztah růstu, plodnosti, světla a podnože',
        paragraphs: [
          'Ovocný strom je zároveň dlouhověká dřevina a produkční systém. Řez rozděluje světlo, udržuje přístupnou korunu, obnovuje plodonosný obrost a řídí zatížení, ale nesmí se oddělit od podnože, plodnosti, výživy a ohýbání větví. Silný řez vitálního neplodícího stromu často podpoří další vegetativní růst; slabě rostoucí přetížený strom může potřebovat probírku plodů, půdní nápravu a obnovu dřeva více než další redukci.',
          'Apikální dominance a poloha větve ovlivňují reakci. Vzpřímený výhon má silný růstový tah, vodorovnější poloha často tlumí prodlužování a podporuje tvorbu plodného obrostu, ale úplné přetížení pod vodorovnou polohu může vyvolat výmladky na horní straně. Vyvazování a rozvírání mladých větví může změnit architekturu s menší ránou než jejich pozdější odstranění.',
          'Druhy a odrůdy se liší místem plodnosti. Jabloň a hrušeň často nesou významnou část úrody na krátkém víceletém obrostu, broskvoň převážně na jednoletých výhonech a některé višně na prodlužujícím se mladém dřevě. Neznalost plodonosného dřeva vede buď k odstranění úrody, nebo k zestárnutí a vyholení koruny. Před řezem se rozlišují růstové a květní pupeny a hodnotí minulá plodnost.',
          'Zimní řez v klidu obvykle vyvolává silnější růstovou reakci, zatímco letní zásah omezuje aktuální listovou plochu a může růst tlumit; přesný účinek závisí na termínu, druhu a rozsahu. Peckoviny mají specifická infekční rizika a termín se řídí místní metodikou a zdravotním stavem. Řez po sklizni nebo za aktivního růstu není univerzální pravidlo pro každý druh a každé klima.',
        ],
        table: {
          caption: 'Příklad vztahu plodonosného dřeva a řezu',
          headers: ['Skupina', 'Časté místo plodnosti', 'Cíl řezu', 'Typická chyba'],
          rows: [
            ['Jabloň / hrušeň', 'krátký obrost na dvouletém a starším dřevě podle odrůdy', 'světlo, obnova obrostu, rovnováha růstu', 'odstranit všechny krátké plodné útvary jako „vlky“'],
            ['Broskvoň', 'jednoleté výhony', 'každoroční obnova vhodných plodných výhonů', 'ponechat stárnoucí vyholené větve bez náhrady'],
            ['Višeň — některé typy', 'jednoleté dřevo a prodlužující se výhony', 'zabránit vyholování postupnou obnovou', 'opakovaně zkracovat bez náhradního růstu'],
            ['Rybíz', 'liší se podle druhu; černý více na mladším dřevě', 'obnova výhonů od báze podle druhu', 'stejný řez černého, červeného a bílého rybízu'],
            ['Réva', 'letorosty z oček na jednoletém dřevě', 'ponechat přesný počet a polohu oček podle systému', 'řez bez znalosti tažně/čípku a růstové síly'],
          ],
        },
        fieldExample: { title: 'Příklad: silně rostoucí jabloň bez úrody', text: 'Každou zimu je koruna hluboce zkrácena. Strom reaguje množstvím vzpřímených výhonů, koruna se zahušťuje a plodnost se oddaluje. Náprava začíná posouzením podnože, dusíku, polohy větví a minulých řezů; následuje omezený selektivní řez, práce s úhly mladých větví a letní kontrola, nikoli další plošné zimní zkrácení.' },
      },
      {
        title: '7. Hygiena, dokončení, kontrola kvality a bezpečné předání',
        paragraphs: [
          'Nástroj se volí podle průměru a polohy tak, aby vytvořil hladkou ránu bez drcení. Tupé nůžky třepí pletivo a zvyšují potřebnou sílu; příliš malé nůžky nejsou náhradou pily. Čištění odstraňuje piliny, pryskyřici a půdu, dezinfekce se používá tam, kde je reálné riziko přenosu patogenu, mezi hostiteli či lokalitami podle biologické bezpečnosti. Dezinfekce špinavého povrchu není spolehlivá.',
          'Odřezané části se nenechávají nekontrolovaně padat přes živou korunu ani na kořenový prostor. Mechanizace nesmí zhutnit půdu a stupačky poškozující živé části stromu se při řezu nepoužívají. Infikovaný materiál, části s invazním organismem a běžná čistá štěpka se třídí podle rizika a právních požadavků. Přesun dřeva a půdy mezi lokalitami může šířit organismy i tehdy, když nářadí vypadá čistě.',
          'Kontrola po řezu porovnává dílo se specifikací, ne s pocitem „koruna je lehčí“. Hodnotí se zachování přirozené architektury, přesnost a velikost ran, pahýly, stržená kůra, množství odebrané živé plochy, poškození okolí a splnění průjezdného nebo bezpečnostního cíle. Fotografie z téhož místa před a po umožní odlišit skutečný rozsah od optického dojmu.',
          'Následná kontrola sleduje reakční výhony, odumírání částí, trhliny, stabilitu a opakování provozního konfliktu. Velká tvorba výmladků není důkazem „omlazení“, ale často reakce na silnou ztrátu koruny. Specifikace musí říci, zda je budoucí péče součástí zakázky. Strom s pravidelným historickým tvarem, sekundární korunou nebo redukovanou kostrou vyžaduje trvalý cyklus; jednorázový zásah jej neučiní bezúdržbovým.',
        ],
        table: {
          caption: 'Přejímací vady řezu',
          headers: ['Vada', 'Jak ji poznat', 'Důsledek', 'Reakce'],
          rows: [
            ['Řez do kroužku / kmene', 'oválná velká rána, odstraněný límeček', 'ztráta ochranné zóny', 'zdokumentovat; další „zarovnání“ škodu zvětší'],
            ['Pahýl', 'dlouhá část bez funkčního pokračování', 'odumírání a slabé překrytí', 'opravit jen pokud lze bez větší škody'],
            ['Stržená kůra', 'rána pokračuje pod řez', 'větší poškození lýka a kambia', 'ošetřit okraj jen odborně, zaznamenat příčinu'],
            ['Topping', 'osy ukončené bez vhodných postranních větví', 'velké rány a nestabilní výmladky', 'nepřebírat jako standardní redukci; nový dlouhodobý plán'],
            ['Přehnané vyvětvení', 'malá koruna vysoko na kmeni', 'horší tloustnutí a mechanický poměr', 'zastavit další odstraňování, plánovat obnovu'],
            ['Lví ocasy', 'vnitřní obrost odstraněn, hmota na koncích', 'vyšší pákové zatížení a úžeh', 'chybu neopravovat dalším plošným odlistěním'],
          ],
        },
        procedure: {
          title: 'Přejímka dokončeného řezu stromu',
          purpose: 'Prokázat splnění cíle, rozsahu, biologické kvality a ochrany stanoviště.',
          steps: [
            'Porovnejte strom z určených pohledů s výchozími fotografiemi a přesnou specifikací zásahu.',
            'Ověřte splnění cílového profilu, odstupu, označených větví a limitu rozsahu živé koruny.',
            'Dalekohledem nebo z bezpečné pracovní pozice zkontrolujte typické řezy, pahýly, stržení a poranění ponechaných částí.',
            'Prohlédněte kmen, kořenový prostor, okolní dřeviny, povrchy a majetek na poškození během práce.',
            'Potvrďte odstranění odpadu, hygienický režim a správné nakládání s rizikovým biologickým materiálem.',
            'Sepište odchylky, opravy, které lze provést bez zvětšení škody, a vady, jež se pouze dokumentují a sledují.',
            'Stanovte termín následné kontroly a odpovědnost za reakční růst, opakovaný řez nebo další hodnocení stability.',
          ],
          record: 'Specifikace, fotografie před/po, odebrané části a rozsah, kontrola ran, škody, odchylky, datum a plán následné péče.',
        },
        warning: 'Textová kapitola nemůže naučit bezpečnou práci s motorovou pilou, ve výšce ani v zatížené koruně. Tyto činnosti vyžadují řízený praktický výcvik, vybavení, kontrolu kompetence a záchranný systém; teoretická znalost řezu není kvalifikací pro rizikové provedení.',
      },
    ],
    sources: [
      { title: 'SPPK A02 002:2025 — Řez stromů, II. revize', organisation: 'Agentura ochrany přírody a krajiny ČR', url: 'https://aopk.gov.cz/documents/20121/9000799/SPPK%2BA02%2B002%2B%C5%98ez%2Bstrom%C5%AF_II%2Brevize_2025_ZM%C4%9ANOV%C3%81%2BVERZE.pdf', scope: 'česká terminologie, zásady řezu, velikost ran, technologie a kontrola kvality' },
      { title: 'European Tree Pruning Standard', organisation: 'European Arboricultural Standards', url: 'https://www.europeanarboriculturalstandards.eu/etps', scope: 'evropský rámec pro výchovu, udržovací a redukční řezy a biologickou bezpečnost' },
      { title: 'Tree Pruning Essentials', organisation: 'Purdue University Extension', url: 'https://extension.purdue.edu/extmedia/fnr/fnr-506-w.pdf', scope: 'větevní kroužek, třístupňový řez, redukce a reakce stromu' },
      { title: 'RHS Pruning Groups', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/pruning/rhs-pruning-groups', scope: 'řez keřů, růží a popínavek podle kvetení a růstové skupiny' },
      { title: 'How to Prune a Tree', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/plants/types/trees/pruning-guide', scope: 'praktické řezy na pupen a kroužek, termín a hygiena nástrojů' },
      { title: 'SPPK A02 003 — Výsadba a řez keřů a lián', organisation: 'Agentura ochrany přírody a krajiny ČR', url: 'https://aopk.gov.cz/documents/20121/8775398/SPPKA02003_VYSADBA%2BA%2BREZ%2BKERU_REVIZE%2BI_k%2Bvyd%C3%A1n%C3%AD2022v2.pdf', scope: 'odborný rámec řezu keřů, živých plotů a lián' },
      { title: 'Level 2 Certificate in the Principles and Practices of Horticulture', organisation: 'Royal Horticultural Society', url: 'https://www.rhs.org.uk/education-learning/pdf/qualifications/level-2/level-2-cert-in-principles-and-practices.pdf', scope: 'profesní kompetence, předřezový průzkum a praktická přesnost řezů' },
    ],
  },
};
