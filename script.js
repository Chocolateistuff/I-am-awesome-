/* ===================================
   NUTELLAWAFFLE PERSONAL WEBSITE
   JavaScript for Interactive Features
   =================================== */

// Smooth scrolling for navigation links
// When you click a link, the page smoothly scrolls to that section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on Scroll - elements fade in as you scroll down
// This makes the page feel more interactive and engaging
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Target all cards and sections for the scroll animation
document.querySelectorAll('.interest-card, .project-card, .journal-entry, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Add active state to navigation links based on current scroll position
// This helps you know which section you're viewing
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--dark-text)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--purple)';
            link.style.fontWeight = '700';
        }
    });
}

// Button hover effect - adds a fun interaction when you hover over the CTA button
// This code is already handled by CSS, but you can add more effects here if you want!

// Contact form handling (if you want to add form functionality later)
// You can uncomment this when you add a form to the contact section
/*
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});
*/

// Scroll to top button (optional feature)
// Add a button that appears when you scroll down and takes you back to the top
window.addEventListener('scroll', () => {
    // You can add a "back to top" button logic here
});

// Animate numbers counting up (you can use this for achievement stats later)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Console message - just for fun! 🎨
console.log('%c✨ Welcome to NutellaWaffle\'s Website! ✨', 'color: #FFB3D9; font-size: 20px; font-weight: bold;');
console.log('%cHello! Thanks for visiting my website. Feel free to explore and enjoy! 🌈', 'color: #A855F7; font-size: 14px;');
