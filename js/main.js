console.log('it loaded...')

// Enter player names
var p1 = {score: 0, name: '', board: $('player-one-score')}
var p2 = {score: 0, name: '', board: $('player-two-score')}
var currentPlayer = p1 
var switchPlayer = p2

// var p1ScoreBoard = document.getElementById('player-one-score')

// Function to retrieve names and add to board

function getNames() {
    p1.name = document.getElementById('p1-name').value;
    document.getElementById('p1-score-text').innerText = p1.name + ":" + 0;
    console.log(p1.name)
    p2.name = document.getElementById('p2-name').value;
    document.getElementById('p2-score-text').innerText = p2.name + ":" + 0;
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
        event.preventDefault()
        getNames();
        console.log('Names Added')
        $('.form-bar').fadeOut(1000);
        $('#play-game').fadeIn(1000);
    }
})
// $('.form-bar').hide(); // Remove this line to show the form

// Start game

var newGame = $('#play-game')
newGame.on('click', function() {
    // Remove Start Button
    newGame.hide('#play-game')
    // Timer Starts
    var counter = 30
    var timer = document.querySelector('.timer')
    var theIntervalId = setInterval(fn, 1000)
    function fn(){
        if (counter === 0) { 
            clearInterval(theIntervalId)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Done')
            theFly.hide('fast');
            newGame.show('#play-game')
            currentPlayer = p2
        } else {
            counter = (counter - 1)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Ticking')
        }
    }
    // Make Fly Appear
    var theFly = $('<div>').addClass('new-fly').text('FLY')
    theFly.css ({
        left: Math.random() * 550,
        top: Math.random() * 550,})
    $("body").append(theFly)
    function showFly() {
        theFly.css ({
            left: Math.random() * 550,
            top: Math.random() * 550,})
        $("body").append(theFly) 
        theFly.fadeIn(1000)
        setInterval(function (){
            // theFly.animate ({
            //     left: Math.random() * 550,
            //     top: Math.random() * 550,
            // }, 1000)
        }, 1000)
    } 
    showFly();
    // If Fly is swatted, remove from board, respawn, and add 1 point to score
    $(theFly).click(function() {
        console.log('fly has been swatted')
        console.log(currentPlayer.score)
        currentPlayer.score = currentPlayer.score + 1;
        console.log(currentPlayer.score)
        currentPlayer:board.innerText = currentPlayer.score
        console.log('score added to player')
        $(this).hide();
        showFly();
        console.log('new fly appeared')
        })

    var theWinner = 
})

// var timeUp = setTimeout(theTimer, 30000);
//     function theTimer() {
//         switchPlayer();

// Keep track of score

// var flyIsSwatted = false;
// function clickSpotter() {
//     flyIsSwatted = true;
//   }
//   var $fly = document.getElementsByClassName('new-fly');
//   $fly.on('click', clickSpotter); 

// if (flyIsSwatted = true) { 
// p1Score.innerHTML += p1Score + 1;
// document.getElementById('player-one-score').innerHTML = p1Score;
// } 

// Declare winner of the game

// var winner = ''

// var winner = $('<div>').addClass('winner').text('WINNER')
// $("body").append(winner)
// winner.fadeIn(2000)
// if (p1Score.innerHTML > p2Score.innerHTML){
//    return playerOneName
// if (p2Score.innerHTML > p1Score.innerHTML){ 
//     return playerTwoName
// } else {
//     prompt ("It's a Tie!")
// }


// Restart game


