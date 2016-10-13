// popis učenika
var osnoveTurizmaImena = ["Danijel", "Denis", "Celine", "Karlo", "Ivan"],
    organizacijaImena = ["Luka", "Petar", "Dora", "Meteo", "Hrvoje", "Iva"],
    marketingImena = ["Damir", "Mateo", "Antonio", "Josip", "Marija", "Sara", "Nikolina", "Petra"],
    testImena = ["Učenik 1", "Učenik 2", "Učenik 3", "Učenik 4", "Učenik 5"];

// pitanja po predmetima

// pitanja osnove turizma
var osnoveTurizmaPitanja = [{
        pitanje: "Koja je razlika između turista i izletnika?",
        odgovor: "turist ostvaruje barem 1 noćenje, dok izletnik ne (putuje kraće od 1 dan)",
        slika: ""
    }, {
        pitanje: "Tko je turist?",
        odgovor: "osoba koja putuje izvan svoje sredine kraće od 1 godine i čija glavna svrha putovanja nije vezana za obavljanje neke djelatnosti u mjestu u koje dolazi",
        slika: ""
    }, {
        pitanje: "Koga ne smatramo turistom?",
        odgovor: "aktivni pripadnici oružanih snaga, putnici na dnevnim rutinskim putovanjima (posao, škola…), migranti, izbjeglice, prognanici, putnici u tranzitu, radnici na privremenom radu, nomadi…",
        slika: ""
    }, {
        pitanje: "Objasni prostornu i vremensku komponentu turizma.",
        odgovor: "prostorna komponenta turizma – putovanje vremenska komponenta turizma – boravak (duži od 1 dana, a kraći od 1 godine)",
        slika: ""
    }, {
        pitanje: "Objasni izjavu „svaki putnik nije, ali je svaki turist putnik”.",
        odgovor: "Svi putnici putuju, ali nisu svi putnici turisti jer ne ostvare noćenje.",
        slika: ""
    }, {
        pitanje: "Koja su obilježja turističkog putovanja? (4 obilježja)",
        odgovor: "- osoba svojevoljno napušta mjesto prebivališta, <br>- putuje u svoje slobodno vrijeme, <br>- ne obavlja nikakvu djelatnost u mjestu u koje dolazi, <br>- putovanje je dvosmjerno – turist se uvijek vraća u mjesto svoga stalnog boravka",
        slika: ""
    }, {
        pitanje: "Što je turizam?",
        odgovor: "turizam obuhvaća sve aktivnosti osoba na putovanju i prilikom boravka u mjestu izvan njihova stalnog boravka u razdoblju ne duljem od 1 god, a u svrhu odmora",
        slika: ""
    }, {
        pitanje: "Koje su 2 komponente turizma?",
        odgovor: "- prostorna komponenta turizma – putovanje<br>- vremenska komponenta turizma – boravak (duži od 1 dana, a kraći od 1 godine)",
        slika: ""
    }, {
        pitanje: "Koje vrste turizma poznajemo?",
        odgovor: "domaći, receptivni ili ulazni i emitivni ili izlazni",
        slika: ""
    }, {
        pitanje: "Koje su 2 skupine specifičnih oblika turizma?",
        odgovor: "- turizam zasnovan na prirodnim resursima (zdravstveni, sportski, ekoturizam, seoski…)<br>- turizam zasnovan na društvenim resursima (kongresni, gastro turizam, vjerski turizam…)",
        slika: ""
    }, {
        pitanje: "Kad se neko mjesto počinje turistički razvijati?",
        odgovor: "turistička mjesta se počinju razvijati kada se prometno povežu i kada se razviju kapaciteti nužni za prihvat turista",
        slika: ""
    }, {
        pitanje: "Što je turističko mjesto?",
        odgovor: "turistička mjesta su ona mjesta koja turisti i izletnici posjećuju u većem broju i koja svojom opremljenošću omogućuju njihov prihvat i boravak",
        slika: ""
    }, {
        pitanje: "Što je turistička destinacija?",
        odgovor: "turistička destinacija – zemljopisno područje šire od turističkog mjesta",
        slika: ""
    }, {
        pitanje: "Koji su uvjet po kojima je neko mjesto turistička destinacija? (5 uvjeta)",
        odgovor: "- privlačnost<br>- dostupnost<br>- odgovarajući smještajni kapaciteti<br>- izbor aktivnosti<br>- ostali sadržaji",
        slika: ""
    }, {
        pitanje: "Što su turistički resursi?",
        odgovor: "turistički resursi su prirodna i društvena dobra koja se mogu turistički iskoristiti",
        slika: ""
    }, {
        pitanje: "Kako dijelimo turističke resurse?",
        odgovor: "turističke resurse dijelimo na prirodne i društvene resurse",
        slika: ""
    }, {
        pitanje: "Nabroj neke turističke resurse otoka Paga.",
        odgovor: "more, plaže, okoliš, specifična vegetacija, razne manifestacije, arhitektura…",
        slika: ""
    }, {
        pitanje: "Što su turističke atrakcije?",
        odgovor: "turističke atrakcije su sve prirodne ili društvene pojave koje privlače posjetitelje i koje se mogu turistički iskoristiti",
        slika: ""
    }, {
        pitanje: "Nabroj neke turističke atrakcije na otoku Pagu.",
        odgovor: "Zrće, lunski malinici, Stari grad, Talijanova buža, vjetroelektrane, karneval, Paško ljeto…",
        slika: ""
    }, {
        pitanje: "Što je dokolica?",
        odgovor: "dokolica – skup aktivnosti kojima se čovjek opušta po svojoj slobodnoj volji, oslobođen profesionalnih, obiteljskih i društvenih obveza",
        slika: ""
    }, {
        pitanje: "Koje su turističke aktivnosti vezane uz dokolicu?",
        odgovor: "odmor i oporavak, sportska rekreacija, zabava i dokoličarsko obrazovanje",
        slika: ""
    }, {
        pitanje: "Navedi primjer za dokoličarsko obrazovanje.",
        odgovor: "tečajevi kuhinje, slikanja, škola ronjenja, škola zdrave prehrane…",
        slika: ""
    }],

    // pitanja organizacija
    organizacijaPitanja = [{
        pitanje: "Što je organizacija?",
        odgovor: "smišljena ljudska aktivnost koja ima dužnost stavljanja u funkciju više organa zbog obavljanja određenog zadatka (ili postizanje nekog cilja)",
        slika: ""
    }, {
        pitanje: "Koja je svrha organizacije?",
        odgovor: "omogućiti da se što jednostavnije, brže i jeftinije ostvari određeni zadatak, bilo na području proizvodnje ili pružanja usluga",
        slika: ""
    }, {
        pitanje: "Kako teče proces organizacije rada u nekom poduzeću?",
        odgovor: "organizacija rada počinje organiziranjem svakog pojedinog radnog mjesta, a zatim međusobnim usklađivanjem svih radnih mjesta u odjelu, pogonu i nakon toga usklađivanje svih odjela u ugostiteljskom objektu",
        slika: ""
    }, {
        pitanje: "Koji su elementi organizacije rada? (5 elemenata)",
        odgovor: "ljudi, sredstva za rad, prostor, predmeti rada i vrijeme",
        slika: ""
    }, {
        pitanje: "Što je poduzeće?",
        odgovor: "samostalna gospodarska organizacija koju je osnovao (ili kupio) njezin vlasnik kako bi obavljao neku djelatnost i ostvarivao zaradu (dobit)",
        slika: ""
    }, {
        pitanje: "Na čemu se zasniva organizacija poslovanja poduzeća?",
        odgovor: "organizacija poslovanja poduzeća se zasniva na organizaciji rada na koju se onda nadovezuju ostale funkcije poduzeća – proizvodna, uslužna, nabavna, financijska, kadrovska, razvojna, rukovodna, kontrolna i dr.",
        slika: ""
    }, {
        pitanje: "Što je formalna organizacija?",
        odgovor: "ona organizacija koja je određena nekim službenim aktom koji je donijelo neko službeno tijelo (npr. upravni odbor ili direktor)" + "<br>" + "formalna organizacija se temelji na stvarnim potrebama i iskustvu iz prošlih vremena",
        slika: ""
    }, {
        pitanje: "Što je neformalna organizacija?",
        odgovor: "ona organizacija koju nije unaprijed propisalo i odobrilo odgovarajuće upravljačko tijelo, već se silom prilika stvara po potrebi",
        slika: ""
    }, {
        pitanje: "Navedi primjer za neformalnu organizaciju rada.",
        odgovor: "organizacija rada koja nastaje spontano - npr. kada neki radnik izostane s posla ili kada nenajavljeno dođe velika skupina gostiju u restoran ili hotel – u tom slučaju sobarica će pospremiti 30 soba, konobar će poslužiti  50 gostiju, a kuhar će spremiti 80 obroka i sl.",
        slika: ""
    }, {
        pitanje: "Tko rukovodi organizacijom rada u jednom odjelu?",
        odgovor: "Voditelj odjela.",
        slika: ""
    }, {
        pitanje: "Tko rukovodi organizacijom cijelog poduzeća?",
        odgovor: "Direktor (upravitelj).",
        slika: ""
    }, {
        pitanje: "Što je ugostiteljstvo?",
        odgovor: "uslužna i proizvodna djelatnost koja se bavi prodajom, pripremom i posluživanjem raznovrsne hrane, napitaka i pića te  pružanjem usluga smještaja u posebno pripremljenim sobama i apartmanima te pružanjem usluga zabave i rekreacije i njihovom prodajom u ugostiteljskom objektu",
        slika: ""
    }, {
        pitanje: "Je li ugostiteljstvo proizvodna ili uslužna djelatnost?",
        odgovor: "ugostiteljstvo je i proizvodna i uslužna djelatnost koja zahtjeva puno ljudskog rada jer se u proizvodnji i posluživanju koristi malo strojnog rada",
        slika: ""
    }, {
        pitanje: "Koje se ugostiteljske djelatnosti? (4)",
        odgovor: "hotelijerstvo, restauraterstvo, barovi i animacija",
        slika: ""
    }, {
        pitanje: "Što je turizam?",
        odgovor: "turizam označava putovanje ljudi i njihov boravak duže ili kraće vrijeme u nekom mjestu koje nije mjesto njihova stalnog boravka",
        slika: ""
    }, {
        pitanje: "Kakva je uloga ugostiteljstva u turizmu?",
        odgovor: "ugostiteljstvo čini receptivu (sposobnost prihvaćanja gostiju) turizma nekog mjesta – materijalna baza turizma",
        slika: ""
    }, {
        pitanje: "Što su receptivne a što emitivne turističke zemlje?",
        odgovor: "receptivne turističke zemlje – zemlje koje primaju goste" + "<br>" + "emitivne turističke zemlje – zemlje iz kojih dolaze gosti",
        slika: ""
    }, {
        pitanje: "Je li Hrvatska receptivna ili emitivna turistička zemlja? Objasni.",
        odgovor: "receptivna jer više gostiju dolazi u Hrvatsku na odmor nego što iz Hrvatske putuje u druge zemlje",
        slika: ""
    }, {
        pitanje: "Što su putničke agencije?",
        odgovor: "putničke agencije su posrednici između ugostiteljskih poslovnih jedinica (hotela, pansiona, hotelskih naselja, apartmana…) i potencijalnih gostiju",
        slika: ""
    }, {
        pitanje: "Koje su vrste ugovora između ugostiteljskih objekata i putničkih agencija? (3)",
        odgovor: "okvirni ugovor („ugovor na osnovi zatražene i potvrđene rezervacije“)" + "<br>" + "ugovor o alotmanu (alotmanski ugovor)" + "<br>" + "ugovor o zakupu kapaciteta („fiksni ugovor“ i „ugovor puno za prazno“)",
        slika: ""
    }, {
        pitanje: "Objasni okvirni ugovor („ugovor na osnovi zatražene i potvrđene rezervacije“).",
        odgovor: "- agencija nalazi goste, uzima proviziju i naplaćuje gostima boravak u hotelu" + "<br>" + "- nakon plaćanja gostu izdaje vaučer – dokument o uplaćenoj rezervaciji, a kopiju šalje hotelu" + "<br>" + "- gost pri dolasku u hotel predaje vaučer hotelu i na taj način „plaća“ uslugu" + "<br>" + "- nakon iskorištene usluge (odlaska gostiju) hotel šalje agenciji račun vaučer na naplatu",
        slika: ""
    }, {
        pitanje: "Objasni ugovor o alotmanu.",
        odgovor: "- hotelijer se obvezuje da će u ugovorenom vremenu dati agenciji na raspolaganje određeni broj soba i traženih usluga na raspolaganje uz ugovorenu proviziju" + "<br>" + "- agencija može neke sobe ne popunit, ali treba na vrijeme obavijestiti hotel",
        slika: ""
    }, {
        pitanje: "Objasni ugovor o zakupu kapaciteta („fiksni ugovor“ i „ugovor puno za prazno“).",
        odgovor: "- agencija uzima u zakup cijeli hotel ili samo određeni broj soba na neko vrijeme" + "<br>" + "- agencija plaća zakupljene kapacitete bez obzira jesu bili korišteni" + "<br>" + "ovaj ugovor se najčešće sklapa kada je agencija sigurna da će popuniti sve kapacitete – npr. za vrijeme održavanja kongresa, u vrhuncu turističke sezone, za vrijeme sportskih događaja i sl.",
        slika: ""
    }, {
        pitanje: "Što je provizija putničke agencije?",
        odgovor: "provizija je svota koju ugostiteljski objekt odobrava u postotku ili fiksnom iznosu za vrijednost pruženih usluga gostima koje je u ugostiteljski objekt uputila agencija",
        slika: ""
    }, {
        pitanje: "Što je turističko posredovanje?",
        odgovor: "poslovni odnos između turističke agencije i ugostiteljskog objekta naziva se turističko posredovanje",
        slika: ""
    }, {
        pitanje: "Što je trgovina?",
        odgovor: "posredništvo između proizvođača i potrošača",
        slika: ""
    }, {
        pitanje: "Kako ugostiteljstvo ovisi o trgovini?",
        odgovor: "- ugostiteljstvo ovisi o trgovini kod nabave robe za proizvodnju" + "<br>" + "- nestašica pojedinih roba može značajno utjecati na ugostiteljsku ponudu",
        slika: ""
    }, {
        pitanje: "Kako su obrti vezani za ugostiteljstvo? Nabroj neke primjere.",
        odgovor: "- uglavnom su vezanim za održavanje ugostiteljskih objekata i dobavljanje namirnica" + "<br>" + "- npr. popravak vodoinstalacija, elektroinstalacija, slastičari, pekari, praonice rublja, održavanje okoliša…",
        slika: ""
    }, {
        pitanje: "Koja je razlika između obrta i industrije?",
        odgovor: "za razliku od obrta, industrija zapošljava veći broj radnika i proizvodi serijski veći broj proizvoda",
        slika: ""
    }, {
        pitanje: "Koja industrija je najbitnija za ugostiteljstvo?",
        odgovor: "industrija hrane i pića"
    }, {
        pitanje: "Što je to hotelska industrija?",
        odgovor: "hoteli s više od 1000 postelja, restauracije s većim brojem sjedala i dr.",
        slika: ""
    }],

    // marketing pitanja
    marketingPitanja = [{
        pitanje: "Što je marketing?",
        odgovor: "Marketing je upravljački proces koji identificira, predviđa i zadovoljava potrebe i želje potrošača ostvarujući profit",
        slika: ""
    }, {
        pitanje: "Stvara li marketing nove želje i potrebe ili zadovoljava već postojeće?",
        odgovor: "Marketing ne stvara već zadovoljava već postojeće potrebe. Primjer s automobilom (Mercedes) i mobitelom (iPhone) – marketing nije stvorio kod ljudi želju za prestižem i bogatstvom, već je preko tih proizovda zadovoljio te ljudske potrebe",
        slika: "img/marketing/pitanje_002.jpg"
    }, {
        pitanje: "Što je marketing u turizmu?",
        odgovor: "Budući turizam spada u aktivnosti temeljene na slobodnom vremenu, marketing u turizmu je marketing slobodnog vremena.",
        slika: "img/marketing/pitanje_003.jpg"
    }, {
        pitanje: "Što (koga) obuhvaća marketing?",
        odgovor: "marketing obuhvaća proizvođača, potrošača i distributera (kao posrednika u procesu razmjene)",
        slika: ""
    }, {
        pitanje: "Koji su osnovni koncepti marketinga? (3)",
        odgovor: "- usmjerenost poslovnih aktivnosti na potrošača – primjer sa stolom u sobi hotela postavljenim radi poslovnih gostiju<br>- prilagođavanje uvjetima okruženja – primjer s hotelom koji je obnovio dvoranu i stavio ju u ponudu jer je susjedni hotel u ponudu stavio tenis terene<br>- provođenje poslovne ideje u djelo – provođenje marketinškog plana u djelo na razini cijelog poduzeća",
        slika: ""
    }, {
        pitanje: "Koje su poslovne koncepcije marketinga?",
        odgovor: "koncepcija proizvodnje, proizvoda, prodaje, marketinga i holističkog marketinga",
        slika: ""
    }, {
        pitanje: "Objasni koncepciju PROIZVODNJE i navedi primjer.",
        odgovor: "- naglasak na masovnoj proizvodnji jeftinih proizvoda dostupnih svima<br>- primjer Ford T model i „no name” proizvođači",
        slika: "img/marketing/pitanje_007.jpg"
    }, {
        pitanje: "Objasni koncepciju PROIZVODA i navedi primjer.",
        odgovor: "- usavršava se proizvod (naglasak na kvaliteti proizvoda)<br>- smatra se da proizvod sam pronalazi kupca<br>- zanemaruju se potrebe i želje kupaca<br>- primjer s proizvođačima satova i restoranom specijaliziranim u pečenim rebarcima",
        slika: "img/marketing/pitanje_008.jpg"
    }, {
        pitanje: "Objasni koncepciju PRODAJE i navedi primjer.",
        odgovor: "- ova koncepcija nastaje s pojavom konkurencije<br>- tvrtke se koriste agresivnom prodajom i jakim promocijskim aktivnostima, jer jedini cilj je prodaja<br>- koncepcija prodaje ima kratkotrajno djelovanje jer se gleda trenutna prodaja, a zanemaruju se potrebe kupaca<br>- koristi se kod proizvoda koji se obično nemaju namjeru kupiti (npr. enciklopedije, osiguranje i sl.)",
        slika: "img/marketing/pitanje_009.jpg"
    }, {
        pitanje: "Objasni koncepciju MARKETINGA i navedi primjer.",
        odgovor: "- ova koncepcija naglašava potrošača<br>- proizvodi i usluge se prilagođavaju potrošačima<br>- ciljevi tvrtke mogu se postići tako da se uoče potrebe i želje potrošača i da se one zadovolje učinkovitije i djelotvornije nego što to čini konkurencija<br>- primjer IKEA, Zappos, proizvođači automobila i dr.",
        slika: "img/marketing/pitanje_010.jpg"
    }, {
        pitanje: "Objasni HOLISTIČKI marketing i navedi njegove osnovne komponente",
        odgovor: "holistički marketing se zasniva na konceptu „sve je važno”. Nastoji povezati četiri komponente: marketing odnosa, interni marketing, integrirani marketing i društveno odgovoran marketing",
        slika: "img/marketing/pitanje_011.jpg"
    }, {
        pitanje: "Objasni DURŠTVENO ODGOVORAN marketing i navedi primjer.",
        odgovor: "- društveno odgovoran marketing naglašava interes potrošača i društva <br>- marketing se treba temeljiti na društvenoj odgovornosti te brizi o zaštiti okoliša i ograničenim prirodnim resursima <br>- primjer kampanja <i>Moja prva mamografija</i>, reklame protiv pušenja, protiv nošenja krzna...",
        slika: "img/marketing/pitanje_012.jpg"
    }, {
        pitanje: "Objasni ZELENI marketing i navedi primjer.",
        odgovor: "- kao marketinška strategija koristi se isticanje ekološke osviještenosti<br>- primjer Disney World (recikliranje vode, papira, limenki, krpa…), hotel koji je promijenio šalice iz plastičnih u višekratne i uštedio 6000 USD",
        slika: "img/marketing/pitanje_013.jpg"
    }, {
        pitanje: "Što je tržište?",
        odgovor: "mjesto sučeljavanja ponude i potražnje i formiranja cijena",
        slika: ""
    }, {
        pitanje: "Koji su preduvjeti tržišne razmjene? (5)",
        odgovor: "1. u razmjeni moraju uvijek postojati najmanje dvije strane <br>2. svaka strana ima nešto što je od vrijednosti drugoj strani <br>3. svaka je strana sposobna komunicirati i izvršiti dogovoreno <br>4. svaka je strana slobodna prihvatiti ili odbiti ponuđenu razmjenu <br>5. svaka strana vjeruje da je prihvatljivo i poželjno poslovati s drugom stranom",
        slika: ""
    }, {
        pitanje: "Što su potrebe a što želje? Navedi primjer.",
        odgovor: "- potrebe – stanje doživljene uskraćenosti (fizičke, socijalne, osobne) <br>- želje su žudnje za posebnim, specifičnim zadovoljenjem nastalih potreba <br>- želje su mijenjaju pod društvenim utjecajem <br>- ljudi različite potrebe zadovoljavaju na različite načine <br>- npr. potrebu za hranom ili potreba za stanom",
        slika: "img/marketing/pitanje_016.jpg"
    }, {
        pitanje: "Na Maslowljevoj ljestvici ljudskih potreba, što uključuje potrebe NIŽEG reda?",
        odgovor: "- fiziološke potrebe (hrana, zrak, voda, toplina…) <br>- potrebe za sigurnošću i zaštitom (zaštita, stabilnost, nevisnost…)",
        slika: ""
    }, {
        pitanje: "Na Maslowljevoj ljestvici ljudskih potreba, što uključuje potrebe VIŠEG reda?",
        odgovor: "- društvene potrebe (ljubav, prijateljstvo, pripadanje grupi…) <br>- potrebe ličnosti (samopoštovanje, status, ugled…) <br>- potrebe za samoostvarenjem (samoispunjenje)",
        slika: ""
    }],



    // test pitanja
    testPitanja = [{
        pitanje: "Prvo pitanje",
        odgovor: "prvi odgovor",
        slika: "img/test/test_odgovor.jpg"
    }, {
        pitanje: "Drugo pitanje",
        odgovor: "drugi odgovor",
        slika: ""
    }, {
        pitanje: "Treće pitanje",
        odgovor: "treći odgovor",
        slika: "img/test/test_odgovor.jpg"
    }, {
        pitanje: "Četvrto pitanje",
        odgovor: "četvrti odgovor",
        slika: ""
    }, {
        pitanje: "Peto pitanje",
        odgovor: "peti odgovor",
        slika: "img/test/test_odgovor.jpg"
    }];