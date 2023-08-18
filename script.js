'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//
//
//

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //returns first element with selection
const allSections = document.querySelectorAll('.section'); //returns all sections, not just first
console.log(allSections); //returns nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //returns html collection, live collection, unlike nodelist
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message); //overrides the previous, cannot be two places simultaniously, from first child(prepend) to last child(append)
// header.append(message.cloneNode(true)); //true makes all child elements also cloned, clone makes it so that it will appear again, not overriden

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d'; //inline styles, in the dom
message.style.width = '120%';

console.log(message.style.color); //cannot get style hidden inside a class or maybe doesnt even exist
console.log(message.style.backgroundColor); //inline stle will show

console.log(getComputedStyle(message)); //shows huge messsage with all styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atricbutes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// NOn-standard
console.log(logo.designer); //not a standard property so shows undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c, "j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
// logo.classList.contains('c'); not includes (like in arrays)

// Don't use, will override all existing classes already there, only one class on any element
logo.className = 'Jonas';
