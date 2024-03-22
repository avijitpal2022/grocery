//text typing animation 2
let text = "Organic";
let typingElement = document.getElementById("typing-text");
let charIndex = 0;
let typingSpeed = 350; // adjust typing speed

function typeText() {
    if (charIndex < text.length) {
        typingElement.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }else {
        charIndex = 0; // start over for infinite loop
        typingElement.textContent = ""; // clear text before typing
        setTimeout(typeText, 200); // delay before restarting animation
    }
}

typeText();
