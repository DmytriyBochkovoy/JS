const DIVIDER = 6;

let firstNumber = prompt('Введите первое число', 0);
let lastNumber = prompt('Введите второе число', 0);

let countMultiplicity = 0;
let summ = 0;

firstNumber = +firstNumber;
lastNumber = +lastNumber;

for (let i = firstNumber; i <= lastNumber; i++) {
    let remains =  i % DIVIDER;

    if(remains === 0) {
        countMultiplicity++;
        summ += i
    }
}

alert(`Количесво чисел кратных 6 равно ${countMultiplicity}. Сумма этих чисел равна ${summ}`)

const MAX_COUNT_ATTEMP = 2;
let min = 0;
let max = 100;
let attemp = 0;
do {
    number = min + (max - min) / 2;
    let answer = confirm('Ваше число больше числа' + number);
    attemp++;
    if (answer) {
        min = number;
    } else {
        max = number;
    }
} while ((max - min > 1) || attemp < MAX_COUNT_ATTEMP);
alert('Результат'+ ~~(max))