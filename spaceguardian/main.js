var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasCenterX = canvas.width / 2;
var canvasCenterY = canvas.height / 2;

var gameOver = false;
var timer = 0;

var ship = new Spaceship(canvasCenterX - 20,canvasCenterY - 20,20,20);

setInterval(function() {
  timer += 1;
}, 1000);

setInterval(function() {
  var tier = 1;
  if(timer > 5 && Math.random() > 0.5) {
    tier += 1;
  }
  if(timer > 15 && Math.random() > 0.5) {
    tier += 2;
  }
  if(Math.random() > 0.5) {
    if(Math.random() > 0.5) {
      new Comet(0,Math.random() * canvas.height,tier);
    }
    else {
      new Comet(canvas.width,Math.random() * canvas.height,tier);
    }
  }
  else {
    if(Math.random() > 0.5) {
      new Comet(Math.random() * canvas.width,0,tier);
    }
    else {
      new Comet(Math.random() * canvas.width,canvas.height,tier);
    }
  }
}, 300);

if(!gameOver) {
  setInterval(function() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ship.draw(ctx);
    for(var i in comets) {
      comets[i].draw(ctx);
    }
  }, 10)
};
