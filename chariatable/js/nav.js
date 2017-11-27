var nav = document.querySelector('[data-js="nav"]');
var open = document.querySelector('[data-js="open-nav"]');
var close = document.querySelector('[data-js="close-nav"]');
console.log(nav, open, close);




open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);
nav.querySelectorAll('a').addEventListener('click', closeNav);

function openNav(){
	nav.classList.add('show-nav');
}

function closeNav(){
	nav.classList.remove('show-nav');
}