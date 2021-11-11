let objDiv = {};
let countSquare = 10;

setTimeout(() => {
    for (let i = 1; i <= countSquare; i++) {
        objDiv['div'+i] = document.createElement('div')
        objDiv['div'+i].setAttribute( 'style', 'background: rgb(0, 0, 255); width: 50px; height: 50px; margin-bottom: 10px;')
        document.body.append(objDiv['div'+i])
    }
}, 3000);

setTimeout(() => {
    for (let key in objDiv) {
        objDiv[key].setAttribute('style', 'background: rgb(0, 128, 0); width: 100px; height: 100px; margin-bottom: 10px;')
    }
}, 6000);

setTimeout(() => {
    for (let i = 1; i <= countSquare; i++) {
        if (i % 3 == 0) {
            objDiv['div'+i].setAttribute( 'style', 'background: rgb(255, 0, 0); width: 100px; height: 100px; margin-bottom: 10px;')
        } else {
            objDiv['div'+i].setAttribute( 'style', 'background: rgb(255, 255, 0); width: 100px; height: 100px; margin-bottom: 10px;')
        }
    }
}, 9000);

setTimeout(() => {
    for (let key in objDiv) {
        objDiv[key].remove()
    }
}, 12000);

setTimeout(() => {
    document.body.setAttribute('style', 'background: rgb(7, 7, 7);')
}, 15000);