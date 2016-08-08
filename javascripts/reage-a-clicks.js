// As funções deste arquivo são responsáveis por reagir aos cliques do usuário aos
// componentes do menu e da lista de jogadores, para que se alterem informações e/ou
// mude-se de página. Graças à estas funções, não necessitamos dos links (<a>).

function clicouNoHome() {
      // Esta função garante que quando o usuário clicar no botão HOME (casinha),
      // ele será transportado para a página inicial do site.
      var botaoHome = document.querySelector('.botao-home');
      botaoHome.addEventListener("click", function() {
            document.querySelector('.wraper').style.top = '0vh';
      });
}

function clicouNaLista() {
      // Esta função garante que quando o usuário clicar no botão LISTA DE JOGADORES (tracinhos),
      // ele será transportado para a seção de lista de jogadores do site.
      var botaoLista = document.querySelector('.botao-lista');
      botaoLista.addEventListener("click", function() {
            document.querySelector('.wraper').style.top = '-100vh';
      });
}

function clicouNoEscudo() {
     // Esta função garante que quando o usuário clicar em um dos escudos no menu principal
     // a seção de descrição dos jogadores será mostrada, e as informações inseridas nas 'lis'
     // do escudo clicado (adicionadas através dos atributos 'data'), serão passadas para a tela
     // de descrição do jogador, personalizando-a.
     var menuTimes = document.querySelector('.menu-times');
     var itensMenuTimes = menuTimes.querySelector('ul');
     itensMenuTimes.addEventListener("click", function(e) {
           var time = e.target;
           if(time.tagName == 'LI') {
                 document.querySelector('.wraper').style.top = '-200vh';
                 document.querySelector('.background-jogador').style.backgroundImage = time.dataset.bgJogador;
                 document.querySelector('.nome-time').querySelector('p').textContent = time.dataset.nomeTime;
                 document.querySelector('.nome-time').querySelector('h1').textContent = time.dataset.conhecidoComoJogador;
                 document.querySelector('.identificacao-jogador').querySelector('.escudo').style.backgroundImage = time.dataset.icone;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[0].querySelector('p').textContent = time.dataset.nomeJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[1].querySelector('p').textContent = time.dataset.idadeJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[2].querySelector('p').textContent = time.dataset.posicaoJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[3].querySelector('p').textContent = time.dataset.pesoJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[4].querySelector('p').textContent = time.dataset.alturaJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[5].querySelector('p').textContent = time.dataset.naturalidadeJogador;
           }
     });
}

function clicouNoJogador() {
      // Esta função garante que quando o usuário clicar em uma das imagens dos jogadores na seção LISTA DOS JOGADORES,
     // a seção de descrição dos jogadores será mostrada, e as informações inseridas nas 'lis'
     // do escudo clicado (adicionadas através dos atributos 'data'), serão passadas para a tela
     // de descrição do jogador, personalizando-a.
      var ulListasJogadores = document.querySelector('.grid-jogadores').querySelector('ul');
      ulListasJogadores.addEventListener("click", function(e) {
            var jogador = e.target;
            if(jogador.tagName == 'P' || jogador.tagName == 'SPAN') {
                  jogador = jogador.parentNode;
            }
            if(jogador.tagName == 'LI') {
                 document.querySelector('.wraper').style.top = '-200vh';
                 document.querySelector('.background-jogador').style.backgroundImage = jogador.dataset.bgJogador;
                 document.querySelector('.nome-time').querySelector('p').textContent = jogador.dataset.nomeTime;
                 document.querySelector('.nome-time').querySelector('h1').textContent = jogador.dataset.conhecidoComoJogador;
                 document.querySelector('.identificacao-jogador').querySelector('.escudo').style.backgroundImage = jogador.dataset.icone;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[0].querySelector('p').textContent = jogador.dataset.nomeJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[1].querySelector('p').textContent = jogador.dataset.idadeJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[2].querySelector('p').textContent = jogador.dataset.posicaoJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[3].querySelector('p').textContent = jogador.dataset.pesoJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[4].querySelector('p').textContent = jogador.dataset.alturaJogador;
                 document.querySelector('.dados-jogador').querySelectorAll('div')[5].querySelector('p').textContent = jogador.dataset.naturalidadeJogador;
            }
      });
}

// Chamadas de funções
clicouNoHome();
clicouNaLista();
clicouNoEscudo();
clicouNoJogador()
