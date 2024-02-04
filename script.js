function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(255, 0, 0); // Red color
    circleSize = 150; // Increase circle size when mouse is presse  
  }
  else { 
    // otherwise do this:
    fill(0, 0, 255); // Blue color
    circleSize = 100; // Set circle size back to default
  }
  ellipse(width/2, height/2, 100, 100);
}
