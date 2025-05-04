import { gsap } from "https://cdn.skypack.dev/gsap";

gsap.from("#welcome", { x: 0, opacity: 0, duration: 1 });
const text = "Jsem programátor se zkušenostmi v jazycích C#, JavaScript a práci s databázemi. Neustále se učím a rozvíjím své schopnosti v moderních technologiích.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("intro-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Rychlost psaní
  }
}

typeWriter();