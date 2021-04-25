let value = 0;
 

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(231, 206, 103);
  textSize(25);
text('“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', 10, 30);
fill(0, 102, 153);
}

function keyTyped(){
	save("image.png");
}
