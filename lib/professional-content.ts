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
};
