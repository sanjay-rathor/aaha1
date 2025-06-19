$(document).ready(function() {

    $('.proSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]
    });



    $('.coreSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.prev1'),
        nextArrow: $('.next1'),
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: '300px',
        focusOnSelect: true,


        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },

            }
        ]

    });



});









// form js start

// $(".topenq").click(function() {
//     $(".form-sec").removeClass("slide-righta");

//     $(".form-sec").removeClass("hides");

//     window.scrollTo(0, 0);
// });

// function closeBox() {
//     $(".form-sec").addClass("slide-righta");
// }

// $(window).on("resize", function() {
//     var win = $(this);

//     if (win.height() < 767) {
//         $(".form-sec").removeClass("slide-righta  ");
//     }
// });

// jQuery(".topenq1 a").click(function() {
//     jQuery("html,body").animate({
//             scrollTop: jQuery("#home").offset().top - 85,
//         },
//         500
//     );

//     return false;
// });

// if (jQuery(window).width() > 768) {
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollTop() > 300) {
//             jQuery(".form-sec").addClass("hides");
//         } else {
//             jQuery(".form-sec").removeClass("hides");
//         }
//     });
// }
// form js end