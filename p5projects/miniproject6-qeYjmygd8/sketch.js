/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new twerkingboy(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display(); 
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class twerkingboy{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.speedX = 1;
    this.speedY = 1;
    
  }  
  update(){
    this.x += this.speedX;
    if (this.x > width / 2 + 50 || this.x < width / 2) {
      this.speedX *= -1;
    }
    this.y += this.speedY;
    if (this.y > height / 2 + 50 || this.y < height / 2) {
      this.speedY *= -1;
    }
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // this.x += this.speedX;
    // this.y += this.speedY;
  }
  

  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    this.drawCreature(this.x, this.y, 1.0);
    this.drawReferenceShapes();
    pop();
  } 

    // ******** //
    // ⬇️ draw your dancer here ⬇️  
    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
   

  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  drawCreature(x, y, s) {
    scale(s);
    s = sin(frameCount * 0.00001);
    let t = map(s, -1, 1, 0, 360);
    
    this.drawbody(0,0);
    this.drawbuns(0,0);
    this.drawArm(40, 30, cos(t) * 40); 
    
  }
  
  drawbody(x,y){
    push();
    translate(x, y);
    circle(-30,-70,80);//ear
    circle(70,-25,80);//ear
    circle(0,0,100);//head
    
    fill(255);//back
    beginShape();
    vertex(38,30);
    vertex(50,40);
    vertex(25,50);
    vertex(25,40);
    endShape();
    
    noFill();
    circle(-25,5,40);
    circle(10,5,40);
    circle(-18,10,1);
    circle(7,10,1);
    arc(-5,30,10,15,0,PI*2/3);
    
    fill(255);//arm
    rect(30,65,10,30);
    rect(50,65,10,30);
    noStroke();
    circle(30,95,10);
    circle(50,95,10);
    pop();
  }
  
  drawArm(x, y, a, s) {
    push();
    translate(x, y);
    rotate(a);
    scale(s);
    rectMode(CENTER);
    rect(15,30,10,40);//arm
    fill(random(360), random(360), random(360));
    circle(20,70,15);//hand
    pop();
  }
  
  drawbuns(x,y,s){
    push();
    translate(x, y);
    fill(255,204,229);
    beginShape();
    vertex(50,40);
    vertex(25,50);
    vertex(25,60);
    vertex(40,80);
    vertex(50,76);
    endShape();
    
    
    arc(53,57,55,40,PI+HALF_PI*0.85,HALF_PI);
    arc(50,58,50,35,PI+HALF_PI,HALF_PI);
    
    pop();
  
  }
  
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/