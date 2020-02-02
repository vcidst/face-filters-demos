var ctracker;
var slider;
var points_of_interest = [62];

function setup() {
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.position(0, 0);
  videoInput.hide();
  
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
  image(capture, 0, 0, width, width * capture.height / capture.width);

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    // check if are we interest in this point
    if(points_of_interest.includes(i)) {
      // write a large emoji at this location
      textSize(250);
      textAlign(CENTER);
      text('🤩', positions[i][0], positions[i][1]);
    }
  }
}
