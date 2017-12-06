var nav = document.querySelector('[data-js="nav"]');
openNav = document.querySelector('[data-js="open-nav"]');
closeNav = document.querySelector('[data-js="close-nav"]')



openNav.addEventListener('click', open);
closeNav.addEventListener('click', close);
nav.querySelectorAll('a').forEach(function(item){
	item.addEventListener('click', close);
});


function open () {
	nav.classList.add('nav-active');
}

function close () {
	nav.classList.remove('nav-active');
}