let s = 20;
let d = 2;
let p =  80;
let x;
let y;

//153,204,255 babyblue
//255,255,204 baby yellow
//0,0,204 darkblue
function setup() {
  createCanvas(600, 600);
  
  // for (let i = 0; i < 3; i++) {
  //   circle(i,height/2, 100);
  // }
  x = width;
  y = height;
}
function draw() {
  background(255,255,204);
  noStroke();
  
  
   //lowest Darkblue small layer
  for (let r = 0; r < x; r += d) {
    for (let t = 0; t < y; t += d) {
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
  
  //big circles and rectangle over the first layer
     for (let b = 0; b < 100; b++) {
        let r = random(600);
        fill(255,255,204);
        noStroke();
        circle(b+r/10,r/10,400);
    
        fill(255,255,204);
        noStroke();
        circle(r/25,b+r/2,150);
       
        fill(255,255,204);
        noStroke();
        rect(r/3*2,b+r/2,50);
    //pattern2 finish
     }  
  
  fill(153,204,255);
  arc(x/2.65*2, y/3, 300, 300, 0, PI+HALF_PI, OPEN);
  

  
  //center big layer
  for (let i = 0; i < x/2.65*2; i += s) { 
    for (let j = 0; j < y; j += s) {
      if ((i - 20) % 40 == 0 || (j - 20) % 40 == 0) {
        fill(0,0,204);
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
    
  
  //moving yellow
    for (let a = 0; a < 300; a++) {
     let r = random(600);
      //console.log(a);
    fill(255,255,204);
    rect(a+r/2, a+r*3,20);
      
    fill(255,255,204);
    rect(a+r, a-r,20);
}
  
  //moving blue
  for (let a = 0; a < 300; a++) {
     let r = random(600);
      //console.log(a);
    fill(0,0,204);
    rect(2*a, 2*a+r,20);
    
    // fill(0,0,204);
    // rect(a+r/2, a+r*3,20);    
}
  
  //left lower layer babyblue layer
  for (let p = 0; p < x/2.8; p += 3*d) {
    for (let l = 0; l < y; l += 3*d) {
       
      if ((p - 6) % 12 == 0 || (l - 6) % 12 == 0) {
        fill(153,204,255);
        rect(p, l, 3*d);  
      }
      if ((p - 6) % 12 == 0 && (l - 6) % 12 == 0){
          fill(255,255,204);
          rect(p, l, 3*d);  
      }
      if ((p - 6) % 12 != 0 && (l - 6) % 12 != 0){
          fill(255,255,204);
          rect(p, l, 3*d);
      }
    }
  }
  
  //moving darkblue layer at left
  for (let a = 0; a < 200; a++) {
     let r = random(200);
      //console.log(a);
    fill(0,0,204);
    rect(a+r/2, a+r*3,4);
      
    fill(0,0,204);
    rect(a+r, a-r,4);
}


//left big area
for (let i = 0; i < x/4; i += 2*s) { 
    for (let j = 320; j < y; j += 2*s) {
      if ((i - 40) % 80 == 0 || (j - 40) % 80 == 0) {
        fill(0,0,204);
        rect(i, j, 2*s);  
      }
      if ((i - 40) % 80 == 0 && (j - 40) % 80 == 0){
          fill(153,204,255);
          rect(i, j, 2*s); 
      }
      if ((i - 40) % 80 != 0 && (j - 40) % 80 != 0){
          fill(153,204,255);
          rect(i, j, 2*s);
      }
      }
    }
  
  for (let i = 200; i < x/2.65*1.3; i += s) { 
    for (let j = 200; j < y/3*2; j += s) {
      if ((i - 20) % 40 == 0 || (j - 20) % 40 == 0) {
        fill(0);
        rect(i, j, s);  
      }
      if ((i - 20) % 40 == 0 && (j - 20) % 40 == 0){
          fill(255);
          rect(i, j, s); 
      }
      if ((i - 20) % 40 != 0 && (j - 20) % 40 != 0){
          fill(255);
          rect(i, j, s);
      }
      }
    }
  
    for (let i = 80; i < x/4; i += s) { 
    for (let j = 0; j < y/20; j += s) {
      if ((i - 20) % 40 == 0 || (j - 20) % 40 == 0) {
        fill(240);
        rect(i, j, s);  
      }
      if ((i - 20) % 40 == 0 && (j - 20) % 40 == 0){
          fill(200);
          rect(i, j, s); 
      }
      if ((i - 20) % 40 != 0 && (j - 20) % 40 != 0){
          fill(200);
          rect(i, j, s);
      }
      }
    }
  fill(0,0,204);
  rect(140,500,100,200);
  
    

      
    // fill(0,0,204);
    // rect(a+r, a-r,4);
// for (let e = 0; 600/2.8 > e < 600/2.8 + 120; e += s) {
//     for (let g = 0; 600/1.5 > g < 600/1.5 + 160; g += s) {
//        //console.log(i);
//       //
//       if ((e - 20) % 40 == 0 || (g - 20) % 40 == 0) {
//         fill(0);
//         rect(e, g, s);  
//       }
//       if ((e - 20) % 40 == 0 && (g - 20) % 40 == 0){
//           fill(255);
//           rect(e, g, s);  
//       }
//       if ((e - 20) % 40 != 0 && (g - 20) % 40 != 0){
//           fill(255);
//           rect(e, g, s);
//       }
//     }
//   }

    


     for(let x = 20; x < x-20; x+=20){
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