let img1, img2;
let x2 = 0;
let y2 = 0;
let easing = 0.05;
let repeatitions = 2;

let scrollSpeedX2;
let scrollSpeedY2;
let scrollSpeed2 = 5;

// let img2Height, img2Height;
// let windowHeight;

function preload() {
  img2 = loadImage("front5.jpeg");
  // img2 = loadImage('presentFrontImg2.png');
}

function setup() {
  createCanvas(500, 500);
  // img2Height = img2.height;
  // img2Height = img2.height;
  // windowHeight = window.innerHeight;
}

function draw() {
  background(255);

  //    let targetX = mouseX-img2.width/2;
  //   let dx = targetX - x;
  //   x += dx * easing;

  //   let targetY = mouseY-img2.height/2;
  //   let dy = targetY - y;
  //   y += dy * easing;

  scrollSpeedX2 = map(mouseX, 0, width, scrollSpeed2, -scrollSpeed2);
  scrollSpeedY2 = map(mouseY, 0, height, scrollSpeed2, -scrollSpeed2);
  x2 -= scrollSpeedX2;
  y2 -= scrollSpeedY2;
  if (x2 < -img2.width*(repeatitions-1)) {
    x2 = -img2.width*(repeatitions-1);
    scrollSpeedX2=0;
  }else if( x2 >0){
    x2 = 0;
    scrollSpeedX2=0;
  }
  
  if (y2 < -img2.height*(repeatitions-1)) {
    y2 = -img2.height*(repeatitions-1);
    scrollSpeedY2=0;
  }else if( y2 > 0){
    y2 = 0;
    scrollSpeedY2=0;
  }
  push();
  translate(x2, y2);
  for (let i = 0; i < repeatitions; i++) {
    for (let j = 0; j < repeatitions; j++) {
      let sx2 = img2.width;
      let sy2 = img2.height;
      // let sx = 250;
      // let sy = 250;
      image(img2, i * sx2, j * sy2, sx2, sy2);
    }
  }
  pop();

}
