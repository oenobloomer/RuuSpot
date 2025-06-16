document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home-page');
  const deskPage = document.getElementById('desk-page');
  const tabHome = document.getElementById('tab-home');
  const tabDesk = document.getElementById('tab-desk');
  const form = document.getElementById('rudesks-form');
  const confirmation = document.getElementById('confirmation');
  const toggleButton = document.getElementById('mode-toggle');
  const body = document.body;

  window.showPage = function(page) {
    if (page === 'home') {
      homePage.classList.remove('hidden');
      deskPage.classList.add('hidden');
      tabHome.classList.add('active');
      tabDesk.classList.remove('active');
      confirmation.classList.add('hidden');
    } else if (page === 'desk') {
      deskPage.classList.remove('hidden');
      homePage.classList.add('hidden');
      tabDesk.classList.add('active');
      tabHome.classList.remove('active');
      confirmation.classList.add('hidden');
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const time = form.time.value;
    if (!name || !time) {
      alert('Please fill in the required fields.');
      return;
    }
    confirmation.textContent = `Sorry ${name}! That time and date has already been reserved by Oeno, teehee!`;
    confirmation.classList.remove('hidden');
    form.reset();
  });

  function setMode(mode) {
    if (mode === 'dark') {
      body.classList.add('dark');
      toggleButton.textContent = '☀️';
    } else {
      body.classList.remove('dark');
      toggleButton.textContent = '🌙';
    }
    localStorage.setItem('mode', mode);
  }

  setMode(localStorage.getItem('mode') || 'light');

  toggleButton.addEventListener('click', () => {
    const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
    setMode(currentMode === 'dark' ? 'light' : 'dark');
  });
});
