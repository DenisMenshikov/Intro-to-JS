var xPositions = [10];
var yPositions = [10];

for(var i = 0; i <10; i++)
{
    xPositions[i] = random(0, 300);
    yPositions[i] = random(0, 300);
}
var colours = [0, 10, 200, 30, 70, 0, 60, 70];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill((colours[i]+255)/i, colours[i]*20, i*40/colours[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        rect(xPositions[i]-50, yPositions[i]+60, 10, 10);
        yPositions[i] += i*1.5+8;
        
        if(yPositions[i] > 400)
        {
            yPositions[i] = 0;
        }
    }
};

mouseClicked = function()
{
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    draw();
};
