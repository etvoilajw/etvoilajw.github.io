Array.prototype.generateJackpots = function(num) {
  var i = this.length, j, tmp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    tmp = this[j];
    this[j] = this[i];
    this[i] = tmp;
  }
  return this.slice(0, num);
};



Board = function(row, col, jpNum) {
  this.row = row;
  this.col = col;
  this.width = canvas.width;
  this.height = canvas.height;
  this.tileArray = [];
  this.jackpotArray = [];

  this.start = function() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.newBoard();
    this.draw(ctx);
    this.initialDisplay();
    setTimeout(function(){board.draw(ctx);}, 800);
    setTimeout(function(){board.clickable();}, 800);
  };

  this.clickable = function() {
    canvas.style.zIndex = '1';
  };

  this.newBoard = function(){
    var currentRow = 0;
    for(var i = 0; i < row*col; i++) {
      if(i != 0 && i % col == 0) {
        currentRow += 1;
      }
      this.tileArray[i] = new Tile((this.width / col) * (i % col), (this.height/ row) * currentRow,this.width / col,this.height/ row, i);
    }
    this.jackpotArray = this.tileArray.generateJackpots(jpNum);
    this.draw(ctx);
    for(var i=0; i<this.jackpotArray.length;i++) {
      this.jackpotArray[i].jackpot = true;
      this.jackpotArray[i].color = 'red';
    }


  };

  this.draw = function(ctx) {
    for(var i = 0; i<this.tileArray.length;i++) {
      this.tileArray[i].draw(ctx);
    }
    canvas.style.zIndex = "-1";

  };

  this.initialDisplay = function() {
    for(var i=0; i<this.jackpotArray.length;i++) {
      this.jackpotArray[i].closeTile();
    }
  };

  this.tileClicked = function(x, y) {

    for(var i = 0; i < this.tileArray.length;i++) {
      if (x > this.tileArray[i].x && x < this.tileArray[i].x + this.tileArray[i].width &&
          y > this.tileArray[i].y && y < this.tileArray[i].y + this.tileArray[i].height){

        this.tileArray[i].flipTile();
      }
    }
  };

  this.gameOver = function() {
    for(var i=0; i<this.jackpotArray.length;i++) {
      this.jackpotArray[i].color = 'red';
      this.jackpotArray[i].draw(ctx);
    }
  };

  this.gameWon = function() {
    for(var i =0;i<this.jackpotArray.length;i++) {
      if(!this.jackpotArray[i].revealed) {
        return false;
      }
    }
    return true;
  };

}
