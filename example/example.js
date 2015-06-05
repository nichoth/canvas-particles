var Particles = require('../');

/*
  Example 5: Generating a load of random particles (with gravity)
*/
window.onload = function() {

  // Initialise an empty canvas and place it on the page
  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  document.body.appendChild(canvas);

  var p = Particles(canvas).loop();

};
