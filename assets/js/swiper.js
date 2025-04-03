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



// document.addEventListener("DOMContentLoaded", function () {
//     var swiper = new Swiper(".swiper-container", {
//         slidesPerView: 3, // По умолчанию 3 карточки
//         spaceBetween: 20, // Отступ между карточками
//         breakpoints: {
//             1024: {
//                 slidesPerView: 3,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             480: {
//                 slidesPerView: 1,
//             }
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3, // По умолчанию 3 карточки
        spaceBetween: 20, // Отступ между карточками
        loop: true, // Бесконечная прокрутка
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 } // Для всех экранов меньше 768px (мобильная версия)
        }
    });
});