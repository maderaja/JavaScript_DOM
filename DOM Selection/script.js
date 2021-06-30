// DOM Selection

// 1. document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Raja Mahendra';

// 2. document.getElementsByTagName() -> HTML Collections
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// 3. document.getElementsByClassName() -> HTML Collections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';

//4. document.querySelector() -> Element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// //5. document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';
