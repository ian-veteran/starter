'use strict';
const secretNumber=Math.trunc(Math.random()*20)+1;
let score = 0;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        displayMessage('No Number');
    } else if (guess === secretNumber){
        displayMessage('Correct Number mkuu');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

    } else if (guess > secretNumber){
        displayMessage('Too High');
    } else if (guess < secretNumber){
        displayMessage('Too low');
    }

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    
  
});
