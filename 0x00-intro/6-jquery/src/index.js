const $ = require('jquery');
$(document).ready(function () {
  const a = 'Holberton School';
  const b = 'HBTN';
  const body = document.getElementsByTagName('body')[0];
  const h1 = document.createElement('h1');

  h1.innerHTML = a;
  h1.setAttribute('id', 'text_toggler');
  body.appendChild(h1);

  setInterval(changeValue, 2000);

  function changeValue () {
    const elem = document.querySelector('#text_toggler');
    if (elem.innerHTML === a) {
      elem.innerHTML = b;
    } else {
      elem.innerHTML = a;
    }
  }
});
