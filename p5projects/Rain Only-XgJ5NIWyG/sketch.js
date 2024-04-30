// CCLab Mini Project - 7.R Particles Template

 // Decide the initial number of particles.

let particles = [];
let isMoving = true;


function setup() {
  colorMode(HSB, 100);
  createCanvas(600, 600);
  
 

  // generate particles
  
}

function draw() {
  background(255, 55);
  
  
  //rain
  if (particles.length < 500 && isMoving == true) {
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
  
  

  

  
  
}

// (optional) Design interaction by using Mouse or Keyboard;
// For example:
// function mousePressed() {
//   // generate an object when mousePressed at the mouse position;
//   // and push it to the end of the array "particles"
//   // particles.push(new Particle(mouseX, mouseY));

//   for (let i = 0; i < particles.length; i++) {
//     particles[i].verticalstop();
//   }
//   isMoving = false;
//   console.log(particles.length);
  
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


