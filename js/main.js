// Enter player names

var p1 = {score: 0, name: '', board: $('#player-one-score'), takeTurn: false}
var p2 = {score: 0, name: '', board: $('#player-two-score'), takeTurn: false}
// var players = {p1, p2}
var currentPlayer = p1 
var switchPlayer = p2

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
        $('.form-bar').fadeOut('fast');
        $('#play-game').fadeIn(2700);
    }
})

// $('.form-bar').hide(); // Remove this line to show the form

// Start game

var newGame = $('#play-game')
newGame.on('click', function() {
    // Hide Start Button
    newGame.hide('#play-game')
    // Timer Starts
    var flyBuzzing = new Audio ('sounds/fly_buzzing.wav')
    // credit to soundbible.com for audio (http://soundbible.com/396-Fly-Buzzing.html)
    flyBuzzing.loop = true
    flyBuzzing.play()
    currentPlayer.takeTurn = true;
    var counter = 10
    var timer = document.querySelector('.timer')
    var theIntervalId = setInterval(fn, 1000)
    function fn(){
        if (counter === 0) { 
            clearInterval(theIntervalId)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Done')
            flyBuzzing.pause()
            theFly.hide('fast');
            currentPlayer = p2
            newGame.show('#play-game').text(currentPlayer.name + "'s Turn")
            // if p1 and p2 have both clicked, check score and announce winner
        } else {
            counter = (counter - 1)
            timer.innerHTML = "Timer: " + counter
            console.log('Time is Ticking')
        }
    }
                // if (p2.takeTurn = true) {
                //     findWinner();
                // }

    // Make Fly Appear

    var theFly = $('<img src="images/fly.gif">')
    // Source for fly image (https://atomic8497.deviantart.com/art/Fly-651283182)
    $("#game-container").append(theFly)
    function showFly() {
        // $(this).show();
        theFly.css ({
            left: Math.random() * 550,
            top: Math.random() * 550,
        })
        theFly.fadeIn(1000)
        setInterval(function (){
            // theFly.animate ({
            //     left: Math.random() * 550,
            //     top: Math.random() * 550,
            // }, 1500)
        }, 1500)
    } 
    showFly();

    // If Fly is 'Swatted', Remove from Board, Respawn, 
    // and Add 1 pt to Current Player's Score
    
    $(theFly).click(function() {
        console.log('fly has been swatted')
        var flySplat = new Audio('sounds/fly_splat.mp3')
        // credit to soundbible.com for audio (http://soundbible.com/tags-splat.html)
        flySplat.play()
        currentPlayer.score = currentPlayer.score + 1;
        console.log(currentPlayer.score)
        currentPlayer.board.text(currentPlayer.score)
        console.log('score added to player scoreboard')
        $(this).hide();
            if (counter != 0) {
                showFly();
                console.log('new fly appeared')
            }
    })  

    // Declare winner of the game

    var winner = ''
    function findWinner() {
        if ((p1.score > p2.score) && (p2.takeTurn = true)) {
            winner = p1.name;
            alert (p1.name + " is the Winner!");
            resetGame(); // <--- Not Defined Yet
        } else if (((p1.score > 0) == (p2.score > 0)) && (p2.takeTurn = true)) {
            prompt ("It's a Tie! Play again!");
            resetGame();
        } else { 
            winner = p2.name;
            alert (p2.name + " is the Winner!");
            resetGame();
        var winnerFound = $('<div>').addClass('winner').text('WINNER')
        $("#game-container").append(winner).text(winner + "is the Winner!")
        winner.fadeIn(1000)
        }
    }
})

// var timeUp = setTimeout(theTimer, 30000);
//     function theTimer() {
//         switchPlayer();

// Restart game

// function resetGame () {
//     newGame.show('#play-game').text("Play Again?!")
//     $theForm = ''
//     theFly = ''
//     p1 = ''
//     p2 = '' 
// }
