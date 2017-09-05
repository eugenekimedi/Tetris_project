const Block = require('./models/block');
const PlayField = require('./models/playfield');
const Piece = require('./models/piece');

window.addEventListener('load', function() {
  let playfield = new PlayField();
  let block;
  let piece;
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext("2d");
  let blocks = []


  let fps = 60;
  let now;
  let then = Date.now();  
  var interval = 1000/fps;
  let delta;
  let counter = 0;

  var update = function() {
    if(!playfield.gameOver()){
      requestAnimationFrame(update);
    }
    now = Date.now();
    delta = now - then;

    if(delta > interval) {

      clear();
      if(counter > 10) {
        for(let block of blocks) {
            block.checkBelow(playfield);
            block.checkHitBottom();
            playfield.checkLines(context, block);
          if(block.canFall == true){
            if(block.y < 570) {
              playfield.removeBlock(block);
              block.y += block.side;
              playfield.setBlocks([block]);
            }
          }
        }
      counter = 0;
      }
      counter++;
      spawnBlock(blocks);
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

var spawnBlock = function(blocks) {
  let stuckBlocks = [];
  for (block of blocks) {
    if(block.canFall === false) {
      stuckBlocks.push(block);
    }
  }
  if (stuckBlocks.length === blocks.length) {
    piece = new Piece("lineShape");
    // let piece = new Piece("tShape")
    playfield.setBlocks(piece.blocks);
    blocks.push(...piece.blocks);
  }
}
canvas.addEventListener("keydown", function(){
    if(piece.canFall()){
      piece.removeBlocks(playfield);
      piece.movePiece(event, playfield);
      piece.setBlocks(playfield);
      }
  });

console.dir(canvas);


requestAnimationFrame(update);

});
