var keyState = {};
var up = 87,
    left = 65,
    right = 68,
    down = 83;

Spaceship = function(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = 2;
  this.vy = 2;

  this.draw = function(ctx) {
    if(keyState[up]) this.y -= this.vy;
    if(keyState[down]) this.y += this.vy;
    if(keyState[left]) this.x -= this.vx;
    if(keyState[right]) this.x += this.vx;
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.w,this.h);
  };
}


document.addEventListener("keydown", function(evt) {
  keyState[evt.keyCode] = true;
});
document.addEventListener("keyup", function(evt) {
  delete keyState[evt.keyCode];
});
