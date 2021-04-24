let value = 0;
 

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(166, 227, 224);
  textSize(25);
text('“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown', 10, 30);
fill(53, 166, 255);
}

function keyTyped(){
	save("image.png");
}
