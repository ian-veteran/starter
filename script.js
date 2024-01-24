'use strict';
const secretNumber=Math.trunc(Math.random()*20)+1;
let score = 0;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        document.querySelector('.message').textContent = 'No Number'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number mkuu';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High';
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = 'Too low';
    }

});