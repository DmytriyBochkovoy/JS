let human = {
    name: 'Дмитрий',
    surname: 'Бочковой',
    age: 25,
    height: 175,
    weight: 68,
    sex: 'мужской',
    profession: 'Инженер-конструктор',
}

for (key in human) {
    alert(human[key])
}