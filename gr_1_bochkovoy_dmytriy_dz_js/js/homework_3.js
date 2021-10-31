const DIVIDER = 6;

let one = prompt('Введите первое число', 0);
let two = prompt('Введите второе число', 0);

let countMultiplicity = 0;
let summ = 0;

one = +one;
two = +two;

for (let i = one; i <= two; i++) {
    let remains =  i % DIVIDER;

    if(remains === 0) {
        countMultiplicity++;
        summ += i
    }
}

alert(`Количесво чисел кратных 6 равно ${countMultiplicity}. Сумма этих чисел равна ${summ}`)