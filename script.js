const scoreDisplay    = document.getElementById('score');
const incrementButton = document.getElementById('incrementButton');
const resetButton     = document.getElementById('resetButton');

let score = parseInt(localStorage.getItem('score')) || 0;
scoreDisplay.textContent = score;

// Increment score when button is clicked
incrementButton.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = score;

    localStorage.setItem('score', score);
});

// Reset score when the reset button is clicked
resetButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;

    localStorage.setItem('score', score);
});
