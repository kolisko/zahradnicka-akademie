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
};
