let xJogadores = [130, 360]
let xJogadoresOponente = [450, 230]
let yJogador = 180;
let yJogadorOponente = 180;
let velocidadeYOponente;

function mostraJogadores(x,y){
  fill(150,75,0)
  noStroke();
  rect(x, y,raqueteComprimento, raqueteAltura);
}

function mostraJogadoresOponente(x,y){
  fill(153, 51, 153);
  noStroke();
  rect(x, y,raqueteComprimento, raqueteAltura);
}


function movimentaMeusjogadores(){
  if(keyIsDown(UP_ARROW)){
    if(yJogador > 0){
      yJogador -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yJogador < height - raqueteAltura){
      yJogador += 10;
    }
  }
}

function movimentaJogadoresOponente(){
  if(keyIsDown(87)){
    if(yJogadorOponente > 0){
      yJogadorOponente -= 10;
    }
  }
  if(keyIsDown(83)){
    if(yJogadorOponente < height - raqueteAltura){
      yJogadorOponente += 10;
    }
  }
}