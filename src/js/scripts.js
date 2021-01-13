(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
	});

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    // $('#portfolio').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1]
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });

})(jQuery); // End of use strict

window.onload = function() {
    new WOW().init();
}

var loading = document.getElementById('loading');
var contents = document.getElementById('contents');
// 読み込みが完了したら#contentsを表示して#loadingとその親要素を非表示に
window.addEventListener('load', function () {
    loading.classList.add('d-none');
    loading.parentNode.classList.replace('vh-100', 'd-none');
    contents.classList.remove('d-none');
});

// Reloadするときはロード中がわかるように3秒後に表示
const reload = document.querySelector('#reload');
reload.addEventListener('click', () => {
    loading.classList.remove('d-none');
    loading.parentNode.classList.replace('d-none', 'vh-100');
    contents.classList.add('d-none');
    window.setTimeout(() => {
        window.location.reload(true);
    }, 3000);
});
