function glitchText() {
    let p = document.getElementById("textAnimation");
    let originalText = p.innerText;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let iterations = 0;
    let pOriginalColor = p.style.color; // Store original color

    let glitch = setInterval(() => {
        p.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
        p.innerText = originalText
            .split("")
            .map((char, i) => (Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char))
            .join("");


        iterations++;
        if (iterations > 20) {
            clearInterval(glitch);
            p.innerText = originalText; 
            p.style.color = pOriginalColor; // Restore original color
        }
    }, 100);
}


const hand = document.getElementById("hand");
let angle = 0;

function shake() {
  const offset = Math.sin(angle) * 20; // 20px side-to-side
  hand.style.transform = `translateX(${offset}px)`;
  angle += 0.1;
  requestAnimationFrame(shake);
}

shake();
shakeHand();
window.onload = function() {
    glitchText();

};
