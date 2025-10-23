// Dades de l'índex i continguts
const DATA = [
  { titulo: "ClickEdu", contenido: `
      <h3>Què és?</h3>
      <p>És el nostre sistema de gestió escolar i una secretaria acadèmica virtual. Rebràs unes credencials per accedir-hi.</p>
      <h3>Què fem a ClickEdu?</h3>
      <ul>
        <li>Passem llista</li>
        <li>Posem notes finals</li>
        <li>Accedim a Moodle</li>
        <li>Si ets tutora o coordinadora, et comuniques amb l’alumnat i les famílies des d’aquí</li>
      </ul>
    `},
  { titulo: "Moodle", contenido: `
      <h3>Què és?</h3>
      <p>És el nostre entorn virtual d’aprenentatge, una classe virtual. Hi accediràs a través de ClickEdu.</p>
      <h3>Què fem a Moodle?</h3>
      <ul>
        <li>Pengem la programació didàctica, continguts, proves avaluatives i exàmens</li>
        <li>Posem notes parcials i feedback dels instruments avaluatius</li>
        <li>El claustre docent es comunica amb l’alumnat via Moodle i/o mail de la fundació</li>
      </ul>
    `},
  { titulo: "Qui és qui?", contenido: `
      <ul>
        <li>Secretaria acadèmica: <strong>Lourdes Abad</strong></li>
        <li>Coordinació de pràctiques: <strong>Anna Boada</strong></li>
        <li>Direcció de cicles formatius: <strong>Maria Pla</strong></li>
        <li>Direcció pedagògica: <strong>Mònica Santamaria</strong></li>
        <li>Direcció general: <strong>Carles Duarte</strong></li>
        <li>Coordinació APD: <strong>Olga Suñol</strong></li>
        <li>Coordinació ASIX: <strong>Jorge Wimes</strong></li>
        <li>Coordinació Anglès: <strong>Marie France Masson</strong></li>
        <li>Responsable de comunicació: <strong>Mireia Serrano</strong></li>
      </ul>
    `},
  { titulo: "Documentació", contenido: `
      <p>Documentació disponible a Secretaria Acadèmica:</p>
      <ul>
        <li>Normativa</li>
        <li>Criteris d’avaluació</li>
        <li>Drets i Deures</li>
        <li>Pla docent (plantilla)</li>
        <li>Calendari escolar</li>
        <li>Horaris</li>
        <li>Currículum</li>
      </ul>
    `},
  { titulo: "Sóc tutora", contenido: `
      <ul>
        <li>Presentaràs el curs a l’alumnat nou</li>
        <li>Acompanyaràs durant l’adaptació i el curs</li>
        <li>Faràs entrevistes inicials</li>
        <li>Dirigiràs juntes d’avaluació</li>
        <li>Seràs l’interlocutor amb el DOP</li>
        <li>Convocaràs tutories grupals</li>
        <li>Demanaràs feedback del grup-classe al claustre</li>
      </ul>
    `},
  { titulo: "Sóc tutora de pràctiques", contenido: `
      <ul>
        <li>Presentaràs el curs a l’alumnat de segon</li>
        <li>Acompanyaràs durant el curs</li>
        <li>Seràs l’interlocutor amb el DOP</li>
        <li>Convocaràs tutories grupals</li>
        <li>Dirigiràs juntes d’avaluació</li>
        <li>Ajudaràs a assignar posicions de pràctiques amb la coordinació</li>
        <li>Demanaràs feedback al claustre</li>
        <li>Faràs el seguiment de pràctiques via qBID</li>
        <li>Posaràs la nota final de pràctiques</li>
      </ul>
    `},
  { titulo: "Canals de comunicació", contenido: `
      <p>Professional — Direcció — Secretaria Acadèmica — Coordinació — Tutora</p>
    `},
  { titulo: "Beneficis socials", contenido: `
      <p>Diversos descomptes a l’escolarització dins de la Institució.</p>
    `}
];

// Colores disponibles
const COLORS = ["#FF00BA", "#00FFFF", "#FC371C", "#DAFDBA"];

// Nombre de columnes segons mida de pantalla
function getCols(){
  const w = window.innerWidth || document.documentElement.clientWidth;
  if (w <= 520) return 1;
  if (w <= 900) return 2;
  return 4;
}

// Generar paleta sense adjacències iguals
function generateColors(rows, cols){
  const matrix = Array.from({length: rows}, () => Array(cols).fill(null));
  for(let r=0; r<rows; r++){
    for(let c=0; c<cols; c++){
      let available = [...COLORS];
      if(c > 0){
        const left = matrix[r][c-1];
        available = available.filter(clr => clr !== left);
      }
      if(r > 0){
        const up = matrix[r-1][c];
        available = available.filter(clr => clr !== up);
      }
      if(available.length === 0) available = [...COLORS];
      const chosen = available[Math.floor(Math.random() * available.length)];
      matrix[r][c] = chosen;
    }
  }
  return matrix;
}

// Pintar la graella
function renderGrid(){
  const app = document.getElementById('app');
  app.innerHTML = '';

  const cols = getCols();
  const rows = Math.ceil(DATA.length / cols);
  const colorMatrix = generateColors(rows, cols);

  for(let i=0; i<DATA.length; i++){
    const r = Math.floor(i / cols);
    const c = i % cols;
    const item = DATA[i];
    const btn = document.createElement('button');
    btn.className = 'tile';
    btn.type = 'button';
    btn.style.background = colorMatrix[r][c];
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.setAttribute('aria-controls', 'modal');
    btn.dataset.index = String(i);
    btn.textContent = item.titulo;
    btn.addEventListener('click', () => openModal(i));
    app.appendChild(btn);
  }
}

// Lògica del modal
const dialogEl = document.getElementById('modal');
const backdropEl = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(index){
  const data = DATA[index];
  modalTitle.textContent = data.titulo;
  modalContent.innerHTML = data.contenido;
  backdropEl.hidden = false;
  dialogEl.showModal();
  dialogEl.querySelector('.modal__close').focus();
}

function closeModal(){
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

// Re-render a la càrrega i al redimensionar finestra
window.addEventListener('DOMContentLoaded', renderGrid);
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderGrid, 120);
});
