function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  save("whitneysCodeDrawing.svg"); // give file name
  print("saved svg");
  noLoop();
}
