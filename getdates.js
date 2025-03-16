// Function to display the current year
function displayYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('2025').textContent = currentYear;
}

// Function to display the last modified date
function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Call the functions when the page loads
window.onload = function() {
    displayYear();
    displayLastModified();
};
