const $ = require('jquery');
$(document).ready(function () {
	document.title = 'Holberton School webpack';
	const h1 = document.createElement("h1");
	const h2 = document.createElement("h2");
	$(h1).text('Holberton School');
	$(h2).text('Holberton School 2');
	$('body').append(h1);
	$('body').append(h2);
	
	
});
