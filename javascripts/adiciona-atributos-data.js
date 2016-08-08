// As funções presentes neste arquivo servem para adicionar atributos do tipo
// 'data' em tags através de um loop, de forma que elas armazenem informações
// dos objetos 'time' e 'jogador', que serão usadas nos eventos de clique nos
// icones do menu ou nos jogadores da lista.

function adicionaDataMenu() {
     // Adiciona atributos do tipo 'data' para as tags 'lis' do menu principal,
     // atribuindo à elas valores dos objetos 'time' e 'jogador', para que
     // possam armazenar as informações de cada time e seu camisa dez.
     var menuTimes = document.querySelector('.menu-times');
     var itensMenuTimes = menuTimes.querySelectorAll('li');
     for(var i = 0; i < 12; i++) {
          itensMenuTimes[i].dataset.icone = "url(" + times[i].iconeTime + ")";
          itensMenuTimes[i].dataset.bgJogador = "url(" + times[i].jogadorTime.backgroundJogador + ")";
          itensMenuTimes[i].dataset.nomeTime = times[i].nomeTime;
          itensMenuTimes[i].dataset.conhecidoComoJogador = times[i].jogadorTime.conhecidoComo;
          itensMenuTimes[i].dataset.nomeJogador = times[i].jogadorTime.nomeJogador;
          itensMenuTimes[i].dataset.idadeJogador = times[i].jogadorTime.idadeJogador;
          itensMenuTimes[i].dataset.posicaoJogador = times[i].jogadorTime.posicaoJogador;
          itensMenuTimes[i].dataset.pesoJogador = times[i].jogadorTime.pesoJogador;
          itensMenuTimes[i].dataset.alturaJogador = times[i].jogadorTime.alturaJogador;
          itensMenuTimes[i].dataset.naturalidadeJogador = times[i].jogadorTime.naturalidadeJogador;
     }
}

function adicionaDataLista() {
      // Adiciona atributos do tipo 'data' para as tags 'lis' da seção LISTA DE JOGADORES,
      // atribuindo à elas valores dos objetos 'time' e 'jogador', para que possam
      // armazenar as informações de cada time e seu camisa dez
      var liListasJogadores = document.querySelector('.grid-jogadores').querySelector('ul').querySelectorAll('li');
      for(var i = 0; i < 12; i++) {
          liListasJogadores[i].dataset.bgJogador = "url(" + times[i].jogadorTime.backgroundJogador + ")";
          liListasJogadores[i].dataset.nomeTime = times[i].nomeTime;
          liListasJogadores[i].dataset.conhecidoComoJogador = times[i].jogadorTime.conhecidoComo;
          liListasJogadores[i].dataset.nomeJogador = times[i].jogadorTime.nomeJogador;
          liListasJogadores[i].dataset.idadeJogador = times[i].jogadorTime.idadeJogador;
          liListasJogadores[i].dataset.posicaoJogador = times[i].jogadorTime.posicaoJogador;
          liListasJogadores[i].dataset.pesoJogador = times[i].jogadorTime.pesoJogador;
          liListasJogadores[i].dataset.alturaJogador = times[i].jogadorTime.alturaJogador;
          liListasJogadores[i].dataset.naturalidadeJogador = times[i].jogadorTime.naturalidadeJogador;
     }
}

// Chamadas das funções
adicionaDataMenu();
adicionaDataLista();
