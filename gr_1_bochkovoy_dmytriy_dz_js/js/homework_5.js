// ...Задание №1
function getOrder(string) {
    if (typeof(string) !== 'string') {
        return 
    } else {
        let arr = string.split(' ').sort().join(' ');
        return arr
    }
   
}
console.log(getOrder('ноты акустика гитара'));

// ...Задание № 2-3

let array = [3, 4, 65, 48, 32, 91];

function getRandom(arr) {
    let indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom]
}

function getMax(arr) {
    return Math.max(...arr)
}

console.log(`${getRandom(array)} рандомное значение`);
console.log(`${getMax(array)} max значение`);

// ...Задание №4

let points = {
    'Вася': 200,
    'Петя': 300,
    'Даша': 250,
    'Андрей': 150,
    'Сергей': 450,
};

let arrayRating = Object.values(points);
let sum = 0;
let maxRating  = Math.max(...arrayRating);
let minRating = Math.min(...arrayRating);

function computation(obj) {
    if (typeof(obj) !== 'object') {
        return console.error('fatal error')
    }
    for (let i = 0; i <= arrayRating.length - 1; i++) {
        sum += arrayRating[i];
    }
    return `Сумма всех балов ${sum}`;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

console.log(computation(points));
console.log(`${getKeyByValue(points, maxRating)} - имеет (${maxRating}) max количество балов, 
${getKeyByValue(points, minRating)} имеет (${minRating}) min количество балов`)
