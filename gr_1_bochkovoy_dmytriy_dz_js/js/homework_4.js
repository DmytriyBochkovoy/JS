// ...Определение min значения в массиве

let array = [ 748, 764, 784, 757, 750, ];

function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin(array))

// ...Создание массива с четными числами

let firstNum = 500;
let lastNum = 888;

let arrayNum = [];

for (let i = firstNum; i <= lastNum; i++) {
    if (i % 2 === 0) {
        arrayNum.push(i);
    }
}

console.log(arrayNum)

// ...Изменение слова в обратном порядке

let word = 'десмодромный';

function reversibleStr(str) {
    let arr = str.split('');
    arr.reverse()
    return arr.join('');
}

console.log(reversibleStr(word));