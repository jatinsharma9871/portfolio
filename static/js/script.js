$(document).ready(function () {
    // add navbar background color when scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("bg-white");
        } else {
            $(".navbar").removeClass("bg-white");
        }
    });
    // if mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function () {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("bg-white");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("bg-white");
            } else {
            }
        }
    });
});

// projects carousel
$(document).ready(function () {
    $("#myCarousel").on("slide.bs.carousel", function (e) {
        let $e = $(e.relatedTarget);
        let idx = $e.index();
        let itemsPerSlide = 3;
        let totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            let it = itemsPerSlide - (totalItems - idx);
            for (let i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item").eq(i).appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});

// centers the about me paragraph text for mobile screens
$(window).on("resize", function () {
    let win = $(this);
    if (win.width() < 540) {
        $("div").removeClass("text-left");
    }
});

// makes iPad (only) show two project cards instead of three - looks better this way on ipads
$(window).on("resize", function () {
    let win = $(this);
    if (win.width() < 769) {
        $(".carousel-item").removeClass("col-md-4").addClass("col-md-6");
    }
});

$(window).on("resize", function () {
    let win = $(this);
    if (win.width() > 770) {
        $(".carousel-item").removeClass("col-md-6").addClass("col-md-4");
    }
});

// function for smooth scroll
let $scrollButton = $(".scroll");

$scrollButton.on("click", function (e) {
    e.preventDefault();
    let $link = $(this).attr("href");
    $("html, body").animate(
        {
            scrollTop: $($link).offset().top - 60,
        },
        1000
    );
});

// closes hamburger bar when link is clicked
$(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

// change margin of about paragraph on mobile phones
$(window).on("resize", function () {
    let win = $(this);
    if (win.width() < 540) {
        $("#about-para").removeClass("pl-5").addClass("pl-4");
    }
});

// change margin of profile photo for iPad pro only
$(window).on("resize", function () {
    let win = $(this);
    if (win.width() < 1025 && win.width() > 1023) {
        $(".profile").removeClass("pr-1").addClass("pr-5");
    }
});

// removes image caption on mobile view
// $(window).on("resize", function () {
//     let win = $(this);
//     if (win.width() < 540) {
//         $(".img-caption").removeClass("img-caption").addClass("empty pb-5");
//         $("h3").removeClass("pt-2").addClass("pt-5");
//     }
// });

// animate on scroll library
AOS.init();

// enable the tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
