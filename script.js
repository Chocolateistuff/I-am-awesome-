/* ===================================
   NUTELLAWAFFLE PERSONAL WEBSITE
   JavaScript for Interactive Features
   =================================== */

// Handle media uploads to media boxes
function handleMediaUpload(event, boxId) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Create a file reader to display the media
    const reader = new FileReader();
    reader.onload = function(e) {
        const box = document.getElementById(boxId);
        box.innerHTML = ''; // Clear placeholder
        
        if (file.type.startsWith('image/')) {
            // If it's an image
            const img = document.createElement('img');
            img.src = e.target.result;
            box.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            // If it's a video
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.style.width = '100%';
            video.style.height = '100%';
            box.appendChild(video);
        }
    };
    reader.readAsDataURL(file);
}

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
document.querySelectorAll('.interest-card, .project-card, .journal-entry, .contact-card, .media-box').forEach(element => {
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
            link.style.color = 'var(--gold)';
            link.style.fontWeight = '700';
        }
    });
}

// Console message - just for fun! 🎨
console.log('%c✨ Welcome to NutellaWaffle\'s Website! ✨', 'color: #FFD700; font-size: 20px; font-weight: bold;');
console.log('%cHello! Thanks for visiting my website. Feel free to explore and enjoy! 🌈', 'color: #A855F7; font-size: 14px;');
console.log('%cClick on the gold-bordered boxes in the About Me section to upload your photos and videos! 📸🎥', 'color: #FFD700; font-size: 12px;');
