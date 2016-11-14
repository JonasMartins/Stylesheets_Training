$(document).ready(function() {
	'use strict';
	paper.install(window);// install Paper.js
	paper.setup(document.getElementById('mainCanvas'));// attach Paper.js to canvas
	
	var c = Shape.Circle(200, 200, 50);
	c.fillColor = 'green';
	
	paper.view.draw();
	console.log('main.js loaded');
});
