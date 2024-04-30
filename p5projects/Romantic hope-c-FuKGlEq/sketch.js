
let gridSize = 100;
let s = 2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // console.log(checkMouse());
  
  // if(checkMouse()){
  //   fill(255,0,255);
  // }else{
  //   fill(255);
  // }
  // drawFace(width/2,height/2,100);
  for (i=0;i<width;i=i*s){
    for (j=0;j<height;j=j*s){
      drawFace(i,j,gridSize);
      
  }
  }
}

function drawFace(x,y,s){
  push();
  translate(x,y);
  rotate(frameCount*0.1);
  circle(0,0,s);
  circle(-s*0.2,-s*0.2,10);
  circle(s*0.2,-s*0.2,10);
  arc(0,0,s*0.3,s*0.3,0,PI);
  pop();
}

// function checkMouse(){
//   let value;
//   let d = dist(mouseX,mouseY,width/2,height/2);
//   if(d < 50){
//     value = true;
//   }else{
//     value = false;
//   }
//   return value;
// }