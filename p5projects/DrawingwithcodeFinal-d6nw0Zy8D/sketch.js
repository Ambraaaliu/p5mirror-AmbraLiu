function setup() {
  createCanvas(500, 500);
  background(220);

  
}

function draw() {
  background(255, 255, 255);
  
  fill(245,215,69);
  noStroke();
  ellipse(35,250,60,80);
  //left ear
  
  fill(245, 215, 69);
  noStroke();
  circle(130, 380, 250);
  //botton yellow circle
  
  
  fill(245, 215, 69);
  noStroke();
  circle(130, 250, 210);
  //top yellow circle
  
  noFill();
  stroke(0);
  bezier(60, 375, 55, 355, 95, 355, 90, 375);
  //left eyebrow
  bezier(160, 375, 155, 355, 195, 355, 190, 375);
  //right eyebrow

  fill(0);
  noStroke();
  circle(75,390,20);
  circle(175,390,20);
  circle(125,430,40);
  
  fill(215, 13, 13);
  noStroke();
  circle(300, 420,150);
  //red circle
  
  // fill(146, 212, 255);
  // noStroke();
  // quad(480,480,480,400,380,330,380,470);
  // //blue quad
  
  //fill(97, 25, 35);
  //noStroke();
  //quad(370,250,370,330,250,350,250,300);
  //brown quad
  
  
  fill(146,212,255);
  beginShape();
    vertex(480,380);//rb
    vertex(480,300);//rt
    vertex(430,280);//toppest 
    vertex(380,300);
    vertex(372,400);
    vertex(425,410);
    vertex(429,410);
    vertex(445,390);
  endShape(CLOSE);
  //blue
  
   //fill(97, 25, 35);
  //noStroke();
  //quad(370,250,370,330,250,350,250,300);
  //brown quad  
  fill(97, 25, 35);
  beginShape();
    vertex(370,260);
    vertex(370,330);
    vertex(250,350);
    vertex(245,250);
    vertex(230,225);
    vertex(300,200);
    vertex(380,240);
  endShape(CLOSE);
  
  fill(225, 216, 198);
  noStroke();
  quad(430,260,480,70,340,30,300,200);
  //grey quad
  
  translate(400, 80);
  scale(1);
  rotate(PI / 9);
  translate(-400, -80);
  fill(255);
  noStroke();
  ellipse(400,80,70,40);
  //rotate ellipse
  

}