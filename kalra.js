// Smooth Scroll
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

// Sticky Navbar
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
});

// Contact Form
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(response) {
        $('#contact-form')[0].reset();
        $('#success').addClass('show');
        setTimeout(function() {
          $('#success').removeClass('show');
        }, 5000);
      }
    });
  });
});

