
let s = 20;
let d = 2;
let x ;
let y ;
function setup() {
  createCanvas(600, 600);
  
  
  x = width;
  y = height;
}

function draw() {
  background(255,255,204);
  noStroke();
  
  
   for (let r = 0; r < x; r += d) {
    for (let t = 0; t < y; t += d) {
      if ((r - 2) % 4 == 0 || (t - 2) % 4 == 0) {
        fill(153,204,255);
        rect(r, t, d);
      }
      if ((r - 2) % 4 == 0 && (t - 2) % 4 == 0){
          fill(255,255,204);
          rect(r, t, d);
      }
      if ((r - 2) % 4 != 0 && (t - 2) % 4 != 0){
          noFill(0);
          rect(r, t, d);
      }
   }
  }    
    fill(255,255,204);
    noStroke();
    circle(width/10,height/10,400);
    
    fill(255,255,204);
    noStroke();
    circle(width/25,height/2,150);
    //pattern2 finish
  
  for (let i = 0; i < x; i += s) {
    
    for (let j = 0; j < y; j += s) {
       //console.log(i);
      //
      if ((i - 20) % 40 == 0 || (j - 20) % 40 == 0) {
        fill(153,204,255);
        rect(i, j, s);
        
      }
      if ((i - 20) % 40 == 0 && (j - 20) % 40 == 0){
          fill(255,255,204);
          rect(i, j, s);
        
      }
      if ((i - 20) % 40 != 0 && (j - 20) % 40 != 0){
          noFill();
          rect(i, j, s);
      }
      
      }
    }
    fill(153,204,255);
    rect(200,240,40);
  
    fill(255,255,183);
    rect(240,280,40);
  
    fill(255,255,183);
    rect(width/3.34,height/4*2.8,s);
   //pattern1 finish
      // noFill();
      // rect(230,150,100);


  
  // YOUR CODE HERE
  // .. variables that accumulate values
  // .. loops
  // .. transformations
  // .. conditionals
  // .. randomness
  
  for(let x = 20; x < width-20; x+=20){
    // let y2 = random(100, 300);
        // line(x, 50, x, y2);

    
    let ran = random(0, 100);
    
    if(ran < 10){ // 0-10
      // stroke("red") // 10% of the time
      strokeWeight(5)
    }else if(ran < 30){ // 10-30
      // stroke("blue")  // 20% this is true
      strokeWeight(3)
    }else{  // 30 -100
      // stroke(0); // rest is this
      strokeWeight(1)
    }
    
    
    line(x, 50, x, 200);
  }
  saveCanvas('Ambra', 'png');
}
  
  
  
  
  // AFTER YOUR CODE HAS RUN:
  //saveCanvas('yourname', 'png');   // saves the canvas as a png image
