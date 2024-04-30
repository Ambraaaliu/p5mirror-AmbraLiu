let flowers = [];

function setup() {
  colorMode(HSB, 100);
  createCanvas(600, 600);

  // generate particles
  for (let i = 0; i < 40; i++) {
    flowers[i] = new Flowers(random(width), random(height), random(0.2, 0.5));
  }
}

function draw() {
  background(255, 55);

  for (let i = 0; i < 40; i++) {
    flowers[i].show();
  }
}

// (optional) Design interaction by using Mouse or Keyboard;
// For example:
// function mousePressed() {
//   // generate an object when mousePressed at the mouse position;
//   // and push it to the end of the array "particles"
//   flowers.push(new Flower(mouseX, mouseY));
// }

class Flowers {
  // constructor function
  constructor(x, y, r) {
    // properties

    // this.x = width / 2;
    // this.y = height / 2;
    this.x = x;
    this.y = y;
    this.r = r;
    this.radius = [];
    this.color = [];
    this.colorsaturation = [];
    for (let i = 0; i < 10; i++) {
      this.radius[i] = random(50, 100);
      this.color[i] = random(55, 60);
      this.colorsaturation[i] = random(0, 100);
    }
  }

  // methods (functions)
  show() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    //fill(this.color[i], this.colorsaturation, 100);
    //beginShape();
    for (let i = 0; i < 40; i++) {
      fill(this.color[i], this.colorsaturation[i], 100);
      beginShape();
      for (let a = 0; a < TWO_PI; a += 0.1) {
        let offset = map(sin(a * 5 + frameCount * 0.08), -1, 1, -60, 20);
        let r = this.radius[i] + offset;
        let x = this.r*r * cos(a);
        let y = this.r*r * sin(a);
        vertex(x, y);
      }
      endShape();
    }
    pop();
  }
  // Implement (at least three) more methods(functions) for the particle's behaviors, for example:
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  doSomething() {
    //
  }
}
