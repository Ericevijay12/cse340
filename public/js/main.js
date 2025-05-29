// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const primaryNav = document.getElementById('primaryNav');
  
  if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
    });
  }
  
  // Scroll to top button functionality
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    // Show button when page is scrolled down 200px
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Add current year to footer copyright
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Add thumbnail image click functionality on vehicle detail page
  const thumbImages = document.querySelectorAll('.thumb');
  const featuredImage = document.querySelector('.featured-image');
  
  if (thumbImages.length && featuredImage) {
    thumbImages.forEach(thumb => {
      thumb.addEventListener('click', () => {
        featuredImage.src = thumb.src.replace('-thumb', '-large');
        featuredImage.alt = thumb.alt;
        
        // Remove active class from all thumbnails
        thumbImages.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumb.classList.add('active');
      });
    });
  }
  
  // Tab functionality on vehicle detail page
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Hide all tab contents
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
        
        // Show the selected tab content
        tabContents[index].style.display = 'block';
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
      });
    });
    
    // Set first tab as active by default
    if (tabButtons[0]) {
      tabButtons[0].click();
    }
  }
});
