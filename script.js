// Show or hide "Scroll to Top" button
window.addEventListener("scroll", function () {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Scroll to Top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Optional: Toggle Dark Mode (if needed)
function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
}
function searchLaw(section) {
    const input = document.getElementById(`search-${section}`).value.toLowerCase();
    const content = document.getElementById(`${section}-content`);
    const text = content.innerText.toLowerCase();

    if (text.includes(input)) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
