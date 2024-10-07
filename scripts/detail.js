// Кнопка для открытия
const showTextBtn = document.querySelector('#show-text');
// Элемент скрытого текста
const hiddenTextWrapper = document.querySelector('#hidden-text');

showTextBtn.addEventListener('click', function() {
    this.classList.add('hide');
    hiddenTextWrapper.classList.add('open');
});

// Все открывающиеся поля
const details = document.querySelectorAll(".detail");
// Все кнопки для открытия
const open_buttons = document.querySelectorAll(".title-wrapper");

// Слушаем нажатие на каждую кнопку
open_buttons.forEach(function(button, index, array) {
    button.addEventListener("click", function() {
        // Если не текущий - то удалить active
        array.forEach(function(element) {
            if (element !== button) {
                element.classList.remove("active");
            }
        });
        // К текущему добавить active
        button.classList.toggle("active");

        // Если не текущее поле - скрыть
        details.forEach(function(detail, i) {
            if (i !== index) {
                detail.classList.remove("open");
            }
        });
        // Если текущее - показать
        details[index].classList.toggle("open");
    });
});