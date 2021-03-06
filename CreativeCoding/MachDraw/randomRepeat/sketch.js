/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pW = 11; //width of the paper (axidraw)
var pH = 8.5; //height of the paper (axidraw)

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background("blue");
}

function draw() {
  //centering the design
  translate((pW * 72 - 600)/2, (pH * 72 - 600)/2)

  //line in the y dir'n
  for (y = 0; y < 600; y = y + 100) {
    //line in the x dir'n
    for (x = 0; x < 600; x = x + 100) {
      //random(min, max)
      line(x, y, x + random(60, 100), y + random(60, 100));
    }
  }

  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
