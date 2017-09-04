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

module.exports = Piece;