// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg);

console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgsWidthTotal = document.querySelectorAll('img');
console.log(imgsWidthTotal);

let soma = 0;
imgsWidthTotal.forEach((item) => {
    item.getBoundingClientRect();
    let width = item.width;
    
    soma = soma + width;
});

console.log(soma)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linkMin = document.querySelectorAll('a[href]');

let minWidth;
let minHeight;

linkMin.forEach((item) => {
    const aItens = item.getBoundingClientRect();

    minWidth = aItens.width;
    minHeight = aItens.height;

    console.log(minWidth);
    console.log(minHeight);


    if(minHeight > 48 && minWidth > 48) {
        console.log('Possui o mínimo recomendado :)');
    } else {
        console.log('Não possui o mínimo recomendado :(');
    }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}