window.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('main-container');
  // It's a good practice to check if the element exists
  if (container) {
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }
});

// NEW FUNCTION to toggle project details visibility
function toggleProjectDetails(elementId) {
  const details = document.getElementById(elementId);
  const button = event.target;
  if (details.style.display === "none") {
    details.style.display = "block";
    button.textContent = "Read Less";
  } else {
    details.style.display = "none";
    button.textContent = "Read More";
  }
}
