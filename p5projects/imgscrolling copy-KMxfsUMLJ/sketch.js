let images = [];
let currentImageIndex = 0;

function preload() {
  for (let i = 2; i < 140; i++) {
    images[i] = loadImage('FrontPre_' + i + '.gif');
  }
}


function draw() {
  background(255);
  image(images[currentImageIndex], 0, 0, 3500, 2500);

  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}
