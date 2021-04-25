let value = 0;
 

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(207, 250, 192);
  textSize(25);
text('“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', 10, 30);
fill(157, 75, 250);
}

function keyTyped(){
	save("image.png");
}
