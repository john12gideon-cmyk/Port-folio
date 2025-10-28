// ======= Console Easter Egg =======
console.log("%cHey there, curious dev! 👋", "color: #0ff; font-size: 16px;");
console.log("Built with futuristic vibes and neon dreams.");

// ======= Dark Mode Toggle =======
const darkToggle = document.querySelector(".dark-mode-toggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// ======= Mobile Menu Toggle =======
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ======= Scroll-Based Section Reveal =======
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ======= Smooth Scroll to Anchors =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ======= Typewriter Text Enhancement =======
const typewriter = document.querySelector(".typewriter");
const phrases = ["Frontend Developer", "UI/UX Enthusiast", "React Wizard"];
let phraseIndex = 0;

function rotateTypewriter() {
  if (typewriter) {
    typewriter.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
}

setInterval(rotateTypewriter, 4000);

// ======= Contact Form Validation (Optional) =======
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const email = contactForm.querySelector("input[type='email']");
    const message = contactForm.querySelector("textarea");
    const name = contactForm.querySelector("input[type='text']");

    if (!email.value || !message.value || !name.value) {
      e.preventDefault();
      alert("Please fill out all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}
