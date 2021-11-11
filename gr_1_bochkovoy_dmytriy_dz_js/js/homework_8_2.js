let div1 = document.createElement('div');
let div2 = document.createElement('div');

let arrrColorur = [
    'width: 200px; height: 100px;',
    'width: 300px; height: 150px;',
]

div1.setAttribute( 'style', `background: red; ${arrrColorur[0]} margin-bottom: 10px;`);
div2.setAttribute( 'style', `background: green; ${arrrColorur[1]} margin-bottom: 10px;`);

document.body.append(div1, div2)

div1.addEventListener('mouseover', (event) => {
    console.log(arrrColorur[0])
})
div2.addEventListener('mouseover', (event) => {
    console.log(arrrColorur[1])
})

div1.addEventListener('click', (event) => {
    alert('Цвет прямоугольника красный')
})
div2.addEventListener('click', (event) => {
    alert('Цвет прямоугольника зеленый')
})

