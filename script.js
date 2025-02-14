// generating floating binary particles
document.addEventListener('DOMContentLoaded', () => {

    const particlesContainer = document.querySelector('.particles');
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        particle.textContent = Math.random() < 0.5 ? '0' : '1';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particle.style.opacity = 0.1;
        particle.style.color = '#1e56ff';
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
        fish.style.opacity = 1 - fish.style.top.replace('%', '') / 100 + 0.1;
        fish.style.animationDuration = `${Math.random() * 10 + 8}s`;

        const fishSize = Math.random() * 0.7 + 0.5;
        const fishcolor = Math.random();

        fish.style.fontSize = `${fishSize}em`;

        if (fishSize < 0.8) {
            if (fishcolor < 0.5) {
                fish.style.color = '#1e8fff97';  // darker colour for smaller fish
            } else {
                fish.style.color = '#871eff97';
            }
        } else {
            if (fishcolor > 0.5) {
                fish.style.color = '#1e90ff'; // brighter colour for larger fish
            } else {
                fish.style.color = '#b41eff';
            }
        }

        // swimming directions
        if (i % 2 === 0) {
            fish.style.animationName = 'swimRight';
        } else {
            fish.style.animationName = 'swimLeft';
        }

        fishContainer.appendChild(fish);
    }
});

// add to google calendar
function addToGoogleCalendar(eventTitle, date) {
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);

    const startISO = startDate.toISOString().replace(/-|:|\.\d+/g, "");
    const endISO = endDate.toISOString().replace(/-|:|\.\d+/g, "");

    const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startISO}/${endISO}&details=Ticket%20Drop%20Event&location=&sf=true&output=xml`;

    window.open(googleCalendarURL, "_blank");
}

// save ics file
function downloadICS(eventTitle, date) {
    const startDate = new Date(date); // Set time to 12:00 PM
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // 1-hour event

    const formatDate = (date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15) + "Z";
    };

    const icsContent = `BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    DTSTART:${formatDate(startDate)}
    DTEND:${formatDate(endDate)}
    SUMMARY:${eventTitle}
    DESCRIPTION:Ticket Drop Event
    LOCATION:
    END:VEVENT
    END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${eventTitle.replace(/\s/g, "_")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
const menuButtons = document.querySelectorAll('.menu-button');
const topButton = document.querySelector('.top-button');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value as needed
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            menuButtons.forEach(button => {
                button.classList.remove('highlight');
            });

            const activeButton = document.querySelector(`.menu-button[data-section="${entry.target.id}"]`);
            if (activeButton) {
                activeButton.classList.add('highlight');
                topButton.classList.add('show');
            } else {
                topButton.classList.remove('show');
            }

        }

    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// TYPING OUT THE TEXT

const text = "Shell We Dance Under the C ?";

let i = 0;
const typingSpeed = 40; // in ms

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            document.getElementById("reveal-text").classList.add("show");
        }, 300); // Delay before showing the reveal-text

        setTimeout(() => {
            document.getElementById("reveal-button").classList.add("show");
        }, 600);
    }
}

// start typing after page has loaded
window.addEventListener('DOMContentLoaded', typeWriter);

// Set the date of the Computer Science Ball
const eventDate = new Date("April 5, 2025 19:00:00").getTime(); // Set the event time (7 PM)
const birdDate = new Date("February 19, 2025 12:00:00").getTime();
const regDate = new Date("February 26, 2025 12:00:00").getTime();

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

const countdownTimerBird = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = birdDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".countdown-bird").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-bird").textContent = "The Tickets Have O-Fish-ally Dropped!";
    }
}, 1000);

const countdownTimerReg = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = regDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".countdown-reg").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-reg").textContent = "The Tickets Have O-Fish-ally Dropped!";
    }
}, 1000);

// MENU
document.addEventListener('DOMContentLoaded', () => {
    const navigateButton = document.getElementById('navigate-to');
    const menuContainer = document.querySelector('.menu-container');

    navigateButton.addEventListener('click', () => {
        const menuButtons = document.querySelectorAll('.menu-button');
        menuButtons.forEach(button => {
            button.classList.toggle('show');
        });
        menuContainer.classList.toggle('show');
    });
});

// carousel for ticketdrop

let currentIndex = 0;

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');

    // Ensure index is within bounds
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    // Move container
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex++;
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    updateCarousel();
}