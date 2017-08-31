window.addEventListener('load', function() {
  var canvas = document.getElementById('game-canvas');
  var context = canvas.getContext('2d');
  console.log(context);

  // var drawCircle = function(x,y) {
  //   context.beginPath();
  //   context.arc(x,y,4,0, Math.PI*2, true);
  //   context.stroke();
  //   console.log(x,y)
  // }
  // drawCircle(200, 20);

  drawBlock = function(x,y) {
    context.fillRect(x, y, 10, 10)
  }
  drawBlock(200, 20);
});