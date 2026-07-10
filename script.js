document.addEventListener("DOMContentLoaded", function() {
            const envelope = document.getElementById("envelope");
            
            if (envelope) {
                envelope.addEventListener("click", function() {
                    this.classList.toggle("open");
                    console.log("Envelope clicked! Open state:", this.classList.contains("open"));
                });
            } else {
                console.error("Envelope element not found in HTML!");
            }
        });