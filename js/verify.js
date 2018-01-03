$(document).ready(function() {
  $('.icon-back').click(function() {
    window.location.href = '../views/country.html';   
  });

  var $next = $('.next');

  var $resend = $('.resend');

 
  $next.click(function() {
    
    window.location.href = '../views/data.html';   
  });

});