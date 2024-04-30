let letter = [];
let l = ["l", "o", "u", "y", "a", "n"];

function setup() {
  colorMode(HSB, 100); 
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    letter[i] = new Letter(
      l[i % l.length],
      random(width),
      random(height),
      random(50, 100)
    );
  }
}

function draw() {
  background(0, 15);

  for (let i = 0; i < letter.length; i++) {
    letter[i].show();
    letter[i].move();
    //letter[i].bounce();
    // if (mouseIsPressed){//grab the letter
    //   for (let i = 0; i < letter.length; i++) {
    //     if (letter[i].mouseOver()){
    //       letter[i].x = mouseX;
    //       letter[i].y = mouseY;
    //     }
    //   }
    // }
  }
}

function mousePressed() {
  for (let i = 0; i < letter.length; i++) {
    if (letter[i].mouseOver()) {
      letter[i].colorChange(letter[i]); //change letter colo
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < letter.length; i++) {
    if (letter[i].mouseOver()) {
      letter[i].colorChange(letter[i]); //change letter colo
    }
  }
}

class Letter {
  constructor(l, x, y, s) {
    this.l = l;
    this.x = x;
    this.y = y;
    this.s = s;
    this.color = random(100);
    this.speedX = random(-5, 5);
    this.speedY = random(-3, 3);
  }

  show() {
    fill(this.color, 50, 100);
    textSize(this.s);
    text(this.l, this.x, this.y);
    // stoke(255);
    // noFill();
    // rectMode(CENTER);
    // rect(this.x, this.y, this.s, this.s);
  }

  move() {
    this.x += random(-2, 2); //this.speedX;
    this.y += random(-2, 2); //this.speedY;
  }

  mouseOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.s / 2) {
      return true;
    } else {
      return false;
    }
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }
  colorChange(other) {
    // this.color = random(100);
    other.color = random(100);
  }
}