background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

var pSize = 250;
var x = 200;
var y = 200;
//crust
stroke(36, 23, 1);
strokeWeight(3);
fill(214, 161, 0);
ellipse(x,y,pSize,pSize);
//pizza tomato paste
fill(166, 45, 23);
ellipse(x,y,pSize-25,pSize-25);
//pizza cheese
strokeWeight(1);
fill(247, 255, 0);
ellipse(x,y,pSize-40,pSize-40);
//pizza peperoni
strokeWeight(1);

var move = 10;

var pepperoni = function(){

    var check1;
    var check2;
    
    for (var i = 0; i<10; i++)
    {
        
        fill(143, 8, 8);
    
        var num1 = random(0,80);
        var num2 = random(0,80);
        
        while(check1 > num1-10 && check1 < num1+10)
        {
            
            //text("RE-RANDOM "+ i, 10, move);
            num1 = random(0,80);
            num2 = random(0,80);
            
            move+=10;
        }
        
        var standardDeviation = 2;
        var mean1 = 130;
        var mean2 = 130;
        
        x = standardDeviation * num1 + mean1;
        y = standardDeviation * num2 + mean2;
    
        ellipse(x,y,pSize/8,pSize/8);
        
        var check1 = num1;
        var check2 = num2;
    }   
};
//pizza green pepper
var greenPeppers = function(){

    for (var i = 0; i<15; i++)
    {
        
        fill(4, 125, 8);
    
        var num1 = random(0,30);
        var num2 = random(0,30);

        var standardDeviation = 5;
        var mean1 = 130;
        var mean2 = 130;
        x = standardDeviation * num1 + mean1;
        y = standardDeviation * num2 + mean2;
    
        rect(x, y, pSize/15, pSize/30);
    }   
};

pepperoni();
greenPeppers();
