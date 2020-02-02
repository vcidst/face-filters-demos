var ctracker;
var slider;

function setup() {

  // setup camera capture
  var videoInput = createCapture(0);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  
  // setup canvas
  var cnv = createCanvas(400, 300);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  slider = createSlider(0, 50, 10);
  slider.position(0, 400);

  noStroke();
}

function draw() {
  clear();
  
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    if (i == 32) {
            fill(0);
            ellipse(positions[i][0], positions[i][1], 80, 80);
    }
  }
}
