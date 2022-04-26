// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total); // 35

// Crie duas expressões que retornem NaN
var expressao1 = "Você é 10 " * 10;
var expressao2 = "Quanto é 10 " / 10;

console.log(expressao1);
console.log(expressao2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
++incremento;
console.log(incremento);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = parseInt(peso) / 2; // NaN (Not a Number)

console.log(pesoPorDois);
