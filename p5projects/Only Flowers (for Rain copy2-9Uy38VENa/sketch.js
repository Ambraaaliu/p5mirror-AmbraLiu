let flowers = [];
let newFlowers = [];

function setup() {
  colorMode(HSB, 100);
  createCanvas(600, 600);

  // generate particles for the first layer
  for (let i = 0; i < 5; i++) {
    flowers[i] = new Flowers(random(width), random(height), random(0.2, 0.5), random(50, 100), random(55, 60), random(0, 100), 0);
  }
}

function draw() {
  background(255, 55);

  // loop through the flowers array and show each flower
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
  }

  // generate a new layer of flowers if the mouse is pressed
  if (mouseIsPressed) {
    // loop through the existing flowers and generate a new flower for each one
    // loop through the existing flowers and generate a new flower for each one
    let newFlowers = [];
    for (let i = 0; i < flowers.length; i++) {
      let parent = flowers[i];
      let x = parent.x;
      let y = parent.y;
      let r = parent.r; // half the size of the parent
      let color = parent.color ; // complementary blue color
      let saturation = random(50, 100); // random saturation
      let radius = parent.radius / 2; // half the radius of the parent
      let depth = parent.depth + 1; // move new flowers to top layer
      let newFlower = new Flowers(x, y, r, radius, color, saturation, depth);
      newFlowers.push(newFlower);
    }


    // add the new flowers to the end of the existing array
    flowers = flowers.concat(newFlowers);

}
}

class Flowers {
  // constructor function
  constructor(x, y, r, radius, color, saturation, depth) {
    // properties
    this.x = x;
    this.y = y;
    this.r = r;
    this.radius = radius;
    this.color = color;
    this.saturation = saturation;
    this.depth = depth; // layer depth
  }

  // methods (functions)
  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.color, this.saturation, 100);
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let offset = map(sin(a * 5 + frameCount * 0.08), -1, 1, -60, 20);
      let r = this.radius + offset;
      let x = this.r * r * cos(a);
      let y = this.r * r * sin(a);
      vertex(x, y);
    }
    endShape();
    pop();
  }
}
