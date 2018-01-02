$(document).ready(function() {
  $('.icon-back').click(function() {
    window.location.href = '../views/country.html';   
  });

  var $nextView = $('.next');
  
  $nextView.click(function() {
    window.location.href = '../views/data.html';   
  });

});