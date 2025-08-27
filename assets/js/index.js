// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.toggle-menu');
    const mobileMenu = document.querySelector('.links-menu');
    const closeMenu = document.querySelector('.links-menu button');

    // Toggle menu when menu button is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        });
    }

    // Close menu when close button is clicked
    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('show');
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = ''; // Restore body scroll
        });
    }

    // Close menu when clicking outside the menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function (e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('scroll', () => {
        const nav = document.querySelector('nav')
        window.scrollY >= 20 ? nav.classList.add('scrolling') : nav.classList.remove('scrolling')
    })
    const swiperBannerEle = document.querySelector('.banner-home .left-side .slider-banner')
    const swiperBgBannerEle = document.querySelector('.bg-banner-slide .swiper-banner-bg')
    let swiperBanner = null;
    let swiperBgBanner = null;

    if (swiperBannerEle) {
        swiperBanner = new Swiper(swiperBannerEle, {
            direction: 'vertical',
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 0,
            loop: true,
            // allowTouchMove: false,
            speed: 600,
            pagination: {
                el: '.swiper-pagination.swiper-pagination-banner',
                clickable: false,
            },
            navigation: {
                nextEl: '.banner-home .swiper-button-next',
                prevEl: '.banner-home .swiper-button-prev',
            },
            on: {
                transitionEnd: function () {
                    if (swiperBgBanner && typeof swiperBgBanner.slideToLoop === 'function') {
                        swiperBgBanner.slideToLoop(this.realIndex);
                    }
                }
            }
        });
    }

    if (swiperBgBannerEle) {
        swiperBgBanner = new Swiper(swiperBgBannerEle, {
            slidesPerView: 1,
            centeredSlides: true,
            effect: 'fade',
            on: {
                slideChange: function () {
                    if (swiperBanner && typeof swiperBanner.slideToLoop === 'function') {
                        swiperBanner.slideToLoop(this.realIndex);
                    }
                }
            }
        });
    }


    const sliderMarketEle = document.querySelector('.market-insights .slider-market')
    if (sliderMarketEle) {
        const marketWrapper = sliderMarketEle.querySelector('.swiper-wrapper')
        if (marketWrapper && typeof gsap !== 'undefined') {
            gsap.set(marketWrapper, { x: window.innerWidth > 800 ? 120 : 0  })
        }
        const _sliderMarket = new Swiper(sliderMarketEle, {
            rewind: true,
            spaceBetween: 21,
            navigation: {
                nextEl: '.market-insights .swiper-button-next',
                prevEl: '.market-insights .swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 'auto',
                }
            }
        })
    }
    const sliderNewsEle = document.querySelector('.latest-news .slider-news')
    if (sliderNewsEle) {
        const newsWrapper = sliderNewsEle.querySelector('.swiper-wrapper')
        if (newsWrapper && typeof gsap !== 'undefined') {
            gsap.set(newsWrapper, { x: window.innerWidth > 800 ? 120 : 0 })
        }
        const _sliderNews = new Swiper(sliderNewsEle, {
            rewind: true,
            spaceBetween: 21,
            navigation: {
                nextEl: '.latest-news .swiper-button-next',
                prevEl: '.latest-news .swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                668: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 'auto',
                }
            },
        })
    }
});
