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
