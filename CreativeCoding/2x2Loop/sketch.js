function setup() {
  //runs once
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
  

//iterates in y-direction to create rows in the y-direction
  for(var y = 0; y < 600; y = y + 300) {
    
 //iterates in x-direction to create row of squares
  for(var i = 0; i < 600; i = i + 300) {
 quad(i, y, i + 300, y, i+ 300, y + 300, i, y + 300);
    
  }
}

  translate(60, 60); //moves the origin point of the square
  
  noLoop();
}
