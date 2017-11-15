(function(doc, win){
	var nav = doc.querySelector('[data-js="nav-links"]');
	var openNav  = doc.querySelector('[data-js="open-nav"]');
	var closeNav = doc.querySelector('[data-js="close-nav"]');

	openNav.addEventListener('click', function(event){
			event.preventDefault();
			nav.setAttribute('id', 'open-nav');
	}, false);

	closeNav.addEventListener('click', function(event){
		event.preventDefault();
		nav.removeAttribute('id');
	}, false);
	
}(document, window));