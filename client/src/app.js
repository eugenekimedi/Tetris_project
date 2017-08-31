var Block = require('./models/block');

window.addEventListener('load', function() {
  var block;
  var canvas = document.getElementById('game-canvas');
  var context = canvas.getContext("2d");
  block = new Block();

  var update = function() {
    clear();

    draw();
  }

  var clear = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  var draw = function() {
    block.draw(context)

    window.requestAnimationFrame(update);
  }

  canvas.addEventListener("keydown", function(){
    block.moveBlock(event, context);

  });
  console.dir(canvas);
  window.requestAnimationFrame(update);

    //UI.render() WEEK 3 DAY 2-3
  });
