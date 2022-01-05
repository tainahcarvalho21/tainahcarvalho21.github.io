let meusPontos = 0;
let pontosOponente = 0;

let chanceDeErrar = 0;

function incluiPlacar(){
  noStroke();
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255)
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10 , 40, 20)
  fill(255)
  text(pontosOponente, 470, 26)
}

function marcaPonto(){
  marcaGol = collideRectCircle(xGol, yGol, golComprimento, golAltura, xBolinha, yBolinha, raio);
  if(marcaGol){
    pontosOponente += 1;
    xBolinha = 300;
    yBolinha = 200;
    ponto.play();
  }
  marcaGol = collideRectCircle(xGolOponente, yGol, golComprimento, golAltura, xBolinha, yBolinha, raio);
  if(marcaGol){
    meusPontos += 1;
    xBolinha = 300;
    yBolinha = 200;
    ponto.play();
  }
} 

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
