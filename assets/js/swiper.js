var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 800, // Плавная прокрутка
    loop: true, // Отключаем зацикливание
    navigation: false,
    resistanceRatio: 0, // Убирает эффект "отскока"
    touchReleaseOnEdges: true, // Позволяет скроллить за пределы

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
