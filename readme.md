# canvas particles

Particle generator for html5 canvas animation

## examples

Default options create particles with zero gravity and random x and y velocities. [Demo](https://8d1637e4862d0a27ec6e2c024071adcca54fb393.htmlb.in/).

```js
var Particles = require('canvas-particles');

window.onload = function() {

  // Create an empty canvas and place it on the page
  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  // black canvas
  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);

  var particles = Particles().loop(canvas, redrawFn);
};

// called on every frame before the particles happen
function redrawFn(ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, canvas.width, canvas.height);
}
```

Falling particles with random origin and random x velocity. [Demo](https://f62107c4169d75f8e6fa03f66cb2b9c85c447881.htmlb.in).

```js
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
  vx: Math.random() * 10 - 5,  // x velocity - can be function or number
  vy: Math.random() * 10 - 5,  // y velocity - can be function or number
  gravity: 0,
  color: 'white',  // string or function
  wobble: function() {} // change the x velocity on each iteration
})
```
