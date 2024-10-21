let position;
let velocity;
let acceleration;


function setup() {
 // put setup code here
  createCanvas(800, 800);
  background(255);

  position = createVector(100,100); // other way of creating vectors 
  velocity = createVector(2.5, .5);
  stroke(255);
  strokeWeight(2);
  fill(127,127);
  print("hi");


}

function draw() {
  background(0);
 print("hi");

  position.add(velocity);

  ellipse(position.x, position.y, 20,20);
  if((position.x > width)|| (position.x < 0)){
    velocity.x = x * - 1;
  }
  if ((position.y))
}
