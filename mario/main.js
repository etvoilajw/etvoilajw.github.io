var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas), GetTop(canvas));

var rects = new Array();

function GenerateRect(){
  var r = new Rectangle(Math.random() * 450, Math.random() * 450, 50, 50);
  r.color = new Color(255, 0, 0, 1);
  rects.push(r);
}
var Update = setInterval(function(){

},1);

setInterval(function(){
  context.clearRect(0,0,canvas.width, canvas.height);

  for(var i =0; i<rects.length;i++) {
    rects[i].Draw(context);
  }
},33);
// var anim = new Animation(16, 16, 0, 0, 8, "mario.png", 12, 4, 5);
// anim.position.Set(50,50);

// setInterval(function() {
//   anim.Update();
//
//   if(input.d) {
//     anim.SetRow(0);
//   } else if(input.a) {
//     anim.SetRow(2);
//   }
//
//   if(input.a){
//     anim.position.Move(new Vector2(-1, 0));
//   }else if(input.d){
//     anim.position.Move(new Vector2(1, 0));
//   }else if(input.w){
//     anim.position.Move(new Vector2(0, -1));
//   }else if(input.s){
//     anim.position.Move(new Vector2(0, 1));
//   } else{
//     anim.Update();
//   }
// },1);

// setInterval(function() {
//
//   context.clearRect(0, 0 , canvas.width, canvas.height)
//     anim.Draw(context);
// }, 33);
