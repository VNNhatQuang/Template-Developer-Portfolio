$(document).ready(function() {

    // VIEW PORTFOLIO

    // hover portfolio 1
    $('.view-portfolio>.container-1>').mouseenter(function() {
        $('.pack-1').fadeIn("fast");
    })
    $('.view-portfolio>.container-1').mouseleave(function() {
        $('.pack-1').fadeOut("fast");
    });

    // hover portfolio 2
    $('.view-portfolio>.container-2>').mouseenter(function() {
        $('.pack-2').fadeIn("fast");
    });
    $('.view-portfolio>.container-2').mouseleave(function() {
        $('.pack-2').fadeOut("fast");
    });

    // hover portfolio 3
    $('.view-portfolio>.container-3>').mouseenter(function() {
        $('.pack-3').fadeIn("fast");
    });
    $('.view-portfolio>.container-3').mouseleave(function() {
        $('.pack-3').fadeOut("fast");
    });

    // hover portfolio 4
    $('.view-portfolio>.container-4>').mouseenter(function() {
        $('.pack-4').fadeIn("fast");
    });
    $('.view-portfolio>.container-4').mouseleave(function() {
        $('.pack-4').fadeOut("fast");
    });

    // hover portfolio 5
    $('.view-portfolio>.container-5>').mouseenter(function() {
        $('.pack-5').fadeIn("fast");
    });
    $('.view-portfolio>.container-5').mouseleave(function() {
        $('.pack-5').fadeOut("fast");
    });

    // hover portfolio 6
    $('.view-portfolio>.container-6>').mouseenter(function() {
        $('.pack-6').fadeIn("fast");
    });
    $('.view-portfolio>.container-6').mouseleave(function() {
        $('.pack-6').fadeOut("fast");
    });

    // hover portfolio 7
    $('.view-portfolio>.container-7>').mouseenter(function() {
        $('.pack-7').fadeIn("fast");
    });
    $('.view-portfolio>.container-7').mouseleave(function() {
        $('.pack-7').fadeOut("fast");
    });

    // hover portfolio 8
    $('.view-portfolio>.container-8>').mouseenter(function() {
        $('.pack-8').fadeIn("fast");
    });
    $('.view-portfolio>.container-8').mouseleave(function() {
        $('.pack-8').fadeOut("fast");
    });

    // hover portfolio 9
    $('.view-portfolio>.container-9>').mouseenter(function() {
        $('.pack-9').fadeIn("fast");
    });
    $('.view-portfolio>.container-9').mouseleave(function() {
        $('.pack-9').fadeOut("fast");
    })



    // MENU

    // show menu
    $('.menu').click(function() {
        $('#menu').fadeToggle("fast");
        document.querySelector("#menu>.nav").setAttribute("style", "transform: translateX(0)");
        // Block Scrolling
        document.querySelector("html").setAttribute("style", "overflow: hidden");
    });

    // hide menu
    $('.space-close').click(function() {
        $('#menu').fadeOut("fast");
        // slide effect
        document.querySelector("#menu>.nav").setAttribute("style", "transform: translateX(-100%)");
        // Allow Scrolling
        document.querySelector("html").setAttribute("style", "overflow: visible");
    })
    $('.nav>i').click(function() {
        $('#menu').fadeOut("fast");
        // slide effect
        document.querySelector("#menu>.nav").setAttribute("style", "transform: translateX(-100%)");
        // Allow Scrolling
        document.querySelector("html").setAttribute("style", "overflow: visible");
    })



})