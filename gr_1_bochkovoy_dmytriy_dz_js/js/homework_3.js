
let numberDays = prompt('Введите желаемое количество дней', 0)

let lastNumber = Number(numberDays.slice(-1));

let lastTwoNumber = Number(numberDays.slice(-2));

if (10 < lastTwoNumber && lastTwoNumber <= 14 ) {
    alert(`${numberDays} дней`);
} else if (lastNumber === 1) {
    alert(`${numberDays} день`);
} else if (1 < lastNumber && lastNumber <= 4) {
    alert(`${numberDays} дня`);
} else if (4 < lastNumber && lastNumber <= 9 || lastNumber === 0) {
    alert(`${numberDays} дней`);
} 