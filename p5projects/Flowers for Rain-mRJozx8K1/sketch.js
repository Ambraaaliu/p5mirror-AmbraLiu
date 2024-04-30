// CCLab Mini Project - 7.R Particles Template

 // Decide the initial number of particles.

let particles = [];
let flowers = [];


function setup() {
  colorMode(HSB, 100);
  createCanvas(396, 704);
  
  for (let i = 0; i < 20; i++) {
    flowers[i] = new Flowers(random(width), random(height), random(0.2, 0.5));
  }
 

  // generate particles
  
}

function draw() {
  background(255, 55);
  
  
  //rain
  if (particles.length < 500 ) {
    particles.push(
      new Particle(random(width), random(-height, 0), random(5, 40))
    );
  }
  
  for (let i = 0; i < 1; i++) {//splice
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
  
  for (let i = 0; i < 20; i++) {
    flowers.push (
      new Flowers(random(width), random(height), 0.01)
    );
  }
  for (let i = 0; i < 20; i++) {
      flowers[i].show();
      flowers[i].verticalmove();
      flowers[i].reappear();
    }

  

  
  
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
    this.ySpd = random(5, 9);
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
    this.ySpd = random(2, 5);
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




