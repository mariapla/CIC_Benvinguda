// Dades de l'índex i continguts
// Totes les seccions s'obren en una pàgina pròpia (seccio.html) en una pestanya nova.
// Posa pagina: false a una secció si vols que s'obri en una finestra emergent.
const DATA = [
  {
    id: "clickedu",
    titulo: "ClickEdu",
    contenido: `
    <h3>Què és?</h3>
    <p>És el nostre sistema de gestió escolar i una secretaria acadèmica virtual. Rebràs unes credencials per accedir-hi.</p>

    <h3>Què fem a ClickEdu?</h3>
    <ul>
    <li>Els Cicles de Informàtica i Comunicacions, <a href="docs/Introduir_RAs_ClickEdu.pdf" target="_blank" rel="noopener noreferrer" data-tag="Introduir RA">introduïm i configurem els RA </a>dels nostres mòduls</li>
      <li><strong>Passem llista:</strong> és molt important passar llista abans de sortir de l'aula. Si no ho fem i ho deixem per després, es pot donar que es justifiqui una falta encara no posada, i que quan per fi es posi, quedi sense justificar.</li>
      <li>
        <a href="docs/notesAPD.pdf" target="_blank" rel="noopener" data-tag="Notes finals APD">Posem notes finals APD</a>
        |
        <a href="docs/notesFP.pdf" target="_blank" rel="noopener" data-tag="Notes finals FP">Posem notes finals FP</a>
      </li>
      <li>Accedim a Moodle</li>
      <li>Si ets tutora o coordinadora, et comuniques amb l’alumnat i les famílies des d’aquí</li>
    </ul>
  `
  },
  {
    id: "moodle", titulo: "Moodle", contenido: `
      <h3>Què és?</h3>
      <p>És el nostre entorn virtual d’aprenentatge, una classe virtual. Hi accediràs a través de ClickEdu.</p>
      <h3>Què fem a Moodle?</h3>
      <ul>
       <li>Pengem la <a href="docs/PlantillaPlaDocent.docx" download>programació didàctica</a>, continguts, proves avaluatives i exàmens</li>
        <li>Posem notes parcials i feedback dels instruments avaluatius</li>
        <li>El claustre docent es comunica amb l’alumnat via Moodle i/o mail de la fundació</li>
        <li>Petita <a href="docs/2026_Guia_rapida_Moodle_4_5.pdf" target="_blank">guía </a> dels canvis que ha portat l'actualització Moodle 4.5</li>
        <li><a href="docs/MoodleRubrica.pdf" target="_blank" rel="noopener noreferrer">Rúbriques</a></li>
        <li><a href="docs/MoodleEscala.pdf" target="_blank" rel="noopener noreferrer">Escales</a></li>
        <li><a href="docs/MoodleCategoriesPesos.pdf" target="_blank" rel="noopener noreferrer">Configuracions i pesos</a></li>
      </ul>
    `},
  {
    id: "qui-es-qui", titulo: "Qui és qui?", contenido: `
      <ul>
        <li>Secretaria acadèmica: <strong>Lourdes Abad</strong></li>
        <li>Coordinació de pràctiques: <strong>Anna Boada</strong></li>
        <li>Direcció de cicles formatius: <strong>Maria Pla</strong></li>
        <li>Direcció pedagògica: <strong>Mònica Santamaria</strong></li>
        <li>Direcció general: <strong>Carles Duarte</strong></li>
        <li>Coordinació APD: <strong>Olga Suñol</strong></li>
        <li>Coordinació ASIX: <strong>Jorge Wimes</strong></li>
        <li>Responsable de comunicació: <strong>Mireia Serrano</strong></li>
      </ul>
    `},
  {
    id: "documentacio", titulo: "Documentació", contenido: `
      <p>Documentació disponible a Secretaria Acadèmica:</p>
      <ul>
        <li><a href="docs/26-27_NormativaCentre.pdf" target="_blank">Normativa del centre</a></li>
        <li><a href="docs/26-27_APD_CriterisAvaluacio.pdf" target="_blank">Criteris d’avaluació APD</a> | <a href="docs/26-27_FP_CriterisAvaluacio.pdf" target="_blank">Criteris d’avaluació Informàtica i Comunicacions</a></li>
       <li>
  <a href="docs/Distribucio_APGI.pdf" target="_blank" rel="noopener noreferrer">Distribució de Mòduls del CIC per APGI</a> |
  <a href="docs/Distribucio_GPI.pdf" target="_blank" rel="noopener noreferrer">Distribució de Mòduls del CIC per GPI</a> |
  <a href="docs/Distribucio_DEC.pdf" target="_blank" rel="noopener noreferrer">Distribució de Mòduls del CIC per DEC</a> |
  <a href="docs/Distribucio_ASIX.pdf" target="_blank" rel="noopener noreferrer">Distribució de Mòduls del CIC per ASIX</a>
</li>
         
        <li> <a href="docs/PlantillaPlaDocent.docx" download>Pla docent (plantilla)</a></li>
        <li><a href="docs/CALENDARI_2026-2027.pdf" target="_blank">Calendari escolar</a></li>
        <li><a href="docs/CALENDARI_2026-2027_profes.pdf" target="_blank">Calendari escolar - detall per a profes</a></li>
        <li>Horaris: 
          <a href="docs/001_APGI_1_26-27_Horaris.pdf" target="_blank">APGI1</a> |
          <a href="docs/002_APGI_2_26-27_Horaris.pdf" target="_blank">APGI2</a> |
          <a href="docs/003_GPI_1_26-27_Horaris.pdf" target="_blank">GPI1</a> |
          <a href="docs/004_GPI_2_26-27_Horaris.pdf" target="_blank">GPI2</a> |
          <a href="docs/005_DEC_1_26-27_Horaris.pdf" target="_blank">DEC1</a> |
          <a href="docs/006_ASIX_1_26-27_Horaris.pdf" target="_blank">ASIX1</a> |
          <a href="docs/007_ASIX_2_26-27_Horaris.pdf" target="_blank">ASIX2</a> 
        </li>
        </li>
        <li>
  <a href="docs/CV_APGI.pdf" target="_blank" rel="noopener noreferrer">Currículum APGI</a> |
  <a href="docs/CV_ASIX.pdf" target="_blank" rel="noopener noreferrer">Currículum ASIX</a> |
  <a href="docs/CV_DEC.pdf" target="_blank" rel="noopener noreferrer">Currículum DEC</a> |
  <a href="docs/CV_GI.pdf" target="_blank" rel="noopener noreferrer">Currículum GI</a> |
  <a href="docs/CV_GP.pdf" target="_blank" rel="noopener noreferrer">Currículum GP</a>
</li>
<li>
  <a href="docs/Orientacions_APGI.pdf" target="_blank" rel="noopener noreferrer">Orientacions APGI</a> |
  <a href="docs/Orientacions_ASIX.pdf" target="_blank" rel="noopener noreferrer">Orientacions ASIX</a> |
  <a href="docs/Orientacions_DEC.pdf" target="_blank" rel="noopener noreferrer">Orientacions DEC</a> |
  <a href="docs/Orientacions_GI.pdf" target="_blank" rel="noopener noreferrer">Orientacions GI</a> |
  <a href="docs/Orientacions_GP.pdf" target="_blank" rel="noopener noreferrer">Orientacions GP</a>
</li>
<li>
  <a href="docs/Moduls_APGI.pdf" target="_blank" rel="noopener noreferrer">Mòduls APGI</a> |
  <a href="docs/Moduls_ASIX.pdf" target="_blank" rel="noopener noreferrer">Mòduls ASIX</a> |
  <a href="docs/Moduls_DEC.pdf" target="_blank" rel="noopener noreferrer">Mòduls DEC</a> |
  <a href="docs/Moduls_GI.pdf" target="_blank" rel="noopener noreferrer">Mòduls GI</a> |
  <a href="docs/Moduls_GP.pdf" target="_blank" rel="noopener noreferrer">Mòduls GP</a>
</li>

      </ul>
    `},
  {
    id: "soc-tutora", titulo: "Sóc tutora", contenido: `
      <ul>
        <li>Presentaràs el curs a l’alumnat nou</li>
        <li>Acompanyaràs durant l’adaptació i el curs</li>
        <li>Faràs entrevistes inicials</li>
        <li>Dirigiràs juntes d’avaluació</li>
        <li>Seràs l’interlocutor amb el DOP</li>
        <li>Convocaràs tutories grupals</li>
        <li>Demanaràs feedback del grup-classe al claustre</li>
        <li><a href="docs/BasePresentacionsTutores.pdf" target="_blank" rel="noopener noreferrer">Model de presentació d'inici de curs</a> (atenció amb les dates, només es un model!)</li>
        <li><a href="docs/PAT_RegistreTutories.pdf" target="_blank" rel="noopener noreferrer">Registraràs</a> les tutories individuals</li>
        <li>Acompanyaràs <a href="docs/Eleccio-del-delegatdef.pdf" target="_blank" rel="noopener noreferrer">l'elecció de delegades</a></li>
      </ul>
    `},
  {
    id: "tutora-practiques", titulo: "Sóc tutora de pràctiques", contenido: `
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
  {
    id: "vaga", titulo: "Protocol de vaga", contenido: `
      <p>Consulta el <a href="docs/VagaEstudiantil_Protocol.pdf" target="_blank" rel="noopener noreferrer">protocol en cas de vaga estudiantil</a>.</p>
    `},
  {
    id: "beneficis", titulo: "Beneficis socials", contenido: `
      <ul>
        <li>Diversos descomptes a l’escolarització dins de la Institució per a treballadores.</li>
        <li>Diversos descomptes a l’escolarització dins de la Institució per a ALUMNI.</li>
        <li>Diversos descomptes a l’escolarització dins de la Institució per a famílies amb més de dos germans.</li>
        <li>DiR: quota de 42.99€</li>
        <li>Retribució flexible: oferta DKV | oferta Adeslas</li>
      </ul>
      <p>Més detalls a Secretaria Acadèmica</p>
    `},
  {
    id: "contrasenyes", titulo: "Contrasenyes curs 26‑27", contenido: `
      <ul>
        <li><strong>Professor:</strong> fCIC+2627</li>
        <li><strong>Sala d'estudi:</strong> Estudiar27</li>
        <li><strong>Disseny:</strong> Dis26-27</li>
      </ul>
    `},
  {
    id: "cicfest", titulo: "CIC Fest", contenido: `
      <h3>Coneix el CIC Fest</h3>
      <ul>
        <li><a href="docs/CICFESTDOSSIER.pdf" target="_blank" rel="noopener noreferrer">Dossier del CIC Fest</a></li>
        <li><a href="https://cicfest.cat" target="_blank" rel="noopener noreferrer">Web del CIC Fest: cicfest.cat</a></li>
      </ul>
    `}
];

// Etiquetes extra del núvol que no tenen pàgina: enllaç directe o acció pròpia
// (surten també a "Accés ràpid", per això són aquí)
const EXTRA_TAGS = [
  { titulo: "Brandbook de la Fundació", weight: 1, href: "docs/BRANDBOOK_FUNDACIÓ_CIC.pdf" }];

// Colors fluor (compartits entre la portada i les pàgines de secció)
const COLORS = ["#FF00BA", "#FF3D00", "#00C2FF", "#22D400", "#A100FF", "#FF8A00"];
