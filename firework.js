let canvas;
let fireworks = [];
let gravity;

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent(document.querySelector(".firework-wrapper"));
  gravity = createVector(0, 0.2);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255);
}

function draw() {
  background('#09001d');

  const textVal = "100%";
  textSize(150);
  textFont("Poppins");
  textAlign(CENTER, CENTER);

  const txtW = textWidth(textVal);
  const txtH = textAscent() + textDescent();

  const paddingX = 40;
  const paddingY = 30;

  const bgX = width / 2 - txtW / 2 - paddingX;
  const bgY = height / 2 - txtH / 2 - paddingY;
  const bgW = txtW + paddingX * 2;
  const bgH = txtH + paddingY * 2;

  // 🎨 Dégradé sous le texte
  const ctx = drawingContext;
  const gradient = ctx.createLinearGradient(bgX, bgY, bgX + bgW, bgY + bgH);
  gradient.addColorStop(0, "transparent");
  gradient.addColorStop(0.5, "#dd743f");
  gradient.addColorStop(1, "transparent");

  ctx.save();
  ctx.fillStyle = gradient;
  ctx.fillRect(bgX, bgY, bgW, bgH);
  ctx.restore();

  // ✏️ Texte blanc
  fill(255);
  noStroke();
  text(textVal, width / 2, height / 2);

  // 🎆 Fireworks
  if (random() < 0.05) fireworks.push(new Firework());
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    if (fireworks[i].hasExploded && fireworks[i].particles.length === 0) {
      fireworks.splice(i, 1);
    }
  }
}




const colors = [
  { r: 128, g: 0, b: 201 },
  { r: 246, g: 148, b: 32 },
  { r: 32, g: 246, b: 50 },
  { r: 222, g: 33, b: 33 },
  { r: 232, g: 16, b: 178 },
  { r: 16, g: 232, b: 225 },
  { r: 255, g: 217, b: 0 },
  { r: 0, g: 255, b: 115 },
  { r: 63, g: 47, b: 237 },
];

class Particle {
  constructor(x, y, radius, angle, r, g, b) {
    this.pos = createVector(x, y);
    this.radius = radius;

    if (!angle) {
      this.vel = createVector(0, -random(12, 14));
      this.firework = true;
      this.r = 255;
      this.g = 255;
      this.b = 255;
    } else {
      this.vel = p5.Vector.fromAngle(radians(angle));
      this.vel.mult(random(3, 10));
      this.firework = false;
      this.r = r;
      this.g = g;
      this.b = b;
    }

    this.trail = [];
    this.lifespan = 255;
    this.acc = createVector(0, 0);
  }

  draw() {
    fill(this.r, this.g, this.b, this.lifespan);
    circle(this.pos.x, this.pos.y, this.radius);
    for (let p of this.trail) {
      circle(p.x, p.y, this.radius);
    }
  }

  update() {
    this.addForce(gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.trail.push({ x: this.pos.x, y: this.pos.y });
    if (this.trail.length > 10) this.trail.shift();

    if (!this.firework) {
      this.vel.mult(0.97);
      this.lifespan -= 7;
    }

    this.draw();
  }

  addForce(force) {
    this.acc.add(force);
  }
}

class Firework {
  constructor() {
    this.firework = new Particle(random(width), height, 2);
    this.hasExploded = false;
    this.particles = [];
  }

  update() {
    if (!this.hasExploded) {
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.hasExploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    let color = random(colors);
    for (let i = 0; i < 360; i += 20) {
      this.particles.push(
        new Particle(
          this.firework.pos.x,
          this.firework.pos.y,
          2,
          i,
          color.r,
          color.g,
          color.b
        )
      );
    }
  }
}
