(function(doc, win){
	'use strict';

	var trailer = doc.querySelector('[data-js = "trailer"]').addEventListener('click', showTrailer, false);
	var trailerBox = doc.querySelector('[data-js = "trailerBox"]');
	function showTrailer(event){
		event.preventDefault();
		trailerBox.classList.remove('hidden');
	}

	var plot = doc.querySelector('[data-js = "plot"]').addEventListener('click', showPlot, false);
	var plotBox = doc.querySelector('[data-js = "plotBox"]');

	function showPlot(event){
		event.preventDefault();
		plotBox.classList.remove('hidden');
	}

	var closeTrailer = doc.querySelector('[data-js = "closeTrailer"]').addEventListener('click', function(event){
		event.preventDefault();
		trailerBox.classList.add('hidden');
	},false);

	var closePlot = doc.querySelector('[data-js = "closePlot"]').addEventListener('click', function(event){
		event.preventDefault();
		plotBox.classList.add('hidden');
	},false);

}(document, window));