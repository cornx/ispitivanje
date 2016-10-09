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
        maxFooter = document.querySelector("#max");

    if (predmet.length > 0) { // sve dok ima pitanja u arrayu
        predmet.splice(nasumicno, 1); // izbacuje odabrano pitanje 
        divPitanje.innerHTML = odabrano.pitanje; // ispis pitanja
        divOdgovor.innerHTML = odabrano.odgovor; // ispis odgovora
        modal.innerHTML = "<img src='" + odabrano.slika + "' width='auto' height='100%'>"; // prikaz slike

    } else { // kad nestane pitanja
        divPitanje.innerHTML = "Nema više pitanja";
        divOdgovor.innerHTML = "Nema više pitanja";
        nemaOdgovora.innerHTML = " ";
        // modal.innerHTML = "Nema slike";
        return; // izađi iz loopa
    }
    // prikaz broja preostalih pitanja u footeru
    maxFooter.innerHTML = max;


    // prikaz u konzoli
    /*
        console.log("Maksimalan broj: " + max);
        console.log("Nasumično odabran broj: " + nasumicno);

        console.log(odabrano.pitanje);
        console.log(odabrano.odgovor);
    */
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

/*function ocjeni() {
    var o1 = document.querySelector(".o1"),
        o2 = document.querySelector(".o2"),
        o3 = document.querySelector(".o3"),
        o4 = document.querySelector(".o4"),
        o5 = document.querySelector(".o5"),
        o6 = document.querySelector(".o6"),
        o7 = document.querySelector(".o7");

        for (i = 0; i < 7; i++) {
            console.log(i);
        }
}*/

/*var close = $(".close"),
    lijevaStrana = $("#lijevi-dio-stranice");
close.click(function() {
    lijevaStrana.toggleClass("sakrij");
});*/

// izlistava sva pitanja i odgovore i dodavanje jednog ispod drugog (u index.html)
/*for (i = 0; i < organizacijaPitanja.length; i++) {
    var nodePitanje = document.createElement("P"),
        nodeOdgovor = document.createElement("P");
    var izlistajPitanje = document.createTextNode(organizacijaPitanja[i].pitanje),
        izlistajOdgovor = document.createTextNode(organizacijaPitanja[i].odgovor);
    nodePitanje.appendChild(izlistajPitanje);
    nodeOdgovor.appendChild(izlistajOdgovor);
    document.getElementById("lista-pitanja").appendChild(nodePitanje);
    document.getElementById("lista-pitanja").appendChild(nodeOdgovor);
}*/

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