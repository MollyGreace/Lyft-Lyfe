/* Función Que al cargar la página se ejecuta */
$(document).ready(function() {
  /* Función que hace cambiar de la página 'index' hacia 'home' */
  setTimeout(function() {
    window.location.href = 'views/home.html';
  }, 2000);
});
