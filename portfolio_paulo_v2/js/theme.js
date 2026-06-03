/* ============================================================
   THEME TOGGLE
   ============================================================ */
const root = document.documentElement;
const btnTheme = document.getElementById('btn-theme');
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');
const printModeBtn = document.getElementById('btn-print-mode');
const exitPrintModeBtn = document.getElementById('exit-print-mode');

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', savedTheme);

btnTheme.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

