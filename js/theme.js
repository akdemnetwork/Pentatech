$(function () {
	$('.contact-address').click(function () {
		$(this).addClass('uk-section-primary');
		$(this).siblings().removeClass('uk-section-primary');
	});

    var whatWeOfferController = new Swiper('.swiper-what-we-offer-controller', {
        slidesPerView: 6,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var whatWeOffer = new Swiper('.swiper-what-we-offer', {
        /*effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },*/
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.uk-position-bottom-right',
            prevEl: '.uk-position-bottom-left',
        },

        thumbs: {
            swiper: whatWeOfferController
        },
        breakpoints: {
            959: {
                slidesPerView: 1
            },
            1199: {
                slidesPerView: 3
            }
        }
    });

    whatWeOffer.on('slideChange', function () {
        var index = whatWeOffer.realIndex;

        $('.swiper-nav li').removeClass('uk-active');
        $('.swiper-nav li').eq(index).addClass('uk-active');
    });

    var mainSwiper = new Swiper('.main-swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.main-swiper-container-next',
            prevEl: '.main-swiper-container-prev'
        },
        pagination: {
            el: '.main-swiper-container-pagination'
        }
    });

    var productionController = new Swiper('.swiper-production-controller', {
        slidesPerView: 6,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var production = new Swiper('.swiper-production', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.uk-position-bottom-right.production-slidenav',
            prevEl: '.uk-position-bottom-left.production-slidenav',
        },

        thumbs: {
            swiper: productionController
        }
    });

    $('.menu-button').click(function () {
        $(this).toggleClass('uk-active');

        $('.header-navbar').toggleClass('uk-active');
    });

    $('[data-nav-item]').on('mouseover', function () {
        $(this).addClass('uk-active').siblings().removeClass('uk-active');

        var navItem = $(this).attr('data-nav-item');
        $('[data-nav]').removeClass('uk-active');
        $('[data-nav="' + navItem + '"]').addClass('uk-active');

        $('[data-product]').removeClass('uk-active');
    });

    $('[data-product-item]').on('mouseover', function () {
        $(this).addClass('uk-active').siblings().removeClass('uk-active');

        var productItem = $(this).attr('data-product-item');
        console.log(productItem);

        $('[data-product]').removeClass('uk-active');
        $('[data-product="' + productItem + '"]').addClass('uk-active');
    });

    $('[data-toggle]').on('mouseover', function () {
        var navVal = $(this).attr('data-toggle');

        $('[data-group="' + navVal + '"]').removeClass('uk-hidden').siblings('[data-group]').addClass('uk-hidden');
    });

    $('.nav > .uk-nav > li > a:not([data-toggle])').on('mouseover', function () {
        $('[data-group]').addClass('uk-hidden');
    });

});