const $ = require('jquery');

$(document).ready(function () {
  document.title = 'Holberton School webpack';
  const h1 = document.createElement('h1');
  $(h1).text('Holberton School');
  $('body').append(h1);
});
