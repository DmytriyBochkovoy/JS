const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

let firstDate = new Date(2021, 10, 8);
let lastDate = new Date(2021, 10, 20);

function getCountWorkDays(date1, date2) {
    let firstDate = date1 < date2 ? new Date(date1) : new Date(date2);
    let lastDate = date1 < date2 ? new Date(date2) : new Date(date1);
    let countWorkDays = 0;

    if (date1 instanceof Date && date2 instanceof Date) {
        while(firstDate < lastDate) {
            firstDate.setDate(firstDate.getDate() + 1);
            let day = firstDate.getDay();
            if (day > 0 && day < 6 ) {
                countWorkDays++;
            }
        }
    } 
    return --countWorkDays;    
}

console.log(getCountWorkDays(firstDate, lastDate))

let newYeаr = new Date(2021, 11, 31);

function getCountDays(date) {
    let countDays = null;

    date ? date === undefined : date = new Date();
    
    if (date instanceof Date && newYeаr instanceof Date) {
        countDays = Math.floor(Math.abs(date.getTime() - newYeаr.getTime()) / MS_DAY);
    }
    return countDays;
}

console.log(`${getCountDays(firstDate)}`)

let daysOfTheWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];

function getDay(date) {
    if (date instanceof Date) {
        return `${daysOfTheWeek[date.getDay()]}`;
    }
}

console.log(getDay(firstDate));