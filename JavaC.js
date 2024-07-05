document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations using Intersection Observer API
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// Welcome screen animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.welcome').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.welcome').style.display = 'none';
            document.body.style.overflowY = 'auto'; // Enable scrolling after the welcome screen
        }, 1000);
    }, 2000); // Delay before welcome screen disappears
});