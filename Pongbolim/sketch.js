function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0,600,0);
  desenharCampo();
  meioDoCampo();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraGol(xGol, yGol);
  mostraGol(xGolOponente, yGol);
  mostraJogadores(xJogadores[0], yJogador);
  mostraJogadores(xJogadores[1], yJogador);
  mostraJogadoresOponente(xJogadoresOponente[0], yJogadorOponente);
  mostraJogadoresOponente(xJogadoresOponente[1], yJogadorOponente);
  verificaColisaoComJogador()
  incluiPlacar();
  movimentaJogadoresOponente();
  movimentaMeusjogadores();
  marcaPonto();
}