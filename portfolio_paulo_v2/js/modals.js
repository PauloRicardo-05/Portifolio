/* ============================================================
   MODAL
   ============================================================ */

const videoModal = document.getElementById("videoModal");
if (videoModal && videoModal.parentElement !== document.body) {
  document.body.appendChild(videoModal);
}

function openModal() {
  const modal = document.getElementById("videoModal");
  if (!modal) return;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  // Opcional: inicia o vÃ­deo sozinho ao abrir
  // document.getElementById("demoVideo").play();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");
  if (!modal || !video) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
  video.pause(); // Pausa o vÃ­deo ao fechar
  video.currentTime = 0; // Volta para o inÃ­cio
}

function createProjectCardModal() {
  const modal = document.createElement("div");
  modal.className = "modal-overlay project-card-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn" type="button" aria-label="Fechar projeto">&times;</button>
      <div class="project-card-slot"></div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

const projectCardModal = createProjectCardModal();
const projectCardSlot = projectCardModal.querySelector(".project-card-slot");
const projectModalClose = projectCardModal.querySelector(".close-btn");

function openProjectCardModal(card) {
  const cardClone = card.cloneNode(true);
  cardClone.classList.remove("hidden");
  cardClone.removeAttribute("tabindex");
  cardClone.removeAttribute("role");
  cardClone.removeAttribute("aria-label");
  cardClone.querySelector(".modal-overlay")?.remove();

  projectCardSlot.replaceChildren(cardClone);
  projectCardModal.classList.add("open");
  projectCardModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  projectModalClose.focus();
}

function closeProjectCardModal() {
  projectCardModal.classList.remove("open");
  projectCardModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  projectCardSlot.replaceChildren();
}

document.querySelectorAll('.proj-card').forEach(card => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ampliar projeto ${card.querySelector(".proj-title")?.textContent.trim() || ""}`.trim());

  card.addEventListener("click", event => {
    if (event.target.closest("a, button, .modal-overlay")) return;
    openProjectCardModal(card);
  });

  card.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProjectCardModal(card);
  });
});

projectCardModal.addEventListener("click", event => {
  if (event.target === projectCardModal) closeProjectCardModal();
});

projectCardSlot.addEventListener("click", event => {
  if (!event.target.closest("[onclick*='openModal']")) return;
  event.preventDefault();
  event.stopPropagation();
  closeProjectCardModal();
  openModal();
}, true);

videoModal?.addEventListener("click", event => {
  event.stopPropagation();
  if (event.target === videoModal) closeModal();
});

projectModalClose.addEventListener("click", closeProjectCardModal);

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (projectCardModal.classList.contains("open")) closeProjectCardModal();
  closeModal();
});

