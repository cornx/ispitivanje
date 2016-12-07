// ova skripta se više ne koristi u aplikaciji
// zamjenjena je boljim i kraćim kodom (pogledaj script.js)

(function() {
    var odgovor = $("#odgovor"),
        pokazi = $("#pokazi"),
        btn = $("#pokaziOdgovor"),
        p1 = $(".o1"),
        p2 = $(".o2"),
        p3 = $(".o3"),
        p4 = $(".o4"),
        p5 = $(".o5"),
        p6 = $(".o6"),
        p7 = $(".o7"),
        tocno = "fa fa-thumbs-o-up fa-2x tocno",
        netocno = "fa fa-thumbs-o-down fa-2x netocno",
        polovicanOdgovor = "fa fa-hand-grab-o fa-2x polovicanOdgovor",
        resetiraj = $("#resetiraj"),
        popunjenOdgovor = $(".odgovor");

    // sakrivanje lijeve strane
    /*    var = close = $(".close"),
            lijevaStrana = $("#lijevi-dio-stranice");
        close.click(function() {
            lijevaStrana.toggleClass("sakrij");
        });*/

    // prikazi odgovor
    btn.click(function() {
        if (odgovor.css("visibility") === "hidden") {
            odgovor.css("visibility", "visible");
        } else {
            odgovor.css("visibility", "hidden");
        }
    });

    // točan odgovor (1 klik)
    p1.click(function() {
        if (p1.hasClass(netocno)) {
            p1.attr('class', 'odgovor o1').addClass(tocno);
        } else if (p1.hasClass(polovicanOdgovor)) {
            p1.attr('class', 'odgovor o1').addClass(tocno);
        } else {
            p1.addClass(tocno);
        }
    });
    p2.click(function() {
        var krug = p2;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o2').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o2').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });
    p3.click(function() {
        var krug = p3;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o3').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o3').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });
    p4.click(function() {
        var krug = p4;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o4').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o4').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });
    p5.click(function() {
        var krug = p5;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o5').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o5').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });
    p6.click(function() {
        var krug = p6;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o6').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o6').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });
    p7.click(function() {
        var krug = p7;
        if (krug.hasClass(netocno)) {
            krug.attr('class', 'odgovor o7').addClass(tocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o7').addClass(tocno);
        } else {
            krug.addClass(tocno);
        }
    });

    // netočan odgovor (2 klika)
    p1.dblclick(function() {
        if (p1.hasClass(tocno)) {
            p1.attr('class', 'odgovor o1').addClass(netocno);
        } else if (p1.hasClass(polovicanOdgovor)) {
            p1.attr('class', 'odgovor o1').addClass(netocno);
        } else {
            p1.addClass(netocno);
        }
    });
    p2.dblclick(function() {
        var krug = p2;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o2').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o2').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });
    p3.dblclick(function() {
        var krug = p3;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o3').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o3').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });
    p4.dblclick(function() {
        var krug = p4;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o4').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o4').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });
    p5.dblclick(function() {
        var krug = p5;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o5').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o5').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });
    p6.dblclick(function() {
        var krug = p6;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o6').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o6').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });
    p7.dblclick(function() {
        var krug = p7;
        if (krug.hasClass(tocno)) {
            krug.attr('class', 'odgovor o7').addClass(netocno);
        } else if (krug.hasClass(polovicanOdgovor)) {
            krug.attr('class', 'odgovor o7').addClass(netocno);
        } else {
            krug.addClass(netocno);
        }
    });

    // polovičan odgovor
    p1.click(function(e) {
        if (e.shiftKey == 1) {
            if (p1.hasClass(tocno)) {
                p1.attr('class', 'odgovor o1').addClass(polovicanOdgovor);
            } else if (p1.hasClass(netocno)) {
                p1.attr('class', 'odgovor o1').addClass(polovicanOdgovor);
            } else {
                p1.addClass(polovicanOdgovor);
            }
        }
    });
    p2.click(function(e) {
        var krug = p2;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o2').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o2').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });
    p3.click(function(e) {
        var krug = p3;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o3').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o3').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });
    p4.click(function(e) {
        var krug = p4;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o4').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o4').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });
    p5.click(function(e) {
        var krug = p5;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o5').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o5').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });
    p6.click(function(e) {
        var krug = p6;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o6').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o6').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });
    p7.click(function(e) {
        var krug = p7;
        if (e.shiftKey == 1) {
            if (krug.hasClass(tocno)) {
                krug.attr('class', 'odgovor o7').addClass(polovicanOdgovor);
            } else if (krug.hasClass(netocno)) {
                krug.attr('class', 'odgovor o7').addClass(polovicanOdgovor);
            } else {
                krug.addClass(polovicanOdgovor);
            }
        }
    });

    // resetiranje odgovora 
    resetiraj.click(function() {
        if (popunjenOdgovor.hasClass(tocno) || popunjenOdgovor.hasClass(netocno) || popunjenOdgovor.hasClass(polovicanOdgovor)) {
            // stvaramo array sa varijablama i onda ih spajamo sa join 
            popunjenOdgovor.removeClass([tocno, netocno, polovicanOdgovor].join(' '));
        }
    });
})();