const hiddenCards = document.querySelectorAll('.card.hidden');
const showCardsBtn = document.querySelector('#show-cards-btn');

showCardsBtn.textContent = (`Показать все (ещё ${hiddenCards.length})`)

showCardsBtn.addEventListener('click', function() {
    let activeOrNot = this.classList.contains('active');
    if (!activeOrNot) {
        hiddenCards.forEach((card) => {
            card.classList.remove('hidden');
        });
        this.textContent = (`Скрыть все (ещё ${hiddenCards.length})`)
        this.classList.add('active');
    } else {
        hiddenCards.forEach((card) => {
            card.classList.add('hidden');
        });
        this.textContent = (`Показать все (ещё ${hiddenCards.length})`)
        this.classList.remove('active');
    }
});