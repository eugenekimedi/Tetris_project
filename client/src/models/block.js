function Block(x, y) {
  this.x = x;
  this.y = y;
  this.side = 30;
  this.dx = this.side;
  this.dy = this.side;
  this.isMoving = true;
}


Block.prototype.draw = function(context, x, y) {
  context.fillRect(x, y, this.side, this.side)
}

Block.prototype.moveBlock = function(event, context) {
  console.log(event)
  context.clearRect(this.x, this.y, this.side, this.side)
  switch (event.keyCode) {
    case 37: //left
      this.x -= this.dx;
      // console.log("left")
      break;
    case 39: //right
      this.x += this.dx;
      // console.log("right")
      break;
    case 40: //down
      this.y += this.dy;
      // console.log("down")
      break;
  };
}

module.exports = Block;