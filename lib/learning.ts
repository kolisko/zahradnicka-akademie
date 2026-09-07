export type LearningBlock = { heading: string; text: string; sourceIds: string[]; kind?: 'explanation' | 'worked' | 'limit' };
export type LearningLesson = { id: string; moduleId: string; title: string; objective: string; blocks: LearningBlock[]; exerciseIds: string[] };

export const learningLessons: LearningLesson[] = [
  {
    id: 'davka-hnojiva', moduleId: 'pece', title: 'Výpočet dávky hnojiva včetně vedlejších živin',
    objective: 'Převést doporučenou dávku živiny na množství výrobku a odhalit nevyhovující poměr živin.', exerciseIds: ['pece-n', 'pece-bilance'],
    blocks: [
      { heading: 'Co musíte mít před výpočtem', text: 'Rozbor musí patřit dané ploše a plodině. Z laboratorní koncentrace samotné nelze prostým odečtením vypočítat hnojení: doporučení závisí na metodě extrakce, půdě a kalibraci pro plodinu. Určete cílovou dávku skutečné živiny, započtené organické vstupy a období, pro které platí. Čísla N–P–K na běžném hnojivu vyjadřují N, P₂O₅ a K₂O, nikoli tři hmotnostně zaměnitelné prvky.', sourceIds: ['fertilizer'] },
      { heading: 'Řešený příklad: záhon 120 m²', kind: 'worked', text: 'Výukové zadání, nikoli doporučená dávka pro konkrétní rostlinu: zbývá dodat 4 g N/m² a výrobek má 10 % N. Potřebný dusík: 120 × 4 = 480 g N. Hmotnost výrobku: 480 ÷ 0,10 = 4 800 g = 4,8 kg. Kontrola opačným směrem: 4 800 × 0,10 ÷ 120 = 4 g N/m². Zápis obsahuje plochu, jednotky, koncentraci z etikety a výslednou hmotnost.', sourceIds: [] },
      { heading: 'Proč nestačí trefit dusík', kind: 'worked', text: 'Má-li tentýž výrobek označení 10–5–8, dávka 4,8 kg současně přidá 240 g P₂O₅ a 384 g K₂O; na metr čtvereční tedy 2 g a 3,2 g. Jestliže rozbor další fosfor neodůvodňuje, tento výrobek nemusí být vhodný. Množství výrobku a dostupnost živiny v dané sezoně jsou odlišné veličiny, zvlášť u organických materiálů.', sourceIds: ['fertilizer'] },
      { heading: 'Výjimky a kontrola po zásahu', kind: 'limit', text: 'Výpočet nepovoluje překročit etiketu a neurčuje termín aplikace. Nejprve ověřte vodní režim, možnost rovnoměrného rozhozu a riziko odnosu. Ve výukovém protokolu oddělte vypočteno, skutečně aplikováno a naměřený výsledek. Pokud po zásahu růst nereaguje, vraťte se k původní diagnóze; opakování stejné dávky není důkaz správnosti.', sourceIds: ['diagnostics'] },
    ],
  },
  {
    id: 'bilance-zavlahy', moduleId: 'zavlaha', title: 'Od evapotranspirace k litrům a minutám závlahy',
    objective: 'Sestavit bilanci a odlišit čistou potřebu kořenů od dodaného objemu.', exerciseIds: ['zavlaha-objem', 'zavlaha-cas'],
    blocks: [
      { heading: 'Proměnné a jejich význam', text: 'Referenční evapotranspirace ETo popisuje atmosférickou poptávku pro referenční porost. Koeficient Kc ji upravuje pro plodinu a růstovou fázi: ETc = ETo × Kc. Efektivní srážka je pouze část využitelná v kořenové zóně. Půdní bilance dále zahrnuje počáteční zásobu, kapilární přítok, odtok a průsak. Stejná srážka na těžké zhutněné půdě a v dobře strukturovaném záhonu nemusí mít stejný účinek.', sourceIds: ['fao', 'fao-water'] },
      { heading: 'Řešený příklad se zadanými předpoklady', kind: 'worked', text: 'Pro cvičení: ETo = 5 mm/den, Kc = 0,8, interval 3 dny, efektivní srážka 2 mm. Předpokládáme stejnou počáteční a cílovou zásobu, nulový kapilární přítok a již započtené ostatní ztráty. ETc = 4 mm/den; čisté doplnění = 3 × 4 − 2 = 10 mm. Na 60 m² jde o 600 litrů: 1 mm na 1 m² je 1 litr. Při zadané účinnosti aplikace 0,8 musí soustava dodat 600 ÷ 0,8 = 750 litrů.', sourceIds: [] },
      { heading: 'Převod na čas a ověření', kind: 'worked', text: 'Změřený průtok celé sekce je 300 l/h. Čas pro dodání 750 litrů je 750 ÷ 300 = 2,5 h = 150 minut. Průtok jedné kapkovací trysky se nesmí zaměnit za průtok celé sekce. Před spuštěním zkontrolujte filtry, netěsnosti a směr postřiku. U nevyrovnané distribuce nelze opravu nahradit pouhým prodloužením času pro celý záhon.', sourceIds: ['epa'] },
      { heading: 'Kdy model přestává platit', kind: 'limit', text: 'Číselný výsledek platí jen pro zadané předpoklady. Ověřte, zda dávku pojme kořenová zóna a zda intenzita aplikace nepřekročí vsak. Při odtoku rozdělení do cyklů řeší časování, nikoli vyšší celkovou potřebu. U čerstvě vysazeného stromu kontrolujte zvlášť původní bal. Kc ani účinnost se nepřebírají z tohoto příkladu jako univerzální konstanta.', sourceIds: ['fao'] },
    ],
  },
  {
    id: 'rajce-vedeni', moduleId: 'ovocnarstvi', title: 'Rajče: od růstového typu k rozhodnutí o zásahu',
    objective: 'Rozlišit tyčkové a keříčkové rajče a sestavit kontrolní plán péče.', exerciseIds: ['ovocnarstvi-rajce'],
    blocks: [
      { heading: 'Nejdřív růstový typ', text: 'U tyčkového rajčete (indeterminantního) pokračuje růst hlavní osy; obvykle se vede na opoře a pravidelně se odstraňují určené postranní výhony. Keříčkové (determinantní) kultivary mají odlišné větvení a postranní výhony se běžně ponechávají. Neurčujte skupinu jen podle současné výšky sazenice. Rozhodující je označení kultivaru a pěstitelský systém.', sourceIds: ['tomato'] },
      { heading: 'Péče během násady a růstu plodů', text: 'Udržujte souvislou dostupnost vody a sledujte skutečnou vlhkost kořenového prostoru. Výkyvy zvyšují riziko poruch kvality plodů. Opora nesmí zaškrcovat zesilující stonek. Listy, výhony a květenství před zásahem bezpečně rozlište; odstranění listu není totéž co vyštipnutí zálistku. Výživu odvozujte od plodiny a substrátu, ne od požadavku na co nejtmavší listy.', sourceIds: ['tomato'] },
      { heading: 'Modelová zakázka: dvě neoznačené řady', kind: 'worked', text: 'Zadání: klient chce „vyštipovat všechna rajčata“, ale etikety se ztratily. Správný výstup začíná dohledáním sadby a odrůd. Do evidence uveďte řadu, růstovou skupinu, způsob vedení a odpovědnou osobu. U nejasné skupiny odložte nevratné odstraňování výhonů. Po potvrzení identity vyberte několik rostlin pro kontrolu opor a vlhkosti; teprve potom stanovte opakovaný úkon pro celou řadu.', sourceIds: [] },
      { heading: 'Rozsah doporučení', kind: 'limit', text: 'Termín výsadby v britské příručce není automaticky termínem pro českou mrazovou kotlinu. Plán pracuje s předpěstováním, otužením a místním rizikem mrazu. Tento postup neřeší ochranu konkrétním přípravkem; ta vyžaduje diagnózu a ověření českého povolení.', sourceIds: ['tomato', 'por'] },
    ],
  },
  {
    id: 'mrkev-vysev', moduleId: 'ovocnarstvi', title: 'Mrkev: založení porostu a diagnostika nerovnoměrného vzcházení',
    objective: 'Připravit výsevní plán a odlišit závadu osiva od závady seťového lůžka.', exerciseIds: ['ovocnarstvi-mrkev'],
    blocks: [
      { heading: 'Půda a výsev', text: 'Mrkev se běžně vysévá přímo na konečné stanoviště. Délku kořene kultivaru přizpůsobte hloubce a kamenitosti půdy. Hroudy, kameny a nepříznivá struktura mohou deformovat kořen; nově přidaný hnůj není nápravou takového problému. Seťové lůžko musí umožnit rovnoměrnou hloubku výsevu a kontakt semene s vlhkou půdou. Hustý porost je nutné včas jednotit podle cílové velikosti kořenů.', sourceIds: ['carrot'] },
      { heading: 'Ochrana vzcházení', text: 'Povrch kontrolujte po srážce i při vysychání. Ochranná síť proti pochmurnatce musí mít utěsněné okraje; pouhé položení na část porostu přístup škůdce neřeší. Termín, hloubku a spon upřesněte podle kultivaru, obalu osiva a místních podmínek. Krátké kořeny pro ranou sklizeň mají jiné prostorové zadání než dlouhé skladovací kořeny.', sourceIds: ['carrot'] },
      { heading: 'Řešený příklad: výpočet potřeby osiva', kind: 'worked', text: 'Ve cvičení potřebujete po vyjednocení 800 rostlin. Zadaná laboratorní klíčivost je 80 % a očekávané polní uplatnění vyklíčených semen 75 %. Odhad = 800 ÷ (0,80 × 0,75) = 1 333,3, tedy nejméně 1 334 semen. Jde o dva po sobě jdoucí podíly, ne o jejich součet. Odhad nenahrazuje výsevní zkoušku; při škraloupu může být skutečné uplatnění výrazně nižší.', sourceIds: [] },
      { heading: 'Kontrolní vzorek místo nového výsevu naslepo', kind: 'limit', text: 'Zapište šarži a datum výsevu. Porovnejte chybějící místa s utuženými stopami, zastíněním a závlahou. Vyjměte malý vzorek semen: nevyklíčené semeno, zahnívající klíček a semenáček uvězněný pod škraloupem představují různé pracovní hypotézy. Nový výsev do nezměněného vadného lůžka může problém zopakovat.', sourceIds: ['diagnostics'] },
    ],
  },
  {
    id: 'rybiz-dva-rezimy', moduleId: 'rez', title: 'Černý a červený rybíz: dva odlišné režimy obnovy',
    objective: 'Před řezem určit, na jak starém dřevě vzniká úroda.', exerciseIds: ['rez-rybiz'],
    blocks: [
      { heading: 'Černý rybíz — Ribes nigrum', text: 'U keřového černého rybízu je cílem průběžná obnova produktivních mladších výhonů. Staré málo výkonné větve odstraňujte u báze a ponechte vhodné mladé náhrady. Výběr se řídí věkem, vitalitou a rozmístěním větví. Plošné zakrácení všech vrcholů nerozlišuje plodonosné dřevo a neobnovuje keř stejným způsobem.', sourceIds: ['blackcurrant'] },
      { heading: 'Červený a bílý rybíz', text: 'Květní pupeny vznikají u báze loňských přírůstků a na krátkém obrostu staršího dřeva. Nosné větve tak mohou zůstávat produktivní několik let. Zachovejte vhodnou kostru a osvětlený obrost; mechanické přenesení obnovovacího řezu černého rybízu může odstranit velkou část budoucí úrody. Keř, stromek a kordon mají odlišný prostorový plán a nelze je ošetřit jedním předpisem.', sourceIds: ['redcurrant'] },
      { heading: 'Modelový pracovní list', kind: 'worked', text: 'U tří keřů zaznamenejte identitu, pěstitelský tvar, hlavní větve a loňskou plodnost. Barevně označte návrh: ponechat, odstranit, rozhodnout po kontrole. Ke každému řezu napište jeho důvod a dřevo, které má nést příští úrodu. Pokud nedokážete popsat rozdíl mezi oběma rybízy, plán ještě není připravený k provedení.', sourceIds: [] },
      { heading: 'Výjimky', kind: 'limit', text: 'Zanedbaný keř neobnovujte pouze podle tabulkového podílu starých větví. Zkontrolujte, zda má dost náhrad a zda nejde o chorobu nebo problém stanoviště. Britský kalendář řezu přizpůsobte místní dormanci a počasí; druhová fyziologie je důležitější než shodný den v kalendáři.', sourceIds: ['blackcurrant', 'redcurrant'] },
    ],
  },
  {
    id: 'rez-kvetoucich-keru', moduleId: 'rez', title: 'Zlatice, tavolník a hortenzie: termín řezu podle květního dřeva',
    objective: 'Zdůvodnit termín řezu konkrétního keře a poznat meze pravidla podle doby květu.', exerciseIds: ['rez-kvet'],
    blocks: [
      { heading: 'Loňské a letošní výhony', text: 'Zlatice a pustoryl jsou příklady keřů kvetoucích na výhonech vytvořených v předchozí sezoně. Silný předjarní řez může odstranit připravené květní pupeny; běžná údržba se proto odvozuje od ukončení kvetení. U skupin kvetoucích na nových přírůstcích lze zvolit jiný termín, například jarní řez po odeznění silných mrazů. Samotné slovo „keř“ není dostatečné zadání.', sourceIds: ['groups'] },
      { heading: 'Výjimka, která odhalí chybnou poučku', text: 'Pozdní kvetení automaticky neznamená kvetení na letošním dřevě. RHS odděluje skupinu hortenzií s květy na předchozím růstu. Před razantním řezem proto určete druh a kultivar hortenzie i typ kvetení. Obdobně růže zahrnují různé skupiny; jednou kvetoucí popínavá růže a opakovaně kvetoucí záhonová růže nemají stejný režim.', sourceIds: ['groups'] },
      { heading: 'Řešený případ: prázdná zlatice', kind: 'worked', text: 'Zlatice má po únorovém stříhání bohaté zelené výhony, ale málo květů. Pracovní hypotéza je odstranění květního dřeva, nikoli automaticky nedostatek fosforu. Ověřte termín a rozsah minulého řezu, oslunění a stav pupenů. Změna příštího termínu a sledování stejné rostliny poskytne lepší srovnání než současná změna řezu, hnojení i zálivky.', sourceIds: [] },
    ],
  },
  {
    id: 'jablon-podnoz-opyleni', moduleId: 'ovocnarstvi', title: 'Jabloň: odrůda, podnož, opora a opylení v jednom zadání',
    objective: 'Odhalit neúplnou specifikaci sadby a navrhnout kontrolu opylovacích vztahů.', exerciseIds: ['ovocnarstvi-opyleni'],
    blocks: [
      { heading: 'Jedna odrůda, různé stromy', text: 'Podnož zásadně ovlivňuje vzrůst jabloně. Údaj o odrůdě bez podnože neurčuje konečný prostorový nárok ani vhodnost zvoleného pěstitelského tvaru. Objednávka proto obsahuje odrůdu, podnož, tvar, velikost sadby a požadovanou oporu. Katalogová výška není záruka: výsledek ovlivňuje půda, péče a tvarování.', sourceIds: ['apple'] },
      { heading: 'Opylení jako síť vztahů', text: 'U běžných cizosprašných odrůd ověřte kompatibilního partnera a překryv kvetení. Doba sklizně se s dobou kvetení nesmí zaměnit. Triploidní odrůdu nepočítejte jako spolehlivého poskytovatele pylu; při návrhu samostatné skupiny se obvykle doplňují dvě vhodné diploidní odrůdy, které opylují také jedna druhou. Započítání stromů za plotem musí stát na jejich skutečné identitě a kvetení.', sourceIds: ['pollination'] },
      { heading: 'Modelový přejímací protokol', kind: 'worked', text: 'Klient objednal tři „stejně vysoké jabloně“, školka dodala stejnou odrůdu na dvou podnožích. Před výsadbou porovnejte etikety s výkazem, prostor pro každou korunu a opylovací plán. Nejasnou rostlinu označte a ověřte u dodavatele. Záměnu podnože nelze napravit tím, že všechny tři stromy vysadíte hlouběji.', sourceIds: [] },
      { heading: 'Kontrola funkce po výsadbě', kind: 'limit', text: 'Neplodnost sama neprokazuje nedostatek opylovače. Veďte záznam o kvetení, počasí, stáří, růstu a násadě. Mladý strom nebo nevhodný řez může měnit plodnost i při dostatku pylu. Při hodnocení oddělte počet květů, opylení a následný opad plůdků.', sourceIds: ['apple', 'pollination'] },
    ],
  },
  {
    id: 'ochrana-rozhodnuti', moduleId: 'ochrana', title: 'Od příznaku k rozhodnutí: kdy zásah odložit',
    objective: 'Zpracovat diferenciální diagnózu a doložit rozhodnutí o ochraně.', exerciseIds: ['ochrana-diagnoza', 'ochrana-registr'],
    blocks: [
      { heading: 'Co skutečně pozorujete', text: 'Fotografie skvrny je doklad vzhledu, nikoli průkaz příčiny. Záznam odděluje hostitele, postižený orgán, rozmístění, začátek a tempo změny. Porovnejte zdravé a postižené části a zkontrolujte nedávné zásahy. Podezřelého původce odlište od organismu, který osídlil už poškozenou tkáň. Rozumná diagnóza obsahuje i alternativu, která by vedla k jinému postupu.', sourceIds: ['diagnostics'] },
      { heading: 'Integrovaná ochrana', text: 'Ochrana začíná prevencí a sledováním. Rozhodnutí vychází z konkrétního rizika poškození, nikoli z požadavku odstranit každý hmyz. Zvažte pěstební, mechanické a biologické možnosti a způsob ověření účinku. Zásah bez navazující kontroly neukazuje, zda byla správná diagnóza ani volba metody.', sourceIds: ['ior'] },
      { heading: 'Český registr a přesné použití', text: 'Registr ÚKZÚZ je denně aktualizovaný. Před použitím ověřte konkrétní přípravek, plodinu, účel, aktuální rozhodnutí, omezení a konec povoleného používání. Shodná účinná látka ani zahraniční návod nepotvrzují české povolení konkrétního použití. Do záznamu patří identifikace podkladu a datum kontroly; výuková wiki záměrně neudržuje univerzální tabulku chemických receptů.', sourceIds: ['por'] },
      { heading: 'Řešený případ: poškození podél pojezdu', kind: 'worked', text: 'Listy zasychají pouze podél trasy staveništního vozidla, ostatní rostliny stejného druhu jsou zdravé. Ověřovací plán: historie pojezdu, profil půdy, vlhkost, kořeny a srovnávací bod mimo trasu. Teprve podle výsledku vyberte zásah. Plošný fungicid bez dalšího důkazu neověřuje hypotézu zhutnění; současný postřik a změna závlahy navíc znemožní rozlišit jejich účinky.', sourceIds: [] },
    ],
  },
  {
    id: 'rez-vetevni-krouzek', moduleId: 'rez', title: 'Odlehčení větve a kontrola konečné řezné plochy',
    objective: 'Rozpoznat účel tří řezů a odlišit konečný řez od odlehčovacího.', exerciseIds: ['rez-krouzek'],
    blocks: [
      { heading: 'Biologický cíl', text: 'Větevní kroužek a hřebínek kůry pomáhají najít rozhraní větve a mateřské osy. Konečný řez zachovává ochrannou zónu. Zaříznutí do kmene zvětšuje zranění; dlouhý pahýl naopak ponechává nevhodné zbytky větve. Nejde o požadavek na esteticky rovnou plochu s kmenem.', sourceIds: ['purdue'] },
      { heading: 'Tři odlišné funkce', text: 'Spodní odlehčovací zářez omezuje stržení kůry. Následující horní řez, dále od kmene, oddělí zatěžující část. Až potom se lehký zbytek odstraní konečným řezem vně kroužku. Tyto kroky nesmí zastřít základní otázku: lze větev na daném místě vůbec bezpečně oddělit a zachytit?', sourceIds: ['pruning'] },
      { heading: 'Modelová kontrola', kind: 'worked', text: 'Na fotografii výsledku posuďte tři nezávislé věci: zachování kroužku, délku zbytku větve a přítomnost stržené kůry. Závěr „je to hladké“ nestačí. Pokud není rozhraní rozeznatelné, do protokolu zapište nejistotu a požadovaný detail snímku; nedoplňujte pomyslnou řeznou linii z paměti.', sourceIds: [] },
      { heading: 'Hranice použití', kind: 'limit', text: 'Popis není postup pro samostatné kácení, práci s napruženou větví, výškové práce ani zásah u elektrického vedení. Kodominantní osy nemusí mít obvyklý kroužek. Velké nebo strukturálně složité zásahy vyžadují arboristické posouzení a bezpečný pracovní plán.', sourceIds: ['pruning', 'purdue'] },
    ],
  },
  {
    id: 'bezpecnost-aktualni-postup', moduleId: 'bezpecnost', title: 'Nouzový plán a změny českých standardů první pomoci 2026',
    objective: 'Zvolit okamžik přivolání pomoci a připravit použitelné údaje pro záchrannou službu.', exerciseIds: ['bezpecnost-volani'],
    blocks: [
      { heading: 'Kterou verzi studovat', text: 'Český červený kříž vydal ke standardům z roku 2023 změnové listy účinné od 1. ledna 2026. Samotné datum vydání původní učebnice tedy nestačí. Aktuální změny se týkají mimo jiné základního vyšetření, resuscitace, bezvědomí, masivního krvácení a přehřátí.', sourceIds: ['cck'] },
      { heading: 'Nereagující dospělý: neodkládat volání', text: 'Po zajištění bezpečnosti ověřte reakci. Když člověk nereaguje, přivolejte pomoc a volejte 155; normální dýchání se podle změnového listu posuzuje v průběhu hovoru. Lapavé dechy nejsou normální dýchání. Při jeho nepřítomnosti či nejistotě postupujte podle operátora, zahajte stlačování hrudníku a použijte dostupný AED. Techniku resuscitace je nutné nacvičit, samotná četba ji nenaučí.', sourceIds: ['cck-exam', 'cck-cpr'] },
      { heading: 'Modelové zadání: uzamčený areál', kind: 'worked', text: 'Pracujete za bránou 300 metrů od silnice. Do nouzové karty uveďte adresu, označení vjezdu, souřadnice, otevření brány, přístup pro sanitku a člověka pro navedení. Vyzkoušejte dostupnost lékárničky a spojení před začátkem práce. Při cvičení hovor pouze simulujte; tísňovou linku nevolejte na zkoušku.', sourceIds: [] },
      { heading: 'Jak ověřit připravenost', kind: 'limit', text: 'Každý člen týmu má umět ukázat nouzové zastavení a místo vybavení. Ve scénáři měřte čas předání přesné polohy, ne jen čas nalezení telefonu. Když instrukce v této wiki odporuje aktuálním pokynům operátora nebo platnému výcviku, řiďte se těmito pokyny a nesoulad následně nahlaste k opravě.', sourceIds: [] },
    ],
  },
];
