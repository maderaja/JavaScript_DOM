// Mengubah warna background menggunakan class.list & event handler
const tUbahWarna = document.querySelector('#tUbahWarna');
tUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = 'aqua';
  document.body.classList.toggle('biru-muda');
};

// Mengubah warna background secara acak menggunakan bilangan acak(Math.random) dan addEventListener
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// Mengubah warna menggunakan elemen input-slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// Mengganti Warna menggunakan pergerakan mouse
document.body.addEventListener('mousemove', function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);

  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});
