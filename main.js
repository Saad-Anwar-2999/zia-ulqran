// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 75,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add animation to button
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
        submitBtn.innerHTML = 'Submit Application';
        submitBtn.disabled = false;
    }, 1500);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});