/*
GIF CAPTURE TEMPLATE

Instructions:
_ Click on the button at the left-top corner to save/render your sketch as a GIF.
_ After clicking, frames will be recorded for 15 seconds.
_ Wait until the whole process is finished. 
    _ 1. First the button will reflect the capturing of 450 frames.
    _ 2. Next, you can then observe the rendering in the Console.
_ After the rendering is done, it will automatically produce a GIF animation. The .gif file will be downloaded into your "Downloads" folder.

Please don't change the configuration, such as the canvas size and the duration in html. Otherwise your GIF's filesize could be too large.
*/

let x1;
let y1;

let x2;
let y2;

let x3;
let y3;

var t = 0;

function setup() {
  createCanvas(540, 540);
  //background(0);
  fill(random(255));//change color to random seclect
  noStroke();
  x1 = width/2;
  
}

function draw() {
    background(0,5);
	
  
  // line(width/2,0,width/2,height);
  // stroke(126);
  
  
    let freq = frameCount * 0.05;
    let amp = 150;
    let sinValue1 = sin(freq) * amp;
    let cosValue1 = cos(freq) * amp;
    let sinValue2 = -sin(freq) * amp;
    let cosValue2 = -cos(freq) * amp;
  
    let modulo1 = frameCount % 48;
    fill(modulo1, 50, 200);
    ellipse(x1, y1, modulo1, modulo1);
    y1 = height/2 +sinValue1;

    x2 = width/3*0.7 + cosValue2;
    y2 = height/3*1.5 - sinValue2;
    fill(255, 255, 0); // yellow
    ellipse(x2, y2, 30, 30);

    x3 = width/3*2.3 + cosValue1;
    y3 = height/3*1.5 + sinValue1;
    fill(255, 255, 0); // yellow
    ellipse(x3, y3, 30, 30);

    var x4 = width * noise(t);
    var y4 = height * noise(t+5);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);

    noStroke();
    fill(r, g, b);
    ellipse(x4, y4, 120, 120);

    t = t + 0.01;
}
