function Jogador(nomeJogador, conhecidoComo, idadeJogador, posicaoJogador, imagemJogador) {
      this.nomeJogador = nomeJogador;
      this.conhecidoComo = conhecidoComo;
      this.idadeJogador = idadeJogador;
      this.posicaoJogador = posicaoJogador;
      this.imagemJogador = imagemJogador;
}

function Time(nomeTime, iconeTime, jogadorTime) {
      this.nomeTime = nomeTime;
      this.iconeTime = iconeTime;
      this.jogadorTime = jogadorTime;
}

var MarcosGuilherme = new Jogador('Marcos Guilherme de Almeida Santos Matos', 'M. Guilherme', '20 anos', 'Meio-campo', 'imagens/jogadores/marcos-guilherme.jpg');
var Datolo = new Jogador('Jesús Alberto Dátolo', 'J. Dátolo', '32 anos', 'Meio-campo', 'imagens/jogadores/datolo.jpg');
var Leandrinho = new Jogador('Leandro Alves de Carvalho', 'Leandrinho', '19 anos', 'Meio-campo', 'imagens/jogadores/leandrinho.jpg');
var Guilherme = new Jogador('Guilherme Milhomem Gusmão', 'Guilherme', '27 anos', 'Meio-campo', 'imagens/jogadores/guilherme.jpg');
var Arrascaeta = new Jogador('Giorgian Daniel De Arrascaeta Benedetti', 'Arrascaeta', '22 anos', 'Meio-campo', 'imagens/jogadores/arrascaeta.jpg');
var Ederson = new Jogador('Ederson Honorato Campos', 'Ederson', '30 anos', 'Meio-campo', 'imagens/jogadores/ederson.jpg');
var Scarpa = new Jogador('Gustavo Henrique Furtado Scarpa', 'G. Scarpa', '22 anos', 'Meio-campo', 'imagens/jogadores/gustavo-scarpa.jpg');
var Douglas = new Jogador('Douglas dos Santos', 'Douglas', '34 anos', 'Meio-campo', 'imagens/jogadores/douglas.jpg');
var Valdivia = new Jogador('Wanderson Ferreira de Oliveira', 'Valdívia', '21 anos', 'Meio-campo', 'imagens/jogadores/valdivia.jpg');
var CleitonXavier = new Jogador('Cleiton Ribeiro Xavier', 'C. Xavier', '33 anos', 'Meio-campo', 'imagens/jogadores/cleiton-xavier.jpg');
var Gabigol = new Jogador('Gabriel Barbosa Almeida', 'Gabigol', '19 anos', 'Meio-campo', 'imagens/jogadores/gabigol.jpg');
var Ganso = new Jogador('Paulo Henrique de Chagas Lima', 'Ganso', '26 anos', 'Meio-campo', 'imagens/jogadores/ganso.jpg');

var jogadores = new Array(MarcosGuilherme, Datolo, Leandrinho, Guilherme, Arrascaeta, Ederson, Scarpa, Douglas, Valdivia, CleitonXavier, Gabigol, Ganso);

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
