// Este arquivo é o principal. Ele cria os objetos JOGADOR e TIME,
// para que possam armazenar as informações de cada um dos camisas dez,
// bem como as informações de cada time.
// Além disso, ele também agrupa os objetos instanciados em arrays, para que
// a sua utilização seja facilitada.

function Jogador(nomeJogador, conhecidoComo, idadeJogador, posicaoJogador, pesoJogador, alturaJogador, naturalidadeJogador, imagemJogador, backgroundJogador) {
      this.nomeJogador = nomeJogador;
      this.conhecidoComo = conhecidoComo;
      this.idadeJogador = idadeJogador;
      this.posicaoJogador = posicaoJogador;
      this.pesoJogador = pesoJogador;
      this.alturaJogador = alturaJogador;
      this.naturalidadeJogador = naturalidadeJogador;
      this.imagemJogador = imagemJogador;
      this.backgroundJogador = backgroundJogador;
}

function Time(nomeTime, iconeTime, jogadorTime) {
      this.nomeTime = nomeTime;
      this.iconeTime = iconeTime;
      this.jogadorTime = jogadorTime;
}


// Cadastro de objetos - Jogadores
var MarcosGuilherme = new Jogador('Marcos Guilherme de Almeida Santos Matos', 'M. Guilherme', '20 anos', 'Meio-campo', '62 kg', '1,72 m', 'Itararé, São Paulo', 'imagens/jogadores/marcos-guilherme.jpg', 'imagens/backgrounds/bg-marcos-guilherme.jpg');
var Datolo = new Jogador('Jesús Alberto Dátolo', 'J. Dátolo', '32 anos', 'Meio-campo', '67 kg', '1,77 m', 'Carlos Spegazzini, Argentina', 'imagens/jogadores/datolo.jpg', 'imagens/backgrounds/bg-datolo.jpg');
var Leandrinho = new Jogador('Leandro Alves de Carvalho', 'Leandrinho', '19 anos', 'Meio-campo', '73 kg', '1,75 m', 'Rio de Janeiro, Rio de Janeiro', 'imagens/jogadores/leandrinho.jpg', 'imagens/backgrounds/bg-leandrinho.jpg');
var Guilherme = new Jogador('Guilherme Milhomem Gusmão', 'Guilherme', '27 anos', 'Meio-campo', '76 kg', '1,75 m', 'Imperatriz, Maranhão', 'imagens/jogadores/guilherme.jpg', 'imagens/backgrounds/bg-guilherme.jpg');
var Arrascaeta = new Jogador('Giorgian Daniel De Arrascaeta Benedetti', 'Arrascaeta', '22 anos', 'Meio-campo', '67 kg', '1,72 m', 'Nuevo Berlín, Uruguai', 'imagens/jogadores/arrascaeta.jpg', 'imagens/backgrounds/bg-arrascaeta.jpg');
var Ederson = new Jogador('Ederson Honorato Campos', 'Ederson', '30 anos', 'Meio-campo', '74 kg', '1,81 m', 'Parapuã, São Paulo', 'imagens/jogadores/ederson.jpg', 'imagens/backgrounds/bg-ederson.jpg');
var Scarpa = new Jogador('Gustavo Henrique Furtado Scarpa', 'G. Scarpa', '22 anos', 'Meio-campo', '65 kg', '1,76 m', 'Campinas, São Paulo', 'imagens/jogadores/gustavo-scarpa.jpg', 'imagens/backgrounds/bg-gustavo-scarpa.jpg');
var Douglas = new Jogador('Douglas dos Santos', 'Douglas', '34 anos', 'Meio-campo', '88 kg', '1,75 m', 'Criciúma, Santa Catarina', 'imagens/jogadores/douglas.jpg', 'imagens/backgrounds/bg-douglas.jpg');
var Valdivia = new Jogador('Wanderson Ferreira de Oliveira', 'Valdívia', '21 anos', 'Meio-campo', '66 kg', '1,74 m', 'Jaciara, Mato Grosso', 'imagens/jogadores/valdivia.jpg', 'imagens/backgrounds/bg-valdivia.jpg');
var CleitonXavier = new Jogador('Cleiton Ribeiro Xavier', 'C. Xavier', '33 anos', 'Meio-campo', '73 kg', '1,79 m', 'São José da Tapera, Alagoas', 'imagens/jogadores/cleiton-xavier.jpg', 'imagens/backgrounds/bg-cleiton-xavier.jpg');
var Gabigol = new Jogador('Gabriel Barbosa Almeida', 'Gabigol', '19 anos', 'Meio-campo', '70 kg', '1,76 m', 'São Bernardo do Campo, São Paulo', 'imagens/jogadores/gabigol.jpg', 'imagens/backgrounds/bg-gabigol.jpg');
var Ganso = new Jogador('Paulo Henrique de Chagas Lima', 'Ganso', '26 anos', 'Meio-campo', '78 kg', '1,84 m', 'Ananindeua, Pará', 'imagens/jogadores/ganso.jpg', 'imagens/backgrounds/bg-ganso.jpg');

var jogadores = new Array(MarcosGuilherme, Datolo, Leandrinho, Guilherme, Arrascaeta, Ederson, Scarpa, Douglas, Valdivia, CleitonXavier, Gabigol, Ganso);

// Cadastro de objetos - Times
var AtleticoParanaense = new Time('Atlético Paranaense', 'icones/times/atletico-paranaense.svg', MarcosGuilherme);
var AtleticoMineiro = new Time('Atlético Mineiro', 'icones/times/atletico-mineiro.svg', Datolo);
var Botafogo = new Time('Botafogo', 'icones/times/botafogo.svg', Leandrinho);
var Corinthians = new Time('Corinthians', 'icones/times/corinthians.svg', Guilherme);
var Cruzeiro = new Time('Cruzeiro', 'icones/times/cruzeiro.svg', Arrascaeta);
var Flamengo = new Time('Flamengo', 'icones/times/flamengo.svg', Ederson);
var Fluminense = new Time('Fluminense', 'icones/times/fluminense.svg', Scarpa);
var Gremio = new Time('Gremio', 'icones/times/gremio.svg', Douglas);
var Internacional = new Time('Internacional', 'icones/times/internacional.svg', Valdivia);
var Palmeiras = new Time('Palmeiras', 'icones/times/palmeiras.svg', CleitonXavier);
var Santos = new Time('Santos', 'icones/times/santos.svg', Gabigol);
var SaoPaulo = new Time('São Paulo', 'icones/times/sao-paulo.svg', Ganso);

var times = new Array(AtleticoParanaense, AtleticoMineiro, Botafogo, Corinthians, Cruzeiro, Flamengo, Fluminense, Gremio, Internacional, Palmeiras, Santos, SaoPaulo);
