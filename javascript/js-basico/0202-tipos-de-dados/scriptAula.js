// Em JS existem 7 TIPOS DE DADOS
// Todos são primitivos exceto os objetos.

/*
var nome = "Lenon"; // String
var idade = 30; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
*/

// Dados primitivos são dados imutáveis.

// 1. VERIFICAR TIPO DE DADO

var nome = "Lenon";
console.log(typeof nome);
// retorna string

var idade = 30;
console.log(typeof idade);
// retorna number

// typeof null retorna object

// 2. STRING
// Você pode somar uma string e assim concatenar as palavras:

var nome = "Lenon";
var sobrenome = "Alcantara";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

// Você pode somar números com strings, o resultado final é sempre uma string:

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

// 3. ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil";
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// 4. TEMPLATE STRING
// Você deve passar expressões / variáveis dentro de ${}

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols"; // Sem Template String
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase1);
console.log(frase2);
