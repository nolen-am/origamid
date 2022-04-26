var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

// 1. SWITCH
// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

// 2. TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana:

// Falsy
if (false)
if (0)
if (NaN)
// ou -0
if (null)
if (undefined)
if ("")
if (true)
// ou "" ou ``

// Truthy
if (1)
if (" ")
if ("andre")
if (-5)
if ({})
if (!true)


// 3. OPERADOR LÓGICO DE NEGAÇÃO !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if (!1)
// false
if (!"")
// false
if (!undefined)
// true
if (!!" ")
// true
if (!!"")
// true
// false

// 4. OPERADORES DE COMPARAÇÃO
// Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// 5. OPERADORES LÓGICOS &&
// Se ambos os valores forem true, irá retornar o último valor verificado. Se algum valor for false, irá retornar o primeiro valor false e irá ignorar os demais valores.
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// 6. OPERADORES LÓGICOS ||
// Retorna o primeiro valor true que encontrar.
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true
