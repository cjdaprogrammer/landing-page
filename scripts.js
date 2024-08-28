document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.querySelector('.get-started-button');
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.querySelector('#about');

    function showAboutSection() {
        aboutSection.classList.add('show');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }

    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        showAboutSection();
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        showAboutSection();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link, .get-started-button");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute("href").substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth" // Smooth scroll
                });
            }
        });
    });
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


