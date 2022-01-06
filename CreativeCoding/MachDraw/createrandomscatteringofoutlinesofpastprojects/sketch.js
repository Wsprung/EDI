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
var coordT = 0;
var coordY = 0;

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background("blue");

  //changing orientation of rectangles
  for(var x = -600; x < 600; x = x + 90) {
    for(var y = -600; y < 600; y = y + 90) {
      coordT = random(0, 900);
      coordY = random(0, 900);
      //line(start x, start y, px, px)
      triangle(coordT, coordY, 58 - x, 20 - y, 86 - x, 75 - y);
    }
  }
}

function draw() {
  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
