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



// задание 7
document.getElementById('inputText').addEventListener('blur', function() {
    // Получаем значение из инпута и обрезаем пробелы по краям
    const text = this.value.trim();
    
    // Инициализируем счетчик слов
    let wordCount = 0;
    
    if (text !== '') {
        // Разбиваем текст на слова, учитывая любые пробельные символы
        const words = text.split(/\s+/);
        
        // Фильтруем пустые строки (на случай множественных пробелов)
        wordCount = words.filter(word => word !== '').length;
    }
    
    // Выводим результат
    document.getElementById('result').textContent = `Количество слов: ${wordCount}`;
});



// задание 8
document.getElementById('dateInput').addEventListener('blur', function() {
    const input = this.value.trim();
    
    // Проверяем формат с помощью регулярного выражения
    const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = input.match(datePattern);
    
    if (match) {
        // Извлекаем день, месяц и год
        const day = match[1];
        const month = match[2];
        const year = match[3];
        
        // Форматируем в новый вид
        this.value = `${year}-${month}-${day}`;
    } else if (input !== '') {
        // Если формат неверный, но что-то введено - сообщаем об ошибке
        alert('Неверный формат даты! Используйте ДД.ММ.ГГГГ');
        this.value = '';
        this.focus();
    }
});



// задание 9
document.getElementById('checkButton').addEventListener('click', function() {
    const input = document.getElementById('wordInput');
    const resultDiv = document.getElementById('result9');
    const word = input.value.trim().toLowerCase();
    
    if (!word) {
        resultDiv.textContent = 'введите слово';
        resultDiv.className = 'not-palindrome';
        return;
    }
    
    // Удаляем все не-буквы (для фраз с пробелами и знаками препинания)
    const cleanWord = word.replace(/[^а-яa-z]/g, '');
    
    // Сравниваем слово с его перевернутой версией
    const reversedWord = cleanWord.split('').reverse().join('');
    
    if (cleanWord === reversedWord) {
        resultDiv.textContent = `"${input.value}" - это палиндром!`;
        resultDiv.className = 'palindrome';
    } else {
        resultDiv.textContent = `"${input.value}" - это НЕ палиндром`;
        resultDiv.className = 'not-palindrome';
    }
});

// Добавим возможность проверки по нажатию Enter
document.getElementById('wordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkButton').click();
    }
});



// задание 10
const input10 = document.getElementById('numberInput10');
        const message = document.getElementById('message10');

        input10.addEventListener('blur', function() {
            const value = this.value.trim();
            
            // Проверяем, что введено число (может содержать отрицательные числа и десятичные дроби)
            if (!value || isNaN(value)) {
                message.textContent = 'введите число';
                message.className = 'error';
                return;
            }
            
            // Проверяем наличие цифры 3 в числе
            if (value.includes('3')) {
                message.textContent = `Число содержит цифру 3`;
                message.className = 'contains';
            } else {
                message.textContent = `Число не содержит цифру 3`;
                message.className = 'not-contains';
            }
    });



// задание 11
document.getElementById('numberButton11').addEventListener('click', function() {
    // Получаем все абзацы на странице
    const paragraphs = document.getElementsByClassName('p-11');
    
    // Перебираем все абзацы и добавляем номера
    for (let i = 0; i < paragraphs.length; i++) {
        // Проверяем, не добавлен ли уже номер (чтобы избежать дублирования)
        if (!paragraphs[i].textContent.includes(`[${i + 1}]`)) {
            paragraphs[i].textContent += ` [${i + 1}]`;
        }
    }
    
    // Делаем кнопку неактивной после первого нажатия
    this.disabled = true;
    this.textContent = "Абзацы пронумерованы!";
});



// задание 12
document.getElementById('addHrefButton').addEventListener('click', function() {
    // Получаем все ссылки на странице
    const links = document.getElementsByClassName('href-12');
    
    // Перебираем все ссылки и добавляем их href
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.textContent += ` (${link.href})`;
    }
    this.textContent = "Адреса добавлены!";
});



