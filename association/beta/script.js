const mobileMenu = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links-container');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinksContainer.classList.toggle('nav-active');
    hamburgerIcon.style.display = hamburgerIcon.style.display === 'none' ? 'block' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
});
