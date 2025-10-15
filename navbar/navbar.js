/*
  NAVBAR SCROLL SCRIPT (jQuery)
  - Shrinks navbar on scroll
  - Changes color when entering alternate section
*/

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    // Add or remove fixed header
    if (scrollTop > 49) {
      $('body').addClass('header-fixed');
    } else {
      $('body').removeClass('header-fixed');
    }

    // Optional: color change for section
    var secondSection = $('#demosection2');
    if (secondSection.length) {
      var topOffset = secondSection.offset().top;
      var headerHeight = $('#topnav').height();
      var transitionPoint = topOffset - headerHeight;

      if (scrollTop > transitionPoint) {
        $('#topnav').addClass('alt-header');
      } else {
        $('#topnav').removeClass('alt-header');
      }
    }
  });
});