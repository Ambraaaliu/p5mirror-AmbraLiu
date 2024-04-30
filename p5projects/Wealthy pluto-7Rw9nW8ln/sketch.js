let images = [];
let numImages = 140;
let imageWidth = 14;
let imageHeight = 10;

function preload() {
  for (let i = 2; i < numImages; i++) {
    let imageName = "FrontPre_" + i + ".gif";
    images[i] = loadImage(imageName);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // canvas.parent("fullpage-container");
}

function draw() {
  background(255);
  
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < numImages; i++) {
    image(images[i], x, y, imageWidth, imageHeight);
    x += imageWidth;
    if (x >= windowWidth) {
      x = 0;
      y += imageHeight;
    }
  }
}
