$(document).ready(function() {
  $('#button-profil').replaceWith(
    "<div class='wrap' id='button-profil'>" +
      "<a id='contract' href='#!' class='waves-effect waves-light btn col s12 deep-orange'>Gabung</a>" +
    "</div>"
  );

  // get identity
  $('.name').text(comunity[Cookies.get('id-card')].name);
  $('.b-date').text(comunity[Cookies.get('id-card')].register);

  //check role
  $('#pelatih-left-bar').css('display', 'none');
  $('#pelatih-left-bar').prev().css('display', 'none');

  $('.dynamic-h').css('display', 'none');

  //photo
  $('.photo-p').attr('src', comunity[Cookies.get('id-card')]['img-url']);

  // komunitas left bar
  $('#comunity-left-bar').css('display', 'none');
  $('#comunity-left-bar').prev().css('display', 'none');

});
