$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  // get login status
  if (Cookies.get('usr-id') == null) window.location.replace("/bakatkita");

  // get identity
  $('.name').text(user[Cookies.get('usr-id')].name);
  $('.b-date').text(user[Cookies.get('usr-id')].register);

  //check role
  if (user[Cookies.get('usr-id')].role == 'Pelatih') {
    $('#pelatih-left-bar').prev().text('Anak didik');
  } else {
    $('#pelatih-left-bar').prev().text('Pelatih');
  }

  if (user[Cookies.get('usr-id')].role == 'Pelatih') {
    $('.dynamic-h').text($('.dynamic-h').text()+'pebakat');
  } else {
    $('.dynamic-h').text($('.dynamic-h').text()+'pelatih');
  }

  //photo
  $('.photo-p').attr('src', user[Cookies.get('usr-id')]['img-url']);

  // logout
  $('.logout').click(function() {
    Cookies.remove('usr-id');
    window.location.replace("/bakatkita");
  });

  // komunitas left bar
  for (i in user[Cookies.get('usr-id')].comunity) {
    $('#comunity-left-bar').append(
      "<a id='"+user[Cookies.get('usr-id')].comunity[i]+"' href='../detail-product' class='collection-item overflow-text-set komunitas'>"+comunity[user[Cookies.get('usr-id')].comunity[i]].name+"</a>"
    );
  }

  //pelatih leftbar
  for(i in user[Cookies.get('usr-id')].relation) {
    $('#pelatih-left-bar').append(
      "<li>" +
        "<div class='collapsible-header overflow-text-set'>"+user[user[Cookies.get('usr-id')].relation[i]].talent+"</div>" +
        "<div class='collapsible-body'>" +
          "<div class='row'>" +
            "<img src='"+user[user[Cookies.get('usr-id')].relation[i]]['img-url']+"' class='col s12 circle margin-private-top'>" +
            "<div class='col s12'>" +
              "<h6 class='center col s12 margin-private overflow-text-set'>"+user[user[Cookies.get('usr-id')].relation[i]].name+"</h6>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</li>"
    );
  }

  //collapsible
  var ecolaps = $('.collapsible');
  ecolaps.collapsible({
    accordion : true
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
  var esel = $('.cat-bar');
  es.click(function() {
    if (!conSearch) {
      es.parent().attr('class', 'list-nav active');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>close</i>" );
      ec.css('padding', '9px');
      ec.css('width', '480px');
      ec.focus();
      eln.css('display', 'none');
      esel.css('display', 'inline');
      conSearch = true;
    } else {
      es.parent().attr('class', 'list-nav');
      $('.search-icon').replaceWith( "<i class='material-icons search-icon'>search</i>" );
      ec.css('padding', '0px');
      ec.css('width', '0px');
      eln.css('display', 'inline');
      esel.css('display', 'none');
      conSearch = false;
    }
  });

  // category
  for(i in category) {
    var string = "";
    for(j in category[i].title) {
      string = string + "<li class='collection-item'><p>" + category[i].title[j] + "</p></li>";
    }
    $('#category-bar').append(
      "<li class='collection-item'>" +
        "<small class='blue-text'>" + category[i].category + "</small>" +
      "</li>" +
      string
    );
  }

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
  var edb = $(".dropdown-button");
  edb.dropdown({
    belowOrigin: true,
    stopPropagation: true
  });

  en.click(function() {
    if (!notifIsFocus) {
      en.parent().attr('class', 'list-nav active');
      en.parent().css('width', '70vh');
      en.dropdown('open');
      notifIsFocus = true;
    } else {
      en.parent().attr('class', 'list-nav');
      en.parent().css('width', 'auto');
      notifIsFocus = false;
    }
  });

  en.focusout(function() {
    en.parent().attr('class', 'list-nav');
    en.parent().css('width', 'auto');
    notifIsFocus = false;
  });

  var newNotif = 0;
  for (i in user[Cookies.get('usr-id')].notif) {
    var string = "";
    var read = "Sudah dibaca";
    if (!user[Cookies.get('usr-id')].notif[i].read) {
      read = "Belum dibaca";
      newNotif++;
    }
    if (i == user[Cookies.get('usr-id')].notif.length-1) {
      string = "<li><center><p>Tampilkan semua</p></center></li>";
      $('.newNotif').html(newNotif);
    }
    $('#notifikasi-bar').append(
      "<li class='collection-item avatar'>"+
        "<img src='../assets/img/man.png' alt='' class='circle'>"+
        "<p><b>"+user[Cookies.get('usr-id')].notif[i].title+"</b> <br>"+
           user[Cookies.get('usr-id')].notif[i].desc+" <br>"+
           read+
        "</p>"+
      "</li>"+
      string
    );
  }

  if (user[Cookies.get('usr-id')].notif.length == 0) {
    $('#notifikasi-bar').append(
      "<li><center><p>Tidak ada notifikasi</p></center></li>"
    );
  }

  // tabs
  $('tabs').ready(function(){
    $('ul.tabs').tabs();
  });
  $('tabs').ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });

});
