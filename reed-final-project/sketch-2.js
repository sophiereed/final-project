let value = 0;
 

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(250, 216, 189);
  textSize(25);
text('“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 10, 30);
fill(227, 112, 34);
}

function keyTyped(){
	save("image.png");
}
