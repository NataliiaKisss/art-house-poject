const openBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.header__nav');

openBtn.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
});