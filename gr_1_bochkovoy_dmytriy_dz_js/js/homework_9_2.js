$(document).ready(function() {
    let countSquare = 100; // на 1000 подвисает

    $('body').css({
        'display': 'flex',
        'flexWrap': 'wrap',
    })

    setTimeout(function() {
        for (let i = 1; i <= countSquare; i++) {
           $('body').append($('<div>').addClass('square-' + i));
           $(`.square-${i}`).css({
            'backgroundColor': 'skyblue',
            'width': '70px',
            'height': '70px',
            'margin': '10px',
        })
        }
        setTimeout(function() {
            for (let i = 1; i <= countSquare; i++) {
                $(`.square-${i}`).css({
                    'backgroundColor': 'purple',
                    'width': '100px',
                    'height': '100px',
                })
            }
            setTimeout(function() {
                for (let i = 1; i <= countSquare; i++) {
                    $(`.square-${i}`).text(`${i}`)
                }
                setTimeout(function() {
                    for (let i = 1; i <= countSquare; i++) {
                        if (i % 3 == 0) {
                            $(`.square-${i}`).addClass('square-color-red');
                            $('.square-color-red').css({
                                'backgroundColor': 'red'
                            })
                        } else {
                            for (let i = 15; i <= countSquare; i += 15) {
                                $(`.square-${i}`).addClass('square-color-hacks')
                                $('.square-color-hacks').css({
                                    'backgroundColor': 'Transparent',
                                    'width': '0px',
                                    'height': '0px',
                                    'border': '50px solid Transparent', 
                                    'borderRight': '50px solid #806b2a', 
                                    'borderBottom': '50px solid #806b2a',
                                })
                            }
                        }
                    }
                    setTimeout(function() {
                        $('.square-color-red').css({
                            'backgroundColor': 'purple'
                        })
                        $('.square-color-hacks').css({
                            'backgroundColor': 'Transparent',
                            'width': '0px',
                            'height': '0px',
                            'border': '50px solid Transparent', 
                            'borderRight': '50px solid #806b2a', 
                            'borderBottom': '50px solid #806b2a',
                        })
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
})