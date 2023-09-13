const btn = document.querySelector('.btn');
const container = document.querySelector('.hamburger');
const menu = document.querySelector('.mobileMenu');
const cont = document.querySelector('.hello');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  cont.classList.toggle('hidden');
});
