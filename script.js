// generating floating binary particles
const particlesContainer = document.querySelector('.particles');
const numParticles = 60;

for (let i = 0; i < numParticles; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.textContent = Math.random() < 0.5 ? '0' : '1';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particle.style.opacity = Math.random();
    particlesContainer.appendChild(particle);
}

// fish fish fish
const fishContainer = document.querySelector('.fish-container');
const numFish = 10;

for (let i = 0; i < numFish; i++) {
    let fish = document.createElement('div');
    fish.classList.add('fish');
    fish.textContent = ' }<))))*> ';
    fish.style.top = `${Math.random() * 90}%`;
    fish.style.animationDuration = `${Math.random() * 10 + 8}s`;

    const fishSize = Math.random() * 0.7 + 0.5;
    fish.style.fontSize = `${fishSize}em`;

    if (fishSize < 0.8) {
        fish.style.color = '#1e8fff97'; // darker colour for smaller fish
    } else {
        fish.style.color = '#1e90ff'; // brighter colour for larger fish
    }

    // swimming directions
    if (i % 2 === 0) {
        fish.style.animationName = 'swimRight';
    } else {
        fish.style.animationName = 'swimLeft';
    }

    fishContainer.appendChild(fish);
}

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevents default jump
        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// TYPING OUT THE TEXT

const text = "Whale, hello there! Get ready to make waves at the most unforgettable night of the year! Join us for an evening of ceilidh, some really good food, and poker. Given how tide down with work you are this semester, grant yourself an evening with dazzling sea-inspired decor, delightful surprises, and music to keep you grooving. And don't be shellfish—bring your friends (we love some good ol' pier pressure)! So, water you waiting for? Seas the day!";
let i = 0;
const typingSpeed = 40; // in ms

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // show the button after typing is complete
        document.getElementById("reveal-button").classList.add("show");
    }
}

// start typing after page has loaded
window.addEventListener('DOMContentLoaded', typeWriter);

// Set the date of the Computer Science Ball
const eventDate = new Date("April 5, 2025 19:00:00").getTime(); // Set the event time (7 PM)

// Update the countdown every second
const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").textContent = "🎉 The Ball Has O-Fish-ally Started! 🎉";
    }
}, 1000);

// MENU
document.addEventListener('DOMContentLoaded', () => {
    const navigateButton = document.getElementById('navigate-to');
    navigateButton.addEventListener('click', () => {
        const menuButtons = document.querySelectorAll('.menu-button');
        menuButtons.forEach(button => {
            button.classList.toggle('show');
        });
    });
});