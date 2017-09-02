function Block(col, row) {
  this.side = 30;
  this.row = row;
  this.col = col;
  this.x = this.col * this.side;
  this.y = this.row * this.side;
  this.dx = this.side;
  this.dy = this.side;
  this.isMoving = true;
}


Block.prototype.draw = function(context, x, y) {
  context.fillRect(x, y, this.side, this.side)
}

Block.prototype.moveBlock = function(event, context) {
  // console.log(event)
  // context.clearRect(this.x, this.y, this.side, this.side)
  switch (event.keyCode) {
    case 37: //left
    if(this.x != 0) {
      this.x -= this.dx;}
      console.log("left")
      break;
    case 39: //right
    if(this.x != 270) {
      this.x += this.dx;}
      console.log("right")
      break;
    case 40: //down
    if(this.y < 570) {
      this.y += this.dy;}
      console.log(this.coords)
      break;
  };
}

Block.prototype.stop = function() {

}

module.exports = Block;