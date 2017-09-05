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
    newGame.remove('h1')
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
    // if (theFly) {    
    // $('body').append(newGame.button)
    // } 
})

// Timer for the game

var counter = 30
var timer = document.querySelector('.timer')
function fn(){
    if (counter === 0){
        clearInterval(theIntervalId)
        timer.innerHTML = "Timer: " + counter
        console.log('Time is Done')
    } else {
        counter = (counter - 1)
        timer.innerHTML = "Timer: " + counter
        console.log('Time is Ticking')
    }
}
var theIntervalId = setInterval(fn, 1000)

// var timeUp = setTimeout(theTimer, 30000);

//     function theTimer() {
//         switchPlayer();
//     } 
//     clearTimeout(timeUp)



// Keep track of score

var flyIsSwatted = false;
function clickSpotter(){
    flyIsSwatted = true;
  }
  var fly = document.getElementsByClassName('new-fly');
  fly.addEventListener('click', clickSpotter); 

if (flyIsSwatted = true) { 
p1Score.innerHTML += score1;
document.getElementById('player-one-score').innerHTML = p1Score;
} 

// Declare winner of the game

// var winner = ''

// if (p1Score.innerHTML > p2Score.innerHTML){
//     prompt('Player One is the Winner!')
// if (p2Score.innerHTML > p1Score.innerHTML){ 
//     prompt('Player Two is the Winner!');
// }


// Restart game


