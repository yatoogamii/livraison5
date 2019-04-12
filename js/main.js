'use strict';

////////////////////////////////////////////////////////////////////////
//                          variables global                          //
////////////////////////////////////////////////////////////////////////

let inputMaxScore =  document.getElementsByClassName('input-max-score')[0];
let maxScore = document.getElementsByClassName('max-score')[0];
const buttonPlayer1 =  document.getElementsByClassName('button-player')[0];
const buttonPlayer2 =  document.getElementsByClassName('button-player')[1];
let pScorePlayer1 = document.getElementsByClassName('score-player1')[0];
let pScorePlayer2 = document.getElementsByClassName('score-player2')[0];
const buttonReset = document.getElementsByClassName('button-reset')[0];
let scorePlayer1 = 0;
let scorePlayer2 = 0;
const winnerText = document.getElementsByClassName('p-winner')[0];
const characPlayer1 = document.getElementsByClassName('winner-player1')[0];
const characPlayer2 = document.getElementsByClassName('winner-player2')[0];

////////////////////////////////////////////////////////////////////////
//                              function                              //
////////////////////////////////////////////////////////////////////////


  /////////////////////
  //  verify Winner  //
  /////////////////////
  
function verifyWinner(score, player) {
  if (score == Number(maxScore.innerHTML)) {
    switch (player) {
      case 'player1':
        characPlayer1.classList.remove(`winner-player1--hidden`);
        pScorePlayer1.classList.add('nes-text', 'is-success');
        pScorePlayer2.classList.add('nes-text', 'is-error');
        break;
      case 'player2':
        characPlayer2.classList.remove(`winner-player2--hidden`);
        pScorePlayer2.classList.add('nes-text', 'is-success');
        pScorePlayer1.classList.add('nes-text', 'is-error');
        break;
    }
    winnerText.style.opacity="1";
    stopGame();
  } 
}

/////////////////
//  Stop Game  //
/////////////////


function stopGame() {
  buttonPlayer1.classList.add("is-disabled");
  buttonPlayer2.classList.add("is-disabled");
  buttonPlayer1.onclick = "";
  buttonPlayer2.onclick = "";
}

////////////////////////
//  Click Button 1/2  //
////////////////////////

function clickButtonPlayer1() {
  scorePlayer1++;
  verifyWinner(scorePlayer1, "player1");
  pScorePlayer1.innerHTML = scorePlayer1; 
}

function clickButtonPlayer2() {
  scorePlayer2++;
  verifyWinner(scorePlayer2, "player2");
  pScorePlayer2.innerHTML = scorePlayer2; 
}

///////////////////
//  Reset Score  //
///////////////////


function resetScore() {

  scorePlayer1 = 0;
  scorePlayer2 = 0;

  maxScore.innerHTML = "5";

  pScorePlayer1.innerHTML = scorePlayer1; 
  pScorePlayer2.innerHTML = scorePlayer2; 
}

////////////////////
//  Reset Button  //
////////////////////


function resetButton() {
  
  buttonPlayer1.onclick = clickButtonPlayer1;
  buttonPlayer2.onclick = clickButtonPlayer2;

  buttonPlayer1.classList.remove("is-disabled");
  buttonPlayer2.classList.remove("is-disabled");
}

//////////////////////////////
//  Reset Winner Character  //
//////////////////////////////

function resetWinnerChara() {
  characPlayer1.classList.add(`winner-player1--hidden`);
  characPlayer2.classList.add(`winner-player2--hidden`);
  winnerText.style.opacity="0";
}

/////////////////////////
//  Reset Color Score  //
/////////////////////////


function resetColorScore() {
  
  pScorePlayer1.classList.remove('is-success');
  pScorePlayer1.classList.remove('is-error');
  pScorePlayer2.classList.remove('is-success');
  pScorePlayer2.classList.remove('is-error');

  inputMaxScore.classList.remove('is-success');
  inputMaxScore.value = "";
}

/////////////////
//  Reset All  //
/////////////////


function resetAll() {
  resetScore();
  resetButton();
  resetWinnerChara();
  resetColorScore();
}

////////////////////////
//  Change Max Score  //
////////////////////////

function changeMaxScore() {
  let valueInputMaxScore = inputMaxScore.value;
  resetScore();
  resetButton();
  resetWinnerChara();
  resetColorScore();
  maxScore.innerHTML = valueInputMaxScore;
  inputMaxScore.classList.remove('is-error');
  inputMaxScore.classList.add('is-success');
}

///////////////////////
//  Check Max Score  //
///////////////////////

function checkMaxScore() {
  if(inputMaxScore.value == "" || inputMaxScore.value < 1) {
    inputMaxScore.classList.remove('is-success');
    inputMaxScore.classList.add('is-error');
  }  else {
    changeMaxScore();
  }
}
////////////////////////////////////////////////////////////////////////
//                               event                                //
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////
//  input max score event onkeypress (enter)  //
////////////////////////////////////////////////

  
inputMaxScore.onkeypress = function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    checkMaxScore();
  }
};

//////////////////////////////////////
//  input max score event onchange  //
//////////////////////////////////////


inputMaxScore.onchange = function(event) {
  checkMaxScore();
};

///////////////////////////////
//  event button player 1/2  //
///////////////////////////////


buttonPlayer1.onclick = clickButtonPlayer1;
buttonPlayer2.onclick = clickButtonPlayer2;

//////////////////////////
//  event button reset  //
//////////////////////////

buttonReset.onclick = resetAll;
