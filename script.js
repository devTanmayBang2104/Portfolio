document.addEventListener("DOMContentLoaded", function() {
    animateProgressBar();
  });
  
  function animateProgressBar() {
    var progressBars = document.querySelectorAll(".progress-bar");
  
    progressBars.forEach(function(progressBar) {
      var targetWidth = progressBar.getAttribute("data-width");
      progressBar.style.width = "0"; // Set initial width to 0 for animation
      progressBar.style.transition = "width 1s"; // Add transition for smooth animation
  
      // Trigger the reflow to apply initial styles
      void progressBar.offsetWidth;
  
      progressBar.style.width = targetWidth;
  
      var percentageElement = progressBar.querySelector(".percentage");
      percentageElement.style.opacity = 1; // Make the percentage visible
  
      // Optional: You can remove the data-width attribute to prevent reanimation on subsequent loads
      progressBar.removeAttribute("data-width");
    });
  }
  