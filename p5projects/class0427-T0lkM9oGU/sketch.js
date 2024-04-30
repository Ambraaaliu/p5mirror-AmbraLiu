let img;
let cam;
let s = 20;

function setup() {
  createCanvas(640, 480, WEBGL);
  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);
}
function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();
  for (let x = 0; x < img.width; x += s) {
    for (let y = 0; y < img.height; y += s) {
      
      let i = (x + y * img.width) * 4;

      let r = cam.pixels[i + 0];
      let g = cam.pixels[i + 1];
      let b = cam.pixels[i + 2];
      
      push();
      let br = brightness(color(r,g,b));
      let z = map(br, 0, 255, 0, 500);
      translate(x - width / 2, y - height / 2, z);
      
      noStroke();
      fill(r, g, b);
      rect(0, 0, s, s);
      
      pop();
    }
  }

  //   img.updatePixels();
  //   image(img, 0, 0);
}
