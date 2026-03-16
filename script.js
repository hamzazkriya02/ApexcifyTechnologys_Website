document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});