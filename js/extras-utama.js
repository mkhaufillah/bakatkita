$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  //scrolling
  if (!isMobile) {
    $('body').niceScroll({
      cursorcolor:"#0288d1",
      cursoropacitymax:0.8
    });
    $(window).scroll(function (event) {
      $('body').getNiceScroll().resize();
    });
  }
  $('.collapsible').click(function() {
    $('body').getNiceScroll().resize();
  });

  //search
  var conSearch = false;
  $('#search').click(function() {
    if (!conSearch) {
      $('#search').parent().attr('class', 'active');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>close</i>" );
      $('#cari').css('padding', '9px');
      $('#cari').css('width', '480px');
      $('#cari').focus();
      $('.list-nav').css('display', 'none');
      conSearch = true;
    } else {
      $('#search').parent().attr('class', '');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>search</i>" );
      $('#cari').css('padding', '0px');
      $('#cari').css('width', '0px');
      $('.list-nav').css('display', 'inline');
      conSearch = false;
    }
  });

  //search mobile
  $('#search-mobile').click(function() {
    $('.nav-search').attr('class', 'nav-search');
    $('#cari-mobile').focus();
  });

  $('.close-mobile').click(function() {
    $('.nav-search').attr('class', 'nav-search hide');
  });

  $('#cari-mobile').focusout(function() {
    $('.nav-search').attr('class', 'nav-search hide');
  });

});
