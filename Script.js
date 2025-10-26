
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

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// ======= Console Easter Egg =======
console.log("%cHey there, curious dev! 👋", "color: #0ff; font-size: 16px;");
console.log("Built by John Gideon — explore the code, stay inspired!");
