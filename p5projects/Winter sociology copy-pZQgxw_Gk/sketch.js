let rectSize = 2;
let cricleSize = 10;
let s = 20;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
}

function draw() {
  fill(0);
  // for (let angle = 0; angle < 2 *PI; angle += PI/6 ){
  // //   circle(width/2, height/2, i);
  //    for (let r = 0; r < 300; r+= 50){
  //     let x = r * cos(angle) + width/2;
  //     let y = r * sin(angle) + height/2;
  //     let s = map(r, 0, 300, 10, 30);
  //     let h = map(r, 0, 300, 0, 100);
  //     let sat = map(angle, 0, 2*PI, 0, 100);
  //     fill(h, sat, 100);
  //     noStroke();
  //     circle(x, y, 10);
  //    }
  
  for (let r = 0; r < width; r+= 50){
    rect(width/2, height/2, r);
    let angle = PI/4;
      let x = r * cos(angle) + width/2;
      let y = r * sin(angle) + height/2;
      rect(x, y, 10);
  }
}