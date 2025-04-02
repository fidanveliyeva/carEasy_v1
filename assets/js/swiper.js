var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    navigation: false,

    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        768: {  
            slidesPerView: 2
        },
        480: {  
            slidesPerView: 1,
        }
    }
});
