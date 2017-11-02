Comet = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  };

  this.move = function() {

  };
}
