var comets = {},
    cometIndex = 0;


Comet = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  comets[cometIndex] = this;
  this.id = cometIndex;
  cometIndex++;
  this.vx = (((Math.random() * 150) + canvasCenterX - (150/2))  - x) / 350;
  this.vy = (((Math.random() * 150) + canvasCenterY - (150/2))  - y) / 350;


  this.draw = function(ctx) {
    this.x += this.vx;
    this.y += this.vy;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  };

}
