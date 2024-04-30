let flowers = [];
let flowerCount = 0;

function setup() {
  colorMode(HSB, 100);
  createCanvas(600, 600);

  for (let i = 0; i < 2; i++) {
    flowers.push(new Flower(random(width), random(height), random(0.2, 0.5)));
  }
}

function draw() {
  background(255, 55);

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    flowers[i].reappear();
  }

}

function mousePressed() {
  if (flowerCount < 8) { 
    flowers.push(new Flower(mouseX, mouseY, random(0.2, 0.5)));
    flowerCount++;
  }
}

class Flower {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.color = random(55, 60);
    this.colorsaturation = random(0, 100);
    this.radius = random(50, 100);
    
    this.xSpd = 0;
    this.ySpd = -random(2, 5);

    let numLayers = int(random(3, 6));
    this.layers = [];
    for (let i = 0; i < numLayers; i++) {
      let layerRadius = this.radius - i * 10;
      let layerColor = random(55, 60);
      let layerSaturation = random(0, 100);
      let layerVertices = [];
      for (let a = 0; a < TWO_PI; a += 0.1) {
        let offset = map(sin(a * 5 + frameCount * 0.08), -1, 1, -60, 20);
        let r = layerRadius + offset;
        let x = this.r * r * cos(a);
        let y = this.r * r * sin(a);
        layerVertices.push(createVector(x, y));
      }
      this.layers.push({
        vertices: layerVertices,
        color: layerColor,
        saturation: layerSaturation
      });
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    for (let layer of this.layers) {
      fill(layer.color, layer.saturation, 100);
      beginShape();
      for (let vert of layer.vertices) {
        vertex(vert.x, vert.y);
      }
      endShape(CLOSE);
    }
    pop();
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
  }
}


