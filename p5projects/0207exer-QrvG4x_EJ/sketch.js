let x;
let y;
function setup() {
  createCanvas(400, 400);
  
  x = 0;
  y = 0;
}

function draw() {
  //x=0;
  //fill(255);
  background(255);
  noFill();
  circle(x, y, 200);
  fill(0);
  circle(x - 40, y, 10);
  circle(x + 40, y, 10);
  noFill();
  arc(x, y +10, 20, 20, 0, PI);
  
  x = x + 1;
  y = y + 1;
  console.log(x);
}