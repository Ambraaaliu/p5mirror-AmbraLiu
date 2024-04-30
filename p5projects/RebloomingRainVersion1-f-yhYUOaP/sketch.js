let particles = [];
let isMoving = true;
let flowers = [];

function setup() {
  colorMode(HSB, 100);
  createCanvas(600, 600);

  // generate particles
  // for (let i = 0; i < NUM_OF_PARTICLES; i++) {
  //   particles[i] = new Particle(random(width), 0);
  // }
  // for (let i = 0; i < 40; i++) {
  //   flowers[i] = new Flowers(random(width), random(height), random(0.2, 0.5));
  // }
}

function draw() {
  background(255, 55);

  if (particles.length < 500 && mouseIsPressed == false) {
    particles.push(
      new Particle(random(width), random(-height, 0), random(5, 40))
    );
  }
  for (let i = 0; i < 1; i++) {
    if (particles[i].y > height) {
      particles.splice(i, 1);
    }
  }

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.verticalmove();
    //p.reappear();
    p.display();
  }
  
  
  for (let i = 0; i < 50; i++) {
    flowers.push (
      new Flowers(random(width), random(height), random(0.1, 0.4))
    );
  }
  if (isMoving == false) {
    for (let i = 0; i < 50; i++) {
      flowers[i].show();
      flowers[i].verticalmove();
      flowers[i].reappear();
    }
  }
}

// (optional) Design interaction by using Mouse or Keyboard;
// For example:
function mousePressed() {
  // generate an object when mousePressed at the mouse position;
  // and push it to the end of the array "particles"
  // particles.push(new Particle(mouseX, mouseY));

  for (let i = 0; i < particles.length; i++) {
    particles[i].verticalstop();
  }
   isMoving = false;
  console.log(particles.length);
  
  
  
  for (let i = 0; i < 1; i++) {
    if (flowers[i].y < 0) {
      flowers.splice(i, 1);
    }
  }
}

function mouseReleased() {
 //  isMoving = true;
  
  for (let i of flowers){
    i.ySpd *= -1;
  }
  for (let i of particles){
    i.ySpd = i.cache;
  }
  
  particles.push(
      new Particle(random(width), random(-height, 0), random(5, 40))
    );
  

}
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
  }

  checkClick() {}
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

class Flowers {
  // constructor function
  constructor(x, y, r) {
    // properties

    // this.x = width / 2;
    // this.y = height / 2;
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpd = 0;
    this.ySpd = -random(2, 5);
    this.radius = [];
    this.color = [];
    this.colorsaturation = [];
    for (let i = 0; i < 10; i++) {
      this.radius[i] = random(50, 100);
      this.color[i] = random(55, 60);
      this.colorsaturation[i] = random(0, 100);
    }
  }

  // methods (functions)
  show() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    //fill(this.color[i], this.colorsaturation, 100);
    //beginShape();
    for (let i = 0; i < 40; i++) {
      fill(this.color[i], this.colorsaturation[i], 100);
      beginShape();
      for (let a = 0; a < TWO_PI; a += 0.1) {
        let offset = map(sin(a * 5 + frameCount * 0.08), -1, 1, -60, 20);
        let r = this.radius[i] + offset;
        let x = this.r*r * cos(a);
        let y = this.r*r * sin(a);
        vertex(x, y);
      }
      endShape();
    }
    pop();
  }
  // Implement (at least three) more methods(functions) for the particle's behaviors, for example:
  verticalmove() {
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


