$(document).ready(function() {
    $('body').append($('<div>').addClass('rectangle-1'));
    $('body').append($('<div>').addClass('rectangle-2'));

    $('.rectangle-1').css({
        'background': 'red',
        'width': '200px', 
        'height': '100px',
        'margin': '10px',
    })
    $('.rectangle-2').css({
        'background': 'green',
        'width': '300px', 
        'height': '150px',
    })

    $('.rectangle-1').mouseover(function() {
        console.log($('.rectangle-1').css(['width', 'height']));
    })
    $('.rectangle-2').mouseover(function() {
        console.log($('.rectangle-2').css(['width', 'height']));
    })

    $('.rectangle-1').click(function() {
        alert('Красный');
    })
    $('.rectangle-2').click(function() {
        alert('Зеленый');
    })
})