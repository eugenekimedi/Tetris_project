const Block = require('./block');

function Piece(shapeName) {
  this.shapes = {
    tShape: [[3,0],[4,0],[5,0],[4,1], [2, 3]],
    lineShape: [[3,0],[4,0], [5,0], [6,0], [1,4]]
  }
  this.shape = this.shapes[shapeName];
  this.blocks = null;
  // this.canMove = true;
  // this.canFall = true;
  this.createBlocks();
}

Piece.prototype.createBlocks = function() {
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

Piece.prototype.keepBlocksTogether = function(direction, playfield){
  if(this.checkCanMove === false) {
    this.blocks.forEach(function(block){
      block.canMove = false;
    })
  }
}

Piece.prototype.checkCanMove = function(direction, playfield) {
  console.log(1)
  let counter = 0;
  let canMove = false;
  this.blocks.forEach(function(block){
    if(block.canMove(direction, playfield)) {
      counter ++
    }
    if(direction == "L" || direction == "R"  && counter >= this.shape[4][0]) {
      canMove = true;
    }
    if(direction == "D" && counter >= this.shape[4][1]) {
      canMove = true;
    }
  }.bind(this))
  return canMove;
}

Piece.prototype.movePiece = function(event, playfield) {
  switch (event.keyCode) {
    case 37: //left
    if(this.checkCanMove("L", playfield)) {
      this.blocks.forEach(function(block) {
        block.x -= block.dx;
      })
    }
    break;

    case 39: //right
    if(this.checkCanMove("R", playfield)) {
      this.blocks.forEach(function(block) {
        block.x += block.dx;
      })
    }
    break;

    case 40:
    if(this.checkCanMove("D", playfield)) {
      this.blocks.forEach(function(block) {
        block.y += block.dy;
      })
    }
    break;
  }
}

// Piece.prototype.movePiece = function(event, playfield) {
//   this.checkCanMove();
//   if(this.canMove) {
//     switch (event.keyCode) {
//       case 37: //left
//       this.blocks.forEach(function(block){
//         if(block.x != 0){
//           if(block.checkSide(playfield, -1) == true){
//             block.x -= block.dx;
//           }
//         }
//       });
//       break;

//       case 39: //right
//       for(let i = this.blocks.length -1; i >= 0; i --){
//         if(this.blocks[i].x != 270) {
//           if(this.blocks[i].checkSide(playfield, +1) == true){
//             this.blocks[i].x += this.blocks[i].dx;
//           }
//         }
//       }
//       break;

//       case 40: //down
//       this.blocks.forEach(function(block){
//         if(block.y < 570){
//           if(block.checkBelow(playfield) == true){
//             block.y += block.dy;
//           }
//         }
//       });
//       break
//     }
//   }
// }

module.exports = Piece;