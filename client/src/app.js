const Block = require('./models/block');

window.addEventListener('load', function() {
    let block;
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext("2d");
    block = new Block();

    let fps = 2;
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



        if((block.y + 10) < 500) {
          block.y += 10;
        }

        draw();  

        then = now - (delta % interval);
      }
    }

    var clear = function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    var draw = function() {
      block.draw(context)
    }

    canvas.addEventListener("keydown", function(){
      clear();
      block.moveBlock(event, context);

    });
    console.dir(canvas);
    window.requestAnimationFrame(update);

    //UI.render() WEEK 3 DAY 2-3
  });
