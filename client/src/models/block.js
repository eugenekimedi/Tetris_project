function Block(col, row) {
  this.side = 30;
  this.row = row;
  this.col = col;
  this.x = this.col * this.side;
  this.y = this.row * this.side;
  this.dx = this.side;
  this.dy = this.side;
  this.canMove = true;
  this.canFall = true
}


Block.prototype.draw = function(context, x, y) {
  context.fillRect(x, y, this.side, this.side)
}

// Block.prototype.moveBlock = function(event, playfield) {
//   if(this.canMove == true){
//   switch (event.keyCode) {
//     case 37: //left
//     if(this.x != 0) {
//       if(this.checkSide(playfield, -1) == true){
//         this.x -= this.dx;
//       }
//     }
//       break;

//     case 39: //right
//     if(this.x != 270) {
//       if(this.checkSide(playfield, +1) == true){
//         this.x += this.dx;
//       }
//     }
//       break;

//     case 40: //down
//     if(this.y < 570) {
//       if(this.checkBelow(playfield) == true){
//         this.y += this.dy;
//       }
//     }
//       break;
//   };
// }
// }

Block.prototype.checkBelow = function(playfield) {
  if(this.row < 19){
    if(playfield.board[this.row+1][this.col]){
      this.canFall = false;
    }
    return this.canFall;
  }
}

Block.prototype.checkHitBottom = function() {
  if(this.row === 19) {
    this.canFall = false;
  }
}

Block.prototype.checkSide = function(playfield,direction) {
  if(playfield.board[this.row][this.col + direction]){
    return false;
  } else {
    return true;
  }
}


module.exports = Block;