let navBurger = document.querySelector('.nav__burger');

let navCross = document.querySelector('.nav__cross');
let navMenu = document.querySelector('.nav__menu');

navBurger.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  // navMenu.classList.toggle("twcss-flex");
  // navMenu.classList.toggle("hidden");
});

navCross.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  // navMenu.classList.toggle("twcss-flex");
  // navMenu.classList.toggle("hidden");
});
