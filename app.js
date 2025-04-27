const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Toggle mobile menu
menu.addEventListener('click', function(event) {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  
  // Prevent the click from bubbling up to document
  event.stopPropagation();
});

// Close menu when clicking elsewhere on page
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuLinks.contains(event.target)) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
});