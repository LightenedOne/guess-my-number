'use strict';

let checkButton = document.querySelector(".check");
let guessInput = document.querySelector(".guess");
let messageDisplay = document.querySelector(".message");
let againButton = document.querySelector(".again");
let score = 20;
let highScore = 0;
let scoreDisplay = document.querySelector(".score");
let highScoreDisplay = document.querySelector(".highscore");
let body = document.querySelector("body");
let guessedNumberDisplay = document.querySelector(".number");

let secretNumber = calcRandomNumber();

checkButton.addEventListener("click", checkScore);
againButton.addEventListener("click", resetGame);

function checkScore () {
    const guess = Number(guessInput.value);
    console.log(typeof guess);

    if(!guess)
        messageDisplay.textContent = '⛔ No number!';
    else if(guess === secretNumber)
        winGame();
        
    else if(guess > secretNumber) { 
        messageDisplay.textContent = '📈 Too high!';
        decreaseScore();
    }
        
    else {
        messageDisplay.textContent = '📉 Too low!';
        decreaseScore();
    }
        
}

function resetGame() {
    checkButton.addEventListener("click", checkScore);
    secretNumber = calcRandomNumber();
    messageDisplay.textContent = 'Start guessing...';
    guessInput.value = "";
    againButton.textContent = "Again!";
    score = 20;
    scoreDisplay.textContent = 20;
    body.style.backgroundColor = "#222";
    guessedNumberDisplay.style.width = "15rem";
    guessedNumberDisplay.textContent = "?";
}

function calcRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function decreaseScore() {
    if(score === 1)
        loseGame();
    else {
        score--;
        scoreDisplay.textContent = score;
    }
    
}

function updateHighScore() {
    if(score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
    } 
}

function winGame() {
    messageDisplay.textContent = '🎉 You were correct!';
    updateHighScore();
    checkButton.removeEventListener("click", checkScore);
    body.style.backgroundColor = "#60b347";
    guessedNumberDisplay.style.width = "30rem";
    guessedNumberDisplay.textContent = secretNumber;
}

function loseGame() {
    score = 0;
    scoreDisplay.textContent = score;
    messageDisplay.textContent = 'You lost!';
    againButton.textContent = 'Try again?';
    checkButton.removeEventListener("click", checkScore);
    guessedNumberDisplay.style.width = "30rem";
    guessedNumberDisplay.textContent = secretNumber;
    
}

