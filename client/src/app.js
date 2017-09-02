const Block = require('./models/block');
const PlayField = require('./models/playfield');

window.addEventListener('load', function() {
    let playfield = new PlayField();
    let block;
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext("2d");
    let blocks = []
    block = new Block(1,0);
    block2 = new Block(1, 19);
    blocks.push(block);
    blocks.push(block2);

    playfield.setBlock(block);
    playfield.setBlock(block2);

    let fps = 4;
    let now;
    let then = Date.now();  
    var interval = 1000/fps;
    let delta;

    var update = function() {
      window.requestAnimationFrame(update);

      now = Date.now();
      delta = now - then;

      if(delta > interval) {
        clear();

        if(block.y < 570) {
          playfield.removeBlock(block);
          block.y += block.side;
          playfield.setBlock(block);
        }

        draw();  

        then = now - (delta % interval);
      }
    }

    var clear = function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    var draw = function() {
      // block.draw(context, 245, 0);
      playfield.draw(context);
    }

    canvas.addEventListener("keydown", function(){
      //clear();
      for(let block of blocks) {
      playfield.removeBlock(block);
      block.moveBlock(event, context);
      playfield.setBlock(block);
      console.log(playfield.board);
    }
    });
    console.dir(canvas);
    window.requestAnimationFrame(update);

    //UI.render() WEEK 3 DAY 2-3
  });
