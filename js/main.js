console.log('it loaded...')

// Enter player names

var $playerName = []

var $theForm = $('.form-bar')
$theForm.on('submit', function(event){
    event.preventDefault()
    if ($playerName.val() === ''){
        confirm("Enter your Name!")
    } else { 

    }
})

// Start game

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
    $(theFly).click(function() {
        console.log('fly has been swatted')
        p1Score.innerHTML += scoreP1;
        $(this).remove();
        })
    if (theFly === '') {    
    $('body').append(newGame.button)
    } 
})

// Timer for the game

var timeUp = setTimeout(theTimer, 30000);

    function theTimer() {
        switchPlayer();
    } 
    
    clearTimeout(timeUp)

// Declare winner of the game

var winner 

if (p1Score.innerHTML > p2Score.innerHTML){
    prompt('Player One is the Winner!')
if (p2Score.innerHTML > p1Score.innerHTML){ 
    prompt('Player Two is the Winner!');
}

p1Score.innerHTML += score1;

// Restart game
