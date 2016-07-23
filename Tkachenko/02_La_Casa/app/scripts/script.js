/*BACK-TO-TOP*/

(function() {
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };

    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
})();

/*SPINER MENU*/

(function() {
  var counter = 0;

  $('.fa-cog').click(function(e) {
    e.preventDefault();
    counter++;
    if ((counter % 2) === 0) {
      $('main div.mainmenu div.mainmenu__list').removeClass('nohidden');
    } else {
      $('main div.mainmenu div.mainmenu__list').addClass('nohidden');
      $('html,body').animate({
        scrollTop: $('main').position().top
      }, 700);
    }
  });
})();

/*BARS*/
(function() {
  if ($(window).width() < 768) {
    console.log($(window).width());
    $('nav.headertop__right').addClass('headertop__right--hamburger fa fa-bars');
    $('nav.headertop__right').addClass('hidden');
  } else  $('nav.headertop__right').removeClass('hidden');
})();
