let x = 0;
let y = 0;
let angle = 0;
let r = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  fill(0, 10);
  rect(-width / 2, -height / 2, width, height);
  x = r * cos(angle);
  y = r * sin(angle);
  angle += 0.01;
  r += 1;
  fill(255);
  ellipse(x, y, 10, 10);
  if (r > width) {
    r = 0;
  }
}
