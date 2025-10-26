
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

sections.forEach(section => {
  observer.observe(section);
});

// ======= Dark Mode Toggle =======
const darkToggle = document.querySelector(".dark-mode-toggle");
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// ======= Typewriter Text Enhancement =======
const typewriter = document.querySelector(".typewriter");
const phrases = ["Frontend Developer", "UI/UX Enthusiast", "React Wizard"];
let phraseIndex = 0;

function rotateTypewriter() {
  typewriter.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(rotateTypewriter, 4000);

// ======= Contact Form Validation =======
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

// ======= Console Easter Egg =======
console.log("%cHey there, curious dev! 👋", "color: #0ff; font-size: 16px;");
console.log("Built by John Gideon — explore the code, stay inspired!");
