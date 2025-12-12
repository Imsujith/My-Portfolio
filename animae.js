$(document).ready(function () {
  // Main variables
  var $developmentWrapper = $('.development-wrapper');
  var developmentIsVisible = false;

  /* ####### HERO SECTION ####### */
  // Animate hero content fade-in
  $('.hero .hero-content').css({ opacity: 0, top: '5%' }).delay(500).animate({
    opacity: 1,
    top: '0%'
  }, 1000);

  /* ####### SCROLL EFFECTS ####### */
  $(window).scroll(function () {
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* ##### EXPERIENCE SECTION #### */
    $('.experience .content .hidden').each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();

      // Fade-in if element is fully visible
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          opacity: '1',
          'margin-left': '0'
        }, 600);
      }
    });

    /* ##### SKILLS SECTION #### */
    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight() / 2;

    if ((bottom_of_window > middle_of_developmentWrapper) && (developmentIsVisible === false)) {

      $('.skills-bar-container li').each(function () {
        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
            clearInterval(id);
          } else {
            width++;
            elem.css("width", width + "%");
            percent.html(width + " %");
          }
        }
      });

      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});
