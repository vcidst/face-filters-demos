var ctracker;
var slider;
var kite_length = 20;
var kite_width = 10;
var kite_tail = 5;
var points_of_interest = [27, 32, 57];
let trail = [];
let a = 0;

function setup() {
  // setup camera capture
  var videoInput = createCapture(0);
  videoInput.size(800, 600);
  videoInput.position(0, 0);
  
  // setup canvas
  var cnv = createCanvas(800, 600);
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
    if(1) { ///points_of_interest.includes(i)) {
    	fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), 255, map(positions[i][1], height*0.33, height*0.66, 0, 255));
	    // draw ellipse at each position point
	    //ellipse(positions[i][0], positions[i][1], 8, 8);

	    triangle(positions[i][0], positions[i][1], 
	    	positions[i][0] + kite_tail, positions[i][1] + kite_tail, 
	    	positions[i][0] - kite_tail, positions[i][1] + kite_tail);
	    
	    triangle(positions[i][0], positions[i][1], 
	    	positions[i][0] + kite_width, positions[i][1] - kite_width, 
	    	positions[i][0] - kite_width, positions[i][1] - kite_width);
	    
	    triangle(positions[i][0], positions[i][1] - kite_length, 
	    	positions[i][0] + kite_width, positions[i][1] - kite_width, 
	    	positions[i][0] - kite_width, positions[i][1] - kite_width);

	    trail.push([positions[i][0], positions[i][1]]);
    }
  }

  
}
