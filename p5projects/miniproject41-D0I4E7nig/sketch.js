let s = 20;
function setup() {
  createCanvas(600, 600);
  // for (let i = 0; i < 3; i++) {
  //   circle(i,height/2, 100);
  // }
}
function draw() {
  background(255);
  noStroke();
  //fill(random(255),random(255),random(255));
  for (let i = 0; i < width; i += s) {
    for (let j = 0; j < height; j += s) {
       console.log(i);
      //
      if ((i - 20) % 40 == 0 || (j - 20) % 40 == 0) {
        fill(224);
        rect(i, j, s);
      }
      if ((i - 20) % 40 == 0 && (j - 20) % 40 == 0){
          fill(164);
          rect(i, j, s);
      }
      if ((i - 20) % 40 != 0 && (j - 20) % 40 != 0){
          fill(164);
          rect(i, j, s);
      }
    }
  }
}

     // // let r = i%40 == 0;
        // // let t = j%40 == 0;
        // console.log(i);
        // fill(164);
        
//   for(let i = s/2; i< width; i+=s){
//     for(let j = s/2; j<height; j+=s){
//       // let d = dist(mouseX, mouseY, i, j);
//       let f = map(i, 0, sqrt(width**2+height**2), 0.1, 3);
//       let h = map(i, 0, sqrt(width**2+height**2), 0, 100);
//       let sat = map(angle, 0, 2*PI, 0, 100);
//       fill(h, sat, 100,50);
//       noStroke();

//       // push();
//       rectMode(CENTER);
//       //translate(i,j);
//       //rotate(angle);
//       //scale(f);
//       //rect(0, 0, s, s);
//       rect(width/2, height/2, s*f, s*f);

//pop();

//}
//angle+=PI/50;

//   fill(0);
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
