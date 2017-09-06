function Block(col, row) {
  this.side = 30;
  this.row = row;
  this.col = col;
  this.x = this.col * this.side;
  this.y = this.row * this.side;
  this.dx = this.side;
  this.dy = this.side;
  // this.canMove = true;
  // this.canFall = true;
}


Block.prototype.draw = function(context, x, y) {
  context.fillRect(x, y, this.side, this.side)
}

Block.prototype.canMove = function(direction, playfield) {
  if(direction == "L") {
    if(playfield.board[this.row][this.col - 1]){
      return false;
    } else {return true;}
  }
  if(direction == "R") {
    if(playfield.board[this.row][this.col + 1]){
      return false;
    } else {return true;}
  }
  if(direction == "D") {
    if(this.row == 19){
      return false;
    }
    if(playfield.board[this.row + 1][this.col]){
      return false;
    } else {return true;}
  }

}



// Block.prototype.checkBelow = function(playfield) {
//   if(this.row < 19){
//     if(playfield.board[this.row+1][this.col]){
//       this.canFall = false;
//     }
//     return this.canFall;
//   }
// }

// Block.prototype.checkHitBottom = function() {
//   if(this.row === 19) {
//     this.canFall = false;
//   }
// }

// Block.prototype.checkSide = function(playfield,direction) {
//   this.checkCanMove();
//   if(playfield.board[this.row][this.col + direction] && this.canMove){
//     this.canMove = false;
//     return false;
//   } else {
//     this.canMove = true;
//     return true;
//   }
// }

// Block.prototype.checkCanMove = function() {
//   if(this.canFall === false){
//     this.canMove = false;
//   } else {
//     this.canMove = true;
//   }
// }

module.exports = Block;


