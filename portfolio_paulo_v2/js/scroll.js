/* ============================================================
   NAVBAR SCROLL
   ============================================================ */
const navbar = document.getElementById('navbar');

function updateScrollUI() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  navbar.classList.toggle('scrolled', scrollTop > 10);
  scrollProgress.style.width = `${progress}%`;
  backToTopBtn.classList.toggle('visible', scrollTop > 300);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

printModeBtn.addEventListener('click', () => {
  document.body.classList.add('print-mode');
  exitPrintModeBtn.classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

exitPrintModeBtn.addEventListener('click', () => {
  document.body.classList.remove('print-mode');
  exitPrintModeBtn.classList.remove('visible');
});

