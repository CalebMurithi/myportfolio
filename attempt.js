document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }
        if (nameInput.value.trim().length < 2) {
            e.preventDefault();
            alert('Please enter a valid name');
            return;
        }
        if (messageInput.value.trim().length < 10) {
            e.preventDefault();
            alert('Message must be at least 10 characters long');
            return;
        }
        
        e.preventDefault();
        alert('Thank you for your message, ' + nameInput.value + '! I will get back to you soon.');
        contactForm.reset();
    });
}
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.project-item, .domain-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
const footerLink = document.querySelector('.footer a');
if (footerLink) {
    footerLink.addEventListener('mouseenter', () => {
        footerLink.title = 'Click to copy GitHub Pages link';
    });
}
const multipleText = document.querySelector('.multiple-text');
const textArray = ['software development', 'coding', 'web design', 'problem solving'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function typeEffect() {
    const currentText = textArray[textIndex];
    
    if (!isDeleting) {
        if (charIndex < currentText.length) {
            multipleText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, speed);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause before deleting
        }
    } else {
        if (charIndex > 0) {
            multipleText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, speed / 2);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }
}
if (multipleText) {
    typeEffect();
}
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'none';
    });
});
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Portfolio loaded in ' + pageLoadTime + 'ms');
});
