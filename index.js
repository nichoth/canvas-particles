var defined = require('defined');

module.exports = Particles;

function Particles(opts) {
  if ( !(this instanceof Particles) ) {
    return new Particles(opts);
  }
  this.opts = defined(opts, {});
  this.maxParticles = defined(this.opts.maxParticles, 500);
  this.density = defined(this.opts.density, 5);
  this.ps = [];
}

// main loop
Particles.prototype.loop = function(canvas) {
  setInterval(function() {
    this.draw(canvas);
  }.bind(this), 30);
  return this;
};

Particles.prototype.draw = function draw(canvas) {
  var ps = this.ps;
  var ctx = canvas.getContext('2d');
  this.opts.origin = this.opts.origin ||
    { x: canvas.width / 2, y: canvas.height / 2 }
  ;

  // Erase canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  // create new particles
  for (var i = this.density; i >= 0; i--) {
    ps.push(new Particle(this.opts));
  }

  // remove old particles
  if (ps.length > this.maxParticles) {
    ps = ps.slice(ps.length - this.maxParticles);
  }

  ps.forEach(function(p) {
    p.update();
    // Draw a circle particle on the canvas
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }, this);
};

function callOrNot(opt) {
  if (typeof opt === 'function') {
    return opt();
  } else {
    return opt;
  }
}

function Particle(opts) {
  var o = callOrNot(opts.origin);
  this.x = defined(o.x, 0);
  this.y = defined(o.y, 0);
  this.size = defined(opts.size, 2);
  var vx = callOrNot(opts.vx);
  var vy = callOrNot(opts.vy);
  this.vx = defined(vx, Math.random() * 10 - 5);
  this.vy = defined(vy, Math.random() * 10 -5);
  this.gravity = defined(opts.gravity, 0);
  this.color = defined(callOrNot(opts.color), 'white');
  this.wobble = defined(opts.wobble, function(){/* noop */});
}

Particle.prototype.update = function update() {
  this.x += (this.vx + this.wobble());
  this.y += this.vy;
  this.vy += this.gravity;
};
