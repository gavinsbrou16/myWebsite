var selected;

function setup(){
createCanvas(windowWidth,windowHeight/1.2);
background('#B1D0E0');
selected = color('red');
}

function draw() {
noStroke();
//red
fill(255,0,0);
rect(0,0,50,50);
//orange
fill(255,165,0);
rect(0,50,50,50);
//yellow
fill(255,255,0);
rect(0,100,50,50);
//green
fill(0,255,0);
rect(0,150,50,50);
//cyan
fill(0,255,255);
rect(0,200,50,50);
//blue
fill(0,0,255);
rect(0,250,50,25);
//magenta
fill(255,0,255);
rect(0,300,50,50);
//brown
fill(165,42,42);
rect(0,350,50,50);
//white
fill(255);
rect(0,400,50,50);
//black
fill(0);
rect(0,450,50,50);

strokeWeight(5);
stroke(selected);

  //audio for drawing
  if(mouseIsPressed){
   line(mouseX,mouseY,pmouseX,pmouseY)
  	}
}

function mousePressed (){

  //autio for color switch

  if(collide(0, 0)){
    selected = color('red')
  }else if(collide(0, 20)){
    selected = color('orange');
  }else if(collide(0, 40)){
    selected = color("yellow");
  }else if(collide(0, 60)){
    selected = color("rgb(0,255,0)");
  }else if(collide(0, 80)){
    selected = color("rgb(0,255,255)");
  }else if(collide(0, 100)){
    selected = color("blue");
  }else if(collide(0, 120)){
    selected = color("magenta");
  }else if(collide(0, 140)){
    selected = color("brown");
  }else if(collide(0, 160)){
    selected = color("white");
  }else if(collide(0, 180)){
    selected = color("black");
  }
}

function collide ( x, y) {
//2d
if (mouseX >= x &&         // right of the left edge AND
    mouseX <= x + 20 &&    // left of the right edge AND
    mouseY >= y &&         // below the top AND
    mouseY <= y + 20) {    // above the bottom
        return true;
}
return false;
};
