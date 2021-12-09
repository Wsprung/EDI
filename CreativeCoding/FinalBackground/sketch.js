let gif;
let clickCounts = 0;

function preload() {
  gif = loadImage('assets/FaceRisingNoLoop250.gif');
  cursor = loadImage('assets/Cursor.png');
  humanoidFont = loadFont('assets/humanoidFont/HUMANOID.TTF');
}

function setup() {
  //runs once
  createCanvas(windowWidth, windowHeight);
  //upper left corner = (0,0)
  //as x moves to the right it is increasing, as y moves down it is increasing
  //bottom right corner is (720, 720)
  background(0,0,0);
  noCursor();
}

function draw() {

  background(0,0,0);
  //naturally, draw function runs in a loop

//variable for the number of squares in the grid
  //gif size not adjusting because createCanvas is recreating canvas with number of
  //gifs based off new windowWith/300 -> will not resize gif
  var numSquares = windowWidth/gif.width;

//variable for the side length of each square
  var sideLen = windowWidth/numSquares;
  var evenCount = true;
//iterates in y-direction to create rows in the y-direction
 //var placeGif = true;
  for(var y = 0; y < windowHeight; y = y + sideLen) {

 //iterates in x-direction to create row of squares
  for(var x = 0; x < windowWidth; x = x + sideLen) {
    if(x == 0) { image(gif, x, y + 150); }
    else if(!(x == 0 && y == 0)) {
     image(gif, x, y);
   }
  }
}
 cursor.resize(0, 25);

 rect(0, 0, 250, 150);
 textFont(humanoidFont, 50);
 text("WHITNEY'S ARCHIVE", 10, 10, 250, 250);
 textSize(20);
 text("Click count: " + clickCounts, 10, 130, 250, 250);

 image(cursor, mouseX, mouseY);
}
function windowResized() {
  //gif.resize(0, gif.width*(.5));
  resizeCanvas(windowWidth, windowHeight);
}
function mouseReleased() {
 clickCounts++;
}
//beginShape() -> look into to shrink gif
//arc
//translate
