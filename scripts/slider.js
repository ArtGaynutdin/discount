const slider_1 = document.querySelector('#slider-1');
const slider_2 = document.querySelector('#slider-2');
const slider_3 = document.querySelector('#slider-3');

const sliders = [];
sliders.push(slider_1, slider_2, slider_3);

sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                navigation: {
                    nextEl: '.slider-btn-next',  // кнопка "вперед" должна быть с классом .next
                    prevEl: '.slider-btn-prev',  // кнопка "назад" должна быть с классом .prev
                },
            },
        }
    });
});