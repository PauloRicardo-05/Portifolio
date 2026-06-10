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

