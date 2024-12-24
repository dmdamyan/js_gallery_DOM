'use strict';

const nav = document.querySelector('.list-item');
const imgLarge = document.querySelector('.gallery__large-img');
const a = document.querySelector('a');
const img = document.querySelector('.gallery__thumb');

a.addEventListener('click', () => {
  event.preventDefault();
});

img.addEventListener('click', () => {
  event.preventDefault();
});

nav.addEventListener('click', () => {
  const link = event.target.closest('.list-item__link', '.gallery__img');

  if (!link) {
    return;
  }

  imgLarge.src = link.src;
});
