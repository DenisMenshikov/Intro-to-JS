fill(255, 0, 0);
textSize(30);
text("Ask, then click!", 0, 30);
mouseClicked = function() { 
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 0, 0);
    textSize(30);
    text("Ask, then click!", 0, 30);
    textSize(12);
    fill(255, 255, 255);
    var answer = floor(random(1, 6));

    if (answer === 0) {
        text("YES", 189, 200);
    } else if(answer === 1){
        text("NO", 189, 200);
    } else if(answer === 2){
        text("FOR SURE", 172, 200);
    } else if(answer === 3){
        text("NOT IN", 179, 200);
        text("A MILLION YEARS", 149, 238);
    } else if(answer === 4){
        text("COULD BE", 172, 200);
    } else if(answer === 5){
        text("IF YOU THINK SO", 152, 235);
    } else {
        text("Not Answering", 172, 200);
    }
}
;
