background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

fill(121, 141, 145);

for(var i = 0; i < 5; i++){
    for(var j = 0; j < 3; j++){
        rect(90+i*50, 170+i*40, 20, 20);
        rect(90+i*50, 170+j*20, 20, 20);
        rect(90+i/50, 170+i*40, 20, 20);
    }
}
