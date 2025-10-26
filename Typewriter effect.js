// ======= Typewriter Text Enhancement =======
const typewriter = document.querySelector(".typewriter");
const phrases = ["Frontend Developer", "UI/UX Enthusiast", "React Wizard"];
let phraseIndex = 0;

function rotateTypewriter() {
  typewriter.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(rotateTypewriter, 4000);
