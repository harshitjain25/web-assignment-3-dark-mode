// Select the theme button and the website body
const themeButton = document.getElementById("theme-toggle");
const body = document.body;

// Check if the user previously selected dark mode
const savedTheme = localStorage.getItem("theme");

// Restore the saved theme when the page loads
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
}

// Update the button text based on the current theme
function updateButton() {
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute("aria-pressed", "true");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute("aria-pressed", "false");
    }
}

// Set the correct button text when the page loads
updateButton();

// Switch themes when the user clicks the button
themeButton.addEventListener("click", function () {

    // Toggle the dark-mode class on the body
    body.classList.toggle("dark-mode");

    // Save the selected theme in local storage
    const currentTheme = body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("theme", currentTheme);

    // Update the button label
    updateButton();
});