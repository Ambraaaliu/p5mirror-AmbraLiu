class Flower {
  // constructor function
  constructor(x,y,r) {
    // properties
    this.x = width/2;
    this.y = height/2;
    this.r = r;
    this.radius = 80;
    
  }

  // methods (functions)
  show() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    //fill()
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1){
      let offset = map(sin(a * 5 + frameCount * 0.01), -1, 1, -50, -5);
      let r = this.radius + offset;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape();
    pop();
  }
  // Implement (at least three) more methods(functions) for the particle's behaviors, for example:
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  doSomething() {
    //
  }
}
