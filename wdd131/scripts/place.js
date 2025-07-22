// scripts/place.js

// Set current year
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  if (tempF <= 50 && speedMph > 3) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1) + " °F";
  } else {
    return "N/A";
  }
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);
const chill = calculateWindChill(temp, speed);
document.getElementById("chill").textContent = chill;
