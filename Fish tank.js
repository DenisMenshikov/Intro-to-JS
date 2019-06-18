background(89, 216, 255);

text("CLICK ME!", 10, 10, 100, 20);
var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyRed, bodyGreen, bodyBlue, tailWidth, eyeSize, tailHeight, tailRed, tailGreen, tailBlue) {
    noStroke();
    //body
    fill(bodyRed, bodyGreen, bodyBlue);
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(tailRed, tailGreen, tailBlue);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight/2,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight/2);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
  
};       

drawFish(200, 200, 100, 50, 50, 200, 90, 50, 10, 74, 100, 0, 235);
drawFish(90, 370, 62, 23, 145, 99, 105, 35, 7, 20, 200, 200, 10);
drawFish(320, 280, 50, 48, 236, 89, 141, 18, 8, 50, 1, 255, 200);
drawFish(112, 72, 37, 62, 216, 229, 16, 20, 5, 82, 200, 55, 55);

mouseClicked = function() {
    drawFish(mouseX, mouseY, random(10, 124), random(34, 120), random(1, 240), random(1, 240), random(1, 240), random(9, 40), random(4, 12), random(18, 120), random(1, 240), random(1, 240), random(1, 240));
    var bubbleSize = random(13, 30);
    fill(83, 242, 231);
    ellipse(random(20, 380), random(20, 380), bubbleSize, bubbleSize);
    ellipse(random(20, 380), random(20, 380), bubbleSize, bubbleSize);
};
