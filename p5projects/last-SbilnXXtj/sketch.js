let pixelSize = 200;
let pixelArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let columns = width / pixelSize;
  let rows = height / pixelSize;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let pixel = new Pixel(j * pixelSize, i * pixelSize);
      pixelArray.push(pixel);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].display();
    pixelArray[i].jitter();
  }
}

class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    stroke(255);
    if (this.x % 20 === 0 && this.y % 20 === 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(this.x, this.y, pixelSize, pixelSize);
  }
  
  jitter() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}


