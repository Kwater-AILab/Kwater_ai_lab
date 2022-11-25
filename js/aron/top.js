$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('#topBtn').fadeIn();
      } else {
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function() {
      $('html, body').animate({
        scrollTop : 0
      }, 400);
      return false;
    });
  });