console.log('it loaded...')

var newGame = $('#play-game')
newGame.on('click', function() {
    newGame.remove('#play-game')
    newGame.remove('#game-title')
    var theFly = $('<div>').addClass('new-fly').text('FLY')
    theFly.css ({
        left: Math.random() * 550,
        top: Math.random() * 550,})
    $("body").append(theFly)
    theFly.fadeIn(1000)
        console.log($(theFly).width())
        setInterval(function (){
            theFly.animate ({
                left: Math.random() * 550,
                top: Math.random() * 550,
                borderRadius: Math.random() * 10,
            }, 750)
        }, 750)
        $('body').on('click', 'new-fly', function(){
            $(this).remove().fadeOut('slow', function(){
                $('body').append(newGame)
            })
    })
})
