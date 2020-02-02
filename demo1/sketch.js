var ctracker;
var slider;
let a = 0;

function setup() {
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.position(0, 0);
  
  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  // define colors
  noStroke();
  fill('red')
}

function draw() {
  // clear the canvas
  clear();		

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    circle(positions[i][0], positions[i][1], 5);
  }
}
