function incluiIconesTimes() {
     // Adiciona todos os icones dos times ao menu lateral
     var menuTimes = document.querySelector('.menu-times');
     var itensMenuTimes = menuTimes.querySelectorAll('li');
     for(var i = 0; i < 12; i++) {
          itensMenuTimes[i].style.backgroundImage = "url(" + times[i].iconeTime + ")";
     }
}

function animaDestaque() {
     // Seleciona os artigos dentro da seção 'destaques'
     var sectionDestaques = document.querySelector('.destaques');
     var articlesDestaques = sectionDestaques.querySelectorAll('article');

     for(var i = 0; i < 3; i++) {
           articlesDestaques[i].addEventListener('mousemove', function() {
                 // Quando o mouse for passado em algum dos artigos, este será destacado dos outros
                 articlesDestaques[0].classList.remove('ativo');
                 articlesDestaques[1].classList.remove('ativo');
                 articlesDestaques[2].classList.remove('ativo');
                 this.classList.add('ativo');
          });

          articlesDestaques[i].addEventListener('mouseout', function() {
                // Quando o mouse não estiver em nenhum dos artigos, o primeiro será destacado dos outros
                articlesDestaques[0].classList.remove('ativo');
                articlesDestaques[1].classList.remove('ativo');
                articlesDestaques[2].classList.remove('ativo');
                articlesDestaques[0].classList.add('ativo');
          });
     }
}

animaDestaque();
incluiIconesTimes();
