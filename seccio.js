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

  if (item) {
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
