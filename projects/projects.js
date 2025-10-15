// projects.js
// Dynamically load the same navbar and highlight "Projects"

document.addEventListener("DOMContentLoaded", () => {
  // Load shared navbar HTML
  fetch("../navbar/navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert navbar into the placeholder
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Highlight the "Projects" link
      const navLinks = document.querySelectorAll("#topnav nav a");
      navLinks.forEach(link => {
        if (link.textContent.trim() === "Projects") {
          link.classList.add("active");
        }
      });

      // ✅ Load navbar scroll logic after it’s inserted
      const script = document.createElement("script");
      script.src = "../navbar/navbar.js"; // shared scroll script
      document.body.appendChild(script);
    })
    .catch(err => console.error("Failed to load navbar:", err));
});