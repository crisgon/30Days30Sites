var header = document.querySelector('[data-js="header"]');
var nav = document.querySelector('[data-js="nav"]');
var openNav = document.querySelector('[data-js="open-nav"]');

openNav.addEventListener('click', open);
nav.querySelectorAll('a').forEach(function(item){
	item.addEventListener('click', close);
});
function open(){
	nav.classList.add('open-nav');
}

function close(){
	nav.classList.remove('open-nav');
}

window.onscroll = function(){
var top = window.pageYOffset || document.documentElement.scrollTop;
	if( top > 500 ) {
    console.log('Maior que 300');
    header.classList.add('header-small');
  }else{
    header.classList.remove('header-small');
  }
}