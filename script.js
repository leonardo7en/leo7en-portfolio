// ═══════════════════════════════════════════
// SCRIPT.JS
// ═══════════════════════════════════════════


// ─── ANO NO FOOTER ──────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ─── NAVBAR SCROLL ──────────────────────────────────────────
// Deixa a navbar mais sólida quando o usuário rola a página
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});


// ─── MENU MOBILE ────────────────────────────────────────────
const menuToggle  = document.getElementById('menuToggle');
const navLinks    = document.getElementById('navLinks');
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
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

// Fecha menu ao clicar em qualquer link (exceto o trigger do dropdown)
if (navLinks) {
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}


// ─── CV DROPDOWN ────────────────────────────────────────────
// Funciona assim:
//   1. Clicou no botão "Download CV" → adiciona .open ao contêiner
//   2. .open faz o .cv-menu aparecer (via CSS: display: block)
//   3. Clicar fora ou em uma opção fecha o dropdown
//
// Há 3 dropdowns na página: navbar, hero e contact.
// Todos usam a mesma lógica abaixo.

const cvDropdowns = document.querySelectorAll('.cv-dropdown');

// Fecha todos os dropdowns abertos
function closeAllDropdowns() {
  cvDropdowns.forEach((dropdown) => {
    dropdown.classList.remove('open');
    const trigger = dropdown.querySelector('.cv-dropdown-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

// Para cada dropdown, conecta o botão de trigger
cvDropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.cv-dropdown-trigger');

  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique feche imediatamente pelo listener do document

    const isOpen = dropdown.classList.contains('open');

    // Fecha todos antes de abrir o clicado (evita dois abertos ao mesmo tempo)
    closeAllDropdowns();

    if (!isOpen) {
      dropdown.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

// Clicar em qualquer lugar fora fecha todos os dropdowns
document.addEventListener('click', () => {
  closeAllDropdowns();
});

// Clicar em uma opção do menu fecha o dropdown E o menu mobile
document.querySelectorAll('.cv-option').forEach((option) => {
  option.addEventListener('click', () => {
    closeAllDropdowns();
    closeMenu();
  });
});

// Tecla Esc fecha dropdowns também
// (tratado junto com o Esc do modal mais abaixo)


// ─── ANIMAÇÃO DE ENTRADA (REVEAL) ───────────────────────────
// Elementos com .reveal aparecem suavemente quando ficam visíveis
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Para de observar após animar
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));


// ─── SISTEMA DE IDIOMA ──────────────────────────────────────
// Lê o idioma salvo no navegador (ou usa inglês por padrão)
const langButtons     = document.querySelectorAll('.lang-btn');
let   currentLanguage = localStorage.getItem('language') || 'en';

function applyTranslations(language) {
  if (!translations[language]) return;

  currentLanguage = language;

  // Muda o atributo lang do HTML (importante para acessibilidade e SEO)
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

  // Atualiza todos os elementos com data-translate="chave"
  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (translations[language][key]) {
      el.textContent = translations[language][key];
    }
  });

  // Marca o botão de idioma ativo
  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === language);
  });

  // Salva a escolha no navegador para a próxima visita
  localStorage.setItem('language', language);

  // Reconstrói os dados do modal com o idioma atualizado
  buildProjectData();
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyTranslations(btn.dataset.lang);
  });
});


// ─── MODAL ──────────────────────────────────────────────────
const modal        = document.getElementById('projectModal');
const modalTitle   = document.getElementById('modalTitle');
const modalBody    = document.getElementById('modalBody');
const modalClose   = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');


