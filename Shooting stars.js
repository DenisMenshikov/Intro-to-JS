var xPos = 73;
var yPos = 69;

var xPos1 = 341;
var yPos1 = 82;

var speed = 2;
var speed1 = 2;

var posBack = 5;
draw = function() 
{
    background(18, 28, 51);
    for(var i = 0; i < 40; i++)
    {
        fill(255, 255, 255);
        ellipse(posBack+(i*10), random(0,400), random(1,4), random(1,4));
    }
    fill(251, 255, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos1, yPos1, 10, 10);
    
     /**************
     * First Star *
     **************/
    if(xPos < 0)
    {
        speed ++;
    }
    else if(xPos > 400)
    {
        xPos = random(-5, 0);
    }
    if(yPos < 0)
    {
        speed ++;
    }
    else if(yPos > 400)
    {
        yPos = random(5);
    }
    
    yPos += speed+1;
    xPos += speed;
    
    /**************
     *Second Star *
     **************/
     
    if(xPos1 < 0)
    {
        xPos1 = 405;
    }
    else if(xPos1 > 400)
    {
        speed1 ++;
    }
    if(yPos1 < 0)
    {
        speed1 ++;
    }
    else if(yPos > 400)
    {
        yPos1 = -5;
    }
    
    yPos1 += speed1;
    xPos1 -= speed1-1;
};

