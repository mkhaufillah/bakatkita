$(document).ready(function(){

  var isMobile = window.screen.width <= 991;

  // all category
  for(i in category) {
    var string = "";
    for(j in category[i].title) {
      string = string + "<option value='"+category[i].title[j]+"'>"+category[i].title[j]+"</option>"
    }
    $('.cat-all').append(
      "<optgroup label='"+category[i].category+"'>" +
      string +
      "</optgroup>"
    );
  }

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

  //Modal
  $('.modal').modal({
    dismissible: true,
    opacity: .5,
    inDuration: 350,
    outDuration: 250,
    startingTop: '5%',
    endingTop: '10%'
  });

  //header anim
  var eas = $('.anim-show');
  if (!isMobile) {
    eas.css('display', 'block');
    eas.animateCss('zoomIn');
  } else {
    eas.css('display', 'none');
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

});
