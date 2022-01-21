function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(220,100,100);
    strokeWeight(2);
    x = 0;
    y = 0;
    for(i = 0; i < 50; i++){
      noFill();
      x = x +50;
      y = y+30;
      circle(windowWidth/2, windowHeight/2, x);

      noFill();
      ellipse(windowWidth,windowHeight/2,x,y);

      noFill();
      ellipse((windowWidth-windowWidth),windowHeight/2,x,y);

      noFill();
      ellipse(windowWidth/2,windowHeight,y,x);

      noFill();
      ellipse(windowWidth/2,(windowHeight-windowHeight),y,x);
    }

  }