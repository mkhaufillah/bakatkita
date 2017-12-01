$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  //scrolling
  var eb = $('body');
  var enw = $('.nav-wrapper');
  var scroll = $(window).scrollTop();
  if (scroll >= '200') changeNavColor('#0288D1');
  function changeNavColor(color) {
    enw.css('background', color);
    enw.css('transition', 'background 1s');
    enw.css('-webkit-transition', 'background 1s');
  }
  if (!isMobile) {
    eb.niceScroll({
      cursorcolor:"#FFF",
      cursoropacitymax:0.8
    });
  }
  $(window).scroll(function (event) {
    if (!isMobile) eb.getNiceScroll().resize();
    scroll = $(window).scrollTop();
    if (scroll >= '200') {
      changeNavColor('#0288D1');
    } else {
      enw.css('background', '');
    }
  });

});
