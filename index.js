module.exports = Particles;

function Particles(canvas, opts) {
  if ( !(this instanceof Particles) ) {
    return new Particles(canvas, opts);
  }
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.opts = opts || {};

  // black canvas
  this.ctx.fillRect(0, 0, canvas.width, canvas.height);

  this.ps = [];
}

// main loop
Particles.prototype.loop = function() {
  setInterval(function() {
    this.draw();
  }.bind(this), 30);
  return this;
};

Particles.prototype.draw = function draw() {
  var ps = this.ps;
  // Erase canvas
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);

  // create new particles
  for (var i = 5; i >= 0; i--) {
    ps.push(new Particle({
      startX: this.canvas.width / 2,
      startY: this.canvas.height / 4
    }));
  }

  // remove old particles
  // todo: change this so it removes them when they fall off the canvas
  if (ps.length > 500) {
    ps = ps.slice(ps.length-500);
  }

  ps.forEach(function(p) {
    p.update();
    // Draw a circle particle on the canvas
    this.ctx.beginPath();
    this.ctx.fillStyle = p.color;
    // After setting the fill style, draw an arc on the canvas
    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }, this);
};

function Particle(opts) {
  this.x = opts.startX || 0;
  this.y = opts.startY || 0;
  this.size = opts.size || 2;
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 -5;
  this.gravity = opts.gravity || 0;
  this.color = opts.color || 'white';
}

Particle.prototype.update = function update() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;
};
