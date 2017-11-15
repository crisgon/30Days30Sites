(function(doc, win){
	var nav = doc.querySelector('[data-js="nav-links"]');
	var openNav  = doc.querySelector('[data-js="open-nav"]');
	var closeNav = doc.querySelector('[data-js="close-nav"]');
	
	openNav.addEventListener('click', activeNav, false);

	closeNav.addEventListener('click', disableNav, false);

	function activeNav(event){
			event.preventDefault();
			nav.setAttribute('id', 'open-nav');
	}

	function disableNav(event){
		event.preventDefault();
		nav.removeAttribute('id');
	}

}(document, window));