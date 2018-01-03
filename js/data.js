$(document).ready(function() {
  $('.icon-back').click(function() {
    window.location.href = '../views/verify.html';   
  });

  var $firstName = $('#first-name');
  var $lastName = $('#last-name');
  var $email = $('#email');
  var $checkbox = $('#checkbox');
  var $next = $('.next');
console.log($next);

  var valFirstName, valLastName, valEmail, valCheckbox = false;

  
  $firstName.on('keyup', function() {
    if ($firstName.val().length >= 3 && typeof($firstName.val()) === 'string') {
      valFirstName = true;
    }
    console.log(valFirstName);
  });
  
  $lastName.on('keyup', function() {
    if ($lastName.val().length >= 3 && typeof($firstName.val()) === 'string') {
      valLastName = true;
    }
    console.log(valLastName);
  });

  $email.on('keyup', function() {
    var expressionR = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (expressionR.test($email.val())) {
      valEmail = true;
    }
    console.log(valEmail);
  });

  $checkbox.on('click', function() {
    if ($checkbox.attr('checked', true)) {
      valCheckbox = true;
    }
    console.log(valCheckbox);
  });
  
  function validation() {
    if (valFirstName && valLastName && valEmail && valCheckbox) {
      $next.addClass('active');
      $next.prop('disabled', false);
    }
  }
  validation();

  $next.click(function() {
    window.location.href = '../views/end.html';   
  });
});
