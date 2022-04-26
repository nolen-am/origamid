// 1. NÚMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Obs.: Precisão para até 15 digitos

// 2. OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Obs.: Lembrando que soma + em Strings serve para concatenar

// 3. OPERADORES ARITMÉTICOS (STRINGS)
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao1 = "100" / 2; // 50
var divisao2 = "Comprei 10" / 2; // NaN (Not a Number)
// Obs.: É possível verificar se uma variável é NaN ou não com a função isNaN()

// NAN = NOT A NUMBER
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// 4. A ORDEM IMPORTA
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Obs.: Parênteses para priorizar uma expressão

// 5. OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Obs.: Mesma coisa para o decremento --x

// 6. OPERADORES ARITMÉTICOS UNÁRIOS
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// Obs.: O - antes de um número torna ele negativo

// GUIA COMPLETO DE OPERADORES
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
