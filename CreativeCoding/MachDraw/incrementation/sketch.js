/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pW = 11; //width of the paper (axidraw)
var pH = 8.5; //height of the paper (axidraw)
var x = 0;
var y = 0;

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background("blue");

  translate(width/2, height/2);
  //changing orientation of rectangles
  rectMode(CENTER);

  rect(0, 0, 100, 100);
  //do this
  do {
    //rect(x sp, y sp, w of rect, h of rect)
    rect(0, 0, 1 + x, 1 + y);
    //incrementing the size of the rectangle each time the loop runs
    x = x + random(0, 10);
    y = y + random(0, 10);
  }
  //while this condition
  while(x < 600);

}

function draw() {
  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
