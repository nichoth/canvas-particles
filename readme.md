# canvas particles

Particle generator for html5 canvas animation

## example

```js
var Particles = require('canvas-particles');

window.onload = function() {

  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  document.body.appendChild(canvas);

  var p = Particles(canvas).loop();

};
```
