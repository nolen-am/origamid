// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll('p');

const allChars = Array.prototype.reduce.call(paragraphs, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

console.log(allChars);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novosElementos(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    classe ? elemento.innerHTML = conteudo : null;

    return elemento;
}

console.log(novosElementos('li', 'ativo', 'oi'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novoElemento = novosElementos.bind(null, 'h1', 'titulo');

console.log(novoElemento('Novo elemento h1 com a classe "titulo"'));