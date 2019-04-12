'use strict';

////////////////////////////////////////////////////////////////////////
//                          variables global                          //
////////////////////////////////////////////////////////////////////////

let inputMaxScore =  document.getElementsByClassName('input-max-score')[0];
let maxScore = document.getElementsByClassName('max-score')[0];
let buttonPlayer1 =  document.getElementsByClassName('button-player')[0];
let buttonPlayer2 =  document.getElementsByClassName('button-player')[1];
let buttonReset = document.getElementsByClassName('button-reset')[0];
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let winnerText = document.getElementsByClassName('p-winner')[0];
let characPlayer1 = document.getElementsByClassName('winner-player1')[0];
let characPlayer2 = document.getElementsByClassName('winner-player2')[0];

////////////////////////////////////////////////////////////////////////
//                              function                              //
////////////////////////////////////////////////////////////////////////

function verifyWinner(score, player) {
  if (score == Number(maxScore.innerHTML)) {
    switch (player) {
      case 'player1':
        characPlayer1.classList.remove(`winner-player1--hidden`);
        document.getElementsByClassName('score-player1')[0].classList.add('nes-text', 'is-success');
        document.getElementsByClassName('score-player2')[0].classList.add('nes-text', 'is-error');
        break;
      case 'player2':
        characPlayer2.classList.remove(`winner-player2--hidden`);
        document.getElementsByClassName('score-player2')[0].classList.add('is-success');
        document.getElementsByClassName('score-player1')[0].classList.add('is-error');
        break;
    }
    winnerText.style.opacity="1";
    stopGame();
  } 
}

function stopGame() {
  buttonPlayer1.classList.add("is-disabled");
  buttonPlayer2.classList.add("is-disabled");
  buttonPlayer1.onclick = "";
  buttonPlayer2.onclick = "";
}

function clickButtonPlayer1() {
  scorePlayer1++;
  verifyWinner(scorePlayer1, "player1");
  document.getElementsByClassName('score-player1')[0].innerHTML = scorePlayer1; 
}

function clickButtonPlayer2() {
  scorePlayer2++;
  verifyWinner(scorePlayer2, "player2");
  document.getElementsByClassName('score-player2')[0].innerHTML = scorePlayer2; 
}

function resetAll() {

  //reset onclick for button
  buttonPlayer1.onclick = clickButtonPlayer1;
  buttonPlayer2.onclick = clickButtonPlayer2;

  //reset score player
  scorePlayer1 = 0;
  scorePlayer2 = 0;

  //reset value input score max and score max
  maxScore.innerHTML = "5";

  //reset score player in html
  document.getElementsByClassName('score-player1')[0].innerHTML = scorePlayer1; 
  document.getElementsByClassName('score-player2')[0].innerHTML = scorePlayer2; 

  //reset button player 
  buttonPlayer1.classList.remove("is-disabled");
  buttonPlayer2.classList.remove("is-disabled");

  //reset winner character
  characPlayer1.classList.add(`winner-player1--hidden`);
  characPlayer2.classList.add(`winner-player2--hidden`);
  winnerText.style.opacity="0";

  //reset color in score player 
  document.getElementsByClassName('score-player1')[0].classList.remove('is-success');
  document.getElementsByClassName('score-player1')[0].classList.remove('is-error');
  document.getElementsByClassName('score-player2')[0].classList.remove('is-success');
  document.getElementsByClassName('score-player2')[0].classList.remove('is-error');
}

////////////////////////////////////////////////////////////////////////
//                               event                                //
////////////////////////////////////////////////////////////////////////


  inputMaxScore.onkeypress = function(event) {
    if (event.which == 13 || event.keyCode == 13) {
      let valueInputMaxScore = document.getElementsByClassName('input-max-score')[0].value;
      maxScore.innerHTML = valueInputMaxScore;
      resetAll();
    }
  };

buttonPlayer1.onclick = clickButtonPlayer1;
buttonPlayer2.onclick = clickButtonPlayer2;

buttonReset.onclick = resetAll;
