// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
console.log(itensMenu);

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

itensMenu[0].classList.add('ativo');

console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtr = img.hasAttribute('alt');
    console.log(img, possuiAtr);
})

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://github.com/origamid')
console.log(link);
