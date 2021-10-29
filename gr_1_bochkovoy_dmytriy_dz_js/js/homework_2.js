const kilometersInMeters = 1000;
const inchesInInMeters = 0.025;

let N = prompt('Введите расстояние которое вы проехали в километрах');
let D = prompt('Введите диаметр колеса автомобиля в дюймах');

N = Number(N);
D = Number(D);

if (isNaN(N) || isNaN(D)) {
    alert(`Параметры не верны! Введите численное значение.`);
    console.error('incorrect value');
} else {
    N = Number(N) * 1000; 
    D = (Number(D) * 0.025) * Math.PI; 

    alert(`Ваше колесо сделало ${Math.floor(N / D)} об.`);
    alert(`Суммарное значение оборотов всех колес ${Math.floor(N / D) * 4} об.`);
}

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