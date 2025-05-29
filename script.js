'use strict';
const number = Math.random() * 20 + 1;
document.querySelector(`.number`).textContent = number;
document.querySelector(`.check`).addEventListener (`click`, function () {
    const guess = Number (document.querySelector(`.guess`).value);
    if (!guess) {
        document.querySelector(`.massage`).textContent = 'No Number🧐';
    } else if (guess === number) {
        document.querySelector(`.massage`).textContent = 'Correct Number!🎉';
    } else if (guess > number) {
        document.querySelector(`.massage`).textContent = 'Too High!📈';
    } else if (guess < number) {
        document.querySelector(`.massage`).textContent = 'Too Low!📉';
    }
});
document.querySelector(`.again`).addEventListener (`click`, function () {
    document.querySelector(`.massage`).textContent = 'Start Guessing...';
    document.querySelector(`.guess`).value = '';
    document.querySelector(`.number`).textContent = '?';
});