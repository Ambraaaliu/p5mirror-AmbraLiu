let colors = ['#f73939', '#ffda33', '#48b7f7', '#f7f7f7', '#2b2b2b', '#f78e2c', '#3BD89F', '#a4459f'];
let arr = [];
let t = 0;
let SEED = Math.floor(Math.random() * 10000);

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	strokeCap(SQUARE);
	randomSeed(SEED);
	noiseSeed(SEED);

	let c = 600;
	for (let j = 0; j < c; j++) {
		let x = random(width);
		let y = random(height);
		let l = int(random(10, 100));
		let pos = [];
		let rnd = int(random(2));
		for (let i = 0; i < l; i++) {
			let r = random(1, 30);
			let a = noise(x / 300, y / 300, j * 0.0002) * 12;
			if (rnd == 0) a = int(a) * (TAU / 4);
			pos.push(createVector(x, y));
			x += r * cos(a);
			y += r * sin(a);
		}
		arr.push(pos);
	}
	// print(SEED);
}	

function draw() {
	randomSeed(SEED);
	background('#0c4896');
	noFill();
	for (let i = 0; i < arr.length; i++) {
		strokeWeight(random(10) * random() + 2);
		stroke(random(colors));
		push();
		drawingContext.setLineDash([random(50), random(50)]);
		drawingContext.lineDashOffset = t * random(4);
		beginShape();
		for (let j = 1; j < arr[i].length; j++) {
			let p = arr[i][j];
			vertex(p.x, p.y);
		}
		endShape();
		pop();
	}
	t++;
}