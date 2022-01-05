//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 50;

let colidiu = false;
let colidiuTimeUm = false;

function mostraBolinha(){
  noStroke()
  fill(250, 0, 0)
  circle(xBolinha,yBolinha,diametro);
  //criando a bolinha
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;        
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width ||
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || 
    yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisaoComJogador(){
  for (let i = 0; i < xJogadores.length; i+=1){
    colidiu = collideRectCircle(xJogadores[i], yJogador, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    colidiuTimeUm = collideRectCircle(xJogadoresOponente[i], yJogadorOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu  || colidiuTimeUm){
      velocidadeXBolinha *= -1;
      raquetada.play();
   }  
  }
}

