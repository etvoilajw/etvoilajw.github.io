var comets = {},
    cometIndex = 0;


Comet = function(x, y, tier) {
  this.x = x;
  this.y = y;
  if(tier == 1) {
    this.r = 5;
    this.vx = (((Math.random() * 150) + canvasCenterX - (150/2))  - x) / 200;
    this.vy = (((Math.random() * 150) + canvasCenterY - (150/2))  - y) / 200;
  }
  else if (tier == 2) {
    this.r = 10;
    this.vx = (((Math.random() * 150) + canvasCenterX - (150/2))  - x) / 300;
    this.vy = (((Math.random() * 150) + canvasCenterY - (150/2))  - y) / 300;
  }
  else if (tier == 3) {
    this.r = 15;
    this.vx = (((Math.random() * 150) + canvasCenterX - (150/2))  - x) / 400;
    this.vy = (((Math.random() * 150) + canvasCenterY - (150/2))  - y) / 400;
  }

  comets[cometIndex] = this;
  this.id = cometIndex;
  cometIndex++;


  this.draw = function(ctx) {
    this.x += this.vx;
    this.y += this.vy;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  };


}
