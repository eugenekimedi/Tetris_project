const Block = require('./block');

function Piece(shapeName) {
  this.shapes = {
    tShape: [[3,0],[4,0],[5,0],[4,1]],
    lineShape: [[3,0],[4,0], [5,0], [6,0], [1,4]]
  }
  this.shape = this.shapes[shapeName];
  this.blocks = null;
  // this.canMove = true;
  // this.canFall = true;
  this.createBlocks();
}

Piece.prototype.createBlocks = function() {
  console.log(this.shape);
  const block1 = new Block(this.shape[0][0],this.shape[0][1]);
  const block2 = new Block(this.shape[1][0],this.shape[1][1]);
  const block3 = new Block(this.shape[2][0],this.shape[2][1]);
  const block4 = new Block(this.shape[3][0],this.shape[3][1]);

  this.blocks = [block1, block2, block3, block4];
};

// Piece.prototype.canFall = function () {
//   return this.blocks.some(block => block.canFall)
// }

Piece.prototype.removeBlocks = function (playfield) {
  this.blocks.forEach(playfield.removeBlock.bind(playfield));
}

Piece.prototype.setBlocks = function(playfield) {
  playfield.setBlocks(this.blocks);
}

// Piece.prototype.checkCanMove = function() {
//   if(this.blocks.every(function(block) {block.canMove})) {
//     this.canMove = true;
//   }
// }

Piece.prototype.checkCanMove = function(direction, playfield) {
  let counter = 0;
  this.blocks.forEach(function(block){
    if(block.canMove(direction, playfield)) {
      counter ++
    }

    if(direction == "L" || direction == "R"  && counter >= this.shape[4][0]) {
      return true;
    }
    if(direction == "D" && counter >= this.shape[4][1]) {
      return true;
    }
  })
}

Piece.prototype.movePiece = function(event, playfield) {
  switch (event.keyCode) {
    case 37: //left
    if(this.checkCanMove("L")) {
      this.blocks.forEach(function(block) {
        block.x -= block.dx;
      })
    }
    break;

    case 39: //right
    if(this.checkCanMove("R")) {
      this.blocks.forEach(function(block) {
        block.x += block.dx;
      })
    }
    break;

    case 40:
    if(this.checkCanMove("D")) {
      this.blocks.forEach(function(block) {
        block.y += block.dy;
      })
    }
    break;
  }
}

module.exports = Piece;