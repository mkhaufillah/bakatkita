$(document).ready(function() {
  $('#button-profil').replaceWith(
    "<div class='wrap' id='button-profil'>" +
      "<a id='contract' href='#!' class='waves-effect waves-light btn col s12 deep-orange'>Contract</a>" +
    "</div>"
  );

  // get identity
  $('.name').text(user[Cookies.get('id-card')].name);
  $('.b-date').text(user[Cookies.get('id-card')].register);

  //check role
  if (user[Cookies.get('id-card')].role == 'Pelatih') {
    $('#pelatih-left-bar').prev().text('Anak didik');
  } else {
    $('#pelatih-left-bar').prev().text('Pelatih');
  }

  if (user[Cookies.get('id-card')].role == 'Pelatih') {
    $('.dynamic-h').text($('.dynamic-h').text()+'pebakat');
  } else {
    $('.dynamic-h').text($('.dynamic-h').text()+'pelatih');
  }

  //photo
  $('.photo-p').attr('src', user[Cookies.get('id-card')]['img-url']);

  // komunitas left bar
  $('#comunity-left-bar').html("");
  for (i in user[Cookies.get('id-card')].comunity) {
    $('#comunity-left-bar').append(
      "<a id='"+user[Cookies.get('id-card')].comunity[i]+"' href='../detail-product' class='collection-item overflow-text-set komunitas'>"+comunity[user[Cookies.get('id-card')].comunity[i]].name+"</a>"
    );
  }

  //pelatih leftbar
  $('#pelatih-left-bar').html("");
  for(i in user[Cookies.get('id-card')].relation) {
    $('#pelatih-left-bar').append(
      "<li>" +
        "<div class='collapsible-header overflow-text-set'>"+user[user[Cookies.get('id-card')].relation[i]].talent+"</div>" +
        "<div class='collapsible-body'>" +
          "<div class='row'>" +
            "<img src='"+user[user[Cookies.get('id-card')].relation[i]]['img-url']+"' class='col s12 circle margin-private-top'>" +
            "<div class='col s12'>" +
              "<h6 class='center col s12 margin-private overflow-text-set'>"+user[user[Cookies.get('id-card')].relation[i]].name+"</h6>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</li>"
    );
  }
});
