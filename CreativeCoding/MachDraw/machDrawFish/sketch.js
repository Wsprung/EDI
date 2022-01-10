/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pW = 11; //width of the paper (axidraw)
var pH = 8.5; //height of the paper (axidraw)

function preload() {
}

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background("white");

  for(var i = 0; i < 30; i++) {
    arc1();
    arc3();
  }

  for(var i = 0; i < 15; i++) {
    var ranXCoord = random(pW * 72);
    var ranYCoord = random(pH * 72);

    drawFish(ranXCoord, ranYCoord);
  }

  hook();
}

function arc1() {
  var ranXCoord = random(pW * 72);
  var ranYCoord = random(pH * 72);

  arc(ranXCoord, ranYCoord, random(50, 55), random(50, 55), 0, HALF_PI);
  arc(ranXCoord, ranYCoord, 60, 60, HALF_PI, PI);
  arc(ranXCoord, ranYCoord, random(65, 75), random(65, 75), PI, PI + QUARTER_PI);
  arc(ranXCoord, ranYCoord, 80, 80, PI + QUARTER_PI, TWO_PI);
}

function arc2() {
  var ranXCoord = random(pW * 72);
  var ranYCoord = random(pH * 72);

  arc(ranXCoord, ranYCoord, random(50, 80), random(50, 80), HALF_PI, PI);
  arc(ranXCoord, ranYCoord, 60, 50, 0, HALF_PI);
  arc(ranXCoord, ranYCoord, random(60, 70), random(60, 70), PI + QUARTER_PI, TWO_PI);
  arc(ranXCoord, ranYCoord, 80, 80, PI, PI + QUARTER_PI);
}

function arc3() {
  var ranXCoord = random(pW * 72);
  var ranYCoord = random(pH * 72);

  arc(ranXCoord, ranYCoord, 10, 10, 0, HALF_PI);
  arc(ranXCoord, ranYCoord, 12, 12, HALF_PI, PI);
  arc(ranXCoord, ranYCoord, 14, 14, PI, PI + QUARTER_PI);
  arc(ranXCoord, ranYCoord, 16, 16, PI + QUARTER_PI, TWO_PI);
}

function radialLine() {
  var ranXCoord = random(pW * 72);
  var ranYCoord = random(pH * 72);

  for(var x = -60; x < 60; x = x + 200) {
    for(var y = -60; y < 60; y = y + 200) {
      //line(start x, start y, px, py)
      line(ranXCoord, ranYCoord, x, y)
    }
  }
}

function reflectiveLines() {
  for (let i = 0; i < 100; i++) {
    let r = random(-50, 50);
    line(50, i, 50 + r, i);
 }
}

function draw() {
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}

function drawFish(x, y) {
  var fish = {x, y};

  triangle(fish.x-70, fish.y-15, fish.x-70, fish.y+15, fish.x-55, fish.y);

  triangle(fish.x-55, fish.y, fish.x-10, fish.y-15, fish.x-10, fish.y+15);

  triangle(fish.x-55, fish.y, fish.x-35, fish.y+15, fish.x-10, fish.y+15);

  triangle(fish.x-55, fish.y, fish.x-35, fish.y-15, fish.x-10, fish.y-15);

  triangle(fish.x-40, fish.y-30, fish.x-35, fish.y-15, fish.x-10, fish.y-15);

  triangle(fish.x+10, fish.y, fish.x-10, fish.y-15, fish.x-10, fish.y+15);

  ellipse(fish.x,fish.y,4,4);
}

function hook() {
  strokeWeight(3);
  line((pW * 72)/2, 0, (pW * 72)/2, (pH * 72)/3);

  arc((pW * 72)/2 + 28, (pH * 72)/3 + 28, 80, 80, 0, PI + QUARTER_PI);

  translate(0, -3);
  triangle((pW * 72)/2 + 60, (pH * 72)/3 + 30, ((pW * 72)/2 + 30) + 40, (pH * 72)/3 + 13, (pW * 72)/2 + 75, (pH * 72)/3 + 30)
}
