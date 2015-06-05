module.exports = Particles;

function Particles(opts) {
  if ( !(this instanceof Particles) ) {
    return new Particles(opts);
  }
  this.opts = opts || {};
  this.maxParticles = this.opts.maxParticles || 500;
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
    { x: canvas.width / 2, y: canvas.width / 2 }
  ;

  // Erase canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  // create new particles
  for (var i = 5; i >= 0; i--) {
    ps.push(new Particle({
      origin: {
        x: canvas.width / 2,
        y: canvas.height / 2
      }
    }));
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

function getOrigin(origin) {
  if (typeof origin === 'function') {
    return origin();
  } else {
    return origin;
  }
}

function Particle(opts) {
  var o = getOrigin(opts.origin);
  this.x = o.x || 0;
  this.y = o.y || 0;
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
