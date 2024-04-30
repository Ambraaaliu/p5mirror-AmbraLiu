let s = 20;
let d = 2;
let p =  80;


//153,204,255 babyblue
//255,255,204 baby yellow
function setup() {
  createCanvas(600, 600);
  
  // for (let i = 0; i < 3; i++) {
  //   circle(i,height/2, 100);
  // }
  
}
function draw() {
  background(255,255,204);
  noStroke();
  
  // fill(random(255),random(255),random(255));
 
  for (let r = 0; r < width; r += d) {
    for (let t = 0; t < height; t += d) {
      if ((r - 2) % 4 == 0 || (t - 2) % 4 == 0) {
        fill(0,0,204);
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
     for (let b = 0; b < 100; b++) {
        let r = random(600);
        fill(255,255,204);
        noStroke();
        circle(b+r/10,r/10,400);
    
        fill(255,255,204);
        noStroke();
        circle(r/25,b+r/2,150);
    //pattern2 finish
     }  
  for (let i = 0; i < width; i += s) {
    
    for (let j = 0; j < height; j += s) {
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
    // fill(153,204,255);
    // rect(400,Math.random(),80);
    for (let a = 0; a < 300; a++) {
     let r = random(600);
      //console.log(a);
    fill(255,255,183);
    rect(a+r/2, a+r*3,20);
      
    fill(255,255,183);
    rect(a+r, a-r,20);
}
//     fill(153,204,255);
//     rect(400, Math.floor(random(600)),80);
  
//     fill(255,255,183);
//     rect(240,320,160);
   
  // function randomNoFill(ran){
  //   let randomNum = Math.floor(Math.random() * ran);
    
  //}
  // for (let arr = 0; arr < width; arr += w) {
  //      let randomNum = Math.floor(Math.random() * arr);
  //   fill(153,204,255);
  //   rect(randomNum,400,80);
       
  
      

  
  
    
    // fill(255,255,183);
    // rect(width/3.34,height/4*2.8,s);
   //pattern1 finish
      // noFill();
      // rect(230,150,100);


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

  //
}