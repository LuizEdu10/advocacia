document.addEventListener('scroll', function () {
    const aboutImage = document.querySelector('.about-section img');
    const aboutSection = document.querySelector('.about-section');
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {
        aboutImage.classList.add('appear');
    }
});
