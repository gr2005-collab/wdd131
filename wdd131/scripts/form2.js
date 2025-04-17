const form = document.getElementById("recipeForm");
const msg = document.getElementById("confirmationMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // localStorage: track number of submissions
  let count = localStorage.getItem("submissionCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("submissionCount", count);

  // Template literals + conditional logic
  const name = document.getElementById("name").value.trim();
  const userName = name ? name : "Chef";
  msg.textContent = `${userName}, thank you for submitting your recipe! This is your ${count}${count === 1 ? "st" : count === 2 ? "nd" : "th"} submission.`;

  form.reset();
});
