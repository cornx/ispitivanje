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
        pitanje: "Prvo pitanje iz osnova turizma?",
        odgovor: "Prvi odgovor iz osnova turizma?",
        slika: ""
    }],

    // pitanja organizacija
    organizacijaPitanja = [{
        pitanje: "Prvo pitanje iz organizacije?",
        odgovor: "Prvi odgovor iz organizacije?",
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