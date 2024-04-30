let particles = [];
let isMoving = true;
let flowers = [];
let flowerCount = 0;
let mrel = false;
let state = 0;

function setup() {
  colorMode(HSB, 100);
  createCanvas(windowWidth, windowHeight);

  // generate particles
  // for (let i = 0; i < NUM_OF_PARTICLES; i++) {
  //   particles[i] = new Particle(random(windowWidth), 0);
  // }
  // for (let i = 0; i < 40; i++) {
  //   flowers[i] = new Flowers(random(windowWidth), random(windowHeight), random(0.2, 0.5));
  // }
}

function draw() {
  
  background(255, 55);
  
  if (state==0) {
    drawRain();
    console.log(particles.length);
  }
  else if (state==1) {
    drawFlower();
  }
  
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if (state==0) {
      p.verticalmove();
    }
     else if (state == 1) {
       p.verticalstop();
     }
    //p.reappear();
    p.display();
  }

    if (isMoving == false) {
      for (let i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        flowers[i].reappear();
      }
  }
  
}

function drawRain() {
    if (particles.length < 500 && keyIsPressed == false && mouseIsPressed == false) {
    particles.push(
      new Particle(random(windowWidth), random(-windowHeight, 0), random(5, 40))
    );
  }
  for (let i = 0; i < 1; i++) {
    if (particles[i].y > windowHeight) {
      particles.splice(i, 1);
    }
  }

  
}

function drawFlower() {
     if (mrel == true && flowerCount < 20 && state ==1) {
    flowers.push(new Flower(mouseX, mouseY, random(0.2, 0.5)));
    flowerCount++;
     mrel = false;
  }
  

}

function mouseReleased() {
  if (mouseButton == LEFT) {
    mrel = true;
  }
}

// (optional) Design interaction by using Mouse or Keyboard;
// For example:
function keyPressed() {
  // generate an object when mousePressed at the mouse position;
  // and push it to the end of the array "particles"
  // particles.push(new Particle(mouseX, mouseY));
  if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < particles.length; i++) {
      particles[i].verticalstop();
    }
     isMoving = false;
    //console.log(particles.length);
  if (flowers.length > 0) {
    for (let i = 0; i < 1; i++) {
      if (flowers[i].y < 0) {
        flowers.splice(i, 1);
      }
    }
  }
    state = 1;
  }else if (keyCode === RIGHT_ARROW) {
    for (let i of flowers){
    i.ySpd *= -1;
  }
  for (let i of particles){
    i.ySpd = i.cache;
  }
  
   
  particles.push(
      new Particle(random(windowWidth), random(-windowHeight, 0), random(5, 40))
    );
    state=0;
  }
  
}

// function mouseReleased() {
//  //  isMoving = true;
  
//   for (let i of flowers){
//     i.ySpd *= -1;
//   }
//   for (let i of particles){
//     i.ySpd = i.cache;
//   }
  
//   particles.push(
//       new Particle(random(windowWidth), random(-windowHeight, 0), random(5, 40))
//     );
  

// }
//

class Particle {
  // constructor function
  constructor(x, y, s) {
    // properties
    this.x = x;
    this.y = y;
    this.s = s;
    this.size = random(5, 8);
    this.circlepo = random(-10, 10);
    this.color = random(55, 60);
    this.colorsaturation = random(0, 100);
    this.xSpd = 0;
    this.ySpd = random(2, 5);
    this.cache = this.ySpd;
  }

  // methods (functions)
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    fill(this.color, this.colorsaturation, 100);
    noStroke();
    //circle(this.circlepo,this.circlepo, this.size);
    beginShape();
    vertex(this.s * 0.5, 0);
    vertex(this.s * 1, 0);
    vertex(this.s * 1.3, 8);
    vertex(this.s * 1, this.s * 0.5);
    vertex(this.s * 1.2, 0);
    endShape();

    pop();
  }
  // Implement (at least three) more methods(functions) for the particle's behaviors, for example:
  verticalmove() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  verticalstop() {
    this.ySpd = 0;
    this.y += this.ySpd;
  }

  checkClick() {}
  reappear() {
    if (this.x < 0) {
      this.x = windowWidth;
    } else if (this.x > windowWidth) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = windowHeight;
    } else if (this.y > windowHeight) {
      this.y = 0;
    }
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

    let numLayers = int(random(3,6));
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
      this.x = windowWidth;
    } else if (this.x > windowWidth) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = windowHeight;
    } else if (this.y > windowHeight) {
      this.y = 0;
    }
  }
}


