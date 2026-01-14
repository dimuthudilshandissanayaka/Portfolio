// Mobile menu functionality
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks2 = document.querySelector('.nav-links2');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navLinks2.classList.toggle('show', menuOpen);
    document.body.classList.toggle('menu-open', menuOpen);
    menuBtn.innerHTML = menuOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling
document.querySelectorAll('.nav-links2 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 44,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (menuOpen) {
                menuOpen = false;
                navLinks2.classList.remove('show');
                document.body.classList.remove('menu-open');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar2 = document.querySelector('.navbar2');
    if (window.scrollY > 100) {
        navbar2.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar2.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent. I\'ll get back to you soon.');
    this.reset();
});