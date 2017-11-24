var nav = document.querySelector('[data-js="nav"]');
var openNav = document.querySelector('[data-js="open-nav"]');
var closeNav = document.querySelector('[data-js="close-nav"]');
var container = document.querySelector('[data-js="container"]');
console.log(openNav);

openNav.addEventListener('click', function(event){
	event.preventDefault();
		nav.classList.add('nav-active');
		openNav.classList.add('hidden');
		closeNav.classList.remove('hidden');
		container.classList.add('move')
}, false);

closeNav.addEventListener('click', function(event){
	event.preventDefault();
		nav.classList.remove('nav-active');
		closeNav.classList.add('hidden');
		openNav.classList.remove('hidden');
		container.classList.remove('move')
}, false);

nav.querySelectorAll('a').forEach(function(item){
	item.addEventListener('click', function(){
		nav.classList.remove('nav-active');
		closeNav.classList.add('hidden');
		openNav.classList.remove('hidden');
		container.classList.remove('move')
	});
});