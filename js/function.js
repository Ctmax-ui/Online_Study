


// header js 1
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});
    // header js 2
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#my-header-container").removeClass("box-shadow-t");
    } else {
        $("#my-header-container").addClass("box-shadow-t");
    }
});

    // background color change on scroll

    // $(window).on("scroll", function () {
    //     var scroll = $(window).scrollTop();
    
    //     if (scroll >= 2800) {
            
    //         $("body").addClass("bg-dark");
    //     } else {
    //         $("body").removeClass("bg-dark");
    //     }
    // });
    




    // carousel js 



$('.review-container .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navTextSize: 50,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});