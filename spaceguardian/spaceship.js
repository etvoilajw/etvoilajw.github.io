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
  this.color = 'red';

  this.draw = function(ctx) {
    if(keyState[up]) this.y -= this.vy;
    if(keyState[down]) this.y += this.vy;
    if(keyState[left]) this.x -= this.vx;
    if(keyState[right]) this.x += this.vx;
    this.collisionDetect();
    console.log(gameOver);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.w,this.h);
  };

  // this.getDistance = function(comet) {
  //   var xDistance = this.x - comet.x;
  //   var yDistance = this.y - comet.y;
  //
  //   return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
  // };

  this.contains = function(comet) {
    var disX = Math.abs(comet.x - this.x-this.w/2);
    var disY = Math.abs(comet.y - this.y-this.h/2);

    if(disX > (this.w/2 + comet.r)) return false;
    if(disY > (this.h/2 + comet.r)) return false;

    if(disX <= (this.w/2)) return true;
    if(disY <= (this.h/2)) return true;

    var dx= disX - this.w/2;
    var dy= disY - this.h/2;
    return (dx*dx+dy*dy <= (comet.r*comet.r));
  };

  this.collisionDetect = function() {
    for(var i in comets) {
      if (this.contains(comets[i])) {
        gameOver = true;
      }
    }
  };

}


document.addEventListener("keydown", function(evt) {
  keyState[evt.keyCode] = true;
});
document.addEventListener("keyup", function(evt) {
  delete keyState[evt.keyCode];
});
