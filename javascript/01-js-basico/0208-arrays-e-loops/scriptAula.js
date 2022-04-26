// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox


// MÉTODOS E PROPRIEDADES DE UMA ARRAY
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3


// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes, início, condição e incremento
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console


// WHILE LOOP
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


// ARRAYS E LOOPS
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}


// BREAK
// O loop irá parar caso encontro e palavra break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}


// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
// Podemos passar os seguintes parâmetros item, index e array
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente


// NÃO SE CONFUNDA COM A SINTAXE
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
