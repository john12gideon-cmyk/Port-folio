// ✅ Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ✅ Dark Mode Toggle
const darkToggle = document.getElementById('dark-mode-toggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ✅ Typewriter Effect
const typewriterSub = document.getElementById('typewriter-sub');
const titles = ['Frontend Developer', 'React Wizard', 'UI Specialist'];
let current = 0;

setInterval(() => {
  current = (current + 1) % titles.length;
  typewriterSub.textContent = titles[current];
}, 4000);

// ✅ Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = contactForm.querySelectorAll('input, textarea');
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
    }
  });

  if (!valid) {
    alert('Please fill out all fields before submitting.');
  } else {
    alert('Message sent successfully!');
    contactForm.reset();
  }
});
