var bitmojiX = 61;
var bitmojiY = 60;
var frogX = 96;
var frogY = 232;
var bunnyX = -72;
var bunnyY = 356;
var frogSpeed = random(1,5);
var speed = random(1,5);
var bunnySpeed = random(1,5);
draw = function() {
    background(255, 255, 255);
    fill(230, 192, 152);// skin color
    ellipse(bitmojiX,bitmojiY ,78,100);//head
    stroke(0, 0, 0);
     beginShape(); // winky eye
    curveVertex(bitmojiX - 78,bitmojiY  - 60);
    curveVertex(bitmojiX - 9,  bitmojiY  -11);
    curveVertex(bitmojiX - 23,  bitmojiY  - 10);
    curveVertex(bitmojiX - 2,  bitmojiY  - 96);
    endShape(); 
    fill(241, 242, 239);//white of the eye
    ellipse(bitmojiX + 15,bitmojiY  - 8,17,-12);//outside of eye
    fill(52, 69, 32);// eye coloe
    ellipse(bitmojiX + 15,bitmojiY  - 8,6,4);// color of the eye
    fill(255, 252, 252);
    noStroke();
    quad(bitmojiX - 15,bitmojiY  + 73, bitmojiX + 26,bitmojiY  + 85,bitmojiX + 11,bitmojiY  + 63,bitmojiX + 69,bitmojiY  - 8        );//angle of face 
    noStroke();
    quad(bitmojiX -24,bitmojiY  + 243,bitmojiX - 59,bitmojiY  - 4,bitmojiX + 15,bitmojiY  + 80,bitmojiX + 69,bitmojiY  - 7);// angle of face
    stroke(0, 0, 0);
    line(bitmojiX -15,bitmojiY  + 46,bitmojiX - 38,bitmojiY  + 18);// line of face 
    line(bitmojiX + 9,bitmojiY  + 49,bitmojiX + 32,bitmojiY  + 27);// line of face 
    beginShape();
    fill(230, 192, 152);//skin color
    bezier(bitmojiX - 2, bitmojiY  + 7, bitmojiX + 15, bitmojiY  + 28, bitmojiX -8, bitmojiY  + 14, bitmojiX - 2, bitmojiY  + 19    ); // nose
    fill(255, 255, 255);
    arc(bitmojiX - 1, bitmojiY  + 24, 20, 24, 21, 183);// mouth
    line(bitmojiX - 10,bitmojiY  + 23,bitmojiX + 10,bitmojiY  + 28);//top of mouth
    fill(61, 39, 39);// hair color
    noStroke();
    quad(bitmojiX + 32, bitmojiY  - 59, bitmojiX + 32, bitmojiY  - 23, bitmojiX - 8, bitmojiY  - 28, bitmojiX - 18, bitmojiY  -     47);// hair
    quad(bitmojiX + 25,bitmojiY  - 27,bitmojiX - 8,bitmojiY  - 22,bitmojiX - 45, bitmojiY  - 16,bitmojiX - 18,bitmojiY  - 47);//     hair
    noStroke();
    arc(bitmojiX + 25, bitmojiY  - 39, 36, 34, -5, 367);//hair
    quad(bitmojiX + 37, bitmojiY  - 57, bitmojiX + 39, bitmojiY  - 50, bitmojiX + 41, bitmojiY  + 0, bitmojiX + 28, bitmojiY  -     27);//hair
    fill(27, 10, 79);
    arc(bitmojiX + 38, bitmojiY  + 72, 44, 34, -7, 381); // shoulder
    rect(bitmojiX - 35, bitmojiY + 53, 73, 35, 43);// body
    arc(bitmojiX - 38, bitmojiY  + 72, 44, 35, -3, 370);// shoulder
    triangle(bitmojiX - 49, bitmojiY  + 56, bitmojiX - 3, bitmojiY  + 49, bitmojiX + 54, bitmojiY + 59);
 noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball
fill(0, 0, 0);
ellipse(frogX,frogY,163,65);
rect(frogX-55,frogY-57,10,10);
rect(frogX+ 46,frogY-57,10,10);
fill(255, 255, 255);
stroke(0, 0, 0);
ellipse(bunnyX + 100, bunnyY-130, 60, 120);  // left ear
ellipse(bunnyX + 190, bunnyY-130, 60, 120);  // right ear

ellipse(bunnyX + 150, bunnyY-30, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX + 197, bunnyY-50, 20, 20);  // left eye
ellipse(bunnyX + 131, bunnyY-50, 20, 20);  // right eye

line(bunnyX + 100, bunnyY , bunnyX + 200, bunnyY);   // mouth

noFill();
rect(bunnyX + 135, bunnyY, 15, 24); // left tooth
rect(bunnyX + 150, bunnyY, 15, 24); // right tooth

frogX = frogX + frogSpeed;
 
 bitmojiX= bitmojiX + speed;
 bunnyX = bunnyX + bunnySpeed;
  
};


