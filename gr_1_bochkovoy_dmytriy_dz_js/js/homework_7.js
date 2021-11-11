function Calculation(options) {
    this.a = options.a;
    this.b = options.b;
    this.matheOperator = options.matheOperator;

    let date = new Date()
    let nameMatheOperator = ['Сложение', 'Вычитание', 'Умножение', 'Деление']


    this.addition = function() {
        return this.a + this.b;
    }
    this.subtraction = function() {
        return this.a - this.b;
    }
    this.multiplication = function() {
        return this.a * this.b;
    }
    this.division = function() {
        return this.a / this.b;
    }


    if (this.matheOperator === '+') {
        this.addition = this.a + this.b;
        getAddResult (this.addition, nameMatheOperator[0], this.a, this.b)
    } else if (this.matheOperator === '-') {
        this.subtraction = this.a - this.b;
        getAddResult (this.subtraction, nameMatheOperator[1], this.a, this.b)
    } else if (this.matheOperator === '*') {
        this.multiplication = this.a * this.b;
        getAddResult (this.multiplication, nameMatheOperator[2], this.a, this.b)
    } else if (this.matheOperator === '/') {
        this.division = this.a / this.b;
        getAddResult (this.division, nameMatheOperator[3], this.a, this.b)
    } else {
        console.error('Введены неверные данные')
    }

    function getAddResult (result, array, a, b) {
        let dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        let timeString = `${date.getHours()}:${date.getMinutes()}`
        computationHistory.push(`Выполнены вычисления(${dateString} ${timeString}) ${array} = ${result} (${a}, ${b})`);
    } //   Формирует строку с параметрами математической операции и добавляет ее в массив выполненных операций.      
}

let computationHistory = []; //  Память выполненных операций.
let maxCountOperations = 3; //  Ограничивает количество ввода. 
let maxCountSavedOperations = 3; //  Ограничивает количество сохраненных операций 
let i = 1;

while (i <= maxCountOperations) {
    i++;
    calculator =  new Calculation({
        a: +prompt('Введите первое значение', 0),
        matheOperator: prompt('Выберите математическую операцию  из предложенных (+, -, *, /)'),
        b: +prompt('Введите второе значение', 0),
    });
    if (computationHistory.length = maxCountSavedOperations) { 
        computationHistory.shift(); // Проверка на длину массива, если длинна превысила допустимое значение то удаляется первая выполненная операция. 
    }
}

console.log(computationHistory);
