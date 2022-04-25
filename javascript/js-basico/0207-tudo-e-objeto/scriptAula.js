// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Lenon';

nome.length; // 5
nome.charAt(1); // 'e'
nome.replace('on', 'non'); // 'Lennon'
nome; // 'Lenon'


// NÚMEROS
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


// FUNÇÕES
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1


// ELEMENTOS DO DOM
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
{/* <a class="btn">Clique</a> */}

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})


// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.