window.addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('main-container');
  // It's a good practice to check if the element exists
  if (container) {
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }
});

/**
 * Toggles the visibility of project details with a smooth animation
 * by adding/removing the '.active' class.
 */
function toggleProjectDetails(elementId) {
  const details = document.getElementById(elementId);
  const button = event.target;
  
  details.classList.toggle('active');

  if (details.classList.contains('active')) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
}

/**
 * Handles switching between the 'Project Report' and 'Presentation' tabs.
 */
function openTab(evt, tabName) {
  // Get all elements with class="tab-content" and hide them
  const tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-button" and remove the class "active"
  const tablinks = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
