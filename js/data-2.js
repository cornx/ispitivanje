// popis učenika
var osnoveTurizmaImena = ["Danijel", "Denis", "Celine", "Karlo", "Ivan"],
    organizacijaImena = ["Luka", "Petar", "Dora", "Meteo", "Hrvoje", "Iva"],
    marketingImena = ["Damir", "Mateo", "Antonio", "Josip", "Marija", "Sara", "Nikolina", "Petra"];

//********************************************************//
//                                                        //
//      pitanja po predmetima za 2. krug ispitivanja      //
//                                                        //
//********************************************************//

// pitanja osnove turizma
var osnoveTurizmaPitanja = [{
        pitanje: "Što su motivi?",
        odgovor: "- psihički procesikoji pokrećuljudena određeno ponašanje i aktivnosti <br>– unutarnjasnagakoja pokrećeosobeprema ispunjenju potreba ili određenih ciljeva",
        slika: ""
    }, {
        pitanje: "Što su potrebe, a što želje?",
        odgovor: "- potreba – stanje doživljene uskraćenosti <br>- želje – žudnje  za posebnim zadovoljenjem nastalih potreba",
        slika: ""
    }, {
        pitanje: "Kako dijelimo ljudske potrebe?",
        odgovor: "- primarne biološke, primarne socijalne i sekundarne potrebe",
        slika: ""
    }, {
        pitanje: "Što su turistički motivi?",
        odgovor: "- motivi koji se ostvaruju na turističkom putovanju",
        slika: ""
    }, {
        pitanje: "Što je potrebno za ostvarenje turističkog putovanja?",
        odgovor: "–	slobodno vrijeme (dokolica), novčana sredstva (nakon podmirenih osnovnih potreba), korisnost turističkog putovanja i motiv za putovanje",
        slika: ""
    }, {
        pitanje: "Koji su najčešći motivi dolaska gostiju u Hrvatsku?",
        odgovor: "–	pasivni odmor i opuštanje, zabava, nova iskustva i doživljaji, gastronomija, upoznavanje prirodnih ljepota",
        slika: ""
    }, {
        pitanje: "U čemu se očituje gospodarska važnost turizma?",
        odgovor: "–	očituje se u količini prihoda od turizma i sposobnosti turizma u pokretanju ostalih grana gospodarstva",
        slika: ""
    }, {
        pitanje: "Na primjeru hotela objasnite kako se prihod od usluga smještaja u hotelu može umnožiti u okviru nacionalnog gospodarstva.",
        odgovor: "- novac koji hotel zaradi od smještaja gostiju, s njim plača ostale djelatnosti i na taj način posredno od turizma zarađuju i ostale djelatnosti",
        slika: ""
    }, {
        pitanje: "Što su ekonomska, a što neekonomska dobra?",
        odgovor: "–	ekonomska dobra – oskudna su i njihova ponuda je ograničena (npr. pitka voda, nafta, plin, ugljen, rad, novac, kapital…) <br>–	neekonomska dobra – ima ih u izobilju i ponuda je neograničena (npr. zrak, čista morska voda, sunčeva svjetlost, ugodna klima…)",
        slika: ""
    }, {
        pitanje: "Kako turizam pretvara neekonomska dobra u ekonomska?",
        odgovor: "–	turisti uživaju u neekonomskim dobrima, pa se ona na taj način naplaćuju i postaju ekonomska dobra",
        slika: ""
    }, {
        pitanje: "Kako turizam pozitivno djeluje na društvo? (društveni utjecaj turizma)?",
        odgovor: "",
        slika: ""
    }, {
        pitanje: "Koje su interesne skupine u turizmu?",
        odgovor: "–	turisti, lokalno stanovništvo i investitori",
        slika: ""
    }, {
        pitanje: "Što je turističko tržište?",
        odgovor: "TURISTIČKO TRŽIŠTE je skup odnosa ponudei potražnjekoji nastaju radi podmirenja potreba turista",
        slika: ""
    }, {
        pitanje: "Što obuhvaća turistička ponuda, a što turistička potražnja?",
        odgovor: "TURISTIČKA POTRAŽNJA – obuhvaća potencijalne turiste potrošače <br>TURISTIČKA PONUDA – obuhvaća svu robu i usluge što se nude turistima potrošačima",
        slika: ""
    }, {
        pitanje: "Koje su karakteristike turističke potražnje? Objasni.",
        odgovor: "–	turistička potražnja je elastičnai mobilna, heterogena (raznolika) i sezonskogkaraktera",
        slika: ""
    }, {
        pitanje: "Koje su karakteristike turističke ponude? Objasni.",
        odgovor: "–	turistička ponuda je neelastičnai statična, homogena (jednolična) i nesezonskog karaktera",
        slika: ""
    }, {
        pitanje: "Što obuhvaća turistička potrošnja?",
        odgovor: "TURISTIČKA POTROŠNJA obuhvaća vrijednost svih usluga i proizvoda kojima se koriste turisti ili se iskorištavaju za njih",
        slika: ""
    }, {
        pitanje: "Što uključuje i kako se izražava turistički promet?",
        odgovor: "TURISTIČKI PROMET obuhvaća turistička kretanja i potrošnju <br>– izražava se brojem posjetitelja i ostvarenih noćenja te visinom ostvarenog prihoda od turizma",
        slika: ""
    }, {
        pitanje: "Koja su obilježja suvremenog turističkog prometa?",
        odgovor: "–	raznolikost ponude i segmentacija potražnje <br>– naglašen sezonski karakter <br>–	koncentracija oko najvažnijih turističkih atrakcija neke zemlje ili područja <br>–	podjela na izražena emitivna i receptivna područja i zemlje",
        slika: ""
    }, {
        pitanje: "Što je turistički proizvod?",
        odgovor: "TURISTIČKI PROIZVOD je složeni skup različitih proizvoda i usluga, a obuhvaća smještaj, prehranu, kulturu, prirodnu baštinu, sport i rekreaciju, zabavu i druge sadržaje",
        slika: ""
    }, {
        pitanje: "Koja su obilježja turističkog proizvoda? Primjer.",
        odgovor: "–	neopipljivost, nedjeljivost, neuskladištivost i promjenjivost",
        slika: ""
    }],

    // pitanja organizacija
    organizacijaPitanja = [{
        pitanje: "Od čega se sastoji ugostiteljska usluga?",
        odgovor: "- sastoji se od 2 dijela, glavne i pratećih usluga",
        slika: ""
    }, {
        pitanje: "Što je to glavna, a što su sporedne usluge?",
        odgovor: "- glavna usluga je ona usluga radi koje gost dolazi u ugostiteljski objekt (npr. u restoran dolazi radi jela i pića, u hotel radi smještaja i sl.) <br>- prateće usluge su one usluge koje ugostitelji pružaju, ali se ne naplaćuju izravno  (npr. ugodan ambijent, udobnost, ljubazno osoblje, kvalitetna usluga, parking…)",
        slika: ""
    }, {
        pitanje: "Koje su osnovne skupine ugostiteljskih usluga?",
        odgovor: "- materijalne ili robne i nematerijalne ili nerobne usluge",
        slika: ""
    }, {
        pitanje: "Što su materijalne a što nematerijalne usluge?",
        odgovor: "- u materijalne usluge se ubrajaju proizvodi pripremljeni od raznovrsnih namirnica – topla i hladna jela, napitci, pića (koja mogu biti termički obrađena) i sl. <br>- u nematerijalne usluge se ubraja iznajmljivanje soba, apartmana i sl.",
        slika: ""
    }, {
        pitanje: "Koje su karakteristike (nematerijalne) ugostiteljske usluge? Primjer.",
        odgovor: "- neopipljive su, nedjeljive, neuskladištive i heterogene",
        slika: ""
    }, {
        pitanje: "Je li moguće odvojiti ugostiteljske objekte koji pružaju materijalne usluge od onih koji pružaju nematerijalne?",
        odgovor: "- ukratko, nije",
        slika: ""
    }, {
        pitanje: "Kako dijelimo ugostiteljske usluge s obzirom na važnost?",
        odgovor: "-	glavne (osnovne), dopunske i pomoćne djelatnosti",
        slika: ""
    }, {
        pitanje: "Nabroj neke od sporednih usluga.",
        odgovor: "- doček i prijevoz gostiju do ug. objekta, mijenjanje novca, čuvanje vrijednih stvari gostiju u sefu, organiziranje i pružanje usluga animacije, iznajmljivanje razne opreme za kongrese…",
        slika: ""
    }, {
        pitanje: "Nabroj neke od pomoćnih djelatnosti.",
        odgovor: "-	proizvodnja umjetnih bezalkoholnih pića, proizvodnja pekarskih proizvoda, proizvodnja struje (agregat), održavanje elektroinstalacija, parkova i okoliša oko ug. objekta…",
        slika: ""
    }, {
        pitanje: "Što je asortiman usluga? Primjer.",
        odgovor: "- to je ukupan izbor usluga koje se nude u ugostiteljskom objektu (usluge hrane – jelovnik, usluge pića – cjenik pića, vina – vinska karta)",
        slika: ""
    }, {
        pitanje: "Kakav asortiman može biti?",
        odgovor: "- uzak, dubok, širok i standardni",
        slika: ""
    }, {
        pitanje: "Što je kvaliteta usluge?",
        odgovor: "- to je sposobnost usluge da što bolje zadovolji potrebe i želje korisnika usluge",
        slika: ""
    }, {
        pitanje: "O čemu ovisi kvaliteta usluge?",
        odgovor: "- o stručnosti i znanju ugostitelja <br>- kvaliteti namirnica <br>- načinu pristupa gostu <br>- kvaliteti materijala i dizajnu inventara <br>- komforu u objektu i širini asortimana",
        slika: ""
    }, {
        pitanje: "Na što se odnosi ambijent prostora?",
        odgovor: "- odnosi se na funkcionalnost prostora i unutrašnji dizajn – oprema, čistoća prostora, jačina svjetla, ukrasi na zidovima i stropu, kombinacija boja…",
        slika: ""
    }, {
        pitanje: "Što je atmosfera ugostiteljskog objekta?",
        odgovor: "- to je ukupan osjetilni doživljaj gosta – treba biti takva da se gost osjeća ugodno, intimno, dobrodošao, sigurno, svečano…",
        slika: ""
    }, {
        pitanje: "Na što se odnosi komfor prostora?",
        odgovor: "-	odnosi se na različite udobnosti namijenjene gostima – npr. garderoba, dovoljno prostora za sjedenje, udobne stolice, uredan sanitarni čvor, dobra opremljenost svime što je potrebno gostima",
        slika: ""
    }, {
        pitanje: "Kako se poslužuju pića, a kako napitci?",
        odgovor: "- pića se poslužuju ohlađena ili na sobnoj temperaturi(npr. bijelo vino i pivo se poslužuju ohlađeni, dok se crno vino poslužuje na sobnoj temperaturi) <br>- većina napitaka se poslužuju topla",
        slika: ""
    }, {
        pitanje: "Što je standard?",
        odgovor: "- označava ozakonjene norme koje se koriste pri određivanju osnovnih obilježja nekog proizvoda ili usluge",
        slika: ""
    }, {
        pitanje: "Koja su 3 područja primjene standarda?",
        odgovor: "-	interni, nacionalni i internacionalni standardi",
        slika: ""
    }, {
        pitanje: "Što je standardizacija?",
        odgovor: "- primjena standarda u poslovanju",
        slika: ""
    }, {
        pitanje: "Kad se počinju u Hrvatskoj uvoditi standardi?",
        odgovor: "	1980. - Minimalni hotelski standard za hotele „B” kategorije <br>-	1995. godine - Zakon o ugostiteljskoj djelatnosti",
        slika: ""
    }, {
        pitanje: "Koja je svrha standardizacije?",
        odgovor: "	poboljšanje kvalitete proizvoda i usluga <br>- pojednostavljena kontrola kvalitete <br>- povećanje produktivnosti rada<br>- sniženjetroškova poslovanja",
        slika: ""
    }, {
        pitanje: "Koje su vrste standarda u ugostiteljstvu?",
        odgovor: "- govorni, materijalni i tehnološki",
        slika: ""
    }, {
        pitanje: "Kada se koriste govorni standardi?",
        odgovor: "- u kontaktu s gostima (standardiziranje razgovora s gostima u raznim prilikama)",
        slika: ""
    }, {
        pitanje: "Što određuju materijalni standardi?",
        odgovor: "- određuju vrstumaterijala ili veličinunekog predmeta, prostora ili prostorije",
        slika: ""
    }, {
        pitanje: "Kako se u praksi nazivaju materijalni standardi?",
        odgovor: "- prema vrsti materijala od kojeg su napravljeni: tekstilni, stakleni, porculanski, papirnati, standard namirnica i pića, standardi izgradnje ugostiteljskih objekata prema kategoriji",
        slika: ""
    }, {
        pitanje: "Na kojim se tehnologijama zasnivaju tehnološki standardi u ugostiteljstvu?",
        odgovor: "	mehanička tehnologija – rezanje, usitnjavanje namirnica <br>- kemijska – termička obrada, kuhanje, pečenje, pohanje i dr <br>- biokemijska – zrenje mesa, kiseljenje povrća",
        slika: ""
    }],
    // marketing pitanja
    marketingPitanja = [{
        pitanje: "Od čega se sastoji marketinško okruženje?",
        odgovor: "- sastoji se od mikro i makro okruženja",
        slika: ""
    }, {
        pitanje: "Kakav je odnos između tvrtke i njenog mikrookruženja?",
        odgovor: "- tvrtka može utjecati i utječe na svoje mikrookruženje",
        slika: ""
    }, {
        pitanje: "Kakav je odnos između tvrtke i njenog makrookruženja?",
        odgovor: "- tvrtka ne može utjecati na svoje makrookruženje već mu se prilagođava",
        slika: ""
    }, {
        pitanje: "Od čega se sastoji mikrookruženje?",
        odgovor: "- sastoji se od same tvrtke, opskrbljivača (dobavljača), marketinških posrednika, kupaca, konkurencije i javnosti",
        slika: ""
    }, {
        pitanje: "Od čega se sastoji makrookruženje?",
        odgovor: "- sastoji se od demografskog, gospodarskog, prirodnog, tehnološkog, političkog i kulturnog okruženja",
        slika: ""
    }, {
        pitanje: "Što čini tvrtku kao element mikrookruženja?",
        odgovor: "- tvrtku kao element mikrookruženja čine njeni sastavni dijelovi (npr. uprava, proizvodnja, odjel financija, marketinga, nabave...)<br>- svi dijelovi moraju međusobno uskladiti svoje napore u provođenju marketinškog plana",
        slika: ""
    }, {
        pitanje: "Objasni dobavljače kao element mikrookruženja tvrtke.",
        odgovor: "- dobavljači su organizacije i pojedinci koji opskrbljuju tvrtku svojim proizvodima i uslugama <br>- sve promjene koje se događaju kod dobavljača mogu utjecati na krajnji proizvod turističke tvrtke (poskupljenje ili nestašica namirnica, problemi u distribuciji…) <br>- npr. poskupljenje hrane  kod lokalnog dobavljača utječe na promjenu cijena jela u restoranu ili hotelu",
        slika: ""
    }, {
        pitanje: "Objasni marketinške posrednike kao element mikrookruženja tvrtke.",
        odgovor: "- marketinški posrednici su razni poslovni subjekti koji pomažu tvrtki u prodaji, distribuciji i promociji tj. komunikaciji s kupcima <br>- to su preprodavači, tvrtke za fizičku distribuciju, marketinške agencije i financijski posrednici",
        slika: ""
    }, {
        pitanje: "Nabroj tipove tržišta (kupci kao elementa mikrookruženja tvrtke).",
        odgovor: "- tržište krajnje potrošnje, poslovne potrošnje, tržište preprodavača, institucijska, vladina i međunarodna tržišta",
        slika: ""
    }, {
        pitanje: "Kako konkurencija utječe na poslovanje tvrtke?",
        odgovor: "- utječu na tvrtku kako bi bila bolja i uspješnija od konkurencije stalnim poboljšanjem ponude i usluga",
        slika: ""
    }, {
        pitanje: "Objasni javnost kao element mikrookruženja tvrtke?",
        odgovor: "- javnost čini bilo koja skupina koja ima stvaran ili potencijalan interes i utjecaj na sposobnost tvrtke da ostvari svoje ciljeve<br>- tipovi javnosti: mediji, vlada, udruge građana… (primjer sa GMO pilećom salamom)",
        slika: ""
    }, {
        pitanje: "Nabroj neke demografske promjene koje utječu na poslovanje tvrtke.",
        odgovor: "- promjena dobne strukture, promjene u tipovima obitelji (manje djece, samci, samohrani roditelji), promjene u obrazovanosti stanovništva, promjene tokova migracija, brzi rast populacije",
        slika: ""
    }, {
        pitanje: "Što uključuje gospodarsko okruženje?",
        odgovor: "- uključuje čimbenike koji utječu na kupovnu moć potrošača i njihov način potrošnje (vrijednost za novac)",
        slika: ""
    }, {
        pitanje: "Objasni primjer kineski \"Mali carevi\" i sindrom \"šest džepova\".",
        odgovor: "- budući je Kina do nedavno imala politiku jednog djeteta, o njima se brine čak 6 odraslih osoba, tj. udovoljavaju njihovim željama kao što se udovoljavalo kineskim carevima",
        slika: ""
    }, {
        pitanje: "Kako tvrtke trebaju reagirati na promjene u prirodnom okruženju?",
        odgovor: "- tvrtke moraju prilagoditi svoju proizvodnju i poslovanje kako bi ispunili sve strože ekološke standarde",
        slika: ""
    }, {
        pitanje: "Koja je glavna karakteristika tehnološkog okruženja?",
        odgovor: "- brze tehnološke promjene koje utječu na promjene u turističkom posredovanju<br>- internet kao novi distribucijski kanal",
        slika: ""
    }, {
        pitanje: "Na primjeru objasni utjecaj političkog okruženja na turizam neke zemlje ili tvrtke.",
        odgovor: "- primjer je pad broja gostiju i noćenja za vrijeme velikosrpske agresije na Hrvatsku i za vrijeme sukoba na Kosovu, povećanje poreza na hotelske sobe skuplje od 100 dolara u New Yorku",
        slika: "img/marketing/pitanje_020.jpg"
    }, {
        pitanje: "Što uključuje kulturno kruženje?",
        odgovor: "- institucije i druge sile koje utječu na vrijednosti, doživljaje i stavove u društvu",
        slika: ""
    }, {
        pitanje: "Koje su sile internetskog okruženja? (4)",
        odgovor: "1. digitalizacija i povezanost <br>2. naglo širenje interneta <br>3. nove vrste posrednika <br>4. prilagođavanje klijentima i njihovim željama",
        slika: ""
    }, {
        pitanje: "Što je digitalizacija a što povezanost?",
        odgovor: "DIGITALIZACIJA – pretvaranje svih podataka u digitalni oblik<br>POVEZANOST – mogućnost prijenosa podataka s jednog na više mjesta <br>- intranet (povezanost unutar 1 tvrtke), ekstranet (među 2 ili više tvrtki) i internet (globalna mreža)",
        slika: ""
    }, {
        pitanje: "Što je e-poslovanje?",
        odgovor: "– korištenje  elektroničkih platformi intraneta, ekstraneta i interneta u vođenju poslovanja tvrtke",
        slika: ""
    }, {
        pitanje: "Što je e-trgovina? Navedi jedan primjer.",
        odgovor: "– proces kupovanja i prodaje u kojemu su internet i moderne tehnologije neizostavni",
        slika: ""
    }, {
        pitanje: "Što je e-marketing? Navedi jedan primjer.",
        odgovor: "– proces provedbe marketinških aktivnosti uz intenzivnu primjenu informacijskih i komunikacijskih tehnologija",
        slika: ""
    }, {
        pitanje: "Koji su mogući izvori prihoda od e-trgovine?",
        odgovor: "- prihodi od prodaje proizvoda i usluga – Amazon <br>- prihodi od oglašavanja – Njuškalo <br>- prihodi od sponzorstva – aviokarte.hr <br>- prihodi od članarina i pretplata – bilo koji časopis ili novine <br>- prihodi od izrade profila – linkedIn  <br>- provizije i naknade za transakcije – PayPal  <br>- naknade za istraživanje tržišta i informacije – facebook i google <br>- prihodi od upućivanja – Airbnb, booking.com",
        slika: ""
    }, {
        pitanje: "Koje se nove vrste posrednika javljaju pojavom interneta i digitalnih tehnologija?",
        odgovor: "– virtualne i fizičko-virtualne tvrtke",
        slika: ""
    }];