// ─── ZOOM DE IMAGEM ─────────────────────────────────────────
// Cria um overlay de tela cheia ao clicar em uma imagem da galeria
function openImage(imageSrc) {
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  overlay.innerHTML = `
    <div class="image-overlay-backdrop"></div>
    <img src="${imageSrc}" class="zoomed-image" alt="Expanded project image" />
    <button class="image-close" aria-label="Close image preview">×</button>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const closeZoom = () => {
    overlay.remove();
    // Restaura o scroll — mas só se o modal também não estiver aberto
    if (!modal || !modal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  };

  overlay.addEventListener('click', closeZoom);
}


// ─── DADOS DOS PROJETOS ──────────────────────────────────────
// Reconstruído sempre que o idioma muda
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
            <img src="assets/projects/ServicePortal_Designer.gif"
                 alt="Service Portal Designer preview"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery2}</h4>
            <img src="assets/projects/ServicePortal.png"
                 alt="Toy Store Service Portal"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery3}</h4>
            <img src="assets/projects/solicitacao.gif"
                 alt="Toy request Record Producer preview"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery4}</h4>
            <img src="assets/projects/solicitacao-brinquedos.png"
                 alt="Toy request automation flow"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery5}</h4>
            <img src="assets/projects/Flow_Pedido.png"
                 alt="Critical priority notification flow"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery6}</h4>
            <img src="assets/projects/Plataform_Analitcs.png"
                 alt="Operational dashboard and analytics"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery7}</h4>
            <img src="assets/projects/SP_Header.png"
                 alt="Service Portal header menu configuration"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery8}</h4>
            <img src="assets/projects/ServiceNow_Roles.png"
                 alt="ServiceNow roles configuration"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery9}</h4>
            <img src="assets/projects/ServiceNow_Studio.png"
                 alt="ServiceNow Studio application structure"
                 onclick="openImage(this.src)" />
          </div>
        </div>
      `
    },
    2: {
      title: t.project2Title,
      body: `
        <p>${t.modal2Intro}</p>
        <p><strong>${t.modalIncludes}</strong></p>
        <ul class="modal-list">
          <li>${t.modal2Item1}</li>
          <li>${t.modal2Item2}</li>
          <li>${t.modal2Item3}</li>
          <li>${t.modal2Item4}</li>
          <li>${t.modal2Item5}</li>
        </ul>
        <div class="modal-gallery">
          <div class="gallery-item">
            <h4>${t.gallery2_1}</h4>
            <img src="assets/projects/incident-list-sync.png.jpeg"
                 alt="Incident List Synchronization"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery2_2}</h4>
            <img src="assets/projects/incident-detail-sync.png.jpeg"
                 alt="Incident Details & Journal Fields"
                 onclick="openImage(this.src)" />
          </div>
          <div class="gallery-item">
            <h4>${t.gallery2_3}</h4>
            <img src="assets/projects/integration-app-log.png.png"
                 alt="Integration App Logs & REST Diagnostics"
                 onclick="openImage(this.src)" />
          </div>
        </div>
      `
    }
  };
}


// ─── ABRIR MODAL ────────────────────────────────────────────
function openModal(projectId) {
  const project = projectData[projectId];
  if (!project || !modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = project.title;
  modalBody.innerHTML    = project.body;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  // Volta ao topo do modal ao abrir
  const content = modal.querySelector('.modal-content');
  if (content) content.scrollTop = 0;

  document.body.style.overflow = 'hidden';

  if (modalClose) modalClose.focus();
}


// ─── FECHAR MODAL ───────────────────────────────────────────
function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


// ─── CONECTAR BOTÕES DOS PROJETOS ───────────────────────────
document.querySelectorAll('[data-project]').forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.project);
  });
});

if (modalClose)    modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);


// ─── TECLA ESC ──────────────────────────────────────────────
// Fecha zoom → depois modal → depois menu mobile, nessa ordem
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  // 1. Fecha zoom de imagem se estiver aberto
  const imageOverlay = document.querySelector('.image-overlay');
  if (imageOverlay) {
    imageOverlay.remove();
    document.body.style.overflow = modal && modal.classList.contains('active') ? 'hidden' : '';
    return;
  }

  // 2. Fecha dropdowns de CV
  closeAllDropdowns();

  // 3. Fecha modal
  if (modal && modal.classList.contains('active')) {
    closeModal();
    return;
  }

  // 4. Fecha menu mobile
  closeMenu();
});


// ─── INICIALIZAÇÃO ───────────────────────────────────────────
// Aplica o idioma salvo (ou inglês) ao carregar a página
applyTranslations(currentLanguage);