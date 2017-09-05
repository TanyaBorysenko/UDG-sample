$(document).ready(function() {
    var carousel = $('#carousel');
    var carouselItems = $('.item');
    carousel.carousel();

    $('.counter-all').text(carouselItems.length);
    carousel.bind('slide.bs.carousel', function (activeElement) {
        $('.counter-active').text(carouselItems.index(activeElement.relatedTarget) + 1);
    });

    var burgerBtn = $('#burger-btn'),
        mobileNav = $('nav.mobile');
    burgerBtn.click(function() {
        burgerBtn.toggleClass('is-active');
        mobileNav.toggleClass('active');
        mobileNav.parent().toggleClass('mobile-active');
    });
});