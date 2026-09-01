export type Lesson = {
  title: string;
  lead: string;
  points: string[];
  note?: string;
};

export type Check = { question: string; answer: string };

export type Module = {
  id: string;
  title: string;
  subtitle: string;
  minutes: number;
  level: 'Základ' | 'Středně pokročilé' | 'Pokročilé';
  overview: string;
  outcomes: string[];
  lessons: Lesson[];
  checks: Check[];
};

export const modules: Module[] = [
  {
    id: 'botanika', title: 'Botanika a fyziologie', subtitle: 'Jak rostlina funguje od buňky po semeno', minutes: 210, level: 'Základ',
    overview: 'Botanika je diagnostický jazyk zahradníka. Kdo chápe, kde rostlina přijímá vodu, ukládá zásoby a zakládá pupeny, dokáže správně zalévat, řezat i přesazovat.',
    outcomes: ['Popsat stavbu a funkci rostlinných orgánů', 'Vysvětlit fotosyntézu, dýchání a vodní režim', 'Rozlišit růstové fáze a způsoby rozmnožování'],
    lessons: [
      { title: 'Rostlinná buňka a pletiva', lead: 'Buněčná stěna drží tvar, membrána řídí výměnu látek, chloroplasty zachycují světlo a vakuola udržuje napětí buněk.', points: ['Dělivá pletiva v pupenech, kořenových špičkách a kambiu vytvářejí nový růst.', 'Xylém vede vodu a minerály převážně vzhůru; floém rozvádí cukry mezi zdroji a místy spotřeby.', 'Dřevnatění zvyšuje pevnost, ale omezuje schopnost starších částí obnovit poškozená pletiva.'], note: 'Vadnutí není vždy nedostatek vody v půdě; příčinou může být poškozený kořen, zmrzlá půda nebo přerušený cévní systém.' },
      { title: 'Kořen, stonek a list', lead: 'Kořen kotví a absorbuje, stonek nese a propojuje, list reguluje výměnu plynů a vytváří asimiláty.', points: ['Nejaktivnější příjem probíhá v jemných kořenech; hluboká zálivka podporuje širší kořenový prostor.', 'Kořenový krček nesmí být po výsadbě zahrnutý, protože špatně snáší trvalé vlhko a nedostatek kyslíku.', 'Průduchy reagují na světlo, vodu a teplotu; při suchu se zavírají a omezuje se fotosyntéza.'] },
      { title: 'Fotosyntéza a dýchání', lead: 'Fotosyntéza ukládá energii světla do cukrů, dýchání ji uvolňuje pro růst a údržbu živých pletiv.', points: ['Limitujícím faktorem může být světlo, oxid uhličitý, voda, teplota nebo listová plocha.', 'Dýchají všechny živé části ve dne i v noci; přemokřený kořen trpí nedostatkem kyslíku.', 'Silný řez nebo opakované odlistění snižuje zdroj cukrů a může vyčerpat zásoby.'] },
      { title: 'Voda, transpirace a živiny', lead: 'Výpar z listů vytváří tah vody rostlinou. Voda současně ochlazuje, udržuje buněčné napětí a nese rozpuštěné ionty.', points: ['Rychlost transpirace roste s teplem, větrem a suchým vzduchem, klesá při vysoké vlhkosti.', 'Příliš častá mělká zálivka vede ke kořenům u povrchu; vhodnější je pomalá dávka do celé kořenové zóny.', 'Zasolení substrátu zhoršuje příjem vody i tehdy, když je substrát mokrý.'] },
      { title: 'Hormony, tropismy a dormance', lead: 'Auxiny, cytokininy, gibereliny, etylen a kyselina abscisová koordinují růst, zrání, opad a reakci na stres.', points: ['Vrcholová dominance potlačuje boční pupeny; řez terminálu mění rozložení hormonů.', 'Fototropismus směruje výhon ke světlu, gravitropismus kořen dolů a výhon vzhůru.', 'Dormanci může ukončit chlad, teplo, světlo, narušení osemení nebo jejich kombinace.'] },
      { title: 'Květ, opylení, plod a semeno', lead: 'Generativní cyklus propojuje tvorbu květu, přenos pylu, oplození, vývoj plodu a klíčení.', points: ['Samosprašnost neznamená vždy dobrou úrodu; mnoho kultivarů potřebuje vhodného opylovače kvetoucího současně.', 'Pozdní mráz může poškodit květ bez viditelného poškození větví.', 'Klíčení vyžaduje životaschopné semeno, vodu, kyslík a vhodnou teplotu; některé druhy i světlo nebo stratifikaci.'] },
    ],
    checks: [
      { question: 'Proč přemokřená rostlina může vadnout?', answer: 'Kořenům chybí kyslík, ztrácejí funkci a nedokážou přijímat vodu; mohou také zahnívat.' },
      { question: 'Jak souvisí řez s vrcholovou dominancí?', answer: 'Odstranění vrcholu sníží zdroj auxinu a obvykle podpoří rašení bočních pupenů.' },
    ],
  },
  {
    id: 'rostliny', title: 'Poznávání a volba rostlin', subtitle: 'Určování, názvosloví a správná rostlina na správné místo', minutes: 240, level: 'Základ',
    overview: 'Profesionál neurčuje rostlinu jen podle květu. Kombinuje habitus, pupeny, list, kůru, plod, období a stanoviště a pracuje s přesným botanickým názvem.',
    outcomes: ['Použít určovací znaky během celého roku', 'Číst botanický název a kultivar', 'Vybrat rostlinu podle stanoviště a budoucí velikosti'],
    lessons: [
      { title: 'Botanické názvosloví', lead: 'Dvoudílné jméno tvoří rod a druh; kultivar se zapisuje v jednoduchých uvozovkách a nekurzívou.', points: ['Rod může zahrnovat druhy s velmi rozdílnými nároky, proto samotný rod nestačí.', 'Kultivar je vybraná udržovaná forma; semenáče si jeho vlastnosti často nezachovají.', 'Synonyma a změny taxonomie řeš pomocí aktuálních školkařských katalogů a botanických databází.'] },
      { title: 'Určovací znaky', lead: 'Nejspolehlivější je kombinace několika nezávislých znaků.', points: ['Sleduj postavení listů, typ listu, okraj, žilnatinu, pupeny, lenticely, trny a jizvy.', 'Habitus a větvení bývají cennější než barva květu, která je proměnlivá.', 'Fotografuj celek, detail listu z obou stran, pupen, kůru a měřítko.'] },
      { title: 'Životní strategie', lead: 'Letničky dokončí cyklus v jednom roce, dvouletky obvykle první rok vytvoří růžici a druhý kvetou, trvalky přežívají více let.', points: ['Cibule, hlízy a oddenky jsou zásobní orgány s odlišnou stavbou a způsobem dělení.', 'Opadavost, stálezelenost a poloopadavost ovlivňuje klima i průběh zimy.', 'Pionýrské druhy rychle kolonizují narušené plochy; dlouhověké druhy investují více do trvalých pletiv.'] },
      { title: 'Skupiny pro praxi', lead: 'Uč se rostliny v provozních skupinách: dřeviny, trvalky, trávy, cibuloviny, užitkové, pokojové a vodní rostliny.', points: ['U dřevin znát konečnou výšku, šířku, charakter kořenů a snášenlivost řezu.', 'U trvalek sledovat dobu zatažení, rychlost rozrůstání a zimní strukturu.', 'U ovocných rostlin znát podnož, plodnost, opylovací poměry a citlivost k chorobám.'] },
      { title: 'Rostlina a stanoviště', lead: 'Výběr začíná vylučováním druhů, které nezvládnou půdu, vodu, světlo, teplotu nebo prostor.', points: ['Tolerance není optimum: rostlina může podmínky přežít, ale nevytvoří požadovaný efekt.', 'Konečná velikost je důležitější než velikost při nákupu.', 'Kombinuj druhy s podobnými nároky, ale různou kořenovou hloubkou a sezonní funkcí.'] },
      { title: 'Plevelné, invazní a rizikové druhy', lead: 'Plevel je rostlina nežádoucí v daném místě; invazní nepůvodní druh může ohrožovat ekosystémy.', points: ['Rozliš jednoleté semenné plevele od vytrvalých druhů s oddenky nebo kořenovými výběžky.', 'Před manipulací ověř toxicitu, fototoxicitu, trny, alergenní pyl a riziko pro zvířata.', 'U regulovaných invazních druhů ověř aktuální právní režim a způsob likvidace.'] },
    ],
    checks: [
      { question: 'Proč nestačí určit rostlinu podle květu?', answer: 'Květ je dostupný krátce a může být proměnlivý; spolehlivá identifikace kombinuje vegetativní i generativní znaky.' },
      { question: 'Co je při návrhu důležitější než prodejní velikost?', answer: 'Konečná výška, šířka, habitus a prostorové nároky dospělé rostliny.' },
    ],
  },
  {
    id: 'puda', title: 'Půda, substráty a výživa', subtitle: 'Fyzikální, chemické a biologické základy úrodnosti', minutes: 260, level: 'Základ',
    overview: 'Půda není inertní držák rostlin. Je to pórovitý živý systém, který musí současně zadržovat vodu, odvádět přebytek, vést vzduch, kotvit kořeny a zpřístupňovat živiny.',
    outcomes: ['Posoudit texturu, strukturu, pH a drenáž', 'Interpretovat základní půdní rozbor', 'Volit organické i minerální vstupy bez přehnojení'],
    lessons: [
      { title: 'Textura a struktura', lead: 'Textura vyjadřuje poměr písku, prachu a jílu; struktura popisuje jejich uspořádání do agregátů.', points: ['Písčitá půda rychle odvádí vodu a živiny, jílovitá je zadržuje, ale snadno se zhutní.', 'Drobtovitá struktura vytváří rovnováhu makropórů pro vzduch a mikropórů pro vodu.', 'Texturu nezmění malá dávka písku; strukturu lze zlepšit organickou hmotou, kořeny a omezením pojezdu.'] },
      { title: 'Půdní profil a organická hmota', lead: 'Ornice, podorničí a matečný substrát mají rozdílné vlastnosti. Promíchání horizontů při stavbě může zásadně zhoršit půdu.', points: ['Humus zvyšuje sorpční schopnost, stabilitu agregátů a biologickou aktivitu.', 'Kompost má být vyzrálý, bez zápachu po amoniaku a bez živých kořenů plevelů.', 'Mulč chrání povrch, ale nesmí být navršen ke kmeni ani trvale dusit krček trvalek.'] },
      { title: 'pH, sorpce a živiny', lead: 'pH ovlivňuje chemickou formu živin i půdní organismy. Většina zahradních rostlin prosperuje v mírně kyselé až neutrální půdě, výjimky jsou četné.', points: ['Dusík podporuje růst, fosfor energetické procesy a kořeny, draslík vodní režim a odolnost.', 'Železo může být v zásadité půdě přítomné, ale rostlině nedostupné; vzniká chloróza mladých listů.', 'Hnojivo dávkuj podle rozboru, plodiny a fáze růstu, ne podle dojmu.'] },
      { title: 'Půdní život', lead: 'Bakterie, houby, prvoci a půdní živočichové rozkládají organickou hmotu, vytvářejí strukturu a soutěží s patogeny.', points: ['Mykorhiza rozšiřuje absorpční prostor kořenů, ale není náhradou vhodného stanoviště.', 'Časté hluboké rytí narušuje horizonty a houbová vlákna; někdy je však nutné při zakládání nebo sanaci.', 'Pesticidy, zasolení, zhutnění a dlouhé zamokření snižují biologickou aktivitu.'] },
      { title: 'Diagnostika půdy', lead: 'Začni historií pozemku, pozorováním rostlin a jednoduchou sondou, teprve potom objednávej zásah.', points: ['Otestuj vsak, půdní vlhkost v hloubce, zápach, barvu, kořeny a známky zhutnění.', 'Vzorek pro laboratoř skládej z více dílčích odběrů stejné plochy a nemíchej rozdílná stanoviště.', 'Extrémní pH nebo salinitu upravuj pomalu; rychlá korekce může kořeny poškodit.'] },
      { title: 'Substráty a nádoby', lead: 'Substrát musí držet vodu a současně vzduch i po opakované zálivce.', points: ['Složky vybírej podle délky pěstování: kompost, kůra, kokos, dřevní vlákno, minerální příměsi.', 'Nádoba má omezenou zásobu vody i živin a větší teplotní výkyvy než půda.', 'Drenážní otvor je zásadní; vrstva štěrku na dně sama nevyřeší špatně propustný substrát.'] },
    ],
    checks: [
      { question: 'Jaký je rozdíl mezi texturou a strukturou půdy?', answer: 'Textura je zrnitostní složení; struktura je způsob, jak jsou částice spojeny do agregátů a pórů.' },
      { question: 'Proč rostlina může mít nedostatek železa v půdě bohaté na železo?', answer: 'Při nevhodném, často vysokém pH je železo chemicky nedostupné pro kořeny.' },
    ],
  },
  {
    id: 'stanoviste', title: 'Stanoviště, klima a ekologie', subtitle: 'Čtení místa, mikroklima a odolná zahrada', minutes: 190, level: 'Základ',
    overview: 'Dobrá zahrada vzniká z přesné interpretace místa. Stejný pozemek obsahuje teplé zdi, mrazové kapsy, suché kořenové stíny i vlhké sníženiny.',
    outcomes: ['Zmapovat světlo, vodu, vítr a mikroklima', 'Navrhovat pro biodiverzitu a klimatickou odolnost', 'Omezovat erozi, přehřívání a ztráty vody'],
    lessons: [
      { title: 'Světlo a stín', lead: 'Intenzita, délka a denní doba osvitu jsou stejně důležité jako označení slunce nebo stín.', points: ['Ranní slunce rychle osušuje listy; odpolední západní slunce zvyšuje tepelný stres.', 'Stín pod stromem je současně kořenová konkurence a často sucho.', 'Sezonní dráha slunce mění oslunění; mapuj pozemek alespoň v létě a zimě.'] },
      { title: 'Teplota, vítr a mráz', lead: 'Mrazuvzdornost druhu není jediná hodnota: rozhoduje otužení, délka mrazu, vítr, vlhkost a pozdní rašení.', points: ['Studený vzduch stéká do sníženin, kde vznikají mrazové kapsy.', 'Zimní slunce a vítr vysušují stálezelené listy, když kořen ve zmrzlé půdě nepřijímá vodu.', 'Větrolam má vítr filtrovat, ne vytvořit nepropustnou stěnu s turbulencí.'] },
      { title: 'Voda v krajině zahrady', lead: 'Cílem je vodu zpomalit, rozptýlit, bezpečně vsáknout a udržet v půdě bez zamokření kořenů.', points: ['Sleduj spád, nepropustné plochy, okapy, půdní horizonty a směr odtoku.', 'Dešťová zahrada musí mít bezpečný přepad a rostliny snášející střídání mokra a sucha.', 'Půdní pokryv a kořeny snižují erozi i výpar.'] },
      { title: 'Biodiverzita a potravní síť', lead: 'Rozmanitá struktura a dlouhá sezona květu podporují opylovače, predátory škůdců i půdní život.', points: ['Kombinuj patra: strom, keř, bylinné patro, pokryv a organický opad.', 'Jednoduché květy bývají pro hmyz dostupnější než plné kultivary.', 'Mrtvé dřevo, dutiny a ponechaná semena jsou stanoviště, nikoli automaticky nepořádek.'] },
      { title: 'Klimaticky odolná výsadba', lead: 'Odolnost vzniká kombinací vhodného druhu, kvalitní půdy, správné výsadby a rozumné následné péče.', points: ['Diverzifikuj rody a druhy, aby jedna choroba nezničila celou kostru zahrady.', 'Preferuj rostliny tolerantní k očekávaným extrémům, ne jen k historickému průměru.', 'Snižuj plochu náročného trávníku tam, kde nemá funkční význam.'] },
    ],
    checks: [
      { question: 'Proč je stín pod dospělým stromem často suchý?', answer: 'Koruna zachytí část srážek a husté kořeny stromu intenzivně konkurují o vodu.' },
      { question: 'Jak má fungovat účinný větrolam?', answer: 'Má část větru propustit a zpomalit jej bez silných turbulencí za překážkou.' },
    ],
  },
  {
    id: 'mnozeni', title: 'Množení a produkce rostlin', subtitle: 'Od semene k prodejnému a zdravému materiálu', minutes: 230, level: 'Středně pokročilé',
    overview: 'Množení vyžaduje kontrolu původu, hygieny, vody, teploty a času. Metoda se volí podle biologie druhu a požadované genetické shody.',
    outcomes: ['Rozlišit generativní a vegetativní množení', 'Volit vhodný typ řízku, roubu nebo dělení', 'Řídit klíčení, zakořeňování a otužování'],
    lessons: [
      { title: 'Osivo a klíčení', lead: 'Semenné množení vytváří genetickou variabilitu, což je výhoda u druhů a nevýhoda při zachování kultivaru.', points: ['Ověř čistotu, klíčivost, stáří a podmínky skladování osiva.', 'Stratifikace napodobuje vlhký chlad, skarifikace narušuje nepropustné osemení.', 'Výsevní substrát má být jemný, vzdušný, hygienický a jen mírně výživný.'] },
      { title: 'Řízkování', lead: 'Řízky mohou být bylinné, polovyzrálé, dřevité, kořenové nebo listové.', points: ['Řezná plocha musí být čistá; omez listovou plochu jen tolik, aby klesl výpar bez ztráty fotosyntézy.', 'Vysoká vzdušná vlhkost brání vadnutí, ale bez větrání podporuje choroby.', 'Kořenový stimulátor pomůže jen druhu schopnému adventivní kořeny vytvořit.'] },
      { title: 'Dělení, hřížení a oddělování', lead: 'Dělení je rychlá obnova trvalek, hřížení zakořeňuje výhon ještě napojený na matečnou rostlinu.', points: ['Každý díl potřebuje životaschopný pupen a kořeny nebo schopnost je vytvořit.', 'Druhy s dřevnatou korunou či kůlovým kořenem se dělí obtížně.', 'Matečnice musí být zdravá, pravá k odrůdě a označená.'] },
      { title: 'Roubování a očkování', lead: 'Podnož poskytuje kořenový systém, ušlechtilá část požadovaný kultivar. Kambia musí být v kontaktu.', points: ['Kompatibilita je většinou nejvyšší uvnitř druhu a klesá s taxonomickou vzdáleností.', 'Termín a technika závisejí na toku mízy, vyzrálosti roubu a skladování.', 'Odstraňuj výmladky pod místem srůstu, protože patří podnoži.'] },
      { title: 'Pěstební prostředí a hygiena', lead: 'Úspěch množení často určuje prostředí více než samotný řez nebo výsev.', points: ['Nářadí, nádoby a pracovní plochu čistěte mezi šaržemi.', 'Zálivku, teplotu a světlo měň postupně podle fáze zakořenění.', 'Veď šaržové záznamy o původu, termínu, ošetření a ztrátách.'] },
      { title: 'Přesazování a otužování', lead: 'Po zakořenění se rostlina musí adaptovat na nižší vlhkost, větší světlo, vítr a teplotní rozdíly.', points: ['Přesazuj dříve, než se kořeny začnou stáčet a dusit.', 'Kořenový bal před výsadbou navlhči, ale nerozpadavý bal násilně nerozebírej.', 'Otužuj po krocích a chraň mladý růst před prvním prudkým sluncem.'] },
    ],
    checks: [
      { question: 'Proč se kultivar obvykle nemnoží semenem?', answer: 'Potomstvo je geneticky proměnlivé a nemusí zachovat vlastnosti vybraného kultivaru.' },
      { question: 'Co je klíčové při roubování?', answer: 'Kompatibilita, kontakt kambiálních vrstev, správný termín, čistota a ochrana spoje před vyschnutím.' },
    ],
  },
  {
    id: 'realizace', title: 'Zakládání zahrad a výsadba', subtitle: 'Od zaměření po předání životaschopné výsadby', minutes: 260, level: 'Středně pokročilé',
    overview: 'Realizace převádí výkres do terénu. Kvalita se rozhoduje v přípravě podloží, výškovém osazení, manipulaci s rostlinou a následné péči.',
    outcomes: ['Číst a vytyčit osazovací plán', 'Správně vysadit dřevinu, trvalku i živý plot', 'Kontrolovat materiál, množství a kvalitu provedení'],
    lessons: [
      { title: 'Průzkum a zaměření', lead: 'Před prací ověř hranice, sítě, přístup, spád, odtok, stávající vegetaci a omezení provozu.', points: ['Měř od stabilních bodů a výšky kontroluj nivelačně, ne od proměnlivého terénu.', 'Podzemní sítě lokalizuj před kopáním; dokumentace nemusí přesně odpovídat realitě.', 'Chraň kořenové zóny ponechávaných stromů před výkopem, skladem a pojezdem.'] },
      { title: 'Příprava terénu a půdy', lead: 'Odstraň stavební odpad, vyřeš zhutnění a odtok dříve než přijedou rostliny.', points: ['Modeluj terén s ohledem na sedání a bezpečný odvod vody od staveb.', 'Ornici neskladuj ve vysokých zhutněných hromadách dlouhodobě.', 'Plošná příprava záhonu bývá lepší než izolované kapsy kvalitního substrátu v nepropustné zemině.'] },
      { title: 'Přejímka rostlin', lead: 'Kontroluj pravost, velikost, kořenový systém, korunu, poškození, škůdce a hydrataci.', points: ['Odmítni materiál s vážnými spirálovitými kořeny, poškozeným terminálem nebo vyschlým balem.', 'Kořenový krček musí být dohledatelný; přebytečný substrát nad krčkem odstraň.', 'Rostliny skladuj co nejkratší dobu ve stínu, chráněné před větrem a s vlhkým balem.'] },
      { title: 'Výsadba stromu a keře', lead: 'Jáma má umožnit rozvoj kořenů do okolí; hloubka odpovídá kořenovému systému, ne pohodlí pracovníka.', points: ['Krček osaď v úrovni upraveného terénu nebo mírně výše podle sedání.', 'Kůly stabilizují kořenový bal, kmen se má mírně pohybovat; úvazek pravidelně kontroluj.', 'Vytvoř zavlažovací mísu, důkladně prolij a mulč drž dál od kmene.'] },
      { title: 'Trvalky, cibuloviny a živé ploty', lead: 'Rozmístění začíná kosterními druhy a respektuje spon dospělých rostlin.', points: ['Kořenový bal trvalky před výsadbou zavlaž a naruš jen pokud je silně stočený.', 'Cibule sázej obvykle do násobku jejich výšky, ale řiď se druhem a půdou.', 'Živý plot sázej do souvisle připraveného pásu; rovnou linii kontroluj provázkem.'] },
      { title: 'Předání a následná péče', lead: 'Bez stanovené následné péče není výsadba dokončená.', points: ['Předej plán zálivky, kontroly úvazků, mulče, zaplevelení a náhrad uhynulých rostlin.', 'Zaznamenej skutečně použité druhy, množství a odchylky od projektu.', 'Po výsadbě sleduj vláhu v kořenovém balu i okolní půdě; mohou se chovat rozdílně.'] },
    ],
    checks: [
      { question: 'Kde má po výsadbě ležet kořenový krček?', answer: 'V úrovni konečného terénu nebo mírně výše s ohledem na sedání, nikdy hluboko pod povrchem.' },
      { question: 'Co stabilizují kotevní kůly?', answer: 'Primárně kořenový bal; kmen se má mírně pohybovat, aby vytvářel pevná pletiva.' },
    ],
  },
  {
    id: 'pece', title: 'Celoroční péče o výsadby', subtitle: 'Zálivka, mulč, výživa a prevence stresu', minutes: 210, level: 'Středně pokročilé',
    overview: 'Údržba není soubor automatických návštěv. Je to opakované pozorování, rozhodnutí a zásah odpovídající sezoně, počasí, půdě a cíli výsadby.',
    outcomes: ['Sestavit plán následné a dlouhodobé péče', 'Rozhodovat o zálivce podle skutečné vlhkosti', 'Předcházet plevelům a fyziologickému stresu'],
    lessons: [
      { title: 'Kontrola před zásahem', lead: 'Každá návštěva začíná obhlídkou celku, porovnáním s minulým stavem a kontrolou rizik.', points: ['Zapisuj počasí, růst, fenologii, vlhkost, poškození a provedené práce.', 'Nehodnoť jen vzhled koruny; zkontroluj krček, kořeny, půdu a závlahu.', 'Rozliš urgentní problém od přirozeného sezonního projevu.'] },
      { title: 'Zálivka', lead: 'Zalévá se kořenová zóna, nikoli kalendář. Dávka musí prosáknout do aktivní hloubky bez povrchového odtoku.', points: ['Nová výsadba potřebuje častější kontrolu než zakořeněná, ale nesmí stát ve vodě.', 'Ráno bývá vhodné kvůli nižšímu výparu a rychlému oschnutí listů.', 'Hydrofobní suchý substrát může vodu odpuzovat; zvlhčuj jej pomalu ve více průchodech.'] },
      { title: 'Plevel a půdní pokryv', lead: 'Nejlevnější regulace plevele je prevence volné půdy, vysemenění a zavlečení.', points: ['Jednoleté plevele odstraň před semenem, vytrvalé včetně obnovovacích orgánů.', 'Okopávání musí být mělké, aby nepoškodilo kořeny a nevyneslo nová semena.', 'Zapojený bylinný pokryv dlouhodobě omezuje plevel lépe než opakované odkrytí půdy.'] },
      { title: 'Mulčování', lead: 'Organický mulč tlumí výpar a plevel, vyrovnává teplotu a postupně přidává organickou hmotu.', points: ['Obvykle stačí souvislá vrstva několika centimetrů; příliš silná vrstva může zadržovat nadbytek vody.', 'Nedotýkej se mulčem kmene a nezakrývej koruny citlivých trvalek.', 'Minerální mulče silně ovlivňují teplotu a chemismus; vybírej je podle výsadby.'] },
      { title: 'Výživa a regenerace', lead: 'Hnoj jen při prokázané potřebě a s ohledem na růstovou fázi.', points: ['Přebytek dusíku vytváří měkký růst, zvyšuje potřebu vody a může snížit odolnost.', 'Listová aplikace působí rychle, ale nenahrazuje funkční kořenové prostředí.', 'Po stavebním stresu často pomůže odstranění zhutnění a správná zálivka více než hnojivo.'] },
      { title: 'Zima a extrémy', lead: 'Příprava na zimu začíná v létě: vyzrálým růstem, zdravými kořeny a dostatkem vody před zámrzem.', points: ['Citlivé nádoby izoluj i proti promrznutí kořenů, ne pouze nadzemní části.', 'Sníh může chránit půdu, mokrý těžký sníh však rozlamuje koruny.', 'Po suchu, krupobití či mrazu neřež bezhlavě; nejprve vyhodnoť životaschopnost pletiv.'] },
    ],
    checks: [
      { question: 'Jak ověřit potřebu zálivky?', answer: 'Kontrolou vlhkosti v hloubce aktivních kořenů a stavu rostliny, nikoli jen povrchu nebo kalendáře.' },
      { question: 'Proč se mulč nesmí hromadit u kmene?', answer: 'Udržuje kůru trvale vlhkou, podporuje rozklad, škůdce a vznik adventivních kořenů.' },
    ],
  },
  {
    id: 'rez', title: 'Řez a péče o dřeviny', subtitle: 'Biologie řezu, koruny, keře a ovocné dřeviny', minutes: 300, level: 'Pokročilé',
    overview: 'Řez je nevratný zásah. Cílem není „zkrátit strom“, ale řešit konkrétní důvod s co nejmenším poraněním a s ohledem na přirozenou architekturu.',
    outcomes: ['Vést správný řez na větevní kroužek', 'Volit termín a intenzitu podle druhu a cíle', 'Rozpoznat práci vyžadující arboristu'],
    lessons: [
      { title: 'Reakce dřeviny na poranění', lead: 'Strom ránu nezahojí jako živočich; ohraničuje poškození a překrývá je novým dřevem.', points: ['Neřež do větevního kroužku ani nenechávej dlouhý pahýl.', 'Velikost rány roste rychleji než průměr větve, proto je výhodný včasný výchovný řez.', 'Rány se běžně nezatírají; výjimky vycházejí z konkrétního druhu, choroby nebo metodiky.'] },
      { title: 'Druhy řezu', lead: 'Výchovný řez buduje stabilní korunu, zdravotní odstraňuje problémové části, udržovací řídí provozní cíle a zmlazovací obnovuje keř.', points: ['Každý řez musí mít definovaný důvod; velikost redukce přizpůsob vitalitě.', 'Redukce se vede na vhodnou boční větev, ne plošným sesazením vrcholu.', 'Odstranění velké části koruny najednou může vyvolat stres a množství výmladků.'] },
      { title: 'Termín řezu', lead: 'Termín se řídí druhem, cílem, fenologií, rizikem chorob a klimatem.', points: ['Jarně kvetoucí keře obvykle zakládají květy na starším dřevě a řežou se po odkvětu.', 'Keře kvetoucí na letošních výhonech lze často řezat před rašením.', 'Peckoviny se často řežou za vegetace či po sklizni kvůli hojení a nižšímu infekčnímu riziku.'] },
      { title: 'Ovocný řez', lead: 'Řez ovocných dřevin vyvažuje růst, plodnost, světlo a obnovu plodného obrostu.', points: ['Podnož určuje vzrůst, nástup plodnosti, kotvení i nároky na oporu.', 'Vodorovnější větev obvykle dříve plodí, vzpřímená silněji roste.', 'Letní zásahy více tlumí růst, zimní mohou podpořit reakční růst.'] },
      { title: 'Keře, růže a popínavky', lead: 'Keře se obnovují od báze nebo na kosterních větvích; nelze na všechny použít stejný plošný sestřih.', points: ['Průklest od báze zachovává přirozený habitus lépe než pravidelné zkracování vršků.', 'U růží rozlišuj skupinu: záhonová, pnoucí, sadová a jednou či opakovaně kvetoucí.', 'Popínavky potřebují oporu odpovídající mechanismu přichycení a nosnosti.'] },
      { title: 'Bezpečnost a hranice kompetence', lead: 'Práce v koruně, u vedení, s motorovou pilou a na nestabilním stromě vyžaduje odborné vybavení a kvalifikaci.', points: ['Před řezem kontroluj cíle pádu, skryté napětí větví, provoz a elektrická vedení.', 'Nebezpečné dutiny, praskliny a kořenové poškození posuzuje kvalifikovaný arborista.', 'Nikdy nepoužívej žebřík jako náhradu lezeckého nebo plošinového systému pro rizikovou práci.'] },
    ],
    checks: [
      { question: 'Kam se vede správný řez při odstranění větve?', answer: 'Těsně vně větevního kroužku, bez poranění kmene a bez dlouhého pahýlu.' },
      { question: 'Proč je výchovný řez tak účinný?', answer: 'Malé rány se lépe ohraničí a včas lze vytvořit stabilní architekturu bez velkých pozdějších zásahů.' },
    ],
  },
  {
    id: 'travnik', title: 'Trávníky a květnaté plochy', subtitle: 'Zakládání, výživa, regenerace a alternativy', minutes: 190, level: 'Středně pokročilé',
    overview: 'Trávník je intenzivní rostlinné společenstvo. Jeho kvalitu určuje účel, směs, půda, výška seče, voda, živiny a provozní zatížení.',
    outcomes: ['Vybrat typ trávníku a travní směs', 'Nastavit seč, výživu a závlahu', 'Diagnostikovat plsť, mech, zhutnění a holá místa'],
    lessons: [
      { title: 'Funkce a druhy trávníku', lead: 'Okrasný, pobytový, sportovní, parkový a extenzivní trávník mají odlišné druhy, výšku seče i náklady.', points: ['Směs vybírej podle světla, půdy, sucha, zátěže a požadovaného vzhledu.', 'Nízká seč zvyšuje nároky na světlo, vodu, výživu a přesnost povrchu.', 'Ve hlubokém stínu je často vhodnější půdopokryvná výsadba než řídký trávník.'] },
      { title: 'Založení výsevem a kobercem', lead: 'Půda musí být odplevelená, rovnoměrně ulehlá, jemně připravená a správně vyspádovaná.', points: ['Osivo rozděl na dvě dávky a vysévej křížem pro rovnoměrnost.', 'Semeno lehce zaprav a udržuj povrch rovnoměrně vlhký do vzejití.', 'Koberec pokládej bez mezer na vlhký podklad, zaválcuj a ihned důkladně zalij.'] },
      { title: 'Sečení', lead: 'Listová plocha živí kořeny. Jedním sečením neodstraňuj zpravidla více než třetinu výšky.', points: ['Tupý nůž třepí listy, zvyšuje ztrátu vody a vstup chorob.', 'V suchu a stínu nechávej porost vyšší.', 'Mulčovací seč vrací živiny, ale nefunguje při přerostlé nebo mokré trávě.'] },
      { title: 'Výživa a závlaha', lead: 'Dávku dusíku rozděl podle intenzity a sezony; pozdní měkký růst zvyšuje zimní rizika.', points: ['Zalévej méně často a důkladně, aby voda pronikla do kořenové zóny.', 'Rovnoměrnost postřiku kontroluj rozmístěnými nádobkami, nikoli pohledem na trysky.', 'Při hnojení respektuj teplotu, vláhu a možnost splachu.'] },
      { title: 'Regenerace a diagnostika', lead: 'Vertikutace odstraňuje plsť, aerifikace vytváří vzduchové kanály a pískování upravuje povrch.', points: ['Mech je symptom stínu, vlhka, nízké výživy, nízké seče nebo zhutnění, ne samostatná diagnóza.', 'Po aerifikaci lze zapískovat a dosít vhodnou směsí.', 'Nepravidelné kruhy či skvrny mohou mít biologickou, závlahovou, chemickou i mechanickou příčinu.'] },
      { title: 'Louky a extenzivní plochy', lead: 'Květnatá louka není nesečený trávník. Potřebuje chudší podmínky, vhodné osivo a cílený režim seče.', points: ['Posečenou hmotu odstraň, aby se živiny nehromadily.', 'Seč časuj podle cílových druhů a ponechávej část jako úkryt.', 'Na úrodné půdě často dominují trávy; změna vyžaduje více sezon.'] },
    ],
    checks: [
      { question: 'Jaké je základní pravidlo výšky seče?', answer: 'Jedním zásahem neodebírat přibližně více než třetinu aktuální výšky listů.' },
      { question: 'Co obvykle signalizuje mech?', answer: 'Nevhodné podmínky pro trávu, například stín, vlhko, zhutnění, nízkou výživu nebo příliš nízkou seč.' },
    ],
  },
  {
    id: 'ochrana', title: 'Ochrana rostlin a diagnostika', subtitle: 'Od příznaku k příčině a integrovanému zásahu', minutes: 300, level: 'Pokročilé',
    overview: 'Správná diagnóza předchází léčbě. Stejný symptom může způsobit sucho, přemokření, mráz, nedostatek živiny, patogen i škůdce.',
    outcomes: ['Vést systematickou diagnostiku', 'Rozlišit abiotické, infekční a škůdcové poškození', 'Použít principy integrované ochrany'],
    lessons: [
      { title: 'Diagnostický postup', lead: 'Urči rostlinu, popiš symptom, zjisti jeho rozložení a časový průběh a teprve potom sestav hypotézy.', points: ['Abiotické poškození bývá často rovnoměrné nebo odpovídá terénu; infekce se může šířit z ohnisek.', 'Rozliš příznak na hostiteli od skutečného původce, například požerku, trusu, plodnice či larvy.', 'Odebírej přechod mezi zdravou a nemocnou tkání a přilož fotografii celku i stanoviště.'] },
      { title: 'Abiotické poruchy', lead: 'Sucho, zamokření, mráz, úžeh, sůl, nevhodné pH, zhutnění a chemické poškození nejsou přenosné choroby.', points: ['Poškození kořenů se v koruně projeví se zpožděním a často plošně.', 'Po zasolení bývají spálené okraje listů a problémy se zhoršují při suchu.', 'Herbicidní úlet může deformovat nový růst; důležitá je mapa sousedních zásahů.'] },
      { title: 'Houby, bakterie a viry', lead: 'Houbové choroby často tvoří povlaky, skvrny nebo plodnice; bakterie mohou způsobovat vodnaté léze a výtoky; viry mozaiky a deformace.', points: ['Vlhkost listu a teplota řídí mnoho infekčních cyklů.', 'Odstraň infikovaný materiál správným způsobem a dezinfikuj nástroje tam, kde hrozí přenos.', 'Chemický zásah nevrátí poškozenou tkáň; chrání nový růst nebo brání dalšímu šíření.'] },
      { title: 'Škůdci a užitečné organismy', lead: 'Poznej vývojová stadia a typ poškození: savý, žravý, minující, vrtavý nebo kořenový.', points: ['Mšice, svilušky, molice, červci, housenky a larvy brouků vyžadují odlišné načasování zásahu.', 'Svilušky nejsou hmyz; některé insekticidy je nezasáhnou a mohou odstranit jejich predátory.', 'Ne každý hmyz na rostlině škodí; před zásahem ověř hostitele i práh škodlivosti.'] },
      { title: 'Integrovaná ochrana', lead: 'IPM kombinuje prevenci, monitoring, prahy, mechanické, biologické a teprve potřebné chemické metody.', points: ['Začni vhodným druhem, hygienou, půdou, zálivkou a prouděním vzduchu.', 'Zásah cíl na zranitelné stadium škůdce a nejmenší nutnou plochu.', 'Po zásahu vyhodnoť účinek, vedlejší dopady a potřebu změny prevence.'] },
      { title: 'Přípravky a bezpečnost', lead: 'Používej pouze povolený přípravek pro dané použití a vždy podle aktuální etikety a právních požadavků.', points: ['Etiketa určuje plodinu, škodlivý organismus, dávku, interval, ochranné prostředky i ochrannou lhůtu.', 'Kalibruj aplikační zařízení a zabraň úletu, odtoku a kontaminaci vody.', 'Skladuj v původním obalu, odděleně a zabezpečeně; veď povinnou evidenci.'] },
    ],
    checks: [
      { question: 'Jaký je první krok diagnostiky?', answer: 'Spolehlivě určit hostitelskou rostlinu a přesně popsat symptom, jeho rozložení a vývoj v čase.' },
      { question: 'Co znamená integrovaná ochrana?', answer: 'Kombinaci prevence, monitoringu a nejméně rizikových účinných metod; chemie je jen jedna z možností.' },
    ],
  },
  {
    id: 'zavlaha', title: 'Zavlažování a hospodaření s vodou', subtitle: 'Potřeba vody, návrh zón a diagnostika systému', minutes: 220, level: 'Středně pokročilé',
    overview: 'Závlaha má dodat správné množství do správné hloubky a času. Návrh spojuje půdu, rostliny, zdroj, tlak, průtok a hydraulické limity.',
    outcomes: ['Odhadnout potřebu vody a závlahovou dávku', 'Rozlišit kapkovou a postřikovou závlahu', 'Najít běžné poruchy a omezit ztráty'],
    lessons: [
      { title: 'Vodní bilance', lead: 'Potřeba závlahy vychází z evapotranspirace, srážek, zásoby v půdě, kořenové hloubky a fáze rostliny.', points: ['Jílovitá půda přijímá vodu pomaleji, ale drží ji déle; písek vyžaduje menší a častější dávky.', 'Vítr a horko zvyšují ztráty, mulč a zastínění půdy je snižují.', 'Po výsadbě je aktivní kořenový prostor malý a musí se kontrolovat zvlášť.'] },
      { title: 'Kapková závlaha', lead: 'Kapka dodává vodu lokálně s malými ztrátami výparem, ale závada není na povrchu vždy vidět.', points: ['Délka a rozteč kapačů musí odpovídat půdě a šířce kořenové zóny.', 'Filtrace chrání emitory před ucpáním, regulátor drží vhodný tlak.', 'S růstem dřeviny rozšiřuj zavlažovanou plochu, ne pouze dávku u kmene.'] },
      { title: 'Postřiková závlaha', lead: 'Postřik je vhodný pro trávník, pokud má dostatečné překrytí a rovnoměrnost.', points: ['Trysky v jedné zóně mají mít podobnou srážkovou výšku.', 'Rohy a okraje vyžadují správnou geometrii; vítr obrazec deformuje.', 'Krátké opakované cykly omezí odtok na svahu nebo těžké půdě.'] },
      { title: 'Hydraulické základy', lead: 'Průtok je objem za čas, tlak je energie proudění; s délkou, výškou a odporem potrubí tlak klesá.', points: ['Součet průtoků prvků v zóně nesmí překročit kapacitu zdroje.', 'Potrubí dimenzuj tak, aby tlakové ztráty nezpůsobily nerovnoměrnost.', 'Zpětná klapka a správné oddělení chrání zdroj vody před kontaminací.'] },
      { title: 'Řízení a údržba', lead: 'Řídicí jednotka nenahrazuje kontrolu půdy. Program měň podle sezony a srážek.', points: ['Pravidelně kontroluj netěsnosti, ucpané emitory, propadlé postřikovače a přestřik na dlažbu.', 'Průtokoměr nebo neobvyklá spotřeba pomohou odhalit skrytý únik.', 'Před mrazem systém podle typu vypusť nebo odborně zazimuj.'] },
      { title: 'Dešťová voda a vsak', lead: 'Zachycená voda snižuje odběr pitné vody a špičkový odtok, ale objem nádrže musí odpovídat střeše i spotřebě.', points: ['První splach může nést nečistoty; filtruj podle způsobu využití.', 'Vsakovací objekt navrhuj podle vsakovací zkoušky a s bezpečným přepadem.', 'Vodu neveď k základům, sousedům ani do nestabilního svahu.'] },
    ],
    checks: [
      { question: 'Proč nelze spojit libovolné postřikovače do jedné zóny?', answer: 'Mohou mít rozdílnou srážkovou výšku a jejich součet může překročit dostupný průtok nebo tlak.' },
      { question: 'Jak se mění závlaha rostoucího stromu?', answer: 'Rozšiřuje se zavlažovaná plocha směrem do budoucí kořenové zóny, nejen množství u kmene.' },
    ],
  },
  {
    id: 'stavby', title: 'Zahradní stavby a materiály', subtitle: 'Cesty, zídky, dřevo, voda a technické rozhraní', minutes: 240, level: 'Středně pokročilé',
    overview: 'Drobné stavby musí nést zatížení, odvádět vodu, bezpečně navazovat a stárnout předvídatelně. Profesionál zná i hranici, kde je nutný projekt nebo jiná profese.',
    outcomes: ['Rozumět skladbě zpevněných ploch', 'Navrhnout jednoduchý spád a drenáž', 'Volit materiál podle funkce, životnosti a údržby'],
    lessons: [
      { title: 'Měření, výšky a spády', lead: 'Výšková chyba se přenese do kaluží, schodů, hran i napojení na stavbu.', points: ['Pracuj od pevného výškového bodu a zapisuj projektovanou i skutečnou výšku.', 'Příčný a podélný spád musí odvést vodu bez nebezpečí uklouznutí nebo eroze.', 'Před realizací ověř tloušťky všech vrstev a výšku finálního povrchu.'] },
      { title: 'Cesty a zpevněné plochy', lead: 'Nosnost vytváří správně zhutněné podloží a podkladní vrstvy, ne samotná dlažba.', points: ['Odděl zeminu geotextilií tam, kde má separační funkci, nikoli automaticky všude.', 'Zhutňuj po vrstvách a respektuj zrnitost a vlhkost materiálu.', 'Obruba drží boční posun; spáry a lože vybírej podle materiálu a zatížení.'] },
      { title: 'Schody a zídky', lead: 'Pravidelný poměr výšky a hloubky stupně zajišťuje bezpečný rytmus chůze.', points: ['Všechny stupně v rameni musí mít shodnou výšku, včetně prvního a posledního napojení.', 'Opěrná zídka řeší tlak zeminy, vodu za konstrukcí, základ a případně mráz.', 'Vyšší nebo zatížené konstrukce vyžadují statický návrh.'] },
      { title: 'Dřevo, kov, kámen a beton', lead: 'Materiál posuzuj podle pevnosti, nasákavosti, mrazu, koroze, skluzu, údržby a původu.', points: ['Dřevo odděl od trvale vlhké zeminy a umožni větrání detailu.', 'Různé kovy v kontaktu a vlhku mohou galvanicky korodovat.', 'Přírodní kámen má rozdílnou štípatelnost a mrazuvzdornost; směr ložných ploch je důležitý.'] },
      { title: 'Vodní prvky a drenáž', lead: 'Voda odhalí každou výškovou a těsnicí chybu. Mysli na servis, bezpečnost a kvalitu vody.', points: ['Drenáž má mít kam vodu odvést; slepá trubka v jílu problém neřeší.', 'Jezírko potřebuje rovnováhu objemu, hloubky, rostlin, filtrace a zatížení živinami.', 'Elektrické prvky u vody musí navrhnout a připojit kvalifikovaná osoba.'] },
      { title: 'Rozhraní profesí a povolení', lead: 'Zahradník koordinuje, ale nenahrazuje statika, elektrikáře, instalatéra ani autorizovaného projektanta.', points: ['Před zahájením ověř vlastnictví, ochranná pásma, místní regulaci a potřebná povolení.', 'Změny oproti projektu nech schválit odpovědnou osobou a dokumentuj je.', 'Při pochybnosti práce zastav a vyžádej odborné posouzení.'] },
    ],
    checks: [
      { question: 'Co primárně nese zatížení dlažby?', answer: 'Správně navržené a po vrstvách zhutněné podloží a podkladní vrstvy.' },
      { question: 'Proč drenážní trubka nemusí vyřešit zamokření?', answer: 'Bez propustného obsypu, spádu a bezpečného místa odtoku nemá voda kam odcházet.' },
    ],
  },
  {
    id: 'technika', title: 'Nářadí, stroje a údržba', subtitle: 'Volba nástroje, bezpečný provoz a základní servis', minutes: 190, level: 'Základ',
    overview: 'Správný nástroj zvyšuje kvalitu i bezpečnost. Každý stroj vyžaduje kontrolu před použitím, znalost ochranných prvků, bezpečné pracovní pásmo a údržbu.',
    outcomes: ['Volit nářadí podle materiálu a cíle', 'Provést předprovozní kontrolu', 'Bezpečně skladovat paliva, baterie a ostré nástroje'],
    lessons: [
      { title: 'Ruční nářadí', lead: 'Rýč řeže a obrací, rycí vidle kypří s menším poškozením půdy, motyka reguluje plevel a hrábě tvarují povrch.', points: ['Nůžky obtokové řežou živé dřevo čistěji, kovadlinkové jsou vhodnější pro suchý materiál.', 'Nástroj udržuj ostrý, čistý a přiměřený průměru řezu.', 'Ergonomii zlepší správná délka násady, střídání úkolů a práce blízko těla.'] },
      { title: 'Žací technika', lead: 'Sekačku, křovinořez a vyžínač vol podle plochy, sklonu, vegetace a rizika odletujících předmětů.', points: ['Před sečí odstraň kameny, dráty a další předměty.', 'Výhoz směruj od lidí, oken, vozidel a komunikací.', 'Na svahu dodrž směr práce předepsaný výrobcem a nikdy neriskuj převrácení.'] },
      { title: 'Řezací a drticí stroje', lead: 'Plotostřih, pila a štěpkovač mají vysokou energii a vyžadují výcvik, ochranné prostředky a vyloučenou zónu.', points: ['Motorovou pilu nepoužívej nad rameny ani z běžného žebříku.', 'Štěpkovač plň určeným směrem, nepřibližuj ruce k podávacímu mechanismu a znát nouzové zastavení.', 'Zaseknutý stroj odpoj od energie před jakýmkoli zásahem.'] },
      { title: 'Předprovozní kontrola', lead: 'Kontroluj kryty, brzdy, spojovací prvky, ostří, pneumatiky, kapaliny, baterii a neobvyklé poškození.', points: ['Únik paliva, prasklý kryt nebo nefunkční bezpečnostní prvek znamená stroj nepoužít.', 'Přečti manuál konkrétního modelu; ovládání se liší.', 'Při předání mezi pracovníky sděl závady a stav paliva či nabití.'] },
      { title: 'Údržba a skladování', lead: 'Čištění po práci odhalí vady a omezuje přenos chorob i korozi.', points: ['Ostří brousí osoba, která umí zachovat úhel, vyvážení a tepelně nepoškodit materiál.', 'Paliva skladuj ve schválených nádobách, mimo zdroje zapálení a podle předpisů.', 'Li-ion baterie chraň před nárazem, vodou, extrémní teplotou a neodbornou opravou.'] },
      { title: 'Doprava a provoz na místě', lead: 'Náklad zajisti proti posunu, stroje přepravuj vypnuté a ostré části zakryté.', points: ['Odděl chemické látky, paliva, osoby a potraviny.', 'Na veřejném místě vyznač pracovní prostor a udrž bezpečný průchod.', 'Hluk, prach a čas provozu plánuj s ohledem na klienta, sousedy a místní pravidla.'] },
    ],
    checks: [
      { question: 'Kdy se zaseknutý stroj smí uvolňovat?', answer: 'Až po úplném zastavení a bezpečném odpojení zdroje energie podle návodu výrobce.' },
      { question: 'Proč se nářadí čistí mezi pracovišti?', answer: 'Kvůli funkci, kontrole poškození a omezení přenosu půdy, plevelů a patogenů.' },
    ],
  },
  {
    id: 'navrh', title: 'Návrh zahrady', subtitle: 'Analýza, kompozice, osazovací plán a údržba', minutes: 280, level: 'Pokročilé',
    overview: 'Návrh propojuje potřeby lidí, ekologii místa, prostorovou kompozici, technickou proveditelnost a budoucí náklady. Krása bez funkce ani funkce bez života nestačí.',
    outcomes: ['Převést zadání do funkčního konceptu', 'Vytvořit prostorovou a rostlinnou kompozici', 'Navrhovat s ohledem na růst, rozpočet a péči'],
    lessons: [
      { title: 'Rozhovor a zadání', lead: 'Zjišťuj uživatele, činnosti, styl, rozpočet, časový horizont, ochotu pečovat a nepřekročitelné požadavky.', points: ['Odděl přání od skutečné potřeby a ověř konflikty mezi nimi.', 'Ptej se na děti, zvířata, alergie, soukromí, skladování, přístup a sezonní využití.', 'Zadání písemně shrň a nechej potvrdit před detailním návrhem.'] },
      { title: 'Analýza místa', lead: 'Zaměř hranice, stavby, výšky, pohledy, sítě, půdu, vodu, světlo, vítr a hodnotnou vegetaci.', points: ['Rozliš příležitosti, omezení a rizika.', 'Sleduj příchody, každodenní trasy a místa přirozeného zastavení.', 'Fotografii doplň měřítkem a orientací; nespoléhej na širokoúhlé zkreslení.'] },
      { title: 'Funkční a prostorový koncept', lead: 'Nejprve řeš vztahy ploch a pohyb, až potom konkrétní materiály a druhy.', points: ['Hierarchie cest odlišuje hlavní směr od servisního.', 'Poměr otevřeného a uzavřeného prostoru vytváří rytmus, očekávání a pocit bezpečí.', 'Dominanta potřebuje klidné okolí; příliš mnoho dominant ruší čitelnost.'] },
      { title: 'Rostlinná kompozice', lead: 'Kosterní dřeviny určují prostor, keře střední patro a trvalky s pokryvem detail a sezonu.', points: ['Navrhuj v dospělých objemech, ale plánuj efekt během zapojování.', 'Opakování omezené palety sjednocuje, kontrast struktury či tvaru vytváří důraz.', 'Květ je jen jedna vlastnost; zohledni list, kůru, plod, podzimní barvu a zimní siluetu.'] },
      { title: 'Osazovací plán', lead: 'Plán musí jednoznačně určit druh, kultivar, množství, velikost, spon a umístění.', points: ['Používej kód rostliny a navazující seznam s úplným botanickým názvem.', 'Ověř dostupnost a připrav pravidla pro rovnocenné náhrady.', 'Skupiny zakresluj čitelně a hlídej kolize sítěmi, stavbou a budoucím provozem.'] },
      { title: 'Údržba a životní cyklus', lead: 'Každý návrh vytváří budoucí práci. Uveď, co se bude řezat, dělit, dosévat, čistit a obnovovat.', points: ['Náklady posuzuj jako investici plus péči v dalších letech.', 'Přístup pro sekačku, odvoz materiálu a servis techniky je součást návrhu.', 'Navrhuj adaptivně: některé rostliny se posunou nebo nahradí podle vývoje stanoviště.'] },
    ],
    checks: [
      { question: 'Proč se funkční koncept řeší před výběrem rostlin?', answer: 'Nejprve je nutné vyřešit prostor, pohyb, užívání a technické vztahy; rostliny je potom naplní.' },
      { question: 'Co musí obsahovat osazovací plán?', answer: 'Jednoznačné umístění, kód, úplný název, množství, spon a specifikaci dodávané velikosti.' },
    ],
  },
  {
    id: 'ovocnarstvi', title: 'Ovocná zahrada a užitkové plodiny', subtitle: 'Podnože, opylování, půda, sklizeň a střídání', minutes: 240, level: 'Středně pokročilé',
    overview: 'Užitková zahrada spojuje biologii odrůdy, podnože, opylování, výživu, ochranu a sklizňovou zralost. Cílem je zdravá a pravidelná produkce.',
    outcomes: ['Volit ovocný druh, odrůdu a podnož', 'Plánovat osevní postup a výživu zeleniny', 'Rozlišit sklizňovou a konzumní zralost'],
    lessons: [
      { title: 'Ovocné druhy a podnože', lead: 'Podnož ovlivňuje velikost, nástup plodnosti, kotvení, životnost i toleranci půdy.', points: ['Slabě rostoucí podnože často vyžadují trvalou oporu a přesnější závlahu.', 'Stanoviště vybírej i podle mrazových kotlin a pozdních jarních mrazů.', 'Místo roubování zůstává nad půdou, aby odrůda nezakořenila a nezměnila vzrůst.'] },
      { title: 'Opylování a násada', lead: 'Odrůdy se musí geneticky doplňovat a kvést ve stejném období; opylovači potřebují vhodné počasí a prostředí.', points: ['Partenokarpie tvoří plod bez oplození, samosprašnost umožňuje oplodnění vlastním pylem.', 'Přetížený strom vytváří drobné plody a může střídat plodnost; probírka pomáhá.', 'Poškození květu mrazem ověř řezem semeníku, ne jen pohledem na okvětní lístky.'] },
      { title: 'Zeleninové skupiny a osevní postup', lead: 'Střídej botanické čeledi a nároky na živiny, aby se omezilo hromadění patogenů a jednostranné čerpání.', points: ['Plodová, košťálová, kořenová, cibulová a lusková zelenina mají rozdílné potřeby.', 'Luskoviny vážou dusík v symbióze, ale část dusíku spotřebují a potřebují funkční hlízky.', 'Trvalé plodiny a skleníky vyžadují zvláštní hygienický a půdní plán.'] },
      { title: 'Výživa, zálivka a mulč', lead: 'Kolísání vody způsobuje praskání, deformace, hořkost či fyziologické poruchy.', points: ['Vápník se špatně přesouvá; jeho poruchy mohou vzniknout nepravidelnou zálivkou i při dostatku v půdě.', 'Čerstvý hnůj není vhodný ke všem plodinám a může podporovat listový růst na úkor sklizně.', 'Mulč snižuje výpar a znečištění plodů, ale sleduj slimáky a teplotu půdy.'] },
      { title: 'Bylinky a víceleté plodiny', lead: 'Středomořské bylinky potřebují slunce a drenáž, listové bylinky často více vláhy a živin.', points: ['Pravidelná sklizeň podporuje větvení, ale neodebírej většinu listové plochy oslabené rostlině.', 'Chřest, rebarbora a jahodník vyžadují víceletý plán stanoviště a obnovy.', 'U léčivých rostlin je zásadní správné určení, část rostliny, termín a bezpečnost použití.'] },
      { title: 'Sklizeň a skladování', lead: 'Sklizňová zralost určuje vhodný odběr, konzumní nejlepší chuť a technologická požadované využití.', points: ['Sklízej za chladu a sucha, sniž poškození a rychle odveď polní teplo.', 'Ovoce produkující etylen může urychlit zrání citlivých druhů ve společném skladu.', 'Skladuj pouze zdravé kusy při vhodné teplotě, vlhkosti a větrání.'] },
    ],
    checks: [
      { question: 'Co ovlivňuje podnož ovocného stromu?', answer: 'Vzrůst, nástup plodnosti, kotvení, nároky na půdu a vodu, životnost i často odolnost.' },
      { question: 'Proč střídat botanické čeledi?', answer: 'Kvůli omezení specifických chorob a škůdců a vyrovnanějšímu využívání půdy a živin.' },
    ],
  },
  {
    id: 'sklenik', title: 'Skleníky, nádoby a interiérové rostliny', subtitle: 'Řízené prostředí, substrát a hygiena', minutes: 190, level: 'Středně pokročilé',
    overview: 'V uzavřeném a nádobovém pěstování se chyby koncentrují rychleji. Malý kořenový objem, vysoká teplota a omezené proudění vzduchu vyžadují přesné řízení.',
    outcomes: ['Řídit teplotu, světlo, vlhkost a větrání', 'Volit nádobu a substrát', 'Předcházet škůdcům pomocí karantény a hygieny'],
    lessons: [
      { title: 'Skleníkové klima', lead: 'Teplota listu, vzduchu a substrátu se liší; slunečný skleník se může přehřát i v chladném dni.', points: ['Větrej dříve, než teplota překročí optimum, a zajisti proudění bez škodlivého průvanu.', 'Vysoká relativní vlhkost omezuje výpar a podporuje kondenzaci a choroby.', 'Stínění snižuje tepelnou zátěž, ale nesmí dlouhodobě omezit světlo pod potřebu plodiny.'] },
      { title: 'Nádoby a kořeny', lead: 'Velikost, tvar, materiál a drenáž nádoby ovlivňují teplotu a dostupnou vodu.', points: ['Kořenový bal zalévej rovnoměrně; voda protékající jednou mezerou neznamená nasycený substrát.', 'Přesazuj při zhoršené vodní rovnováze, stočených kořenech nebo rozpadu substrátu.', 'Příliš velká nádoba drží dlouho mokrý substrát a může ohrozit malý kořenový systém.'] },
      { title: 'Výživa a kvalita vody', lead: 'V nádobě se živiny i soli rychle hromadí nebo vyplavují.', points: ['Sleduj pH a elektrickou vodivost, zejména v profesionální produkci.', 'Tvrdá voda zvyšuje alkalitu a může postupně měnit pH substrátu.', 'Občasné důkladné prolití může vyplavit soli, pokud má nádoba bezpečný odtok.'] },
      { title: 'Pokojové prostředí', lead: 'Nízké zimní světlo, suchý vzduch, lokální topení a chlad u okna vytvářejí protichůdné stresy.', points: ['Zálivku sniž při nižším světle a pomalejším růstu.', 'Rostlinu nepřemisťuj náhle ze stínu na ostré slunce.', 'Prach na listech omezuje světlo a ztěžuje kontrolu škůdců.'] },
      { title: 'Hygiena a karanténa', lead: 'Nové rostliny, obaly, substrát i nástroje mohou zavléct škůdce a choroby.', points: ['Nové rostliny dočasně odděl a kontroluj rub listů, paždí, kořeny a lepové desky.', 'Odstraň odumřelé části a nenechávej vodu stát v podmiskách.', 'Zásah opakuj podle životního cyklu škůdce; jednorázové ošetření často nezasáhne vajíčka.'] },
    ],
    checks: [
      { question: 'Proč je skleník rizikový i za chladného slunečného dne?', answer: 'Sluneční záření může uzavřený prostor rychle přehřát nad bezpečnou teplotu.' },
      { question: 'Co znamená voda rychle vytékající z květináče?', answer: 'Může jít o nasycení, ale také o hydrofobní substrát nebo preferenční kanál; vlhkost je nutné ověřit uvnitř balu.' },
    ],
  },
  {
    id: 'bezpecnost', title: 'Bezpečnost, první pomoc a legislativa', subtitle: 'Rizika práce, ochrana lidí a právní odpovědnost', minutes: 220, level: 'Základ',
    overview: 'Bezpečnost je součást odborné kvality. Riziko se odstraňuje nejprve změnou postupu či technickým opatřením, teprve potom osobními ochrannými prostředky.',
    outcomes: ['Provést jednoduché hodnocení rizik', 'Volit ochranné prostředky a nouzový postup', 'Poznat situace vyžadující oprávnění nebo odborníka'],
    lessons: [
      { title: 'Hodnocení rizik', lead: 'Urči nebezpečí, kdo může být zasažen, pravděpodobnost a závažnost a nastav opatření před zahájením.', points: ['Preferuj odstranění rizika, náhradu metody, technickou ochranu a organizaci před OOPP.', 'Plán aktualizuj při změně počasí, stroje, pracovníků nebo veřejného provozu.', 'Sám pracující člověk potřebuje komunikační a nouzový plán.'] },
      { title: 'Osobní ochrana a ergonomie', lead: 'OOPP musí odpovídat konkrétnímu riziku, správně sedět a být udržované.', points: ['Ochrana zraku, sluchu, dýchání, rukou, nohou a hlavy se volí podle úkolu.', 'Těžké břemeno nejprve rozděl, použij pomůcku nebo tým; nezvedej rotací zad.', 'Vibrace, hluk a opakované pohyby omezuj délkou expozice a střídáním práce.'] },
      { title: 'Počasí a biologická rizika', lead: 'Horko, UV, chlad, bouřka, klíšťata, bodavý hmyz, toxické rostliny a zvířecí exkrementy vyžadují prevenci.', points: ['Při horku plánuj stín, tekutiny, přestávky a sleduj příznaky vyčerpání či úpalu.', 'Při bouřce opusť volné plochy, výšky, kovové konstrukce a práci u stromů.', 'Po kontaktu s neznámou rostlinou či chemikálií neodhaduj léčbu; použij bezpečnostní informace a odbornou pomoc.'] },
      { title: 'První pomoc a události', lead: 'Zastav práci, zajisti místo, přivolej pomoc a poskytni péči v rozsahu svého výcviku.', points: ['Měj dostupnou lékárničku, čistou vodu pro výplach a nabitý telefon.', 'Při vážném krvácení použij přímý tlak; při bezvědomí ověř dýchání a postupuj podle aktuálního výcviku.', 'Událost a téměř-nehodu zaznamenej, aby se neopakovala.'] },
      { title: 'Právní rámec práce', lead: 'Povinnosti se liší podle zaměstnání, podnikání, místa, stroje a činnosti a právní stav se mění.', points: ['Sleduj ochranu dřevin, přírody, vod, odpady, hluk, chemické přípravky a bezpečnost práce.', 'Kácení, zásah do chráněného území či druhů může vyžadovat povolení nebo výjimku.', 'Aktuální znění ověř u příslušného orgánu nebo odborníka; wiki nenahrazuje právní radu.'] },
      { title: 'Veřejnost a pracoviště', lead: 'Zákazník, kolemjdoucí, děti a zvířata neznají pracovní rizika a musí být chráněni organizací místa.', points: ['Vymez pracovní pásmo, bezpečně veď kabely a hadice a nenechávej nářadí bez dozoru.', 'Prachem, úletem a hlukem nesmíš nekontrolovaně zasáhnout okolí.', 'Na konci pracoviště ukliď, zkontroluj stabilitu a odstraň dočasná rizika.'] },
    ],
    checks: [
      { question: 'Jaké je pořadí řízení rizik?', answer: 'Odstranění, náhrada, technická opatření, organizační opatření a nakonec osobní ochranné prostředky.' },
      { question: 'Kdy je třeba právní informaci ověřit?', answer: 'Vždy před konkrétním zásahem; předpisy, místní pravidla i povolení se mohou měnit.' },
    ],
  },
  {
    id: 'podnikani', title: 'Organizace práce a podnikání', subtitle: 'Zakázka, rozpočet, komunikace a profesionální standard', minutes: 230, level: 'Středně pokročilé',
    overview: 'Odborná práce musí být zároveň správně vymezená, naceněná, zdokumentovaná a komunikovaná. Zisk není přirážka za materiál, ale podmínka udržitelné služby.',
    outcomes: ['Připravit rozsah, rozpočet a harmonogram', 'Vést změny, dokumentaci a předání', 'Nastavit kvalitu, odpovědnost a následnou péči'],
    lessons: [
      { title: 'Poptávka a prohlídka', lead: 'Zjisti cíl, rozsah, termín, rozpočet, rozhodovací osobu, přístup, rizika a očekávanou úroveň dokončení.', points: ['Na místě měř, fotografuj se souhlasem a zapisuj předpoklady.', 'Rozliš konzultaci, návrh, realizaci, údržbu a pohotovostní zásah.', 'Neslibuj termín ani cenu před ověřením zásadních neznámých.'] },
      { title: 'Kalkulace', lead: 'Cena zahrnuje práci, odvody, materiál, dopravu, stroje, odpad, režii, riziko a přiměřený zisk.', points: ['Množství počítej z výkazu a přidej odůvodněnou ztrátu či prořez.', 'Produktivní hodina není totéž jako placená pracovní hodina; existuje příprava, cesta a administrativa.', 'Nejasné položky oceň jako odhad s podmínkou, jednotkovou cenu nebo výslovnou výluku.'] },
      { title: 'Nabídka a smluvní rozsah', lead: 'Dobrá nabídka popisuje výsledek, materiály, množství, výluky, odpovědnosti, cenu, platby a změnový proces.', points: ['Definuj, kdo zajistí vodu, elektřinu, přístup, povolení a ochranu majetku.', 'U rostlin uveď náhrady, toleranci a podmínky záruky včetně péče klienta.', 'Ústní změnu potvrď písemně dříve, než vznikne náklad.'] },
      { title: 'Plánování a logistika', lead: 'Pořadí prací má chránit hotové části, minimalizovat přesuny a respektovat počasí i biologické termíny.', points: ['Materiál objednávej podle kapacity bezpečného skladu a tempa realizace.', 'Kritickou cestu tvoří kroky, jejichž zpoždění posune celý termín.', 'Připrav náhradní práci pro počasí, pokud to rozsah dovoluje.'] },
      { title: 'Kontrola kvality a předání', lead: 'Kontroluj průběžně skryté vrstvy, druhy, výšky a množství; po zakrytí je oprava drahá.', points: ['Používej kontrolní body před zakrytím drenáže, podkladu nebo závlahy.', 'Při předání projdi výsledek, nedodělky, dokumentaci, návody a plán péče.', 'Fotografie skutečného provedení pomohou servisu i řešení reklamace.'] },
      { title: 'Komunikace a etika', lead: 'Vysvětluj varianty, důsledky a nejistoty srozumitelně. Odborník umí říct i „nevím, ověřím“.', points: ['Nedoporučuj zbytečný zásah jen proto, že je prodejný.', 'Chraň soukromí, klíče, fotografie a informace o klientovi.', 'Chybu oznam včas, navrhni nápravu a pouč se systémově.'] },
    ],
    checks: [
      { question: 'Co musí zahrnovat hodinová nebo položková cena?', answer: 'Přímou práci i odvody, materiál, dopravu, stroje, režii, rizika a zisk.' },
      { question: 'Kdy potvrdit změnu rozsahu?', answer: 'Před provedením práce nebo objednáním materiálu, ideálně písemně s dopadem na cenu a termín.' },
    ],
  },
  {
    id: 'sezona', title: 'Sezonní řízení a fenologie', subtitle: 'Práce ve správný okamžik místo slepého kalendáře', minutes: 160, level: 'Středně pokročilé',
    overview: 'Kalendář je orientační. Profesionál sleduje fenologii, počasí, půdní teplotu, vlhkost a lokální průběh sezony a podle nich posouvá zásahy.',
    outcomes: ['Plánovat práci podle fenologických signálů', 'Rozlišit vhodná sezonní okna zásahů', 'Připravit zahradu na extrémy a zimu'],
    lessons: [
      { title: 'Předjaří a jaro', lead: 'Kontroluj zimní škody, vláhu, mrazové riziko a postupné rašení.', points: ['Nevstupuj technikou na rozbahněnou půdu, kde způsobíš dlouhodobé zhutnění.', 'Řez časuj podle druhu a nebezpečí chorob, ne pouze podle měsíce.', 'Výsevy a výsadby řiď teplotou půdy, jejím zpracováním a předpovědí.'] },
      { title: 'Léto', lead: 'Prioritou je vodní režim, monitoring škůdců, bezpečnost v horku a udržení funkční listové plochy.', points: ['Zálivku plánuj podle kořenové hloubky a očekávaného výparu.', 'Ve vedru neprováděj silný řez ani přesun neotužených rostlin na přímé slunce.', 'Včas odhaluj přetížení plody, poléhání a mechanické poškození.'] },
      { title: 'Podzim', lead: 'Půda bývá teplá a vzduch chladnější, což přeje zakořeňování mnoha odolných rostlin.', points: ['Termín výsadby musí ponechat čas na zakořenění a závisí na druhu i půdě.', 'Neuklízej všechen organický materiál bez rozlišení; zdravé listí může být zdroj a stanoviště.', 'Pozdní dusík může prodloužit měkký růst, který špatně vyzrává.'] },
      { title: 'Zima', lead: 'Zima je období kontroly konstrukcí, plánování, řezu vybraných druhů, servisu techniky a ochrany citlivých rostlin.', points: ['Setřásání sněhu prováděj opatrně zdola a bez lámání zmrzlých větví.', 'Zimní sucho ohrožuje stálezelené rostliny, zejména v nádobách.', 'Nepracuj na zmrzlé křehké koruně ani na půdě, kterou můžeš strukturálně poškodit.'] },
      { title: 'Fenologické indikátory', lead: 'Kvetení, rašení, zrání a opad reagují na skutečný průběh počasí lépe než pevné datum.', points: ['Veď lokální záznamy o prvním květu, mrazech, suchu a výskytu škůdců.', 'Indikátor musí být na podobném stanovišti a dlouhodobě pozorovaný.', 'Fenologie pomáhá načasovat monitoring, ale nenahrazuje přímou kontrolu cílového organismu.'] },
    ],
    checks: [
      { question: 'Proč je fenologie lepší než pevný kalendář?', answer: 'Reaguje na skutečný vývoj sezony, teplotu a místní mikroklima, které se rok od roku liší.' },
      { question: 'Proč nevstupovat na mokrou půdu?', answer: 'Tlak rozbíjí strukturu a vytlačí vzduch; vzniklé zhutnění může přetrvat roky.' },
    ],
  },
  {
    id: 'profesional', title: 'Profesní integrace a rozhodování', subtitle: 'Jak spojit znalosti při skutečném problému', minutes: 180, level: 'Pokročilé',
    overview: 'Plnohodnotný zahradník propojuje obory. Neřeší žlutý list izolovaně: skládá historii, stanoviště, kořen, vodu, výživu, patogeny, zásahy i riziko.',
    outcomes: ['Použít rozhodovací rámec od pozorování po kontrolu výsledku', 'Prioritizovat bezpečnost, příčinu a dlouhodobý efekt', 'Poznat hranice znalostí a správně eskalovat'],
    lessons: [
      { title: 'Rámec POZORUJ–VYSVĚTLI–JEDNEJ', lead: 'Nejprve sbírej data, potom vytvoř více hypotéz, vyber nejbezpečnější ověřovací krok a až poté zasahuj.', points: ['Odděl fakta od domněnek a zapisuj, co by každou hypotézu potvrdilo nebo vyvrátilo.', 'Preferuj vratný malý test před plošným nevratným zásahem.', 'Stanov termín kontroly a měřítko úspěchu.'] },
      { title: 'Priorita zásahů', lead: 'Pořadí je obvykle bezpečnost lidí, prevence další škody, odstranění příčiny a teprve estetika.', points: ['Padající větev řeš dříve než skvrny na listech.', 'Netěsnost závlahy oprav před přidáním hnojiva oslabené výsadbě.', 'Kosmetický řez odlož, pokud by zvýšil stres během sucha.'] },
      { title: 'Práce s nejistotou', lead: 'Biologické systémy nejsou dokonale předvídatelné. Profesionální odpověď uvádí pravděpodobnost, alternativy a způsob ověření.', points: ['Neslibuj přežití živého organismu bez podmínek péče a známých rizik.', 'Vzorek odešli do laboratoře, pokud výsledek mění nákladný nebo rizikový zásah.', 'Aktualizuj doporučení, když nová data vyvrátí původní hypotézu.'] },
      { title: 'Hranice odbornosti', lead: 'Eskalace není slabost, ale součást bezpečné praxe.', points: ['Arborista: rizikové stromy, práce v koruně, přístrojové posouzení.', 'Projektant, statik, elektrikář či vodohospodář: konstrukce, sítě, voda a povolované části.', 'Laboratoř nebo rostlinolékařský specialista: nejasná choroba, karanténní podezření, závažná epidemie.'] },
      { title: 'Dokumentace a učení', lead: 'Každá zakázka je zdroj dat. Fotografie, půdní výsledky, spotřeba, počasí a vývoj rostlin zpřesňují budoucí rozhodnutí.', points: ['Používej stejná místa a úhly pro srovnávací fotografie.', 'Zapisuj i neúspěšné zásahy a možné důvody.', 'Průběžně aktualizuj znalosti z odborných zdrojů, školení a metodik.'] },
      { title: 'Závěrečný standard', lead: 'Teoreticky připravený zahradník umí vysvětlit proč, předvídat důsledky, bezpečně stanovit postup a ověřit výsledek.', points: ['Správně identifikuje organismus, místo a problém.', 'Volí zásah odpovídající biologii, riziku, právu a rozpočtu.', 'Komunikuje omezení, péči, odpovědnost a termín kontroly.'], note: 'Teorie vytváří mapu. Zručnost, rychlost, cit pro materiál a bezpečné návyky vznikají pouze řízenou praxí.' },
    ],
    checks: [
      { question: 'Jaký je první krok při nejasném problému?', answer: 'Systematicky pozorovat a shromáždit data dříve, než se vybere vysvětlení nebo zásah.' },
      { question: 'Co musí následovat po zásahu?', answer: 'Kontrola v předem stanoveném termínu a porovnání výsledku s měřitelným cílem.' },
    ],
  },
];

