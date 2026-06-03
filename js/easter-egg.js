/* ============================================================
   EASTER EGG
   ============================================================ */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const konamiInput = [];
const easterOverlay = document.getElementById('easter-overlay');
const closeEaster = document.getElementById('close-easter');

function openEasterEgg() {
  easterOverlay.classList.add('open');
  easterOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeEasterEgg() {
  easterOverlay.classList.remove('open');
  easterOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && easterOverlay.classList.contains('open')) {
    closeEasterEgg();
    return;
  }

  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  konamiInput.push(key);
  if (konamiInput.length > konamiCode.length) konamiInput.shift();

  if (konamiCode.every((expected, index) => expected === konamiInput[index])) {
    konamiInput.length = 0;
    openEasterEgg();
  }
});

closeEaster.addEventListener('click', closeEasterEgg);
easterOverlay.addEventListener('click', event => {
  if (event.target === easterOverlay) closeEasterEgg();
});

