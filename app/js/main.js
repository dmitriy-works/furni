$(function () {
  

const menuBurger = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

console.log(menuBurger)

menuBurger.addEventListener('click', function () {
  menuList.classList.toggle('header__list--active');
});



});