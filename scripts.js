
// Pes de cada etiqueta al núvol: 3 = gran, 2 = mitjana, 1 = petita
const WEIGHTS = {
  "ClickEdu": 3,
  "Moodle": 3,
  "Qui és qui?": 2,
  "Documentació": 3,
  "Sóc tutora": 2,
  "Sóc tutora de pràctiques": 1,
  "Canals de comunicació": 1,
  "Beneficis socials": 2
};

// Colors barrejats, sense repetir el mateix color seguit
function pickColors(n) {
  const out = [];
  let bag = [];
  for (let i = 0; i < n; i++) {
    if (bag.length === 0) bag = [...COLORS].sort(() => Math.random() - 0.5);
    let idx = bag.findIndex(c => c !== out[i - 1]);
    if (idx === -1) idx = 0;
    out.push(bag.splice(idx, 1)[0]);
  }
  return out;
}

// Etiquetes extra que no obren el modal: enllaç directe o acció pròpia
const EXTRA_TAGS = [
  { titulo: "Contrasenyes curs 26‑27", weight: 2, action: () => obreContrasenyes() },
  { titulo: "Brandbook de la Fundació", weight: 1, href: "docs/BRANDBOOK_FUNDACIÓ_CIC.pdf" }
];

// Menú de dreceres que es desplega en passar per sobre d'una secció amb pàgina pròpia.
// Si algun enllaç del contingut té data-tag, només surten aquests; si no, surten tots.
function buildSubMenu(item) {
  const tpl = document.createElement('template');
  tpl.innerHTML = item.contenido;
  let links = [...tpl.content.querySelectorAll('a[href]')];
  if (links.some(l => l.dataset.tag)) links = links.filter(l => l.dataset.tag);
  if (links.length === 0) return null;

  const menu = document.createElement('div');
  menu.className = 'submenu';
  links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'submenu__link';
    a.href = link.getAttribute('href');
    if (link.hasAttribute('download')) {
      a.setAttribute('download', '');
    } else {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.textContent = (link.dataset.tag || link.textContent).trim();
    menu.appendChild(a);
  });
  return menu;
}

// Pintar el núvol d'etiquetes
function renderCloud() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const colors = pickColors(DATA.length + EXTRA_TAGS.length);

  DATA.forEach((item, i) => {
    // Seccions amb pàgina pròpia: s'obren en una pestanya nova amb el mateix color
    if (item.pagina) {
      const group = document.createElement('div');
      group.className = 'tag-group';
      group.style.setProperty('--c', colors[i]);

      const a = document.createElement('a');
      a.className = `tag tag--w${WEIGHTS[item.titulo] || 2}`;
      a.href = `seccio.html?s=${item.id}&c=${colors[i].slice(1)}`;
      a.target = '_blank';
      a.textContent = item.titulo;
      group.appendChild(a);

      const menu = buildSubMenu(item);
      if (menu) {
        group.appendChild(menu);
        // Si la paraula és a la meitat inferior de la pantalla, el menú s'obre cap amunt
        const place = () => {
          const r = group.getBoundingClientRect();
          group.classList.toggle('tag-group--up', r.top > window.innerHeight / 2);
        };
        group.addEventListener('mouseenter', place);
        group.addEventListener('focusin', place);
      }

      app.appendChild(group);
      return;
    }

    const btn = document.createElement('button');
    btn.className = `tag tag--w${WEIGHTS[item.titulo] || 2}`;
    btn.type = 'button';
    btn.style.setProperty('--c', colors[i]);
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.setAttribute('aria-controls', 'modal');
    btn.textContent = item.titulo;
    btn.addEventListener('click', () => openModal(i));
    app.appendChild(btn);
  });

  EXTRA_TAGS.forEach((item, j) => {
    let el;
    if (item.href) {
      el = document.createElement('a');
      el.href = item.href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el = document.createElement('button');
      el.type = 'button';
      el.addEventListener('click', item.action);
    }
    el.className = `tag tag--w${item.weight}`;
    el.style.setProperty('--c', colors[DATA.length + j]);
    el.textContent = item.titulo;
    app.appendChild(el);
  });
}

// Lògica del modal
const dialogEl = document.getElementById('modal');
const backdropEl = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(index) {
  const data = DATA[index];
  modalTitle.textContent = data.titulo;
  modalContent.innerHTML = data.contenido;
  backdropEl.hidden = false;
  dialogEl.showModal();
  dialogEl.querySelector('.modal__close').focus();
}

function closeModal() {
  if (dialogEl.open) dialogEl.close();
  backdropEl.hidden = true;
}

backdropEl.addEventListener('click', (e) => {
  if (e.target.dataset.close) closeModal();
});

dialogEl.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.dataset && target.dataset.close) {
    closeModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Pintar el núvol en carregar
window.addEventListener('DOMContentLoaded', renderCloud);


function obreContrasenyes() {
  const finestra = document.createElement("div");

  finestra.className = "password-modal";

  finestra.innerHTML = `
    <div class="password-modal__box">
      <button class="password-modal__close" type="button" onclick="this.closest('.password-modal').remove()">×</button>

      <h2>Contrasenyes curs 26-27</h2>

      <div class="password-modal__item">
        <strong>Professor</strong>
        <span>fCIC+2627</span>
      </div>

      <div class="password-modal__item">
        <strong>Sala d'estudi</strong>
        <span>Estudiar27</span>
      </div>

      <div class="password-modal__item">
        <strong>Disseny</strong>
        <span>Dis26-27</span>
      </div>
    </div>
  `;

  document.body.appendChild(finestra);
}