window.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('main-container');
  // It's a good practice to check if the element exists
  if (container) {
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }
});
