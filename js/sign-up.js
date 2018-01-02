$(document).ready(function() {
  /* Ejecutamos el Evento clic del botón 'sign-up' que nos llevará a la vista 'country' */
  var $signUp = $('#sign-up');
  $($signUp).click(function() {
    window.location.href = '../views/country.html';
  });
});