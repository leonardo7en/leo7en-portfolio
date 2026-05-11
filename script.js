// FOOTER YEAR
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// NAVBAR SCROLL
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});


// MOBILE MENU
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  if (!navLinks || !menuToggle || !menuOverlay) return;

  navLinks.classList.add('open');
  menuToggle.classList.add('open');
  menuOverlay.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!navLinks || !menuToggle || !menuOverlay) return;

  navLinks.classList.remove('open');
  menuToggle.classList.remove('open');
  menuOverlay.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}


// REVEAL ANIMATION
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// LANGUAGE SYSTEM
const langButtons = document.querySelectorAll('.lang-btn');
let currentLanguage = localStorage.getItem('language') || 'en';

function applyTranslations(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === language);
  });

  localStorage.setItem('language', language);

  buildProjectData();
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyTranslations(button.dataset.lang);
  });
});


// MODAL ELEMENTS
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');


// IMAGE ZOOM
function openImage(imageSrc) {
  const imageOverlay = document.createElement('div');

  imageOverlay.className = 'image-overlay';

  imageOverlay.innerHTML = `
    <div class="image-overlay-backdrop"></div>
    <img src="${imageSrc}" class="zoomed-image" alt="Expanded project image" />
    <button class="image-close" aria-label="Close image preview">×</button>
  `;

  document.body.appendChild(imageOverlay);
  document.body.style.overflow = 'hidden';

  const closeZoom = () => {
    imageOverlay.remove();

    if (!modal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  };

  imageOverlay.addEventListener('click', closeZoom);
}


// PROJECT DATA
let projectData = {};

function buildProjectData() {
  const t = translations[currentLanguage];

  projectData = {
    1: {
      title: t.projectTitle,
      body: `
        <p>${t.modalIntro}</p>

        <p><strong>${t.modalIncludes}</strong></p>

        <ul class="modal-list">
          <li>${t.modalItem1}</li>
          <li>${t.modalItem2}</li>
          <li>${t.modalItem3}</li>
          <li>${t.modalItem4}</li>
          <li>${t.modalItem5}</li>
          <li>${t.modalItem6}</li>
          <li>${t.modalItem7}</li>
          <li>${t.modalItem8}</li>
          <li>${t.modalItem9}</li>
        </ul>

        <div class="modal-gallery">

          <div class="gallery-item">
            <h4>${t.gallery1}</h4>
            <img
              src="assets/projects/ServicePortal_Designer.gif"
              alt="Service Portal Designer preview"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery2}</h4>
            <img
              src="assets/projects/ServicePortal.png"
              alt="Toy Store Service Portal"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery3}</h4>
            <img
              src="assets/projects/Solicitação.gif"
              alt="Toy request Record Producer preview"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery4}</h4>
            <img
              src="assets/projects/Solicitação de Brinquedos.png"
              alt="Toy request automation flow"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery5}</h4>
            <img
              src="assets/projects/Flow_Pedido.png"
              alt="Critical priority notification flow"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery6}</h4>
            <img
              src="assets/projects/Plataform_Analitcs.png"
              alt="Operational dashboard and analytics"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery7}</h4>
            <img
              src="assets/projects/SP_Header.png"
              alt="Service Portal header menu configuration"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery8}</h4>
            <img
              src="assets/projects/ServiceNow_Roles.png"
              alt="ServiceNow roles configuration"
              onclick="openImage(this.src)"
            />
          </div>

          <div class="gallery-item">
            <h4>${t.gallery9}</h4>
            <img
              src="assets/projects/ServiceNow_Studio.png"
              alt="ServiceNow Studio application structure"
              onclick="openImage(this.src)"
            />
          </div>

        </div>
      `
    }
  };
}


// OPEN MODAL
function openModal(projectId) {
  const project = projectData[projectId];

  if (!project || !modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = project.title;
  modalBody.innerHTML = project.body;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }

  document.body.style.overflow = 'hidden';

  if (modalClose) {
    modalClose.focus();
  }
}


// CLOSE MODAL
function closeModal() {
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';
}


// CONNECT PROJECT BUTTONS
document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    openModal(button.dataset.project);
  });
});


// CLOSE MODAL EVENTS
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeModal);
}


// CLOSE WITH ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const imageOverlay = document.querySelector('.image-overlay');

    if (imageOverlay) {
      imageOverlay.remove();
      document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
      return;
    }

    closeModal();
    closeMenu();
  }
});


// INITIALIZE SITE
applyTranslations(currentLanguage);