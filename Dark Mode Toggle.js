// ======= Dark Mode Toggle =======
const darkToggle = document.querySelector(".dark-mode-toggle");
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
