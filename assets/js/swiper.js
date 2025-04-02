// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     speed: 800, // Плавная прокрутка
//     loop: true, // Отключаем зацикливание
//     navigation: false,
//     resistanceRatio: 0, // Убирает эффект "отскока"
//     touchReleaseOnEdges: true, // Позволяет скроллить за пределы

//     breakpoints: {
//         1024: {
//             slidesPerView: 3
//         },
//         768: {  
//             slidesPerView: 2
//         },
//         480: {  
//             slidesPerView: 1,
//         }
//     }
// });




var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 1000, // Плавная прокрутка
    loop: true, // Отключаем зацикливание
    navigation: false,
    grabCursor: true, // Удобнее листать
    resistanceRatio: 0, // Без "липкого" эффекта
    touchReleaseOnEdges: true, // Позволяет выйти за границы
    slideToClickedSlide: true, // Переход по клику
    shortSwipes: true, // Даже короткий свайп меняет карточку
    watchOverflow: true, // Если слайдов мало, свайпер не ломается

    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        768: {  
            slidesPerView: 2
        },
        480: { 
            shortSwipes: true, 
            slidesPerView: 1, // В мобильной версии листаем по 1 карточке
            centeredSlides: true, // Слайд центрируется для лучшего UX
        }
    }
});

