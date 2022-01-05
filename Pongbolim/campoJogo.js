let campo =[15,13,569,373];


function desenharCampo(){
   strokeWeight(4);
  stroke(color(255,255,255));
     fill(color(0,100,0));
    rect(campo[0],campo[1],campo[2],campo[3]);
}

function areaG(){
    fill(255);
  circle(88,200,3);
  circle(515,200,3);
  noFill();
  rect(15,154,50,91);
  rect(15,115,94,169);
  rect(535,154,50,91);
  rect(490,115,94,169);
}

function meioDoCampo(){
  noFill();
  circle (300, 200, 3);
  circle(300,200,150);
  //arcos das laterais
  arc (15, 15, 60, 60, 0, HALF_PI);
  arc (583, 15, 60, 60, HALF_PI, PI);
  arc (583, 385, 60, 60, PI, PI + HALF_PI);
  arc (15, 383, 60, 60, PI + HALF_PI, 0);
  line(300, 15, 300, 385);
  areaG();
  
}