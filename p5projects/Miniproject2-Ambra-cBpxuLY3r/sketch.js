// let colpur = "#F7E4FA";
// let colYellow = "#F1E577";
// let colBlue = "#76AAEE";
// let colGreen = "#ABE478";
// let colRosered = "#F28080";

// let finalCol;

let x, y, px, py;

function setup() {
  createCanvas(600, 600);
  background(0,0,0); 
  
  colorMode(HSB);
}

function draw() {
//     if (mouseX<width/2 && mouseY<height/2) finalCol = colYellow;
//     if (mouseX>width/2 && mouseY<height/2) finalCol = colBlue;
//     if (mouseX<width/2 && mouseY>height/2) finalCol = colRosered;
//     if (mouseX>width/2 && mouseY>height/2) finalCol = colGreen;
  
//     stroke(finalCol);
//     strokeWeight(mouseY/50);
  
  stroke(frameCount %360, 25, 300);
  strokeWeight(mouseY/50);
  
  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;
  
  if (mouseIsPressed){
  line(x, y, px, py);
  line(width - x, y, width - px, py);
  line(x, height - y,  px, height -py);
  line(width - x, height - y, width - px, height -py);
  }
  
  
}


