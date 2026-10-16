// Bio desplegable: el texto completo está en el HTML (lo leen buscadores y motores de IA);
// el botón solo lo muestra u oculta.
(function () {
  var boton = document.querySelector('[data-bio-toggle]');
  var mas = document.getElementById('bio-completa');
  if (!boton || !mas) return;
  mas.hidden = true;
  boton.hidden = false;
  boton.addEventListener('click', function () {
    var abierto = boton.getAttribute('aria-expanded') === 'true';
    boton.setAttribute('aria-expanded', String(!abierto));
    mas.hidden = abierto;
    boton.textContent = abierto ? 'Leer más' : 'Leer menos';
  });
})();
