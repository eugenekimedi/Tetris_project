const Block = require('./models/block');
const PlayField = require('./models/playfield');

window.addEventListener('load', function() {
  let playfield = new PlayField();
  let block;
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext("2d");
  let blocks = []
  block = new Block(4,0);
  block2 = new Block(4,8);
  block2.canMove = false;
  blocks.push(block);
  blocks.push(block2);

  playfield.setBlock(block);
  playfield.setBlock(block2);

  let fps = 5;
  let now;
  let then = Date.now();  
  var interval = 1000/fps;
  let delta;
  let counter = 0;

  var update = function() {
    window.requestAnimationFrame(update);

    now = Date.now();
    delta = now - then;

    if(delta > interval) {
      clear();
      if(counter > 1) {
        for(let block of blocks) {
            block.checkBelow(playfield);
          if(block.canMove == true){
            if(block.y < 570) {
            // block.checkBelow(playfield);
            playfield.removeBlock(block);
            block.y += block.side;
            playfield.setBlock(block);
          }
        }
      }
      counter = 0;
    }
    counter++;
    draw();  

    then = now - (delta % interval);
  }
}

var clear = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

var draw = function() {
  playfield.draw(context);
}

canvas.addEventListener("keydown", function(){

  for(let block of blocks) {
    if(block.canMove == true){
        playfield.removeBlock(block);
        block.moveBlock(event, context);
        playfield.setBlock(block);
        // console.log(playfield.board);
      }
    }
  });

console.dir(canvas);
window.requestAnimationFrame(update);
});
