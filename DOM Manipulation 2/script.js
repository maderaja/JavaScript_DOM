// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p'); // => bagaikan pot bunga
const teksP = document.createTextNode('Paragraf Baru ini'); // => bagaikan bunga

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksP); // => memasukkan bunga kedalam pot bunga

// simpan P baru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // => meletakkan pot bunga yang telah diisi bunga ke tempat yang diinginkan misalnya kedalam ruang tamu(sectionA), tetapi akan diletakkan di akhir dari element parentnya

// CONTOH 2 (menggunakan insertBefore()):
const liBaru = document.createElement('li');
const teksLi = document.createTextNode('Item Baru');

liBaru.appendChild(teksLi);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// Menghapus Child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mengganti Node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru !');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

// Elemet yang baru / telah ditambah
pBaru.style.backgroundColor = 'aqua';
liBaru.style.backgroundColor = 'aqua';
h2Baru.style.backgroundColor = 'aqua';
