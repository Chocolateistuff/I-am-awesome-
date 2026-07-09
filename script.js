/* ===================================
   NUTELLAWAFFLE PERSONAL WEBSITE
   JavaScript for Interactive Features
   =================================== */

// Modal functionality for clickable cards
function openModal(contentId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const modalContents = {
        readingInterest: {
            title: '📖 Reading',
            content: `
                <h2>My Love for Reading</h2>
                <p>I absolutely love getting lost in stories! Reading takes me to magical worlds and lets me experience different perspectives and adventures.</p>
                <p><strong>Favorite Genres:</strong></p>
                <ul>
                    <li>Fantasy and adventure</li>
                    <li>Mystery and intrigue</li>
                    <li>Contemporary stories</li>
                    <li>Graphic novels</li>
                </ul>
                <p>Every book is a new journey waiting to be explored!</p>
            `
        },
        artsInterest: {
            title: '🎨 Arts & Crafts',
            content: `
                <h2>Creating Beauty</h2>
                <p>I love expressing my creativity through various art forms. Whether it's painting, drawing, or crafting, there's something magical about creating something beautiful from nothing.</p>
                <p><strong>What I Create:</strong></p>
                <ul>
                    <li>Paintings and drawings</li>
                    <li>Handmade crafts</li>
                    <li>DIY projects</li>
                    <li>Decorative items</li>
                </ul>
                <p>Art is my way of expressing emotions and ideas!</p>
            `
        },
        musicInterest: {
            title: '🎹 Piano & Violin',
            content: `
                <h2>Making Beautiful Music</h2>
                <p>Music is my passion! I've been learning piano and violin, and I love the challenge of mastering difficult pieces.</p>
                <p><strong>My Musical Journey:</strong></p>
                <ul>
                    <li>Piano - multiple competition wins!</li>
                    <li>Violin - currently learning</li>
                    <li>Classical pieces</li>
                    <li>Performing at recitals</li>
                </ul>
                <p>Every note brings me joy!</p>
            `
        },
        singingInterest: {
            title: '🎤 Singing',
            content: `
                <h2>Expressing Through Song</h2>
                <p>Singing is a wonderful way for me to express my emotions and connect with music on a deeper level.</p>
                <p><strong>What I Love About Singing:</strong></p>
                <ul>
                    <li>Expressing emotions</li>
                    <li>Performing for others</li>
                    <li>Learning new songs</li>
                    <li>The feeling of harmony</li>
                </ul>
                <p>My voice is a powerful tool for creativity!</p>
            `
        },
        danceInterest: {
            title: '💃 Dance',
            content: `
                <h2>Moving to the Beat</h2>
                <p>Dance is pure joy! I love expressing myself through movement and performing on stage for audiences.</p>
                <p><strong>Dance Styles I Enjoy:</strong></p>
                <ul>
                    <li>Contemporary</li>
                    <li>Hip-hop</li>
                    <li>Jazz</li>
                    <li>Creative choreography</li>
                </ul>
                <p>Dance lets me feel the music in my body!</p>
            `
        },
        experimentsInterest: {
            title: '🔬 Experiments',
            content: `
                <h2>Discovering How Things Work</h2>
                <p>I love experimenting! From pancake batter chemistry to cool science projects, I'm always curious about how the world works.</p>
                <p><strong>Types of Experiments I Love:</strong></p>
                <ul>
                    <li>Kitchen chemistry</li>
                    <li>Physics experiments</li>
                    <li>DIY science projects</li>
                    <li>Hands-on learning</li>
                </ul>
                <p>Science is everywhere and so exciting!</p>
            `
        },
        mathInterest: {
            title: '🧮 Challenging Math',
            content: `
                <h2>The Joy of Problem-Solving</h2>
                <p>I love solving challenging math problems! There's something special about working through a difficult problem and finally understanding it.</p>
                <p><strong>What Excites Me:</strong></p>
                <ul>
                    <li>Complex problem-solving</li>
                    <li>Puzzles and riddles</li>
                    <li>Learning new concepts</li>
                    <li>The "aha!" moments</li>
                </ul>
                <p>Math challenges make my brain happy!</p>
            `
        },
        germanInterest: {
            title: '🇩🇪 Learning German',
            content: `
                <h2>Exploring a New Language</h2>
                <p>I'm excited to learn German! It's a beautiful, structured language that opens up a whole new culture and way of communicating.</p>
                <p><strong>Why German Is Fascinating:</strong></p>
                <ul>
                    <li>Unique sounds and structure</li>
                    <li>German culture and traditions</li>
                    <li>Challenge of learning something new</li>
                    <li>Connecting with German-speaking communities</li>
                </ul>
                <p>Languages are keys to understanding the world!</p>
            `
        },
        moviesShow: {
            title: '🎬 Movies & Shows',
            content: `
                <h2>Entertainment I Love</h2>
                <p>I enjoy exploring stories through movies and shows. They inspire me creatively and take me on emotional journeys.</p>
                <p><strong>What I Watch:</strong></p>
                <ul>
                    <li>Fantasy adventures</li>
                    <li>Inspiring dramas</li>
                    <li>Creative animations</li>
                    <li>Feel-good stories</li>
                </ul>
                <p>Great stories can change how we see the world!</p>
            `
        },
        booksShow: {
            title: '📚 Books & Stories',
            content: `
                <h2>Stories That Matter</h2>
                <p>Books are my escape! I love immersing myself in different worlds and experiencing stories that make me feel inspired and connected.</p>
                <p><strong>Stories That Move Me:</strong></p>
                <ul>
                    <li>Adventures in magical worlds</li>
                    <li>Stories of courage and growth</li>
                    <li>Tales of friendship</li>
                    <li>Mysteries to solve</li>
                </ul>
                <p>Every page holds a new discovery!</p>
            `
        },
        gamesShow: {
            title: '🎮 Gaming',
            content: `
                <h2>Fun in the Digital World</h2>
                <p>I enjoy gaming for the fun, challenge, and creative experiences it offers. Games are a great way to relax and explore.</p>
                <p><strong>What I Enjoy:</strong></p>
                <ul>
                    <li>Adventure games</li>
                    <li>Puzzle challenges</li>
                    <li>Creative building games</li>
                    <li>Immersive worlds</li>
                </ul>
                <p>Gaming is both fun and a creative outlet!</p>
            `
        },
        musicShow: {
            title: '🎵 Music & Playlists',
            content: `
                <h2>The Soundtrack to Life</h2>
                <p>Music is everywhere in my life! I love discovering new artists and creating playlists for different moods and moments.</p>
                <p><strong>Music I Enjoy:</strong></p>
                <ul>
                    <li>Pop and indie artists</li>
                    <li>Classical compositions</li>
                    <li>Soundtrack music</li>
                    <li>Uplifting and positive songs</li>
                </ul>
                <p>The right song can change everything!</p>
            `
        },
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
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const box = document.getElementById(boxId);
        box.innerHTML = '';
        
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = e.target.result;
            box.appendChild(img);
        } else if (file.type.startsWith('video/')) {
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

document.querySelectorAll('.interest-card, .entertainment-card, .project-card, .journal-entry, .contact-card, .media-box').forEach(element => {
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
            link.style.color = 'var(--dark-purple)';
            link.style.fontWeight = '700';
        }
    });
}

// Console message - just for fun! 🎨
console.log('%c✨ Welcome to NutellaWaffle\'s Website! ✨', 'color: #DA70D6; font-size: 20px; font-weight: bold;');
console.log('%cHello! Thanks for visiting my website. Feel free to explore and enjoy! 🌈', 'color: #A855F7; font-size: 14px;');
console.log('%cClick on the cards to learn more! 📸🎥', 'color: #DA70D6; font-size: 12px;');
