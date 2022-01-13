let gif;

function preload() {
  gif = loadImage('assets/FaceRisingNoLoop250.gif');
}

function setup() {
  //runs once
  //square design, same width and height
  createCanvas(2 * windowWidth, 2 * windowHeight);
  // createCanvas(windowWidth, windowHeight);

  background(0,0,0);
}

function draw() {
  background(0,0,0);
  backgroundGif(windowWidth, windowHeight * 2);
  //naturally, draw function runs in a loop
}
function windowResized() {
  //gif.resize(0, gif.width*(.5));
  resizeCanvas(windowWidth, windowHeight);
}
function backgroundGif(windowWidth, windowHeight) {
  //variable for the number of squares in the grid
    //gif size not adjusting because createCanvas is recreating canvas with number of
    //gifs based off new windowWith/300 -> will not resize gif
    var numSquares = windowWidth/gif.width;

  //variable for the side length of each square
    var sideLen = windowWidth/numSquares;
  //iterates in y-direction to create rows in the y-direction
   //var placeGif = true;
    for(var y = 0; y < windowHeight; y = y + sideLen) {

   //iterates in x-direction to create row of squares
    for(var x = 0; x < windowWidth; x = x + sideLen) {
     // if(placeGif) { image(gif, x, y); }
     // placeGif = !placeGif;
     image(gif, x, y);
    }
  }
}
