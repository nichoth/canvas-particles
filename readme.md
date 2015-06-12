# canvas particles

Particle generator for html5 canvas animation

## examples

Default options create particles with zero gravity and random x and y velocities. [Demo](https://8d1637e4862d0a27ec6e2c024071adcca54fb393.htmlb.in/).

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

Falling particles with random origin and random x velocity. [Demo](https://46d4f2710256d480010a4f5574809031ee2fbcdc.htmlb.in/).

```js
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 500;
canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
document.body.appendChild(canvas);

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
```

## Configuration

```js
// options and their defaults, none are required
var particles = Particles({
  maxParticles: 500,  // max number of particles to keep in memory
  origin: {  // pass a hash or a function that returns a hash
    x: canvas.width / 2,
    y: canvas.height / 2
  },
  size = 2,
  vx = Math.random() * 10 - 5,  // x velocity - can be function or number
  vy = Math.random() * 10 - 5,  // y velocity - can be function or number
  gravity = 0,
  color = 'white'  // string or function
})
```
