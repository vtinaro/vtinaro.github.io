var x = 100;
var y = 100;
fill(230, 192, 152);// skin color
ellipse(x,y,78,100);//head
beginShape(); // winky eye
curveVertex(22,40);
curveVertex(x - 9,  y -11);
curveVertex(x - 23,  y - 10);
curveVertex(x - 2,  y - 96);
endShape();
fill(241, 242, 239);//white of the eye
ellipse(x + 15,y - 8,17,-12);//outside of eye
fill(52, 69, 32);// eye coloe
ellipse(x + 15,y - 8,6,4);// color of the eye
fill(255, 252, 252);
noStroke();
quad(x - 15,y + 73, x + 26,y + 85,x + 11,y + 63,x + 69,y - 8);//angle of face 
noStroke();
quad(x -24,y + 243,x - 59,y - 4,x + 15,y + 80,x + 69,y - 7);// angle of face
stroke(0, 0, 0);
line(x -15,y + 46,x - 38,y + 18);// line of face 
line(x + 9,y + 49,x + 32,y + 27);// line of face 
beginShape();
fill(230, 192, 152);//skin color
bezier(x - 2, y + 7, x + 15, y + 28, x -8, y + 14, x - 2, y + 19); // nose
fill(255, 255, 255);
arc(x - 1, y + 24, 20, 24, 21, 183);// mouth
line(x - 10,y + 23,x + 10,y + 28);//top of mouth
fill(61, 39, 39);// hair color
noStroke();
quad(x + 32, y - 59, x + 32, y - 23, x - 8, y - 28, x - 18, y - 47);// hair
quad(x + 25,y - 27,x - 8,y - 22,x - 45, y - 16,x - 18,y - 47);// hair
noStroke();
arc(x + 25, y - 39, 36, 34, -5, 367);//hair
quad(x + 37, y - 57, x + 39, y - 50, x + 41, y + 0, x + 28, y - 27);//hair
fill(27, 10, 79);
arc(x + 38, y + 72, 44, 34, -7, 381); // shoulder
rect(x - 35, y + 53, 73, 35, 43);// body
arc(x - 38, y + 72, 44, 35, -3, 370);// shoulder
triangle(x - 49, y + 56, x - 3, y + 49, x + 54, y + 59);