$(document).ready(function(){

  var isMobile = window.screen.width <= 991;

  // penambahan halaman dummy
  for (var i = 0; i < 7; i++) {
    $('#category').append(
      "<div class='card card-anim'>" +
        "<div class='card-image waves-effect waves-block waves-light'>" +
          "<img class='activator' src='assets/img/background1.jpg'>" +
        "</div>" +
        "<div class='card-content'>" +
          "<span class='card-title activator grey-text text-darken-4 center'>Card Title</span>" +
          "<p class='center'>kategori</p>" +
        "</div>" +
        "<div class='card-reveal'>" +
          "<span class='card-title grey-text text-darken-4 left'>" +
            "Card Title<i class='material-icons right'>close</i>" +
          "</span>" +
          "<p class='justify-text'>" +
            "Here is some more information about this product that is only revealed once clicked on." +
          "</p>" +
        "</div>" +
      "</div>"
    );
  }
  for (var i = 0; i < 4; i++) {
    $("#fitur").append(
      "<div class='carousel-item light-blue grey-text text-lighten-5'>" +
        "<div class='container'>" +
          "<h2>First Panel</h2>" +
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
        "</div>" +
      "</div>"
    );
  }
  var quote = "“Hard work beats talent when talent fails to work hard.”";
  var quoteAs = " - Kevin Durant - "
  $('#quote').append(
    "<h4 class='grey-text text-lighten-5'>" + quote + "</h4>" +
    "<h6 class='grey-text text-lighten-5'>" + quoteAs + "</h6>"
  );

  // Initialize collapse button
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

  //animate init
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
          if (callback) {
            callback();
          }
      });
      return this;
    }
  });

  //card
  if (!isMobile) {
    $('.card-anim').mouseenter(function() {
      $(this).animateCss('bounce');
    });
  }

  //carousel
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  //scrolling
  var scroll = $(window).scrollTop();
  if (scroll >= '200') changeNavColor('#0288D1');
  function changeNavColor(color) {
    $('.nav-wrapper').css('background', color);
    $('.nav-wrapper').css('transition', 'background 1s');
    $('.nav-wrapper').css('-webkit-transition', 'background 1s');
  }
  if (!isMobile) {
    $('body').niceScroll({cursorcolor:"#FFF", cursoropacitymax:0.8});
  }
  $(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    if (scroll >= '200') {
      changeNavColor('#0288D1');
    } else {
      $('.nav-wrapper').css('background', '');
    }
  });

  //Modal
  $('.modal').modal({
    dismissible: true,
    opacity: .5,
    inDuration: 350,
    outDuration: 250,
    startingTop: '5%',
    endingTop: '10%'
  });

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
        console.log(form);
    }
  });
  $('#form-login').validate();
  $('#form-daftar-agent').validate();
  $('#form-daftar-boy').validate();

  //header anim
  if (!isMobile) {
    $('.anim-show').css('display', 'block');
    $('.anim-show').animateCss('zoomIn');
  } else {
    $('.anim-show').css('display', 'none');
  }

  //forms
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  $('select').material_select();

  //collapsible
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  $('.collapsible .collapsible-header').on('click', function(event) {
      var target = $(this);
      setTimeout(function() {
        if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 500);
        }
      }, 300);
  });
});
