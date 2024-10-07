const timersArray = document.querySelectorAll('.date.timer');

timersArray.forEach((timer) => {
    let timeValue = timer.getAttribute('data-time');
    startCountdown(timeValue, timer);
});

// Функция для запуска обратного счетчика
function startCountdown(hours, timer) {
    // Вычисляем конечное время
    // текущий момент + заданное количество часов
    const endTime = new Date().getTime() + hours * 60 * 60 * 1000;

    // Функция для обновления таймера каждую секунду
    const timerInterval = setInterval(() => {
        // Текущее время
        const now = new Date().getTime();

        // Оставшееся время в миллисекундах
        const remainingTime = endTime - now;

        // Вычисляем оставшиеся часы, минуты и секунды
        const hoursLeft = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Форматируем отображение как HH:MM:SS
        const formattedTime = `
            ${hoursLeft.toString().padStart(2, '0')}:
            ${minutesLeft.toString().padStart(2, '0')}:
            ${secondsLeft.toString().padStart(2, '0')}
        `;

        // Обновляем таймер на странице
        timer.textContent = formattedTime.trim();

        // Останавливаем таймер, когда время истекло
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "00:00:00";
        }
    }, 1000);
}