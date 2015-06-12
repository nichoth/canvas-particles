var Particles = require('../');

window.onload = function() {

  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);

  // falling particles with random x velocity and random origin
  var range = 50;
  var xMax = ((canvas.width / 2) + range);
  var xMin = ((canvas.width/2) - range);
  var yMax = ((canvas.height / 2) + range);
  var yMin = ((canvas.height/2) - range);

  var particles = Particles({
    gravity: 0.09,
    vx: function() {
      return Math.random() * 3 - 1.5;
    },
    vy: 0,
    origin: function() {
      return {
        x: Math.random() * (xMax - xMin) + xMin,
        y: Math.random() * (yMax - yMin) + yMin
      };
    }
  }).loop(canvas);

};
