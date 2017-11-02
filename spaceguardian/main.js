var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var c1 = new Comet(100,100,20);
var s1 = new Spaceship(200,200,50,50);

c1.draw(ctx);
s1.draw(ctx);
