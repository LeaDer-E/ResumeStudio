// Smooth scrolling for anchor links
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

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  if (modal && !modal.contains(e.target)) {
    modal.remove();
  }
});

// Form submission handling
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Clear form
    form.reset();
    
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  });
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Mobile menu handling
const mobileMenuButton = document.querySelector('[aria-label="Menu"]');
const mobileMenu = document.querySelector('#mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });
}