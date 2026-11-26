// Pàgina de secció: llegeix ?s=<id>&c=<color> i pinta el contingut de DATA
(function () {
  const params = new URLSearchParams(location.search);
  const item = DATA.find(d => d.id === params.get('s'));

  // Color: el mateix de l'etiqueta clicada si és un dels colors fluor; si no, un a l'atzar
  const requested = '#' + (params.get('c') || '').toUpperCase();
  const color = COLORS.includes(requested)
    ? requested
    : COLORS[Math.floor(Math.random() * COLORS.length)];
  document.documentElement.style.setProperty('--c', color);

  const title = document.getElementById('pageTitle');
  const content = document.getElementById('pageContent');

  if (params.get('s') === 'acces-rapid') {
    // Mapa web: per a cada secció, les línies (li / p) que contenen algun enllaç
    title.textContent = 'Accés ràpid';
    document.title = 'Accés ràpid | Benvinguda CIC FP';
    let html = '';
    DATA.forEach(d => {
      const tpl = document.createElement('template');
      tpl.innerHTML = d.contenido;
      const lines = [...tpl.content.querySelectorAll('li, p')]
        .filter(el => el.querySelector('a[href]'));
      if (lines.length === 0) return;
      html += `<h3><a class="page__section-link" href="seccio.html?s=${d.id}&c=${color.slice(1)}">${d.titulo}</a></h3>`;
      html += '<ul>' + lines.map(el => `<li>${el.innerHTML.trim()}</li>`).join('') + '</ul>';
    });
    const extres = EXTRA_TAGS.filter(t => t.href);
    if (extres.length) {
      html += '<h3>Altres</h3><ul>' +
        extres.map(t => `<li><a href="${t.href}">${t.titulo}</a></li>`).join('') + '</ul>';
    }
    content.innerHTML = html;
  } else if (item) {
    title.textContent = item.titulo;
    content.innerHTML = item.contenido;
    document.title = `${item.titulo} | Benvinguda CIC FP`;
  } else {
    title.textContent = 'No trobat';
    content.innerHTML = '<p>Aquesta secció no existeix. Torna a la portada.</p>';
  }

  // Els enllaços del contingut s'obren en una pestanya nova
  content.querySelectorAll('a[href]:not([download])').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  // Tornar: com que la pàgina s'ha obert en una pestanya nova, la tanquem
  // i tornem a la portada; si el navegador no deixa tancar-la, anem a index.html
  document.getElementById('tornar').addEventListener('click', (e) => {
    if (history.length <= 1) {
      e.preventDefault();
      window.close();
      setTimeout(() => { location.href = 'index.html'; }, 150);
    }
  });
})();
