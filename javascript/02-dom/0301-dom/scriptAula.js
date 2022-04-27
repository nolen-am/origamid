// DOCUMENT OBJECT MODEL (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser


// WINDOW E DOCUMENT
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body


// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


// titulo.addEventListener('click', callback)
// ativa a função callback ao click no titulo

const h1Selecionado = document.querySelector('h1');

function testeCallbackH1() {
    console.log('Clicou em: ', h1Selecionado);
}

h1Selecionado.addEventListener('click', testeCallbackH1);