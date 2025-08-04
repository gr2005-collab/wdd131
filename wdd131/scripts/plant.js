// scripts/plants.js

document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "Water early in the morning to prevent evaporation.",
    "Use compost to enrich your soil.",
    "Mulching helps retain moisture and suppress weeds."
  ];

  const tipsList = document.getElementById("tips-list");
  if (tipsList) {
    tips.forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  }
});
