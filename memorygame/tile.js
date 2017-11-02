Tile = function(x,y,w,h,id) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.jackpot = false;
  this.id = id;
  this.color = 'white';
  this.revealed = false;

  this.flipTile = function() {
    if(canvas.style.zIndex == 1){
      if(this.jackpot) {
        this.color = "red";
        this.revealed = true;
        this.draw(ctx);
        if(board.gameWon()) {
          ctx.fillStyle = 'rgba(255,255,255,0.6)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = "50px arial";
          ctx.fillStyle = 'rgb(0,0,0)';
          if(currentStage < stages.length - 1){
            ctx.fillText("Stage Clear!", canvas.width /3.5, canvas.height/2.5)
            document.getElementById('stage'+(currentStage+1)).disabled = false;
            document.getElementById('inGameButton').innerHTML = 'Next Stage';
            document.getElementById('inGameButton').style.top = '55%';
            document.getElementById('inGameButton').style.left = '55%';
            document.getElementById('inGameButton').style.visibility = 'visible';
            canvas.style.zIndex = "-1";
          }
          else {
            ctx.fillText("Game Clear!", canvas.width /3, canvas.height/2)

            document.getElementById('inGameButton').innerHTML = 'Restart';
            document.getElementById('inGameButton').style.top = '54%';
            document.getElementById('inGameButton').style.left = '55%';
            document.getElementById('inGameButton').style.visibility = 'visible';
            canvas.style.zIndex = "-1";
          }

        }
      }
      else {
        board.gameOver();
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "50px arial";
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText("Game Over!", canvas.width /3.5, canvas.height/2.5);

        document.getElementById('inGameButton').innerHTML = 'Retry';
        document.getElementById('inGameButton').style.top = '54%';
        document.getElementById('inGameButton').style.left = '57%';
        document.getElementById('inGameButton').style.visibility = 'visible';
        canvas.style.zIndex = "-1";
      }
    }
  };



  this.closeTile = function() {
    this.color = "white";
  };

  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    if(this.jackpot) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  };

}
