// Neste arquivo estão todas as funções que adicionam dinamicamente as imagens
// dos jogadores aos backgrounds de listas, ou adicionam os escudos aos backgrounds
// de itens das listas

function incluiFotosJogadores() {
      // faz um loop passando por todos os itens da lista da seção LISTA DE CAMISAS DEZ,
      // adicionando a foto de cada jogador como background.
      var gridJogadores = document.querySelector('.grid-jogadores');
      var itensMenuJogadores = gridJogadores.querySelectorAll('li');
      for(var i = 0; i < 12; i++) {
            itensMenuJogadores[i].style.backgroundImage = "url(" + jogadores[i].imagemJogador + ")";
            itensMenuJogadores[i].querySelector('p').textContent = jogadores[i].conhecidoComo;
            itensMenuJogadores[i].querySelector('span').style.backgroundImage = "url(" + times[i].iconeTime + ")";
      }
}

function incluiEscudosMenu() {
      // faz um loop passando por todos os itens da lista da seção do MENU DE TIMES,
     // Adicionando todos os escudos dos times ao background dos 'lis'.
     var menuTimes = document.querySelector('.menu-times');
     var itensMenuTimes = menuTimes.querySelectorAll('li');
     for(var i = 0; i < 12; i++) {
          itensMenuTimes[i].style.backgroundImage = "url(" + times[i].iconeTime + ")";
     }
}

// Chamadas das funções
incluiFotosJogadores();
incluiEscudosMenu();
