let cloud1;
let cloud2;

function setup() {
  createCanvas(400, 400);
  cloud1 = new Cloud(width/2,height/2, 50);
  cloud2 = new Cloud(width/2,height/2, 150);
}

function draw() {
  background(220);
  cloud1.show();
  
  cloud2.show();
  cloud2.move();
}

class Cloud{
  
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.s = 100;
  }

    show()
  {

  }
}