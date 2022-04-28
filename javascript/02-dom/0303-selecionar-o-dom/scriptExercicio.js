// Retorne no console todas as imagens do site como NodeList
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console todas as imagens do site como HTMLCollection
const imgs2 = document.getElementsByTagName('img');
console.log(imgs2);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length - 1]);
