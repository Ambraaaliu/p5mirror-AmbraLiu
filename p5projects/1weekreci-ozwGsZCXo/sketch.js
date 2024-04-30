function setup() {
  createCanvas(500, 500);
  background(220);

  
}

function draw() {
  background(255, 255, 255);
  fill(245, 215, 69);
  noStroke();
  circle(130, 380, 250);
  //botton yellow circle
  
  fill(245, 215, 69);
  noStroke();
  circle(130, 250, 230);
  //top yellow circle
  
  fill(215, 13, 13);
  noStroke();
  circle(300, 420,150);
  //red circle
  
  // fill(146, 212, 255);
  // noStroke();
  // quad(480,480,480,400,380,330,380,470);
  // //blue quad
  
  fill(97, 25, 35);
  noStroke();
  quad(370,250,370,330,250,350,250,300);
  //brown quad
  
  fill(225, 216, 198);
  noStroke();
  quad(420,250,440,100,320,80,300,230);
  //grey quad
  
  fill(146,212,255);
  beginShape();
    vertex(480,380);//rb
    vertex(480,300);//rt
    vertex(430,280);
    vertex(380,300);
    vertex(380,400);
    vertex(425,410);
    vertex(429,410);
    vertex(445,390);
  endShape(CLOSE);
  //blue
  
}