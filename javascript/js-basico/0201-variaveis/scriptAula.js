var nome = "Lenon";
var idade = 30;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = "Alcantara",
  cidade = "Sao Paulo";

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

console.log(aindaNaoDefini);

// 1. HOISTING
// As variáveis são movidas para cima do código, porém o valor a ser atribuído não é movido
console.log(nome);
var nome = "Lenon";
// Retorna undefined

var profissao = "Programador";
console.log(profissao);
// Retorna Programador

// 2. MUDAR O VALOR ATRIBUÍDO
// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
