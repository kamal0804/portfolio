document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Problem Solver', 'Traveler', 'Cricket Enthusiast'],
        typeSpeed: 100,
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('showing');
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Adding welcome animations
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate__fadeIn');
        }, index * 200);
    });
});
