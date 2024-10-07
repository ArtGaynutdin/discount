const tabBtns = document.querySelectorAll('.tab-menu-item');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((tabBtn, index, array) => {
    tabBtn.addEventListener('click', () => {
        array.forEach((element) => {
            element.classList.remove('active');
        });
        tabBtn.classList.add('active');
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });
        tabContents[index].classList.add('active');
    });
});