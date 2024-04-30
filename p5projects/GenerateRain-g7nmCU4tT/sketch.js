function setup() {
  createCanvas(500, 500);
  
}

function draw() {

  background (255);
  translate(width/2, height/2);
  stroke (0, 0, 0);

  noFill ();
  
  let t = 0;
  beginShape () ;
  for (let a = -PI/2; a < PI/2; a+=0.01) {
    let r = 200 * (sin(a) * sqrt(abs(cos(a))) / (sin(a) + 7/5) - 2*sin(a) + 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y) ;
  }
  endShape ();

  let noiseVal = noise(t);
  let r = 70 + map(noiseVal, 0, 1, -20, 20);
  let x = r * cos(PI / 4);
  let y = r * sin(PI / 4);
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 120, 120);
  
  t += 0.01;
}
