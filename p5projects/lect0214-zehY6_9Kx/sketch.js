let x;
let y;
let xSpeed;
let ySpeed;
let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  r = random(255);
  g = random(255);
  b = random(255);
  background(r, g, b);
  
}

function draw() {
  xSpeed = random(-10,10);
  ySpeed = random(-10,10);
  console.log(xSpeed);
  circle(x, y, 1);
  x = x + xSpeed;
  y = y + ySpeed;
  // if(x > width){
  //   x = 0;
  // }
  // if(y > height){
  //   y = 0;
  // }
}