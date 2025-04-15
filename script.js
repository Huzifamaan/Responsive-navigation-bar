document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-btn');
    const navMenu = document.querySelector('header ul');
  
    if (navBtn && navMenu) {
      navBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navBtn.setAttribute('aria-expanded', navMenu.classList.contains('show-menu'));
      });
    } else {
      console.warn('Navigation button or menu not found.');
    }
  });
  