function Block(col, row) {
  this.side = 30;
  this.row = row;
  this.col = col;
  this.x = this.col * this.side;
  this.y = this.row * this.side;
  this.dx = this.side;
  this.dy = this.side;
  this.canMove = true;
}


Block.prototype.draw = function(context, x, y) {
  context.fillRect(x, y, this.side, this.side)
}

Block.prototype.moveBlock = function(event) {
  if(this.canMove == true){
  switch (event.keyCode) {
    case 37: //left
    if(this.x != 0) {
      this.x -= this.dx;}
      break;

    case 39: //right
    if(this.x != 270) {
      this.x += this.dx;}
      break;

    case 40: //down
    if(this.y < 570) {
      this.y += this.dy;}
      break;
  };
}
}

Block.prototype.checkBelow = function(playfield) {
  if(this.row < 19){
    if(playfield.board[this.row+1][this.col]){
      this.canMove = false;
    }
  }
}

Block.prototype.checkHitBottom = function() {
  if(this.row === 19) {
    this.canMove = false;
  }
}

module.exports = Block;