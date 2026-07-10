document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    
    if (envelope) {
        // Function to toggle the envelope
        function toggleEnvelope(e) {
            e.preventDefault(); // Prevents double-triggering on mobile
            envelope.classList.toggle("open");
            console.log("Envelope toggled! Open state:", envelope.classList.contains("open"));
        }

        // Listen for both computer clicks and mobile taps
        envelope.addEventListener("click", toggleEnvelope);
        envelope.addEventListener("touchstart", toggleEnvelope, { passive: false });
    } else {
        console.error("Envelope element not found in HTML!");
    }
});