// about.js — Dynamically load the shared navbar and highlight "About"

document.addEventListener("DOMContentLoaded", () => {
    fetch("../navbar/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
  
        // Highlight the About link
        const navLinks = document.querySelectorAll("#topnav nav a");
        navLinks.forEach(link => {
          if (link.textContent.trim() === "About") {
            link.classList.add("active");
          }
        });
  
        // Load scroll behavior
        const script = document.createElement("script");
        script.src = "../navbar/navbar.js";
        document.body.appendChild(script);
      })
      .catch(err => console.error("Navbar load error:", err));
  });