'use strict';

////////////////////////////////////////////////////////////////////////
//                          variables global                          //
////////////////////////////////////////////////////////////////////////

let inputMaxScore =  document.getElementsByClassName('input-max-score')[0];
let valueInputMaxScore =  document.getElementsByClassName('input-max-score')[0].value;
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
        break;
      case 'player2':
        characPlayer2.classList.remove(`winner-player2--hidden`);
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

////////////////////////////////////////////////////////////////////////
//                               event                                //
////////////////////////////////////////////////////////////////////////


  inputMaxScore.onkeypress = function(event) {
    if (event.which == 13 || event.keyCode == 13) {
      maxScore.innerHTML = document.getElementsByClassName('input-max-score')[0].value;
    }
  };

  buttonPlayer1.onclick = clickButtonPlayer1;
  buttonPlayer2.onclick = clickButtonPlayer2;


buttonReset.onclick = function() {

  buttonPlayer1.onclick = clickButtonPlayer1;
  buttonPlayer2.onclick = clickButtonPlayer2;

  scorePlayer1 = 0;
  scorePlayer2 = 0;

  document.getElementsByClassName('score-player1')[0].innerHTML = scorePlayer1; 
  document.getElementsByClassName('score-player2')[0].innerHTML = scorePlayer2; 

  buttonPlayer1.classList.remove("is-disabled");
  buttonPlayer2.classList.remove("is-disabled");

  characPlayer1.classList.add(`winner-player1--hidden`);
  characPlayer2.classList.add(`winner-player2--hidden`);
  winnerText.style.opacity="0";

};
