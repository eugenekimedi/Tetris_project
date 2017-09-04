const Block = require('./block');

function Piece(shapeName) {
  this.shapes = {
    tShape: [[3,0],[4,0],[5,0],[4,1]],
    lineShape: [[3,0],[4,0], [5,0], [6,0]]
  }
  this.shape = this.shapes[shapeName];
  this.blocks = null;
  this.createBlocks();
}

Piece.prototype.createBlocks = function() {
  const block1 = new Block(this.shape[0][0],this.shape[0][1]);
  const block2 = new Block(this.shape[1][0],this.shape[1][1]);
  const block3 = new Block(this.shape[2][0],this.shape[2][1]);
  const block4 = new Block(this.shape[3][0],this.shape[3][1]);

  this.blocks = [block1, block2,block3, block4];
};

Piece.prototype.canMove = function () {
  return this.blocks.some(block => block.canMove)
}

Piece.prototype.removeBlocks = function (playfield) {
  this.blocks.forEach(playfield.removeBlock.bind(playfield));
}

Piece.prototype.setBlocks = function(playfield) {
  playfield.setBlocks(this.blocks);
}

Piece.prototype.movePiece = function(event, playfield) {
  const someCanMove = this.blocks.some(block => block.canMove)

  if(someCanMove){
  switch (event.keyCode) {
    case 37: //left
    this.blocks.forEach(function(block) {
    if(block.x != 0) {
      if(block.checkSide(playfield, -1) == true){
        block.x -= block.dx;
      }
    }
  });
    break;

    case 39: //right
    for(let i = this.blocks.length - 1; i >= 0; i--){
      if(this.blocks[i].x != 270) {
        if(this.blocks[i].checkSide(playfield, +1) == true){
          this.blocks[i].x += this.blocks[i].dx;
        }
      }
    }
      break;

    case 40: //down
    this.blocks.forEach(function(block) {
    if(block.y < 570) {
      if(block.checkBelow(playfield) == true){
        block.y += block.dy;
      }
    }
  });
      break;

}
}
}

module.exports = Piece;