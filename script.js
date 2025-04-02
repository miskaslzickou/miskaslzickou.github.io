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


window.onload = function() {
    glitchText();
};