// задание 13
document.getElementById('addArrowButton').addEventListener('click', function() {
    // Получаем все ссылки на странице
    const links = document.getElementsByClassName('href-13');
    
    // Перебираем все ссылки
    for (let link of links) {
        // Проверяем, начинается ли href с http:// (но не https://)
        if (link.href.startsWith('http://') && !link.textContent.includes('→')) {
            link.innerHTML += ' &rarr;';
        }
    }
    
    // Делаем кнопку неактивной после первого нажатия
    this.disabled = true;
    this.textContent = "Стрелки добавлены!";
});



// задание 14
const paragraphs = document.querySelectorAll('.p-14');
        
        // Добавляем обработчик клика к каждому абзацу
        paragraphs.forEach(p => {
            p.addEventListener('click', function() {
                // Ищем число в тексте абзаца
                const match = this.textContent.match(/-?\d+\.?\d*/);
                
                if (match) {
                    const number = parseFloat(match[0]);
                    const squared = number * number;
                    
                    // Заменяем число на его квадрат
                    this.textContent = this.textContent.replace(match[0], squared);
                    
                    // Добавляем класс для стилизации
                    this.classList.add('squared');
                } else {
                    this.textContent = "Здесь нет числа!";
                    this.style.backgroundColor = "#ffebee";
                }
            });
        });
// задание 15
document.getElementById('dateInput15').addEventListener('blur', function() {
    const input = this.value.trim();
    const resultDiv = document.getElementById('result15');
    
    // Проверка формата с помощью регулярного выражения
    const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = input.match(datePattern);
    
    if (!match) {
        resultDiv.textContent = 'Неверный формат! Используйте ДД.ММ.ГГГГ';
        resultDiv.className = 'invalid';
        return;
    }
    
    // Извлекаем компоненты даты
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1; // Месяцы в JS: 0-11
    const year = parseInt(match[3], 10);
    
    // Создаем объект Date
    const date = new Date(year, month, day);
    
    // Проверка валидности даты (например, 32.01.2023)
    if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
        resultDiv.textContent = 'Некорректная дата!';
        resultDiv.className = 'invalid';
        return;
    }
    
    // Определяем день недели
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfWeek = days[date.getDay()];
    
    resultDiv.textContent = `День недели: ${dayOfWeek}`;
    resultDiv.className = 'valid';
});
// задание 16
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
// Проверка значения при загрузке страницы
checkValue();
// Обработчики кликов
incrementBtn.addEventListener('click', () => {
    counter.value = parseInt(counter.value) + 1;
    checkValue();
});
decrementBtn.addEventListener('click', () => {
    const newValue = parseInt(counter.value) - 1;
    if (newValue >= 0) {
        counter.value = newValue;
    }
    checkValue();
});

// Проверка ввода вручную
counter.addEventListener('input', () => {
    // Если ввели не число или отрицательное значение
    if (isNaN(counter.value) || parseInt(counter.value) < 0) {
        counter.value = 0;
    }
    checkValue();
});

// Функция проверки значения и блокировки кнопок
function checkValue() {
    const value = parseInt(counter.value);
    decrementBtn.disabled = value <= 0;
}



// задание 17
const paragraphs17 = document.querySelectorAll('.p-17');
        const counterInput = document.getElementById('clickCounter');
        let totalClicks = 0;

        // Добавляем обработчик клика к каждому абзацу
        paragraphs17.forEach(p => {
            p.addEventListener('click', function() {
                // Увеличиваем счетчик кликов
                totalClicks++;
                
                // Обновляем значение в инпуте
                counterInput.value = totalClicks;
                
                // Визуальный эффект при клике
                this.style.backgroundColor = '#e6f7ff';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 200);
            });
        });



// задание 18
document.addEventListener('DOMContentLoaded', function() {
    const allDivs = document.querySelectorAll('.div-18');
    
    allDivs.forEach(div => {
        const originalText = div.textContent.trim();
        
        if (originalText.length > 10) {
            // Обрезаем до 10 символов и добавляем троеточие
            div.textContent = originalText.substring(0, 10) + '...';
        }
        // Если текст <= 10 символам, оставляем без изменений
    });
});



