'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

const displayNewNumber = function (number) {
  document.querySelector('.number').style.width = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there ia no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // when player win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    /* CSS trg Javascript */
    // document.querySelector('body').style.backgroundColor = '#60b347';
    displayBody('#60b347');

    // document.querySelector('.number').style.width = '30rem';
    displayNewNumber('30rem');
    /**/

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;

      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');

      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // document.querySelector('.score').textContent = score;
  displayScore(score);

  // document.querySelector('.number').textContent = '?';
  displayNumber('?');

  document.querySelector('.guess').value = '';

  // document.querySelector('body').style.backgroundColor = '#222';
  displayBody('#222');

  // document.querySelector('.number').style.width = '15rem';
  displayNewNumber('15rem');
});
