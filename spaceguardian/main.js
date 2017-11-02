var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasCenterX = canvas.width / 2;
var canvasCenterY = canvas.height / 2;


var ship = new Spaceship(canvasCenterX - 20,canvasCenterY - 20,20,20);

for(var i=0; i< 10; i++) {
  if(Math.random() > 0.5) {
    if(Math.random() > 0.5) {
      new Comet(0,Math.random() * canvas.height,5);
    }
    else {
      new Comet(canvas.width,Math.random() * canvas.height,5);
    }
  }
  else {
    if(Math.random() > 0.5) {
      new Comet(Math.random() * canvas.width,0,5);
    }
    else {
      new Comet(Math.random() * canvas.width,canvas.height,5);
    }
  }
}

setInterval(function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ship.draw(ctx);
  for(var i in comets) {
    comets[i].draw(ctx);
  }
}, 10);
