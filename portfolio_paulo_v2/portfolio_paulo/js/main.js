/* ============================================================
   THEME TOGGLE
   ============================================================ */
const root = document.documentElement;
const btnTheme = document.getElementById('btn-theme');

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', savedTheme);

btnTheme.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ============================================================
   NAVBAR SCROLL
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const btnMenu = document.getElementById('btn-menu');
const navMobile = document.getElementById('nav-mobile');

btnMenu.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMobile.classList.remove('open'));
});

/* ============================================================
   SKILL FILTERS
   ============================================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const skillPills = document.querySelectorAll('.skill-pill');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    skillPills.forEach(pill => {
      if (filter === 'todos' || pill.dataset.cat === filter) {
        pill.classList.remove('hidden');
      } else {
        pill.classList.add('hidden');
      }
    });
  });
});

/* ============================================================
   ACTIVE NAV LINK (scroll spy)
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--clr-text)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

/* ============================================================
   MODAL
   ============================================================ */

   function openModal() {
  document.getElementById("videoModal").style.display = "block";
  // Opcional: inicia o vídeo sozinho ao abrir
  // document.getElementById("demoVideo").play();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");
  modal.style.display = "none";
  video.pause(); // Pausa o vídeo ao fechar
  video.currentTime = 0; // Volta para o início
}

// Fecha se clicar fora do vídeo (no fundo escuro)
window.onclick = function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target == modal) {
    closeModal();
  }
}