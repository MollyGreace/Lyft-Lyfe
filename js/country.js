$(document).ready(function() {
  $('.icon-back').click(function() {
    window.location.href = '../views/home.html';   
  });

  var $phone = $('.phone');
  var $next = $('.next');
  var code = Math.round(Math.random() * (1000 - 1));
  
  $phone.on('keyup', function() {
    if ($phone.val().length === 10) {   
      activeNext();
    } 
  });

  /*else {
    desactiveNext();
  }*/
  
  
  function activeNext() {
    $next.addClass('active');
    $next.prop('disabled', false);
  };
  
  // function desactiveNext() {
  //   $next.prop('disabled', true); 
  //   $next.addClass('desactive');
  // };
  
  $next.click(function() {
    alert('Tu código: LAB - ' + code);
    window.location.href = '../views/verify.html';   
  });
});
