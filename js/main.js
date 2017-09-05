console.log('it loaded...')

// Enter player names

var playerOneName = $('')
var playerTwoName = $('')
var p1Score = 0
var p2Score = 0

function getNames() {
    var playerOneName = document.getElementById('p1-name').value;
    document.getElementById('p1-score-text').innerText = playerOneName + ":";
    console.log(playerOneName)
    var playerTwoName = document.getElementById('p2-name').value;
    document.getElementById('p2-score-text').innerText = playerTwoName + ":";
    console.log(playerTwoName)
}

var $theForm = $('form')
$theForm.on('submit', function(event){
    if (document.getElementById('p1-name').value = '' || document.getElementById('p2-name').value === ''){
        confirm('Enter your Name!')
        console.log('No Names Added')
    } else { 
        event.preventDefault()
        getNames();
        console.log('Names Added')
        $('.form-bar').fadeOut(2000);
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
            }, 1000)
        }, 1000)
    $(theFly).click(function() {
        console.log('fly has been swatted')
        // p1Score.innerHTML += scoreP1;
        $(this).remove();
        return $(theFly);
        console.log('new fly appeared')
        })
    // if (theFly === '') {    
    // $('body').append(newGame.button)
    // } 
})

// Timer for the game

// var timeUp = setTimeout(theTimer, 30000);

//     function theTimer() {
//         switchPlayer();
//     } 
    
//     clearTimeout(timeUp)

// Declare winner of the game

// var winner 

// if (p1Score.innerHTML > p2Score.innerHTML){
//     prompt('Player One is the Winner!')
// if (p2Score.innerHTML > p1Score.innerHTML){ 
//     prompt('Player Two is the Winner!');
// }

// p1Score.innerHTML += score1;

// Restart game
