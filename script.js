/* ===================================
   NUTELLAWAFFLE PERSONAL WEBSITE
   JavaScript for Interactive Features
   =================================== */

// Modal functionality for clickable cards
function openModal(contentId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const modalContents = {
        pianoProject: {
            title: '🎵 Piano & Music Journey',
            content: `
                <h2>My Piano Journey</h2>
                <p>Music is my passion! I've been studying piano and have won multiple 1st place awards at piano competitions in my level. I'm currently working on mastering more difficult classical pieces and also learning violin.</p>
                <p><strong>Achievements:</strong></p>
                <ul>
                    <li>1st Place - Piano Competition (Multiple Times!)</li>
                    <li>Learning advanced classical pieces</li>
                    <li>Performing at recitals and events</li>
                </ul>
                <p>My next goal is to learn even more challenging pieces on both piano and violin!</p>
            `
        },
        danceProject: {
            title: '💃 Dance & Performance',
            content: `
                <h2>Dance & Performance</h2>
                <p>Dance is one of my favorite ways to express creativity! I love performing on stage and moving to the beat. Whether it's hip-hop, contemporary, or any style, I enjoy expressing myself through movement.</p>
                <p><strong>What I Love About Dance:</strong></p>
                <ul>
                    <li>Creative self-expression</li>
                    <li>Performing on stage</li>
                    <li>Connecting with music through movement</li>
                    <li>Challenging myself with new choreography</li>
                </ul>
            `
        },
        cardProject: {
            title: '🎨 Card Business',
            content: `
                <h2>My Card Business</h2>
                <p>I'm starting my own handmade card business! I create beautiful, unique, and personalized cards for all occasions.</p>
                <p><strong>What Makes My Cards Special:</strong></p>
                <ul>
                    <li>Handmade with love and creativity</li>
                    <li>Custom designs for any occasion</li>
                    <li>Using elegant designs and beautiful materials</li>
                    <li>Each card is one-of-a-kind</li>
                </ul>
                <p>I'm excited to share my creations with the world!</p>
            `
        },
        lemonadeProject: {
            title: '🍋 Lemonade Stand for Charity',
            content: `
                <h2>Lemonade Stand for Charity</h2>
                <p>I'm planning to run a lemonade stand and donate all the proceeds to a good cause. It's a fun way to help others while engaging with my community!</p>
                <p><strong>My Goals:</strong></p>
                <ul>
                    <li>Make delicious homemade lemonade</li>
                    <li>Share joy with my community</li>
                    <li>Raise funds for a meaningful cause</li>
                    <li>Learn about entrepreneurship</li>
                </ul>
            `
        },
        germanProject: {
            title: '🇩🇪 Learning German',
            content: `
                <h2>Learning German</h2>
                <p>I'm excited to learn German! It's a beautiful language and I love exploring new cultures and ways of communication.</p>
                <p><strong>My Goals:</strong></p>
                <ul>
                    <li>Build vocabulary and grammar skills</li>
                    <li>Learn about German culture</li>
                    <li>Practice speaking and writing</li>
                    <li>Eventually have conversations in German!</li>
                </ul>
                <p>Learning a new language opens up so many possibilities!</p>
            `
        },
        germanInterest: {
            title: '🇩🇪 Learning German',
            content: `
                <h2>Why I Love Learning German</h2>
                <p>Languages fascinate me! German is such an expressive and structured language. I love how it allows me to explore a new culture and connect with people from Germany and other German-speaking countries.</p>
                <p><strong>What Excites Me:</strong></p>
                <ul>
                    <li>The unique sounds and structure of the language</li>
                    <li>German culture, music, and traditions</li>
                    <li>The challenge of learning something new</li>
                    <li>Building friendships with people from German-speaking countries</li>
                </ul>
            `
        }
    };
    
    const content = modalContents[contentId];
    if (content) {
        modalBody.innerHTML = `<h1>${content.title}</h1>${content.content}`;
        modal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

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

// Animation on Scroll
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

document.querySelectorAll('.interest-card, .project-card, .journal-entry, .contact-card, .media-box').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Add active state to navigation links
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
console.log('%cClick on the project and interest cards to learn more! 📸🎥', 'color: #FFD700; font-size: 12px;');
