const faqImages = document.querySelectorAll('.faq-img');

faqImages.forEach(function (img) {
     img.addEventListener('click', function () {
          if (img.src.includes('plus.svg')) {
               img.src = 'assets/less.svg';
          } else {
               img.src = 'assets/plus.svg';
          }
          img.parentElement.parentElement.classList.toggle('active');

     });
});


document.addEventListener("DOMContentLoaded", function () {
     const navbar = document.querySelector(".navbar");

     window.addEventListener("scroll", function () {
          if (window.scrollY === 0) {
               navbar.classList.remove("navbar--shadow");
          } else {
               navbar.classList.add("navbar--shadow");
          }
     });
});

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
menu.addEventListener("click", () => {
     menu.classList.toggle("is-active");
     menuLinks.classList.toggle("active");
})

// const contactBtn = document.querySelector(".button")
// contactBtn.addEventListener("click", () => {
//      menuLinks.classList.toggle("active")
// })

const navbarLinks = document.querySelectorAll(".navbar__links")
navbarLinks.forEach(link => {

     link.addEventListener('click', () => {
          menuLinks.classList.toggle("active");
     });
});


const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(container => {

     const url = container.dataset.url;

     container.addEventListener('click', () => {
          window.open(url, '_blank');
     });
});