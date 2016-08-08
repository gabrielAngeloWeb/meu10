// A função presente neste arquivo serve para animar a seção inicial do site,
// garantindo que quando o usuário passe o mouse sobre um dos três títulos
// ele tome formatação diferente e se destaque dos demais.
// Quando o mouse não estiver em nenhum dos três títulos, o primeiro título
// deverá ficar em destaque, uma vez que ele é o mais importante, pois explica
// a finalidade do site.

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

// Chamada de funções
animaDestaque();
