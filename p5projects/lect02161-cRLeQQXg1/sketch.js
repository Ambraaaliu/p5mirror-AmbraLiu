// postition = position + speed/variable
// x = A*sin(f)
// map
// angle = angle + speed/variable
let x1;
let y1;
let x2;
let y2;
function setup() {
  createCanvas(400, 400);
  x1 = width/2;
  y1 = height/3;
  
  x2 = width/2;
  y2 = height/2;
}

function draw() {
  background(220);
  circle(x1, y1, 30);
  x1 = width/2 +100*sin(frameCount*0.1);
  // position = position +speed
  circle(x2, y2, 30);
  x2 = map(sin(frameCount*0.1),-1,1,0,200);
  console.log(radians(180));
}