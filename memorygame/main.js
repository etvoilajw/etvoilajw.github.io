var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var stages = [[2,2,2],[3,3,3],[4,4,5],[5,5,7],[6,6,8],[6,6,9],[7,7,9],[8,8,9],[8,8,10],[9,9,10],[10,10,11],[10,10,12]];
var currentStage = 0;
var board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);

function buttonClicked() {
  document.getElementById('inGameButton').style.visibility = 'hidden';
  if(document.getElementById('inGameButton').innerHTML == 'Retry') {
    retry();
  }
  else if (document.getElementById('inGameButton').innerHTML == 'Next Stage'){
    nextStage();
  }
  else if (document.getElementById('inGameButton').innerHTML == 'Begin'){
    begin();
  }
};

function begin() {
  board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);
  board.start();
};

function nextStage() {
  currentStage += 1;
  board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);
  board.start();
};

function retry() {
  board.start();
};

function stageSelected(num) {
  currentStage = num;
  board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  board.newBoard();
  document.getElementById('inGameButton').innerHTML = 'Begin';
  document.getElementById('inGameButton').style.top = null;
  document.getElementById('inGameButton').style.visibility = 'visible';
};

ctx.canvas.addEventListener("click",function(e){board.tileClicked(e.clientX - document.getElementById('canvasDiv').getBoundingClientRect().left, e.clientY - document.getElementById('canvasDiv').getBoundingClientRect().top);}, false);

board.newBoard();
