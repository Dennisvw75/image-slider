'use strict';
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const imageContainer = document.querySelector('.image-container');

const imagesArray = [
  'images/image-1.jpg',
  'images/image-2.jpg',
  'images/image-3.jpg',
  'images/image-4.jpg',
  'images/image-5.jpg',
  'images/image-6.jpg',
  'images/image-7.jpg',
  'images/image-8.jpg',
  'images/image-9.jpg',
  'images/image-10.jpg',
];

let next = 0;

const image = document.createElement('img');
btnLeft.disabled = true;
image.classList.add('img');
image.src = imagesArray[next];
imageContainer.appendChild(image);

const nextImage = function () {
  const getImage = document.querySelector('img');
  next++;
  console.log(next);
  getImage.src = imagesArray[next];

  if (next === 9) {
    btnRight.disabled = true;
  } else {
    btnRight.disabled = false;
    btnLeft.disabled = false;
  }
};

const prevImage = function () {
  const getImage = document.querySelector('img');
  next--;
  console.log(next);
  getImage.src = imagesArray[next];

  if (next === 0) {
    btnLeft.disabled = true;
  } else {
    btnLeft.disabled = false;
    btnRight.disabled = false;
  }
};

btnLeft.addEventListener('click', prevImage);

btnRight.addEventListener('click', nextImage);
