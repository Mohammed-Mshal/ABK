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
    const swiperBanner = swiperBannerEle ?
        new Swiper(swiperBannerEle, {
            direction: 'vertical',
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 0,
            loop: true,
            mousewheel: true,
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
        : null
});
