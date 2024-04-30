function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(255);
}

function draw() {
  let H = map(mouseX,0,width,0,100);
  let S = map(mouseY,0,height,0,100);
  
  //background(H,S, 100);
  fill(H,S,100);
  noStroke();
  circle(mouseX, mouseY, 30);
  
  console.log(mouseX);
  
}