$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  //scrolling
  var scroll = $(window).scrollTop();
  if (scroll >= '200') changeNavColor('#0288D1');
  function changeNavColor(color) {
    $('.nav-wrapper').css('background', color);
    $('.nav-wrapper').css('transition', 'background 1s');
    $('.nav-wrapper').css('-webkit-transition', 'background 1s');
  }
  if (!isMobile) {
    $('body').niceScroll({
      cursorcolor:"#FFF",
      cursoropacitymax:0.8
    });
  }
  $(window).scroll(function (event) {
    if (!isMobile) $('body').getNiceScroll().resize();
    scroll = $(window).scrollTop();
    if (scroll >= '200') {
      changeNavColor('#0288D1');
    } else {
      $('.nav-wrapper').css('background', '');
    }
  });

});
