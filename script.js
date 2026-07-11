document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");

    if (!envelope) return;

    envelope.addEventListener("click", (e) => {
        // If the envelope is open and she taps inside the letter (to read/scroll),
        // we prevent the envelope from closing.
        if (envelope.classList.contains("open") && e.target.closest("#letter")) {
            return;
        }
        
        envelope.classList.toggle("open");
        });
    });
// === NEW SUBTLE FLOWER CODE ===
function createPetal() {
    const petal = document.createElement("div");
    petal.innerHTML = "🌸"; 
    petal.style.position = "fixed";
    petal.style.top = "-20px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = Math.random() * 10 + 12 + "px"; 
    petal.style.opacity = Math.random() * 0.5 + 0.3;      
    petal.style.pointerEvents = "none";                  
    petal.style.zIndex = "9999";
    
    const duration = Math.random() * 5 + 5; 
    petal.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.style.transform = `translateY(105vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
        petal.style.opacity = "0";
    }, 100);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Check every 3 seconds to spawn a new petal once the page is fully ready
if (document.readyState === "complete" || document.readyState === "interactive") {
    setInterval(createPetal, 3000);
} else {
    document.addEventListener("DOMContentLoaded", () => setInterval(createPetal, 3000));
}