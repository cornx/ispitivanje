// za prikaz odgovora koristi trik sa CSS-om za visibility ili jQuery toggle


// funkcija prozoviUcenika nasumično generira ime iz određenog razreda


document.querySelector("#neispitaniOsnoveTurizma").innerHTML = osnoveTurizmaImena.join(", ");
document.querySelector("#neispitaniMarketing").innerHTML = marketingImena.join(", ");
/*
document.querySelector("#neispitaniTuristickaGeo").innerHTML = turistickaGeoImena.join(", ");
document.querySelector("#neispitaniOrganizacija").innerHTML = organizacijaImena.join(", ");
*/


// prozivanje učenika za osnove turizma
function osnoveTurizmaProzovi() {
    // varijabla unutar funkcije 
    var ucenici = osnoveTurizmaImena;

    // deklariranje varijabli
    var min = 0,
        max = ucenici.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        ucenik = ucenici[nasumicno]; // broj učenika po redu (baza 1) i ime učenika


    // provjeri ako ima imena u arrayu
    if (ucenici.length > 0) { // sve dok ima imena u arrayu
        ucenici.splice(nasumicno, 1); // izbacuje odabrano ime po rednom broju
        document.querySelector("#pitanje").innerHTML = ucenik; // ispis odabranog učenika
        document.querySelector("#neispitani").innerHTML = ucenici.join(", "); // prikaz neispitanih
    } else { // kad nestane imena
        document.querySelector("#pitanje").innerHTML = "Svi ispitani.";
        document.querySelector("#neispitani").innerHTML = "Nema više neispitanih đaka.";
        return;
    }

    // prikaz u consoli
    console.log("Maksimalan broj: " + max);
    console.log("Nasumično odabran broj: " + nasumicno);
    console.log(ucenici.join(", "));
}

// prozivanje učenika za marketing
function marketingProzovi() {
    // varijabla unutar funkcije 
    var ucenici = marketingImena;

    var min = 0,
        max = ucenici.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        ucenik = ucenici[nasumicno]; // broj učenika po redu (baza 1) i ime učenika
    // provjeri ako ima imena u arrayu
    if (ucenici.length > 0) { // sve dok ima imena u arrayu
        ucenici.splice(nasumicno, 1); // izbacuje odabrano ime po rednom broju
        document.querySelector("#pitanje").innerHTML = ucenik; // ispis odabranog učenika
        document.querySelector("#neispitani").innerHTML = ucenici.join(", "); // prikaz neispitanih
    } else { // kad nestane imena
        document.querySelector("#pitanje").innerHTML = "Svi ispitani.";
        document.querySelector("#neispitani").innerHTML = "Nema više neispitanih đaka.";
        return;
    }
}



// funkcija odaberiPitanje nasumično generira pitanje i prikazuje odgovor. Ne ponavlja pitanje / odgovor
function odaberiPitanje() {
    function odaberiPitanje() {

    // deklariranje varijabli
    var min = 0,
        max = osnoveTurizmaPitanja.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        odabrano = osnoveTurizmaPitanja[nasumicno]; // broj učenika po redu (baza 1) i ime učenika


    if (osnoveTurizmaPitanja.length > 0) { // sve dok ima pitanja u arrayu

        osnoveTurizmaPitanja.splice(nasumicno, 1); // izbacuje odabrano pitanje 
        // br.splice(nasumicno, 1); // izbacuje odabrano pitanje 
        document.querySelector("#pitanje").innerHTML = odabrano.pitanje; // ispis potanja
        document.querySelector("#odgovor").innerHTML = odabrano.odgovor; // ispis odgovora
    } else { // kad nestane imena
        document.querySelector("#pitanje").innerHTML = "Nema više pitanja";
        document.querySelector("#odgovor").innerHTML = " ";
        return;
    }

    console.log("Maksimalan broj: " + max);
    console.log("Nasumično odabran broj: " + nasumicno);

    console.log(odabrano.pitanje);
    console.log(odabrano.odgovor);

}
};

// funkcija pokaziOdgovor pr