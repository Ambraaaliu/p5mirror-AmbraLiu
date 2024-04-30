let pixelSize = 50;
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
  background(255,10);
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
    stroke(246,206,206);
    if (this.x % 20 === 0 && this.y % 20 === 0 ) {
      fill(0);
    } else {
      fill(255);
    }
    circle(this.x, this.y, pixelSize);
  }
  
  jitter() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}


