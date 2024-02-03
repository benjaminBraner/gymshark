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


const navbarLinks = document.querySelectorAll(".navbar__links")
navbarLinks.forEach(link => {
     link.addEventListener('click', () => {
          menuLinks.classList.toggle("active");
     });
});


const links = document.querySelectorAll('.navbar__links');

const menLink = Array.from(links).find(link => link.getAttribute('href') === '#catalog' && link.innerText.includes('Men'));
const womenLink = Array.from(links).find(link => link.getAttribute('href') === '#catalog' && link.innerText.includes('Women'));

menLink.addEventListener('click', function () {
     filterItems('men');
});

womenLink.addEventListener('click', function () {
     filterItems('women');
});







const shopMenBtn = document.querySelector(".shop-men-btn");
const shopWomenBtn = document.querySelector(".shop-women-btn");

shopMenBtn.addEventListener('click', function () {
     filterItems('men');
});

shopWomenBtn.addEventListener('click', function () {
     filterItems('women');
});



const newCollectionBtn = document.querySelector(".new-collection-btn");
newCollectionBtn.addEventListener('click', function () {
     filterItems('all');
});



const menCardBtn = document.querySelector(".men-card-btn");
const womenCardBtn = document.querySelector(".women-card-btn");

menCardBtn.addEventListener('click', function () {
     filterItems('men');
});

womenCardBtn.addEventListener('click', function () {
     filterItems('women');
});

const mustHaveNav = document.querySelectorAll('.musthave__nav');


const menItems = document.querySelectorAll('.musthave__card.men');
const womenItems = document.querySelectorAll('.musthave__card.women');

const allBtn = document.getElementById('allBtn');
const menBtn = document.getElementById('menBtn');
const womenBtn = document.getElementById('womenBtn');

allBtn.addEventListener('click', function () {
     filterItems('all');
});

menBtn.addEventListener('click', function () {
     filterItems('men');
});

womenBtn.addEventListener('click', function () {
     filterItems('women');
});


function getActiveLinkElement() {
     const buttons = [allBtn, menBtn, womenBtn];

     for (const button of buttons) {
          if (button.classList.contains('link-active')) {
               return button;
          }
     }
     return null; // Devuelve null si no se encuentra ningún elemento con la clase "link-active"
}



function filterItems(category) {
     if (category === 'all') {
          if (!allBtn.className.includes("link-active")) {
               getActiveLinkElement().classList.remove("link-active");
               allBtn.classList.add("link-active");
          }
          showItems(menItems);
          showItems(womenItems);
     }
     else if (category === 'men') {
          if (!menBtn.className.includes("link-active")) {
               getActiveLinkElement().classList.remove("link-active");
               menBtn.classList.add("link-active");
          }
          showItems(menItems);
          hideItems(womenItems);
     }
     else if (category === 'women') {
          if (!womenBtn.className.includes("link-active")) {
               getActiveLinkElement().classList.remove("link-active");
               womenBtn.classList.add("link-active");
          }
          showItems(womenItems);
          hideItems(menItems);
     }
}

function showItems(items) {
     items.forEach(function (item) {
          item.style.display = 'block';
     });
}

function hideItems(items) {
     items.forEach(function (item) {
          item.style.display = 'none';
     });
}

