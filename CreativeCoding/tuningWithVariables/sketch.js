function setup() {
  //runs once
  //square design, same width and height
  createCanvas(windowWidth, windowWidth);
  //upper left corner = (0,0)
  //as x moves to the right it is increasing, as y moves down it is increasing
  //bottom right corner is (720, 720)
  fill("red"); //filling the square with red
  strokeWeight(1); //stroke weight of the square
}

function draw() {
  //naturally, draw function runs in a loop

//variable for the number of squares in the grid  
  var numSquares = 6;
  
//variable for the side length of each square
  var sideLen = windowWidth/numSquares; 

//iterates in y-direction to create rows in the y-direction
  for(var y = 0; y < windowWidth; y = y + sideLen) {
    
 //iterates in x-direction to create row of squares
  for(var i = 0; i < windowWidth; i = i + sideLen) {
 quad(i, y, i + sideLen, y, i+ sideLen, y + sideLen, i, y + sideLen);
    
  }
}
  
  noLoop();
}
