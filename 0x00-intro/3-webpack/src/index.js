const $ = require('jquery');
$(document).ready(function () {
	const body = $("body");
	const h1 = document.createElement('h1');
	$(h1).text("Holberton School");
	body.append(h1);
});
