$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  //collapsible
  var ecolaps = $('.collapsible');
  ecolaps.collapsible({
    accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  //scrolling
  var eb = $('body');
  if (!isMobile) {
    eb.niceScroll({
      cursorcolor:"#0288d1",
      cursoropacitymax:0.8
    });
    $(window).scroll(function (event) {
      eb.getNiceScroll().resize();
    });
    ecolaps.click(function() {
      eb.getNiceScroll().resize();
    });
  }

  //search
  var conSearch = false;
  var es = $('#search');
  var ec = $('#cari');
  var eln = $('.list-nav');
  es.click(function() {
    if (!conSearch) {
      es.parent().attr('class', 'list-nav active');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>close</i>" );
      ec.css('padding', '9px');
      ec.css('width', '480px');
      ec.focus();
      eln.css('display', 'none');
      conSearch = true;
    } else {
      es.parent().attr('class', 'list-nav');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>search</i>" );
      ec.css('padding', '0px');
      ec.css('width', '0px');
      eln.css('display', 'inline');
      conSearch = false;
    }
  });

  //search mobile
  var ecm = $('#cari-mobile');
  var ens = $('.nav-search');
  $('#search-mobile').click(function() {
    ens.attr('class', 'nav-search');
    ecm.focus();
  });

  $('.close-mobile').click(function() {
    ens.attr('class', 'nav-search hide');
  });

  ecm.focusout(function() {
    ens.attr('class', 'nav-search hide');
  });

  //notification
  var notifIsFocus = false;
  var en = $("#notifikasi");

  en.focus(function() {
    en.parent().attr('class', 'list-nav active');
    en.parent().css('width', '70vh');
    en.dropdown('open');
  });

  en.focusout(function() {
    en.dropdown('close');
    en.parent().attr('class', 'list-nav');
    en.parent().css('width', 'auto');
  });

  $('tabs').ready(function(){
    $('ul.tabs').tabs();
  });
    $('tabs').ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });
  $('select').material_select();

});
