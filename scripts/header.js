/* ------------------------ Логика бургер-меню ------------------------ */
// Бургер-кнопка
const burgerMenu = document.querySelector('#burger_menu');
// Меню со ссылками
const nav_menu = document.querySelector('#nav_menu');
// Кнопки в шапке
const header_tools = document.querySelector('#header_tools');

// Обработка клика на бургер
burgerMenu.addEventListener('click', function() {
    // Изменяем видимость
    this.classList.toggle('active');
    nav_menu.classList.toggle('active');
    header_tools.classList.toggle('hide');
    document.body.classList.toggle('no_scroll');
});