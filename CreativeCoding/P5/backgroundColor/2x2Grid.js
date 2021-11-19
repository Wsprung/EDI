function setup() {
  //runs once
  backgroundColor(34, 49, 49);
  createCanvas(720, 720);
  //upper left corner = (0,0)
  //as x moves to the right it is increasing, as y moves down it is increasing
  //bottom right corner is (720, 720)
  fill("red"); //filling the square with red
  strokeWeight(8); //stroke weight of the square
}

function draw() {
  //naturally, draw function runs in a loop
  background(220);

  translate(60, 60); //moves the origin point of the square
  
  quad(0, 0, 300, 0, 300, 300, 0, 300);
  
  quad(300, 0, 600, 0, 600, 300, 300, 300); //increase x 300 pixels
  
  quad(0, 300, 300, 300, 300, 600, 0, 600); //increase y 300 pixels
  
  quad(300, 300, 600, 300, 600, 600, 300, 600); //increase x and y 300 pixels
  
  //arguments are the coordinates for the vertices of the square (x, y, x, y...)
  noLoop(); //runs draw function once, breaks loop
}
