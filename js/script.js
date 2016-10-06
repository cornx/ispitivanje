// odaberi pitanja univerzalno
function odaberiPitanje(premetPitanja) {
    var predmet = premetPitanja;
    // deklariranje varijabli
    var min = 0,
        max = predmet.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        odabrano = predmet[nasumicno]; // broj učenika po redu (baza 1) i ime učenika

    // DOM elementi
    var divOdgovor = document.querySelector("#odgovor"),
        divPitanje = document.querySelector("#pitanje"),
        modal = document.querySelector("#slika"),
        nemaOdgovora = document.querySelector("#nema-odgovora"),
        maxFooter = document.querySelector("#max");
    if (predmet.length > 0) { // sve dok ima pitanja u arrayu
        predmet.splice(nasumicno, 1); // izbacuje odabrano pitanje 
        divPitanje.innerHTML = odabrano.pitanje; // ispis pitanja
        divOdgovor.innerHTML = odabrano.odgovor; // ispis odgovora
        modal.innerHTML = "<img src='"+ odabrano.slika+"' width='auto' height='100%'>"; // prikaz slike

    } else { // kad nestane pitanja
        divPitanje.innerHTML = "Nema više pitanja";
        divOdgovor.innerHTML = " ";
        nemaOdgovora.innerHTML = " ";
        /*modal.innerHTML = "Nema slike";*/
        return; // izađi iz loopa
    }
    // prikaz broja preostalih pitanja u footeru
    maxFooter.innerHTML = max;

    // prikaz u konzoli
    console.log("Maksimalan broj: " + max);
    console.log("Nasumično odabran broj: " + nasumicno);

    console.log(odabrano.pitanje);
    console.log(odabrano.odgovor);

    console.log("Modal src: "+modal);
}

// prozovi univerzalno - u predmetImena upiši naziv arraya za imena
function prozovi(predmetImena) {
    // varijabla unutar funkcije 
    var ucenici = predmetImena;

    var min = 0,
        max = ucenici.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        ucenik = ucenici[nasumicno]; // broj učenika po redu (baza 1) i ime učenika
    // provjeri ako ima imena u arrayu
    if (ucenici.length > 0) { // sve dok ima imena u arrayu
        ucenici.splice(nasumicno, 1); // izbacuje odabrano ime po rednom broju
        document.querySelector("#ucenik").innerHTML = ucenik; // ispis odabranog učenika
        document.querySelector("#neispitani").innerHTML = ucenici.join(", "); // prikaz neispitanih
    } else { // kad nestane imena
        document.querySelector("#ucenik").innerHTML = "Svi ispitani.";
        document.querySelector("#jos-nisu-pitani").innerHTML = " ";
        document.querySelector("#neispitani").innerHTML = " ";
        return;
    }
}

// prikaz vremena
/*(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('sat').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
            startTime()
        }, 500);
    }
    startTime();
})();*/
