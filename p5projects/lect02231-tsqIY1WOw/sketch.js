let angle = 0;
function setup() {
  createCanvas(400, 400);
  //rectMode(CENTER);
}

function draw() {
  background(220);
  noFill();
  push();
  translate(width/2,height/2);//(0,0)--(width/2,height/2)
  rotate(angle);
  //translate(width/2,height/2);
  rectMode(CENTER);
  rect(0, 0,200);//(change to original)
  angle+=PI/50;
  pop();
  
  push();
  translate(width/4,height/4);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,150);
  pop();
  angle+=PI/50;
  
  
}