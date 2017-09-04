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


PlayField.prototype.setBlocks = function(blocks) {
  blocks.forEach((block) => {
  const row = block.y / block.side;
  const col = block.x / block.side;
  block.row = row;
  block.col = col;
  // console.log(this.board[20][1])

  this.board[row][col] = block;
  })
}


PlayField.prototype.gameOver = function() {
  const anythingInTopRow = this.board[0].some(function(space) {
    return (space && !space.canMove);
  });

  console.log(anythingInTopRow);

  return anythingInTopRow;
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

PlayField.prototype.checkLines = function(context) {
  let isFull = function(thing) {
    if(thing) {
      return true;
    }
  }
  let counter = 0
  for(let row of this.board){
    if(row.every(isFull)){
      let newRow = [null, null, null, null, null, null, null, null, null, null]
      this.board.splice(counter, 1);
      this.board.unshift(newRow);
      console.log("yay")
      this.draw(context);
    }
      counter++
  }
}


module.exports = PlayField;