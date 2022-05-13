function setup() {
    createCanvas(400, 400);
  }
  // FIRST EXAMPLE (chasing the mouse):
  function draw() {
    //background(220);
    print(mouseX+","+mouseY)
    circle(mouseX,mouseY,5)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }