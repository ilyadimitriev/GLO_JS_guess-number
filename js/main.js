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
    }
    return mathMagic;
}

function startGame() {
    //Задаем рамки для загадываемого числа
    let getRandom = createRandom(1, 100);
    //Запоминаем загаданное число
    let randInt = getRandom();

    function getData() {
        //Подсказка для тестирования
        console.log(randInt);
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
            getData();
        }
        // Если корректно, то сравниваем.
        // Если больше, то
        else if (+guess > randInt) {
            alert('Загаданное число меньше');
            // Даем подсказку и проверяем заново
            getData();
        }
        // Если меньше, то
        else if (+guess < randInt) {
            alert('Загаданное число больше');
            // Даем подсказку и проверяем заново
            getData();
        }
        // Если угадали, то
        else {
            alert('Поздравляю, Вы угадали!!!');
            // Выходим из игры
            return false;
        }
    }
    // Запускаем игру
    getData();
}

startGame();

