let x;
let y;

let a = 0;

function setup() {
  createCanvas(600, 600);
  x = 0;
  y = height/2;
  
  
}

function draw() {
  background(255);
  

  x += 1;
  y = height/2 + sin(x*0.03) * 100;
  

  drawCreature(x, y);

  if( x > width - 20 || x < 0 ){
    x = 0;
  }

  
}

function drawCreature(x, y) {
  push();
  translate(x, y);
  
  smooth();//green
  noStroke(0);
  fill(0,153,0);
  
  beginShape();
  vertex(-40,0);
  vertex(-40,-20);
  vertex(0,-60);
  vertex(40,-60);
  vertex(40,-40);
  vertex(20,-40);
  vertex(0,-20);
  vertex(0,0);
  vertex(-40,0);
  endShape();
  
  smooth();//yellow
  noStroke(0);
  fill(255,255,153);
  
  beginShape();
  vertex(0,0);
  vertex(0,-20);
  vertex(20,-40);
  vertex(40,-40);
  vertex(20,-20);
  vertex(20,0);
  vertex(0,0);
  endShape();
  
  stroke(0);//line
  strokeWeight(7);
  
  line(-40,0,40,0);
  line(-40,0,-40,-20);//left
  line(0,-20,0,0);//mid
  line(-40,-20,0,-60);//back
  line(20,-20,20,0);//right
  line(0,-60,40,-60);//top
  line(40,-60,40,-40);//mouse
  line(40,-40,20,-20);//jaw
  vertex(0,-20)
  vertex(20,-40);
  vertex(20,-40)
  vertex(40,-40);
  // YOUR CODE GOES HERE
  // introduce additional functions
  // for parts of your creature that
  // are repeated, and call them from
  // here

  pop();
}
