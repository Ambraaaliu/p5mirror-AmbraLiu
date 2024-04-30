let img1;
let img2;
let img1Position;
let img2Position;

function preload() {
  // Load your images here
  
}

function setup() {
  createCanvas(500, 500);

  // Define the initial positions for the images
  img1Position = createVector(100, 100);
  img2Position = createVector(300, 200);
  
  img1 = loadImage("image1.png");
  img2 = loadImage("image2.png");
}

function draw() {
  background(220);

  // Display the images at their current positions
  image(img1, img1Position.x, img1Position.y, 100, 100); // Adjust image size as needed
  image(img2, img2Position.x, img2Position.y, 100, 100); // Adjust image size as needed
}

function mouseClicked() {
  // Check if img1 is clicked and move it to a specific position
  if (
    mouseX > img1Position.x &&
    mouseX < img1Position.x + 100 && // Adjust the size based on your image size
    mouseY > img1Position.y &&
    mouseY < img1Position.y + 100
  ) {
    img1Position = createVector(200, 400); // Move img1 to a specific position
  }

  // Check if img2 is clicked and move it to a specific position
  if (
    mouseX > img2Position.x &&
    mouseX < img2Position.x + 100 && // Adjust the size based on your image size
    mouseY > img2Position.y &&
    mouseY < img2Position.y + 100
  ) {
    img2Position = createVector(100, 300); // Move img2 to a specific position
  }
}

