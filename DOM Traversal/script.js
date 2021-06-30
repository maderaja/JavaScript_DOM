// Cara saya sendiri
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');
// close.addEventListener('click', function () {
//   container.removeChild(card);
// });

// Cara pak dika
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click', function () {
//   card.style.display = 'none';
// });
//=============================================================

// DOM Traversal
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function(e) {
//     // close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

// Cara yg lebih simpel menggunakan forEach
// close.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault(); 
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//   card.addEventListener('click', function (e) {
//     alert('ok');
//   });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
  }
});

// contoh method DOM Traversal yang lain
// https://blog.bitsrc.io/explore-javascript-dom-traversal-96352ec3bcf8
