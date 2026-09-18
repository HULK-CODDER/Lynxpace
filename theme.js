let change = document.getElementById('change_theme');
const toastContainer = document.getElementById('toast-container');

const themes = [
  "indigo-theme",
  "gold-theme",
  "green-theme",
  "blue-theme",
  "purple-neon-theme",
  "dark-green-theme",
  "violet-theme",
  "pink-theme",
  "cyber-theme",
  "cyan-theme",
  "orange-theme",
  "emerald-theme",
  "red-theme",
  "nord-theme",
  "sunset-theme",
  "cyberpunk-theme"
];

// Toast notification helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Trigger animation frame for smooth transition
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 1500);
}

// Theme switcher listener
change.addEventListener('click', () => {
  let r = Math.floor(Math.random() * themes.length);
  const newTheme = themes[r];

  document.body.className = '';
  document.body.classList.add(newTheme);

  // Trigger the toast notification
  showToast(`Theme switched to: ${newTheme}`);
});