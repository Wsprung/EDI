let img; //declaring image

//loads image to variable to later display on screen
function preload() {
  img = loadImage('assets/BrainFrames/BFv4/BFv4-01.png');
}

 function setup() {
  //runs once
  createCanvas(720, 720);
  //upper left corner = (0,0)
  //as x moves to the right it is increasing, as y moves down it is increasing
  //bottom right corner is (720, 720)
  fill("blue"); //filling the square with red
  strokeWeight(8); //stroke weight of the square
}

function draw() {
  //naturally, draw function runs in a loop
  background(220);


//iterates in y-direction to create rows in the y-direction
  for(var y = 0; y < 600; y = y + 300) {

 //iterates in x-direction to create row of squares
  for(var i = 0; i < 600; i = i + 300) {
    //2x2 grid of load
    //image(imgVar, x, y);
    image(img, i, y);
  }
}

  translate(60, 60); //moves the origin point of the square

  noLoop();
}
