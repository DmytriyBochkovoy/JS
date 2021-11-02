let lastAnswer = null;
let answers = [];
let players = [];

let amountPlayers = prompt('Введите количество игроков')

if (amountPlayers <= 1) {
    alert('Неверное количество игроков')
    amountPlayers = prompt('Введите количество игроков больше или равное 2')
} else {
    for (let i = 1; i <= amountPlayers; i++) {
        players.push({
            name: null,
            score: 0,
            id: i,
            isLose: false,
            hasTurn: false,
        })
    }
}

for (let i = 0; i <= amountPlayers; i++) {
    let playersId = players[i].id;
    players[i].name = prompt(`Игрок ${playersId} введите имя`);
}


