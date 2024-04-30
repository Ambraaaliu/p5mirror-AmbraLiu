
let number = 100;
let x = [];
let y = [];
let speedX = [];
let speedY = [];


function setup() {
  createCanvas(400, 400);

for (let i = 0; i< number; i++){
  console.log(i);
  x[i] = width/2;
  y[i] = height/2;
  speedX[i] = random(-5,5);
  speedY[i] = random(-5,5);
}
}  


function draw() {
  background(220);
  for (let i = 0; i< x.length; i++){
  drawFace(x[i],y[i],100);
    //move
    x[i] += speedX[i];
    y[i] += speedY[i];
  
  //bounce
  if( x[i] > width - 50 || x[i] < 50 ){
    speedX[i] = -speedX[i];
  }
 if( y[i] > height -50 || y[i] < 50 ){
    speedY[i] = -speedY[i];
  }
  }
}

function mousePressed(){
  x.push(mouseX);
  y.push(mouseY);
  speedX.push(random(-5,5));
  speedY.push(random(-5,5));
}

function drawFace(a,b,s){
  fill(255);
  circle(a,b,s);
  fill(0);
  circle(a-s*0.3,b,s*0.05);
  circle(a+s*0.3,b,s*0.05);
  arc(a,b,s*0.3,s*0.3,0,PI);
}
