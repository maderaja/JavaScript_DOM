// 1. innerHTML (Berfungsi untuk memanipulasi isi atau semua elemen html yang di seleksi)

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Raja Mahendra</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello world';
//==============================================

// 2. style (seperti namanya fungsinya untuk memanipulasi style dari elemen yang di seleksi)

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'lightblue';
// judul.style.color = 'salmon';
//==================================================

// 3. setAttribute() (untuk memanipulasi atribut(sesuatu yang menempel pada elemen HTML) yang terdapat pada elemen yang di seleksi)

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// judul.setAttribute('name', 'raja'); // (Untuk menambahkan attribute)
// a.setAttribute('id', 'link');

// console.log(a.getAttribute('href')); // (Untuk mengetahui isi dari attribute)

// a.removeAttribute('href'); // (Untuk menghilangkan/hapus attribute)

//===================================================

// 4. classList (method khusus untuk mengelola class)
const p2 = document.querySelector('.p2');
p2.classList.add('label'); // untuk menambahkan class
p2.classList.remove('label'); // untuk menghapus class
p2.classList.toggle('label'); // bekerja seperti saklar lampu

document.body.classList.toggle('biru-muda');

p2.classList.replace('label', 'satu'); // untuk menggati class / nama class
