// Задание 1
const input = document.getElementById('myInput');
const paragraph = document.getElementById('myParagraph');
//  Обработчик события потери фокуса
input.addEventListener('blur', function() {
    const inputValue = input.value;
    paragraph.textContent += ' ' + inputValue;
    input.value = '';
});



// Задание 2
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const resultParagraph1 = document.getElementById('resultParagraph1');
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function() {
    // Получаем значения из инпутов и преобразуем их в числа
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    const num3 = parseFloat(input3.value) || 0;

    const sum = num1 + num2 + num3;

    resultParagraph1.textContent = 'Сумма: ' + sum;
});



// задание 3
const numberInput = document.getElementById('numberInput');
const resultParagraph2 = document.getElementById('resultParagraph2');
numberInput.addEventListener('blur', function() {
    const inputValue = numberInput.value;
    if (inputValue) {
        // Находим сумму цифр
        const sum = Array.from(inputValue)
            .map(Number) // Преобразуем каждую цифру в число
            .reduce((acc, curr) => acc + curr, 0); // Суммируем цифры
        // Записываем сумму в абзац
        resultParagraph2.textContent = 'Сумма цифр: ' + sum;
    } 
});



// задание 4
// Получаем элементы
const numberInput4 = document.getElementById('numberInput4');
const resultParagraph4 = document.getElementById('resultParagraph4');

numberInput4.addEventListener('blur', function() {
const inputValue = numberInput4.value;

if (inputValue) {
    // Разделяем строку по запятой и преобразуем в массив чисел
    const numbers = inputValue.split(',')
        .map(num => parseFloat(num.trim())) // Преобразуем каждую строку в число
        .filter(num => !isNaN(num)); // Убираем нечисловые значения

    // Проверяем, есть ли числа для вычисления среднего
    if (numbers.length > 0) {
        // Находим среднее арифметическое
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;

        // Записываем среднее арифметическое в абзац
        resultParagraph4.textContent = 'Среднее арифметическое: ' + average;
    } else {
        resultParagraph4.textContent = 'Среднее арифметическое: 0';
    }
} else {
    resultParagraph4.textContent = 'Среднее арифметическое: 0';
}
});



// задание 5
// Получаем элементы
const fullNameInput5 = document.getElementById('fullNameInput5');
const lastNameInput = document.getElementById('lastNameInput');
const firstNameInput = document.getElementById('firstNameInput');
const middleNameInput = document.getElementById('middleNameInput');
// Добавляем обработчик события потери фокуса
fullNameInput5.addEventListener('blur', function() {
    // Получаем значение инпута
    const fullName = fullNameInput5.value.trim();
    // Разделяем ФИО по пробелам
    const nameParts = fullName.split(' ');
    // Проверяем, что введено 3 части (фамилия, имя, отчество)
    if (nameParts.length === 3) {
        lastNameInput.value = nameParts[0]; // Фамилия
        firstNameInput.value = nameParts[1]; // Имя
        middleNameInput.value = nameParts[2]; // Отчество
    } 
});



// задание 6
// Получаем элемент инпута
const fullNameInput6 = document.getElementById('fullNameInput6');
// Добавляем обработчик события потери фокуса
fullNameInput6.addEventListener('blur', function() {
    // Получаем значение инпута
    const fullName = fullNameInput6.value.trim();
    // Преобразуем ФИО: каждое слово с заглавной буквы
    const formattedFullName = fullName
        .split(' ') // Разделяем по пробелам
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Преобразуем каждое слово
        .join(' '); // Объединяем обратно в строку

    // Записываем отформатированное ФИО обратно в инпут
    fullNameInput6.value = formattedFullName;
});