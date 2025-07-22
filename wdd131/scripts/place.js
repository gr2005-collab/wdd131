// Wind Chill Function
function calculateWindChill(tempF, speedMph) {
  if (tempF <= 50 && speedMph > 3) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chill = calculateWindChill(temp, speed);
  document.getElementById("chill").textContent = chill;

  // Footer Year and Last Modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