export const glossary = [
  ['Adventivní kořen', 'Kořen vznikající ze stonku, listu nebo starší části kořene mimo běžné místo.'],
  ['Apikální dominance', 'Potlačení bočních pupenů růstovým vrcholem prostřednictvím hormonální regulace.'],
  ['Dormance', 'Vnitřně nebo vnějškově řízený stav omezeného růstu a klíčení.'],
  ['Evapotranspirace', 'Součet výparu z povrchu a transpirace rostlin.'],
  ['Fenologie', 'Studium pravidelných životních projevů organismů ve vztahu k sezoně a klimatu.'],
  ['Kořenový krček', 'Přechod mezi kořenovým systémem a nadzemní částí rostliny.'],
  ['Kultivar', 'Pěstovaná vybraná forma s udržovanými vlastnostmi.'],
  ['Mykorhiza', 'Vzájemně prospěšné spojení houby a kořene rostliny.'],
  ['Sorpční kapacita', 'Schopnost půdy poutat a vyměňovat živinné ionty.'],
  ['Transpirace', 'Výdej vodní páry rostlinou, zejména průduchy listů.'],
  ['Větevní kroužek', 'Zesílená zóna u nasazení větve důležitá pro správné vedení řezu.'],
  ['Vitalita', 'Schopnost organismu růst, reagovat na stres a obnovovat funkce.'],
];
