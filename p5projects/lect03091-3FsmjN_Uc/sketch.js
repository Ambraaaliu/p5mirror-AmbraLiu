let number = 15;
let cloud = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB,100);
  // for (let i = 0; i < number; i++) {
  //   cloud[i] = new Cloud(width/2, height/2, random(50, 100));
  //    // s[i] = random(50, 200);
  // }
  // cloud1 = new Cloud(width/2, height/2, 150);
  // cloud2 = new Cloud(width/4, height/4, 50);
  // cloud3 = new Cloud(width/4, height/4, 50);
}

function draw() {
  background(220,10);
  for (let i = 0; i < cloud.length; i++) {
  // cloud[i] = new Cloud(width/2, height/2, random(50, 100));
  cloud[i].show();
  cloud[i].move();
  cloud[i].bounce();
  cloud[i].color();
  }
//   cloud2.show();
//   cloud2.move();
//   cloud2.bounce();
  
//   cloud3.show();
//   cloud3.move();
//   cloud3.bounce();
}

function mousePressed() {
  cloud.push(new Cloud(mouseX, mouseY, random(50, 100)));
}


class Cloud {
  constructor(x,y,s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speedX = random(-5, 5);
    this.speedY = random(-3, 3);
    this.c = random(100);
  }
  color(){
    fill(this.c,30,100);
  }
  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    // fill(random(255),random(255),random(255));
    circle(0, 0, this.s);

    for (let a = 0; a < 2 * PI; a += PI / 6) {
      push();
      translate(0, 0);
      rotate(a);
     
      circle(this.s * 0.5, this.s * 0.3, this.s * 0.5);
      pop();
    }

    fill(random(255),random(255),random(255));
    circle(-this.s * 0.3, 0, this.s * 0.05);
    circle(this.s * 0.3, 0, this.s * 0.05);
    arc(0, 0, this.s * 0.3, this.s * 0.3, 0, PI);
    pop();
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  bounce(){
    if (this.x < this.s/2 || this.x > width-this.s/2){
      this.speedX = -this.speedX;
    }
    if (this.y < this.s/2 || this.y > height-this.s/2){
      this.speedY = -this.speedY;
    }
  }
}



