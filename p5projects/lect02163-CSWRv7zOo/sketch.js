let x;
let y;
let a = 0;
function setup() {
  createCanvas(400, 400);
  x = 0;
  y = height/2;
}

function draw() {
  // background(0);
  //x = x + 10;
  let angle = frameCount;
  x = width/2 + a * cos(angle*0.1);
  //y = y0 +speed/variable
  //y = height/2 + 100 * sin(x*0.01);
  y = height/2 + a* sin(angle*0.1);
  noFill();
  circle(x, y, 20);
  a = a+0.1;

}