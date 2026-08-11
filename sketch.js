
let speed = 5;
let xSpeed2 = 7;
let ySpeed2 = 7;
let xspeed = 5
let yspeed = 7
let xpos = 200;
let ypos = 200;
let x1pos = 50;
let y1pos = -100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  xpos += xspeed;
  ypos += yspeed;
  x1pos += xSpeed2;
  y1pos += ySpeed2;
  background('#fff6cf');
  
  fill('#d1deff');  
  circle(xpos, ypos, 180); 
  
  fill('#d1ffd6');
  triangle(
  50 + x1pos,
  400 + y1pos,
  250 + x1pos,
  400 + y1pos,
  150 + x1pos,
  250 + y1pos
);
  

  fill('#fbffd1');
  square(180, 175, 150);

  fill('#dad1ff');
  square(205, 200, 100);

  fill('#ffd1d1');
  rect(235, 240, 40, 60);

  
  if(xpos >= width - 25 || xpos <= 25){
    xspeed *= (-1)
  } 
  else if(ypos >= height - 25 || ypos <= 25){
   yspeed *= (-1)
    }
   // Left and right walls
  if (250 + x1pos >= width || 50 + x1pos <= 0) {
    xSpeed2 *= -1;
  }

  // Top and bottom walls
  if (400 + y1pos >= height || 250 + y1pos <= 0) {
    ySpeed2 *= -1;
  }
}


  
  
    
  
