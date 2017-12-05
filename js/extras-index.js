$(document).ready(function(){
  var isMobile = window.screen.width <= 991;

  // get login status
  if (Cookies.get('usr-id') != null) window.location.replace("beranda");

  // set halaman kategori
  for (i in category) {
    var title = "";
    for (j in category[i]['title']) {
      title = title + category[i]['title'][j] + ", ";
    }
    $('#category').append(
      "<div class='card card-anim'>" +
        "<div class='card-image waves-effect waves-block waves-light'>" +
          "<img class='activator' src='"+category[i]['img-url']+"'>" +
        "</div>" +
        "<div class='card-content'>" +
          "<span class='card-title activator grey-text text-darken-4 center'>"+category[i]['category']+"</span>" +
        "</div>" +
        "<div class='card-reveal'>" +
          "<span class='card-title grey-text text-darken-4 left'>" +
            category[i]['category']+"<i class='material-icons right'>close</i>" +
          "</span>" +
          "<p class='justify-text'>" +
             title +
          "</p>" +
        "</div>" +
      "</div>"
    );
  }

  //validasi
  $.validator.setDefaults({
    errorClass: 'invalid',
    validClass: 'valid',
    errorPlacement: function (error, element) {
        $(element)
            .closest('form')
            .find("label[for='" + element.attr("id") + "']")
            .attr('data-error', error.text());
    },
    submitHandler: function (form) {
      var email = form.email.value;
      var password = form.password.value;
      var ee = $('#email');
      var ep = $('#password');
      for (i in user) {
        if (user[i].email == email && user[i].password == password) {
          Cookies.set('usr-id', i);
          window.location.replace("beranda");
          return;
        }
      }
      ee.addClass("invalid");
      ee.closest('form')
        .find("label[for='email']")
        .attr('data-error', 'Kombinasi password dan email salah');
      ep.addClass("invalid");
      ep.closest('form')
        .find("label[for='password']")
        .attr('data-error', 'Kombinasi password dan email salah');
    }
  });

  $('#form-login').validate();
  $('#form-daftar-agent').validate();
  $('#form-daftar-boy').validate();

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
