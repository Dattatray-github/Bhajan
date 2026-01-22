// Switch between sections
function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Light / Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
}
