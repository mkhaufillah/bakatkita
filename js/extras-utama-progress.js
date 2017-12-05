$(document).ready(function() {
  // rec pebakat/pelatih
  for(i in user) {
    $('.ppShow').append(
      "<div class='col s12 m6 l6'>" +
        "<div class='card sticky-action'>" +
          "<div class='card-image waves-effect waves-block waves-light'>" +
            "<img class='activator' src='"+user[i]['img-url']+"'>" +
          "</div>" +
          "<div class='card-content'>" +
            "<span class='card-title activator grey-text text-darken-4 overflow-text-set'>"+user[i].name+"</span>" +
            "<p class='overflow-text-set'>"+user[i].talent+"</p>" +
          "</div>" +
          "<div class='card-action'>" +
            "<a href='#!' class='overflow-text-set'>Kontrak</a>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }
});
