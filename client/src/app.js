const Block = require('./models/block');
const PlayField = require('./models/playfield');

window.addEventListener('load', function() {
    let playfield = new PlayField();
    let block;
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext("2d");
    block = new Block(0,0);

    playfield.setBlock(block);

    let fps = 5;
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

        // if((block.y + 10) < 500) {
        //   block.y += 10;
        // }

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
      playfield.removeBlock(block);
      block.moveBlock(event, context);
      playfield.setBlock(block);
      console.log(playfield.board);
    });
    console.dir(canvas);
    window.requestAnimationFrame(update);

    //UI.render() WEEK 3 DAY 2-3
  });
