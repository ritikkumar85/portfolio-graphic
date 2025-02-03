// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Light/Dark mode toggle with localStorage persistence
const modeToggle = document.getElementById('mode-toggle');

// On page load, apply the saved mode
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
    modeToggle.textContent = '☀️'; // Set to light mode icon
  } else {
    modeToggle.textContent = '🌙'; // Set to dark mode icon
  }
});

// Toggle the dark mode and update localStorage
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀️'; // Update icon for light mode
    localStorage.setItem('darkMode', 'true');
  } else {
    modeToggle.textContent = '🌙'; // Update icon for dark mode
    localStorage.setItem('darkMode', 'false');
  }
});



// (Optional) You can also add JavaScript here for other interactive features.
// Note: With Netlify Forms, no extra JavaScript is needed to capture form data.


        // Check for saved user preference
   
// Ensure the DOM is loaded before initializing Typed.js
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed-text', {
      strings: [
        'Graphic Designer',
        'Web Developer',
        'WhatsApp Automation Specialist'
      ],
      typeSpeed: 100,
      backSpeed: 90,
      backDelay: 2000,
      loop: true,
      showCursor: false,    // Set to false to disable the cursor entirely
      cursorChar: '|'      // Use a pipe instead of a forward slash
    });
  });
  
  

