// Modern landing page interactions

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe tiles for scroll animation
document.addEventListener('DOMContentLoaded', function() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile, index) => {
    tile.style.opacity = '0';
    tile.style.transform = 'translateY(20px)';
    tile.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
    observer.observe(tile);
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#contact') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Enhanced tile interactions - reduce opacity for other tiles on hover
  allTiles = document.querySelectorAll('.tile');
  allTiles.forEach(tile => {
    tile.addEventListener('mouseenter', function() {
      allTiles.forEach(t => {
        if (t !== this) {
          t.style.opacity = '0.6';
        }
      });
    });
    
    tile.addEventListener('mouseleave', function() {
      allTiles.forEach(t => {
        t.style.opacity = '1';
      });
    });
  });

  // Navigation active state
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});

function updateActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('[id]');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = 'var(--dept-grey-2)';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--dept-black)';
    }
  });
}

// Performance monitoring
if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('⚡ Page loaded in ' + pageLoadTime + 'ms');
  });
}

// Parallax effect on hero
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero && window.scrollY < window.innerHeight) {
    const offset = window.scrollY * 0.5;
    hero.style.backgroundPosition = `0% ${offset}px`;
  }
});
