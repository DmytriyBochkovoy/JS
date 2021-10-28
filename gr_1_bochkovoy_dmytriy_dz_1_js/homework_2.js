let roadLength = prompt('Введите расстояние которое вы проехали в километрах');

let diameter = prompt('Введите диаметр колеса автомобиля в дюймах');

function turnovers(N, D) {
    let distance = Number(N) * 1000; //переводим в метры
    let circumference = (Number(D) * 0.025) * Math.PI; // переводим дюймы в метры и получаем длину окружности
    return Math.floor(distance / circumference); // получаем количество оборотов колеса 
}

if (isNaN(Number(roadLength)) || isNaN(Number(diameter))) {
    alert(`Параметры не верны! Введите численное значение.`);
    console.error('incorrect value');
} else {
    alert(`Ваше колесо сделало ${turnovers(roadLength, diameter)} об.`);
    alert(`Суммарное значение оборотов всех колес ${turnovers(roadLength, diameter) * 4} об.`);
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