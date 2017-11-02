Spaceship = function(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.draw = function(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.w,this.h);
    
  };
}
