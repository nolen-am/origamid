// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    if(!!valor) {
        return 'True';
    } else {
        return 'False'
    }
}

console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado * 4;
}

console.log(perimetro(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `Seu nome completo: ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Lenon', 'Alcantara'));

// Crie uma função que verifica se um número é par
function isEven(number) {
    var modulo = number % 2;
    if(modulo === 0) {
        return 'Even';
    } else {
        return 'Odd'
    }
}

console.log(isEven(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(n) {
    return typeof n;
}

console.log(tipo('lenon'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log('Lenon');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
