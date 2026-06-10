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

// Projeto filtering based on selected skill pills
const projCards = document.querySelectorAll('.proj-card');
let selectedSkills = new Set();

function updateProjectFilters() {
  if (selectedSkills.size === 0) {
    projCards.forEach(c => c.classList.remove('hidden'));
    return;
  }

  projCards.forEach(card => {
    const tags = Array.from(card.querySelectorAll('.proj-tag')).map(t => t.textContent.trim().toLowerCase());
    // show if card contains ANY of the selected skills
    const matches = Array.from(selectedSkills).some(s => tags.includes(s));
    if (matches) card.classList.remove('hidden'); else card.classList.add('hidden');
  });
}

skillPills.forEach(pill => {
  pill.addEventListener('click', () => {
    // ignore hidden pills
    if (pill.classList.contains('hidden')) return;
    const text = pill.textContent.trim().toLowerCase();
    if (pill.classList.toggle('selected')) {
      selectedSkills.add(text);
    } else {
      selectedSkills.delete(text);
    }
    // if user clicked a filter button 'todos', reset selections
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    updateProjectFilters();
  });
});

