# canvas particles

Particle generator for html5 canvas animation

## example

```js
var Particles = require('canvas-particles');

window.onload = function() {

  // Initialise an empty canvas and place it on the page
  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  // black canvas
  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);
  var particles = Particles().loop(canvas);

};

```
