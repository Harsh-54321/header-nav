$(document).ready(function () {
    // const init = {
    //     autoplay: true,
    //     infinite: true,
    //     cssEase: "linear",
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     autoplaySpeed: 3000,
    //     responsive: [
    //         {
    //             breakpoint: 993,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //           },
    //         {
    //             breakpoint: 860,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //           },
    //         {
    //             breakpoint: 577,
    //             settings: {
    //                 slidesToShow: 1,

    //             }
    //           }
    //       ]
    // };

    // $(() => {
    //     const win = $(window);
    //     const slider = $(".trust-key-slides");

    //     win.on("load resize", () => {
    //         if (win.width() < 1199) {
    //             slider.not(".slick-initialized").slick(init);
    //         } else if (slider.hasClass("slick-initialized")) {
    //             slider.slick("unslick");
    //         }
    //     });
    // });
    /*Menu dropdown*/
    /*Menu dropdown*/
    // var ico = $('<i class="fa fa-angle-down menudrop"></i>');
    // $('.menu_link li:has(.submenu) > a').append(ico);
    // $('.menudrop').on('click', function (e) {
    //     $(this).parent().parent().addClass('no-hover');

    //     $('.menu_link li').not($(this).parent().parent()).find('.submenu').stop(true, true).delay(200).fadeOut(500);
    //     $('.menu_link li').not($(this).parent().parent()).removeClass('open');
    //     $('.menu_link li a .menudrop').not($(this)).removeClass('openedmenu');
    //     $('.menu_link li a .menudrop').not($(this)).addClass('closemenu');

    //     e.preventDefault();
    //     if ($(this).hasClass('openedmenu')) {
    //         $(this).parent().parent().find('.submenu').stop(true, true).delay(200).fadeOut(500);
    //         $(this).removeClass('openedmenu');
    //         $(this).addClass('closemenu');

    //     } else {
    //         $(this).parent().parent().find('.submenu').stop(true, true).delay(200).fadeIn(500);
    //         $(this).removeClass('closemenu');
    //         $(this).addClass('openedmenu');
    //     }
    // });

    $('li.active').parent('ul').parent('li').addClass('active');
    $('li.active').parent('ul').parent('li').parent('ul').parent('.submenu').parent('li').addClass('active');
    if ($(".megamenu .dropdown-menu").find("li").hasClass('active')) {
        $(".megamenu .dropdown-menu li").parent().parent().removeClass('menu-item-hover');
        $(".megamenu .dropdown-menu li ul li.active ").parent().parent().addClass('menu-item-hover')
    }(function ($) {
        $(".togglebtn, .overlay").click(function () {
            $(".togglebtn, .overlay, .nav-mainmenu").toggleClass("active");
            if ($(".overlay").hasClass("active")) {
                $(".overlay").fadeIn();
                $('html').addClass('menuhidden')
            } else {
                $(".overlay").fadeOut();
                $('html').removeClass('menuhidden')
            }
        })
    })(jQuery)
    $('.menu_link li:has(.submenu)').addClass("haschild");
    var caicon = $('<i class="fa fa-angle-down menudrop" aria-hidden="true"></i>');
    $('.menu_link li:has(ul) > a').append(caicon);
    $('.menu_link li:has(ul) > a').next().addClass("childmenu");
    $('.menu_link .megamenu.submenu  .dropdown-menu > li').on('mouseenter', function () {
        $(this).siblings().removeClass('menu-item-hover');
        $(this).addClass('menu-item-hover')
    });
    if ($(window).width() < 1200) {
        $('.menudrop').on('click', function (e) {
            var label = $(this).parent();
            var parent = label.parent('.haschild');
            var list = label.siblings('.childmenu');
            e.preventDefault();
            if (parent.hasClass('isopen')) {
                list.slideUp('fast');
                parent.removeClass('isopen')
            } else {
                parent.parent().find('li.haschild').removeClass('isopen');
                parent.parent().find('li.haschild .childmenu').slideUp(350);
                list.slideDown('fast');
                parent.addClass('isopen')
            }
        })
    }
    if ($(window).width() > 1200) {
        $(".menu_link  li.has-sub").hover(function () {
            $('body').addClass("menuoverlay");
            $(window).trigger('resize')
        }, function () {
            $('body').removeClass("menuoverlay")
        })
    }


});

// $(".togglebtn, .overlay").click(function () {
//     $(".togglebtn, .overlay, .nav-mainmenu").toggleClass("active");
//     if ($(".overlay").hasClass("active")) {
//         $(".overlay").fadeIn();
//         $('html').addClass('menuhidden');

//     } else {
//         $(".overlay").fadeOut();
//         $('html').removeClass('menuhidden');

//     }
// });

// $(".overlay").click(function () {
//     $(".togglebtn, .menu_link").removeClass("active");
//     $(" body").removeClass("active");
//     $(".overlay").fadeOut()
// });
$(window).scroll(function () {
    if (($(window).scrollTop() > 200) && ($(window).width() >= 300)) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// if (($(window).width() >= 1024)) {
//     $(function () {
//         $('.menu-level1 > li a').hover(function (e) {
//             e.preventDefault();
//             var $this = $(this);
//             $this.closest('ul').find('.active-submenu').removeClass('active-submenu');
//             $this.parent().addClass('active-submenu');
//         });
//     });
// }

$(".ft-block-links  .ft-title").click(function () {
    if ($(window).width() < 580) {
        $(this).toggleClass("showhide");
        $(this).next().slideToggle("");
    }
});



$('.menu-links > li').hover(function () {
    $(this).addClass('hovered');
}, function () {
    $(this).removeClass('hovered');
});