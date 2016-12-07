// odaberi pitanja univerzalno
function odaberiPitanje(predmetPitanja) {
    var predmet = predmetPitanja;
    // deklariranje varijabli
    var min = 0,
        max = predmet.length - 1, // maksimalan broj pitanja u arrayu
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        odabrano = predmet[nasumicno]; // broj pitanja

    // DOM elementi
    var divOdgovor = document.querySelector("#odgovor"),
        divPitanje = document.querySelector("#pitanje"),
        modal = document.querySelector("#slika"),
        nemaOdgovora = document.querySelector("#nema-odgovora"),
        maxFooter = document.querySelector("#max"),
        slikaButton = document.querySelector("#pokaziSliku");


    if (predmet.length > 0) { // sve dok ima pitanja u arrayu
        predmet.splice(nasumicno, 1); // izbacuje odabrano pitanje 
        divPitanje.innerHTML = odabrano.pitanje; // ispis pitanja
        divOdgovor.innerHTML = odabrano.odgovor; // ispis odgovora

        if (odabrano.slika.length === 0) {
            // ako nema slike, ona prikaži default sliku zbunjenog travolte
            modal.innerHTML = "<img src='img/travolta.gif' class='travolta'>";

        } else {
            // ako odgovor ima sliku, pokaži je
            modal.innerHTML = "<img src='" + odabrano.slika + "'>";
        }

    } else { // kad nestane pitanja
        divPitanje.innerHTML = "Nema više pitanja";
        divOdgovor.innerHTML = "Nema više pitanja";
        nemaOdgovora.innerHTML = " ";
        modal.innerHTML = "<img src='img/travolta.gif' class='travolta'>";
        return; // izađi iz loopa
    };
    // prikaz broja preostalih pitanja u footeru
    maxFooter.innerHTML = max;

    // provjeri ako pitanje nema sliku i primjeni class na button
    if (odabrano.slika.length === 0) {
        slikaButton.classList.add("nema-slike");
    } else if (odabrano.slika.length != 0 && slikaButton.classList.contains("nema-slike")) {
        slikaButton.classList.remove("nema-slike");
    };
}

// prozovi univerzalno - u predmetImena upiši naziv arraya za imena
function prozovi(predmetImena) {
    // varijabla unutar funkcije 
    var ucenici = predmetImena;

    var min = 0,
        max = ucenici.length - 1, // maksimalan broj učenika u arrayu 
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        ucenik = ucenici[nasumicno]; // broj učenika
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

// sakrivanje lijeve strane
function sakrijLijevuStranu() {
    var zatvoriButton = document.querySelector("#zatvori"),
        lijeviDio = document.querySelector("#lijevi-dio-stranice"),
        desniDio = document.querySelector("#desni-dio-stranice");

    // sakrij lijevi dio stranice
    lijeviDio.classList.toggle("sakrij");
    // proširi desni dio dodavanjem bootstrap col-md-11 
    desniDio.classList.toggle("col-md-11");

    // promjeni ikonicu na zatvori - otvori buttonu
    if (zatvoriButton.classList.contains("fa-chevron-left")) {
        zatvoriButton.classList.remove("fa-chevron-left");
        zatvoriButton.classList.add("fa-chevron-right");
    } else if (zatvoriButton.classList.contains("fa-chevron-right")) {
        zatvoriButton.classList.remove("fa-chevron-right");
        zatvoriButton.classList.add("fa-chevron-left");
    }
}

// izlistava sva pitanja i odgovore i dodavanje jednog ispod drugog ispod footera (kad se klikne na moje ime)
function izlistajSvaPitanja(predmet) {
    for (i = 0; i < predmet.length; i++) {
        var nodePitanje = document.createElement("P"),
            nodeOdgovor = document.createElement("P");
        var izlistajPitanje = document.createTextNode(i + 1 + ". " + predmet[i].pitanje),
            izlistajOdgovor = document.createTextNode(" - " + predmet[i].odgovor);
        nodePitanje.appendChild(izlistajPitanje);
        nodeOdgovor.appendChild(izlistajOdgovor);
        document.getElementById("lista-pitanja").appendChild(nodePitanje);
        document.getElementById("lista-pitanja").appendChild(nodeOdgovor);
    }
}

// ocjenjivanje 
function ocjeni() {
    var odgovor = window.event.target,
        tocno = "odgovor fa fa-thumbs-o-up fa-2x tocno",
        netocno = "odgovor fa fa-thumbs-o-down fa-2x netocno",
        polovicanOdgovor = "odgovor fa fa-hand-grab-o fa-2x polovicanOdgovor",
        resetiraj = document.getElementById("resetiraj");

    if (event.shiftKey) {
        odgovor.className = polovicanOdgovor;
    } else if (event.ctrlKey) {
        odgovor.className = netocno;
    } else {
        odgovor.className = tocno;
    }
}
// resetiranje ocjena
function resetiraj() {
    for (var i = 0; i < 7; i++) {
        document.querySelector(".odgovor.fa").className = "odgovor";
    }
}

// pokaži odgovor na pitanje
function pokaziOdg() {
    document.getElementById("odgovor").classList.toggle("vidljiv");
}

// dodavanje home linka na sve stranice
function promjenaLinka() {
    document.querySelector(".navbar-brand").href = "index.html";
};
promjenaLinka();

// prikaz odgovora kad se klikne na moje ime u footeru
var sviOdgovori = document.querySelector(".svi-odgovori"),
    prof = document.querySelector(".prof");

prof.addEventListener("click", function() {
    if (sviOdgovori.classList.contains("svi-odgovori-vidljivi")) {
        sviOdgovori.classList = "svi-odgovori";
    } else {
        sviOdgovori.classList = "svi-odgovori-vidljivi";
    }
});
// ista stvar samo s jQueryem (3 puta manje teksta)
/*$(".prof").click(function(){
    $(".svi-odgovori").toggleClass("svi-odgovori-vidljivi");
});*/


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