document.addEventListener('DOMContentLoaded', function () {
    const randomNumberDisplay = document.getElementById('randomNumber');

    function generateRandomNumber() {
        const min = 10;
        const max = 50;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
    }

    document.addEventListener('click', generateRandomNumber);
    document.addEventListener('touchend', generateRandomNumber);
});
