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
        netocno = "fa fa-thumbs-o-down fa-2x netocno";

    // prikazi odgovor
    btn.click(function() {
        if (odgovor.css("visibility") === "hidden") {
            odgovor.css("visibility", "visible");
        } else {
            odgovor.css("visibility", "hidden");
        }
    });


    // točan odgovor
    p1.click(function() {
        p1.addClass(tocno);
    });
    p2.click(function() {
        p2.addClass(tocno);
    });
    p3.click(function() {
        p3.addClass(tocno);
    });
    p4.click(function() {
        p4.addClass(tocno);
    });
    p5.click(function() {
        p5.addClass(tocno);
    });
    p6.click(function() {
        p6.addClass(tocno);
    });
    p7.click(function() {
        p7.addClass(tocno);
    });

    // netočan odgovor
    p1.dblclick(function() {
        if (p1.hasClass(tocno)) {
            p1.removeClass(tocno);
            p1.addClass(netocno);
        } else {
            p1.addClass(netocno);
        };
    });
    p2.dblclick(function() {
        if (p2.hasClass(tocno)) {
            p2.removeClass(tocno);
            p2.addClass(netocno);
        } else {
            p2.addClass(netocno);
        };
    });
    p3.dblclick(function() {
        if (p3.hasClass(tocno)) {
            p3.removeClass(tocno);
            p3.addClass(netocno);
        } else {
            p3.addClass(netocno);
        };
    });
    p4.dblclick(function() {
        if (p4.hasClass(tocno)) {
            p4.removeClass(tocno);
            p4.addClass(netocno);
        } else {
            p4.addClass(netocno);
        };
    });
    p5.dblclick(function() {
        if (p5.hasClass(tocno)) {
            p5.removeClass(tocno);
            p5.addClass(netocno);
        } else {
            p5.addClass(netocno);
        };
    });
    p6.dblclick(function() {
        if (p6.hasClass(tocno)) {
            p6.removeClass(tocno);
            p6.addClass(netocno);
        } else {
            p6.addClass(netocno);
        };
    });
    p7.dblclick(function() {
        if (p7.hasClass(tocno)) {
            p7.removeClass(tocno);
            p7.addClass(netocno);
        } else {
            p7.addClass(netocno);
        };
    });

})();