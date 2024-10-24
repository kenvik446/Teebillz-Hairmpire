// Ensure elements are only targeted once
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelectorAll('.main-nav-link');

  // Toggle the mobile navigation menu
  menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open'); // Show or hide the nav

      // Switch between hamburger and close icon
      menuIcon.setAttribute('name', menuIcon.getAttribute('name') === 'menu-outline' ? 'close-outline' : 'menu-outline');
  });

  // Close the mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open'); // Hide the nav
        menuIcon.setAttribute('name', 'menu-outline'); // Reset to hamburger icon
      }
    });
  });

  // Smooth scrolling to internal links (useful for 'Book Your Appointment' button)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple form validation for appointment booking
  const appointmentForm = document.querySelector('#appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const phone = document.querySelector('#phone').value.trim();
      const message = document.querySelector('#message').value.trim();

      if (name === '' || email === '' || phone === '') {
        alert('Please fill out all required fields.');
        e.preventDefault(); // Prevent form submission if validation fails
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // Prevent form submission if email is invalid
      }
    });
  }

  // Email validation helper function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
