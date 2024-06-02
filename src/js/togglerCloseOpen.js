import '../css/content.css'

var t1 = new TimelineMax({paused: true});



t1.to(".one", 0.5, {
    y: 5,
    rotation: 45,
    ease: Power1.easeInOut // Smoother easing function
});

t1.to(".two", 0.5, {
    y: -25,
    rotation: -45,
    ease: Power1.easeInOut, // Smoother easing function
    delay: -0.5
});



t1.to(".hidden-window", 2, {

    top: "0%",
    ease: Expo.easeInOut,
    delay: -2.5
});



/* t1.staggerFrom(".hidden-window ul li", 1, {
    x: -200, opacity: 0,
    ease:Expo.easeOut
},
0.2); */



t1.reverse();

$(document).on("click", ".toggle-btn", function() {
    var hiddenWindow = $(".hidden-window");
    if (t1.reversed()) {
        hiddenWindow.addClass("visible");
        $("body").css("overflow", "hidden");
        t1.play();
    } else {
        t1.reverse().eventCallback("onReverseComplete", function() {
            hiddenWindow.removeClass("visible");
            $("body").css("overflow", "auto");
        });
    }
});

$(document).on("click", ".links-header-active a", function() {
    var hiddenWindow = $(".hidden-window");
    var targetClass;

    switch ($(this).text().trim()) {
        case "Einloggen":
            targetClass = ".page-login";
            break;
        case "Konto anfragen":
            targetClass = ".page-request-login";
            break;
        case "Besucher":
            targetClass = ".page-visitor";
            break;
        default:
            targetClass = ".page-login";
    }

    $(".page-login, .page-request-login, .page-visitor").removeClass("shown-content").addClass("hidden-content"); // Hide all
    $(targetClass).removeClass("hidden-content").addClass("shown-content"); // Show the target section

    if (t1.reversed()) {
        hiddenWindow.addClass("visible");
        $("body").css("overflow", "hidden");
        t1.play();
    } else {
        t1.reverse().eventCallback("onReverseComplete", function() {
            hiddenWindow.removeClass("visible");
            $("body").css("overflow", "auto");
        });
    }
});
