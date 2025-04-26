// Select the dropdown
const themeSelect = document.getElementById('themeSelect');

// Function to apply the selected theme
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else if (theme === 'dark') {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = 'white';
  } else if (theme === 'blue') {
    document.body.style.backgroundColor = '#87cefa';
    document.body.style.color = '#001f3f';
  }
}

// Listen for theme changes from the dropdown
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  applyTheme(selectedTheme);

  // Save selected theme in sessionStorage
  sessionStorage.setItem('theme', selectedTheme);
});

// When the page loads, check if there is a saved theme in sessionStorage
window.addEventListener('load', () => {
  const savedTheme = sessionStorage.getItem('theme');

  if (savedTheme) {
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    // Default to Light theme if no theme is saved
    applyTheme('light');
  }
});
