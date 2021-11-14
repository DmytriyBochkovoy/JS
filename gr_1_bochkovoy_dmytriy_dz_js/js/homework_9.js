let objDiv = {};
let countSquare = 1000;

document.body.setAttribute('style', 'display: flex; display: flex; flex-shrink: initial; flex-wrap: wrap;')

setTimeout(() => {
    for (let i = 1; i <= countSquare; i++) {
        objDiv['div'+i] = document.createElement('div')
        objDiv['div'+i].setAttribute( 'style', 'background: rgb(0, 0, 255); width: 70px; height: 70px; margin: 10px;')
        document.body.append(objDiv['div'+i])
    }
    setTimeout(() => {
        for (let key in objDiv) {
            objDiv[key].setAttribute('style', 'background: purple; width: 100px; height: 100px; margin: 10px;')
        }
        setTimeout(() => {
            for (let i = 1; i <= countSquare; i++) {
                objDiv['div'+i].innerHTML = `${i}`;
            }
            setTimeout(() => {
                for (let i = 1; i <= countSquare; i++) {
                    if (i % 3 == 0) {
                        objDiv['div'+i].setAttribute( 'style', 'background: rgb(255, 0, 0); width: 100px; height: 100px; margin: 10px;')
                    } else {
                        for (let i = 15; i <= countSquare; i += 15) {
                            objDiv['div'+i].setAttribute( 'style','margin: 10px; border: 50px solid transparent; border-right: 50px solid #806b2a; border-bottom: 50px solid #806b2a;')
                        }
                    }
                }
                setTimeout(() => {
                    for (let i = 1; i <= countSquare; i++) {
                        if (i % 3 == 0) {
                            objDiv['div'+i].remove()
                        } else {
                            for (let i = 15; i <= countSquare; i += 15) {
                                objDiv['div'+i].setAttribute( 'style','margin: 10px; border: 50px solid transparent; border-right: 50px solid #806b2a; border-bottom: 50px solid #806b2a;')
                            }
                        }
                    }
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);