function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  // display at half opacity
  tint(255, 20);
  image(capture, 0, 0, width, width * capture.height / capture.width);
}