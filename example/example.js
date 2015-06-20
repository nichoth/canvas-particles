var Particles = require('../');

window.onload = function() {

  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);

  // falling particles with random x velocity and random origin
  // black particles on white canvas
  var range = 50;
  var xMax = ((canvas.width / 2) + range);
  var xMin = ((canvas.width/2) - range);
  var yMax = ((canvas.height / 2) + range);
  var yMin = ((canvas.height/2) - range);

  var particles = Particles({
    density: 0,
    gravity: 0.03,
    vx: function() {
      return Math.random() * 1.5 - 0.75;
    },
    vy: 0,
    origin: function() {
      return {
        x: Math.random() * (xMax - xMin) + xMin,
        y: Math.random() * (yMax - yMin) + yMin
      };
    },
    color: 'black',
    wobble: function() {
      return Math.random() + 1 - 1.5;
    }
  }).loop(canvas, redrawFn);
};

function redrawFn(ctx) {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0, canvas.width, canvas.height);
}
