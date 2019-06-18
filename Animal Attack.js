var bodyX = 200;
var bodyY = 347;
var bodyW = 118;
var bodyH = bodyW/2;
var move = 2;

draw = function(){
    background(207, 254, 255);
    
    strokeWeight(10);
    stroke(0, 0, 0);
    line(bodyX-40, bodyY-20, bodyX-100, bodyY-60);//arm
    line(bodyX+40, bodyY-20, bodyX+100, bodyY-60);//arm
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW/1.4, bodyH*2); // body
    ellipse(bodyX, bodyY-70, bodyW/2.2, bodyH); // face
    fill(255, 255, 255);
    ellipse(bodyX-13, bodyY-75, bodyW/6, bodyH/5);//First layer eye
    ellipse(bodyX+13, bodyY-75, bodyW/6, bodyH/5);//First layer eye
    fill(139, 145, 232);
    ellipse(bodyX-13, bodyY-75, bodyW/9, bodyH/5);//iris
    ellipse(bodyX+13, bodyY-75, bodyW/9, bodyH/5);//iris
    fill(0, 0, 0);
    ellipse(bodyX-13, bodyY-75, bodyW/19, bodyH/(bodyY-200));//other freaky pupil
    ellipse(bodyX+13, bodyY-75, bodyW/(bodyY-200), bodyH/8);//freaky pupil
    noFill();
    stroke(51, 27, 2);
    strokeWeight(4);
    arc(bodyX-13, bodyY-56, bodyW-77, bodyH, 240, 290);//eyebrow
    arc(bodyX+13, bodyY-56, bodyW-77, bodyH, 250, 300);//eyebrow
    stroke(0, 0, 0);
    strokeWeight(17);
    arc(bodyX, bodyY-30, bodyW-71, bodyH, 250, 300);//mouth outline
    stroke(184, 0, 0);
    arc(bodyX, bodyY-32, bodyW-73, bodyH-4, 250, 300);//mouth
    stroke(252, 47, 105);
    strokeWeight(7);
    arc(bodyX+1, bodyY-32, bodyW-102, bodyH-10, 243, 302);//tongue
    
    
    if(bodyY === 50){
        move = 1;
    }
    else if(bodyY === 350){
        move = 2;
    }
    
    if(move === 1){
        bodyY++;
    }
    else if(move === 2){
        bodyY--;
    }
};
