document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");

    if (!envelope) return;

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });
});