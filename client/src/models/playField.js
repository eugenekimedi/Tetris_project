const Block = require("./block");

function PlayField() {
  this.board = [];

  for(var i=0; i< 20; i++) {
    let row = [];
    for(var j=0; j<10; j++) {
      row.push(null);
    }

    this.board.push(row);
  }
};

PlayField.prototype.gameOver = function(block) {
  if (block.row === 0 && block.canMove === false){
    for(var i=0; i< 20; i++) {
      let row = [];
      for(var j=0; j<10; j++) {
        row.push(null);
      }

      this.board.push(row);
  }
}


PlayField.prototype.removeBlock = function(block) {
  this.board[block.y/block.side][block.x/block.side] = null;
}

PlayField.prototype.draw = function(context) {
  for(let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
    for(let colIndex = 0; colIndex < this.board[rowIndex].length; colIndex++) {
      if(this.board[rowIndex][colIndex] !== null) {
        let block = this.board[rowIndex][colIndex];
        block.draw(context, colIndex * block.side, rowIndex * block.side);
      }
    }

  }
}

PlayField.prototype.update = function(context, block) {
  removeBlock(block);
  setBlock(block);
  draw(context);
}
module.exports = PlayField;