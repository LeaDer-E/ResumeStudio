// Navigation
function navigateTo(hash) {
  // Remove active class from all pages and links
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));

  // Add active class to target page and link
  const targetPage = document.querySelector(hash);
  const targetLink = document.querySelector(`a[href="${hash}"]`);
  
  if (targetPage) {
    targetPage.classList.add('active');
  }
  if (targetLink) {
    targetLink.classList.add('active');
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle navigation
window.addEventListener('hashchange', () => {
  navigateTo(window.location.hash || '#home');
});

// Initial navigation
navigateTo(window.location.hash || '#home');

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.close-button');

// Open lightbox
document.querySelectorAll('.template').forEach(template => {
  template.addEventListener('click', () => {
    const img = template.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle mobile navigation
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});
