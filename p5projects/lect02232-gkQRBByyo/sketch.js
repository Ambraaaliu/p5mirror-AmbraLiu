let s = 50;
let angle = 0;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB,100);
}

function draw() {
  background(220);
  
  for(let i = s/2; i< width; i+=s){
    for(let j = s/2; j<height; j+=s){
      let d = dist(mouseX, mouseY, i, j);
      let f = map(d, 0, sqrt(width**2+height**2), 0.1, 3);
      let h = map(d, 0, sqrt(width**2+height**2), 0, 100);
      let sat = map(angle, 0, 2*PI, 0, 100);
      fill(h, sat, 100,50);
      noStroke();
      
      push();
      rectMode(CENTER);
      translate(i,j);
      rotate(angle);
      scale(f);
      rect(0, 0, s, s);
      //rect(0, 0, s*f, s*f);
      
      pop();
      
    }
  }
  angle+=PI/50;
}