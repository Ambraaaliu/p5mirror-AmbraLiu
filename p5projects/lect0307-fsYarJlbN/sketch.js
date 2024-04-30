function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  drawCloud(width/2, height/2, 100);
  
  x+=random()
}

function drawCloud(u, v, s){
  fill(255);
  noStroke();
  circle(u,v,s);
  
  push();
  translate(u,v);
  rotate(framecount*0.04);
  pop();
  
  for(let a=0; a<2*PI; a+=PI/6){
    push();
    translate(u,v);
    rotate(a);
    
  }
  
  function move(){
    
  }
}