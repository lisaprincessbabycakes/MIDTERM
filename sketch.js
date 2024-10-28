let eyeOpen = true;
let eyeColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  eyeColor = color(random(100, 255), random(100, 255), random(100, 255)); // initial eye color
}

function draw() {
  background(229, 200, 255);

  // head (oval face shape)
  fill(255);
  noStroke();
  ellipse(width / 2, height / 2, 450, 600); 

  // nose
  push();
  translate(width / 2, height / 2);
  fill(0);
  noStroke();
  triangle(-30, 35, 10, -90, 46, 35);
  pop();

  // mouth
  push();
  translate(width / 2, height / 2);
  fill(255, 0, 0); // Red color for the lips
  noStroke();
  ellipse(-35, 140, 140, 190); // left lip
  ellipse(50, 140, 140, 190);  // right lip
  ellipse(10, 230, 160, 100);  // bottom lip
  pop();

  // eyebrows
  stroke(0);
  strokeWeight(1);
  fill(0);
  // left eyebrow
  arc(width / 2 - 150, height / 2 - 150, 230, 60, PI, TWO_PI);
  // right eyebrow
  arc(width / 2 + 150, height / 2 - 150, 230, 60, PI, TWO_PI);

  // cheeks
  fill(255, 182, 193);
  noStroke();
  ellipse(width / 2 - 120, height / 2 + 10, 100, 100); // left cheek
  ellipse(width / 2 + 130, height / 2 + 10, 100, 100); // right cheek

  // Eye (with open/close interaction)
  if (eyeOpen) {
    push();
    //eyeball
    fill(255);
    ellipse(width / 2 + 10, height / 2 + 160, 160, 100);

    // iris
    fill(eyeColor);
    ellipse(width / 2 + 10, height / 2 + 160, 80, 100);

    // pupil
    fill(0);
    ellipse(width / 2 + 10, height / 2 + 160, 30, 30);
    pop();
  }

  // Eyelashes
  stroke(0);
  strokeWeight(5);
  noFill();
  
  // left eyelashes
  push();
  translate(width / 2 - 150, height / 2 - 150);
  line(50, 30, 55, 65); // Le 1
  line(10, 40, 25, 65); // Le 2
  line(90, 40, 80, 75); // Le 3
  pop();
  
  // right eyelashes
  push();
  translate(width / 2 + 50, height / 2 - 150);
  line(50, 30, 55, 65); // re 1
  line(10, 40, 25, 65); // re 2
  line(90, 40, 80, 75); // re 3
  pop();
}

// blinking eye color change interaction 
function mousePressed() {
  eyeOpen = !eyeOpen; // eye open/close
  eyeColor = color(random(100, 255), random(100, 255), random(100, 255)); // random eye color
}
