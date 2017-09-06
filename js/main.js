console.log('it loaded...')

// Enter player names

var p1 = {score: 0, name: '', board: $('#player-one-score')}
var p2 = {score: 0, name: '', board: $('#player-two-score')}
// var players = {p1, p2}
var currentPlayer = p1 
var switchPlayer = p2

// var p1ScoreBoard = document.getElementById('player-one-score')

// Function to retrieve names and add to board

function getNames() {
    p1.name = document.getElementById('p1-name').value;
    document.getElementById('player-one-name').innerText = p1.name + ": ";
    console.log(p1.name)
    p2.name = document.getElementById('p2-name').value;
    document.getElementById('player-two-name').innerText = p2.name + ": ";
    console.log(p2.name)
}

// Input form used to enter names

    var $theForm = $('form')
    $theForm.on('submit', function(event){
        if (document.getElementById('p1-name').value === '') {
            confirm('Enter your Name!')
            console.log('No Names Added')
        } if (document.getElementById('p2-name').value === '') {
            confirm('Enter your Name!')
            console.log('No Names Added')
        } else { 
            event.preventDefault();
            getNames();
            console.log('Names Added')
            $('.form-bar').fadeOut(1000);
            $('#play-game').fadeIn(3000);
        }
    })
// $('.form-bar').hide(); // Remove this line to show the form

// Start game

var newGame = $('#play-game')
newGame.on('click', function() {
    // Remove Start Button
    newGame.hide('#play-game')
    // Timer Starts
    var flyBuzzing = new Audio ('sounds/fly_buzzing.wav')
    // credit to soundbible.com for audio (http://soundbible.com/396-Fly-Buzzing.html)
    flyBuzzing.loop = true
    flyBuzzing.play()
    var counter = 5
    var timer = document.querySelector('.timer')
    var theIntervalId = setInterval(fn, 1000)
    function fn(){
        if (counter === 0) { 
            clearInterval(theIntervalId)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Done')
            flyBuzzing.pause()
            theFly.hide('fast');
            newGame.show('#play-game')
            currentPlayer = p2
            // if p1 and p2 have both clicked, check score and announce winner
                // if ([p1.score >= 0] && [p2.score > 0])
                //     findWinner();
                // }
        } else {
            counter = (counter - 1)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Ticking')
        }
    }
    // Make Fly Appear
    var theFly = $('<img src="images/fly.gif">') //$('<div>').addClass('new-fly').text('FLY')
    // Source for fly image (https://atomic8497.deviantart.com/art/Fly-651283182)
    // theFly.css ({
    //     left: Math.random() * 550,
    //     top: Math.random() * 550,
    // })
    $("#game-container").append(theFly)
    function showFly() {
        theFly.css ({
            left: Math.random() * 550,
            top: Math.random() * 550,
        })
        theFly.fadeIn(1000)
        setInterval(function (){
            theFly.animate ({
                left: Math.random() * 550,
                top: Math.random() * 550,
            }, 1000)
        }, 1000)
    } 
    showFly();
    // If Fly is swatted, remove from board, respawn, and add 1 point to score
    $(theFly).click(function() {
        console.log('fly has been swatted')
        var flySplat = new Audio('sounds/fly_splat.mp3')
        // credit to soundbible.com for audio (http://soundbible.com/tags-splat.html)
        flySplat.play()
        console.log(currentPlayer.score)
        currentPlayer.score = currentPlayer.score + 1;
        console.log(currentPlayer.score)
        currentPlayer.board.text(currentPlayer.score) // <---- FIXED!
        console.log('score added to player scoreboard')
        $(this).hide();
        showFly();
        console.log('new fly appeared')
        })

})

// var timeUp = setTimeout(theTimer, 30000);
//     function theTimer() {
//         switchPlayer();

// Declare winner of the game
// var winner = ''
// function findWinner() {
//     if (p1.score > p2.score){
//         alert (p1.name + " is the Winner!")
            // resetGame();
//      if (p2.score > p1.score){ 
//         alert (p2.name + " is the Winner!")
            // resetGame();
//      } else {
//         prompt ("It's a Tie! Play again!")
            // resetGame();
//      }
//      var winner = $('<div>').addClass('winner').text('WINNER')
//      $("body").append(winner)
//      winner.fadeIn(2000)
// }

// Restart game

// function resetGame () {
//     newGame.show('#play-game')
//     p1 = ''
//     p2 = '' 
// }
