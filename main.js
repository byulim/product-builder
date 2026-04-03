document.addEventListener('DOMContentLoaded', () => {
    const generatorBtn = document.getElementById('generator-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    generatorBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayLottoNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            lottoNumbersContainer.appendChild(numberElement);
        });
    }
});