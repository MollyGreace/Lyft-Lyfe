$(document).ready(function() {
  $('.icon-back').click(function() {
    window.location.href = '../views/country.html';   
  });

  var $next = $('.next');
  var $resend = $('.resend');
  var $code = $('#code');

  $next.click(function() {    
    window.location.href = '../views/data.html';   
  });

  $resend.click(function() {
    localStorage.randomCode = Math.round(Math.random() * (1000 - 1));
    alert('Tu código: LAB - ' + localStorage.randomCode);
  });


  $code.on('keyup', function() {
    if ($code.val() === localStorage.randomCode) {
      active();
    }
  });

  function active() {    
    $next.addClass('active');
    $next.prop('disabled', false);
  };
});