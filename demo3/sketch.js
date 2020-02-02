var ctracker;
var left_eye = [27];
var right_eye = [32];
var videoInput;
var lastFrameLeft;
var lastFrameRight;
let trail = [];

function setup() {
  // setup camera capture
  videoInput = createCapture(VIDEO);
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
}

function draw() {
  image(videoInput, 0, 0, width, width * videoInput.height / videoInput.width);
  
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    // check if are we interest in this point
    if(left_eye.includes(i)) {
        lastFrameLeft = get(positions[i][0] - 10, positions[i][1] - 10, 20, 20);
        image(lastFrameLeft, positions[i][0], positions[i][1]);
        image(lastFrameLeft, positions[i][0] + 5, positions[i][1] + 5);
    }

    /// 
    if(right_eye.includes(i)) {
        lastFrameRight = get(positions[i][0] - 10, positions[i][1] - 10, 20, 20);
        image(lastFrameRight, positions[i][0], positions[i][1]);
        image(lastFrameRight, positions[i][0] + 5, positions[i][1] + 5);
    }
  }
}
