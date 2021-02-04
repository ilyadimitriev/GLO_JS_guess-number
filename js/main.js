'use strict';

function isNumber(num) {
    return !isNaN(num) && !isNaN(parseFloat(num)) && (isFinite(num));
}

// Генерация случайного числа
function createRandom(minInt, maxInt) {
    let randInt;
    const mathMagic = function() {
        randInt = Math.floor(minInt + Math.random() * (maxInt + 1 - minInt));
        return randInt;
    };
    return mathMagic;
}

// Счетчик оставшихся попыток
function createCounter(x) {
    let counter = x;
    const myFunction = function() {
        counter -= 1;
        return counter;
    };
    return myFunction;
}

function startGame() {
    //Задаем рамки для загадываемого числа
    let getRandom = createRandom(1, 100);
    //Запоминаем загаданное число
    let randInt = getRandom();
    //Подсказка для тестирования
    console.log(randInt);
    // Задаем количество попыток
    let decrement = createCounter(10);
    // Запоминаем количество попыток
    let attempts;
    // Сюда будет записан true или false для прешения, продолжать ли игру
    let result;

    function checkGuess() {
        let guess = prompt('Угадай число от 1 до 100');
        // Если отказались вводить число, то
        if (guess === null) {
            alert('Игра окончена');
            // Выходим из игры
            return false;
        }
        // Проверяем корректность ввода
        else if (!isNumber(guess)) {
            alert('Введи число!');
            checkGuess();
        }
        // Если корректно, то сравниваем.
        // Если больше, то
        else if (+guess > randInt) {
            // Уменьшаем число попыток
            attempts = decrement();
            // Если попытки закончились
            if (attempts === 0) {
                result = confirm('Загаданное число меньше. Попытки закончились, хотите сыграть еще?');
                // Возвращаем true либо false
                return result;
            }
            // Если попытки еще есть, то даем подсказку и проверяем заново
            alert('Загаданное число меньше, осталось попыток: ' + attempts);
            checkGuess();
        }
        // Если меньше, то
        else if (+guess < randInt) {
            // Уменьшаем число попыток
            attempts = decrement();
            if (attempts === 0) {
                result = confirm('Загаданное число больше. Попытки закончились, хотите сыграть еще?');
                // Возвращаем true либо false
                return result;
            }
            // Если попытки еще есть, то даем подсказку и проверяем заново
            alert('Загаданное число больше, осталось попыток: ' + attempts);
            checkGuess();
        }
        // Если угадали, то
        else {
            result = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            // Возвращаем true либо false
            return result;
        }
    }// Запускаем игру
    checkGuess();
    // Если решили сыграть еще, то
    if (result === true) {
        // Начинаем новую игру
        startGame();
    }
    // Если отказались начать заново, то
    else {
        // Выходим из игры
        return false;
    }
}

startGame();