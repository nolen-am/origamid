// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector('.faq-lista');

console.log(firstDT.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(firstDT.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;