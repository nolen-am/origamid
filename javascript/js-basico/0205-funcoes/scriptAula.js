// 1. FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7


// 2. PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

console.log(imc(80, 1.8)); // imprimindo a chamada da funcao com os argumentos passados como parametro.


// 3. PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
  }
  corFavorita(); // retorna 'Você não gosta de nada', pois nenhum argumento foi passado como parâmetro.


// 4. ARGUMENTOS PODEM SER FUNÇÕES
addEventListener('click', function() {
    console.log('Clicou');
  });
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima


// 5. PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc(80, 1.80); // retorna o imc
  console.log(imc(80, 1.80)); // retorna o imc e undefined


// 6. VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 60) {
      return true;
    } else {
      return false;
    }
  }


// 7. ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
  }
  console.log(totalPaises); // erro, totalPaises não definido


// 8. ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro


// 9. HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