// задание 19
const input19 = document.getElementById('numberInput19');
const message19 = document.getElementById('message19');

input19.addEventListener('blur', function() {
    const value = parseFloat(this.value);
    
    // Очищаем предыдущие сообщения
    message19.textContent = '';
    
    // Проверяем диапазон
    if (value >= 1 && value <= 100) {
        this.classList.add('valid');
        this.classList.remove('invalid');
        input19.textContent = 'Число в допустимом диапазоне';
        input19.className = 'message valid-message';
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        input19.textContent = 'Число должно быть от 1 до 100';
        input19.className = 'message invalid-message';
    }
});



// задание 20
const input20 = document.getElementById('inputTask20');
const button20 = document.getElementById('buttonTask20');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    // Secure random generation
    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % charactersLength;
    result += characters.charAt(randomIndex);
    }
    return result;
}

button20.addEventListener('click', () => {
    const randomStr = generateRandomString(8);
    input20.value = randomStr;
    input20.focus();
    input20.select();
});



// задание 21
const input21 = document.getElementById('inputString21');
const button21 = document.getElementById('shuffleButton21');

function shuffleString(str) {
    // Convert string to array
    const arr = str.split('');
    // Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}
button21.addEventListener('click', () => {
    const original = input21.value;
    if (!original) {
    alert('Пожалуйста, введите строку для перемешивания.');
    input21.focus();
    return;
    }
    const shuffled = shuffleString(original);
    input21.value = shuffled;
    input21.focus();
    input21.select();
});



// задание 22
document.getElementById('Button22').addEventListener('click', function() {
    const fahrenheitInput = document.getElementById('inputString22');
    const resultElement = document.getElementById('result22');
    
    // Проверяем, что введено число
    if (fahrenheitInput.value === '' || isNaN(fahrenheitInput.value)) {
        resultElement.textContent = 'Пожалуйста, введите число!';
        resultElement.classList.add('error');
        return;
    }
    
    // Конвертируем Фаренгейты в Цельсии
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    
    // Выводим результат с округлением до 2 знаков после запятой
    resultElement.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    resultElement.classList.remove('error');
});



// задание 23
document.getElementById('Button23').addEventListener('click', function() {
    const input = document.getElementById('inputString23');
    const resultElement = document.getElementById('result23');
    
    // Проверяем, что введено целое неотрицательное число
    if (input.value === '' || isNaN(input.value) || input.value < 0 || !Number.isInteger(Number(input.value))) {
        resultElement.textContent = 'Пожалуйста, введите целое неотрицательное число!';
        resultElement.classList.add('error');
        return;
    }
    
    const num = parseInt(input.value);
    
    // Вычисляем факториал
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    
    // Выводим результат
    resultElement.textContent = `${num}! = ${factorial}`;
    resultElement.classList.remove('error');
});



// задание 24
document.getElementById('solveBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultElement = document.getElementById('result24');
    
    // Проверка ввода
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = 'Пожалуйста, введите все коэффициенты!';
        resultElement.classList.add('error');
        return;
    }
    
    // Проверка, что это квадратное уравнение
    if (a === 0) {
        resultElement.textContent = 'Коэффициент a не может быть равен нулю!';
        resultElement.classList.add('error');
        return;
    }
    
    // Вычисляем дискриминант
    const D = b * b - 4 * a * c;
    
    // Анализируем дискриминант
    if (D > 0) {
        // Два различных корня
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        resultElement.innerHTML = `Уравнение имеет два корня:<br>
                                  x₁ = ${x1.toFixed(4)}<br>
                                  x₂ = ${x2.toFixed(4)}`;
        resultElement.classList.remove('error');
    } 
    else if (D === 0) {
        // Один корень
        const x = -b / (2 * a);
        resultElement.innerHTML = `Уравнение имеет один корень:<br>
                                  x = ${x.toFixed(4)}`;
        resultElement.classList.remove('error');
    } 
    else {
        // Нет действительных корней
        resultElement.textContent = 'Уравнение не имеет действительных корней (D < 0)';
        resultElement.classList.remove('error');
    }
});