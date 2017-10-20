Array.prototype.contains = function(val) {
  for(var i =0; i<this.length;i++) {
    if(this[i] == val) {
      return true;
    }
  }
};

function flipTile(tile) {
    if(jackpotArray.contains(tile.id)){
      tile.style.background = "red";
    }
};

function initialShow(tile) {
  for(var i =0;i<jackpotArray.length;i++) {

  }
};

Array.prototype.generateJackpots = function(num) {
  var i = this.length, j, tmp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    tmp = this[j];
    this[j] = this[i];
    this[i] = tmp;
  }
  return this.slice(0, num);
};

function generateCardArray(num) {
  return Array.apply(null, {length: num}).map(Number.call,Number);
};


function newBoard(arr){
  var output = '';
  for(var i =0;i<arr.length;i++) {
    if(jackpotArray.contains(i)){
      output += '<div id="tile'+i+'" style= "background-color: red;" onclick="flipTile(this)"></div>';
    }
    else {
      output += '<div id="tile'+i+'"onclick="flipTile(this)"></div>';
    }

  }

  document.getElementById('memoryBoard').innerHTML = output;
};
