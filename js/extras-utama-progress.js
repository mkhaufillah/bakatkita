$(document).ready(function() {
  // rec pebakat/pelatih
  if (user[Cookies.get('usr-id')].role != 'pelatih') {
    $('#graph').parent().parent().css('display', 'none');
    for (i in user[Cookies.get('usr-id')].relation) {
      var dscPelatih;
      for (j in progress[user[Cookies.get('usr-id')].relation[i]]) {
        if (progress[user[Cookies.get('usr-id')].relation[i]][j].idPelatih == Cookies.get('usr-id'))
        dscPelatih = progress[user[Cookies.get('usr-id')].relation[i]][j].desc;
      }
      $(".daftar-pelatih").append(
        "<div class='col s12 m6'>" +
          "<div class='card'>" +
            "<div class='card-content'>" +
              "<h6><b>Nama</b></h6>" +
              "<p>"+user[user[Cookies.get('usr-id')].relation[i]].name+"</p>" +
              "<h6><b>Minat/Bakat</b></h6>" +
              "<p>"+user[user[Cookies.get('usr-id')].relation[i]].talent+"</p>" +
              "<h6><b>Deskripsi</b></h6>" +
              "<p>"+dscPelatih+"</p>" +
              "<a id='"+i+"' class='waves-effect waves-light btn margin-private-top light-blue progress-det' href='#!'>Berikan nilai</a>" +
            "</div>" +
          "</div>" +
        "</div>"
      );
    }
  }

  for(i in user) {
    if (user[Cookies.get('usr-id')].role != user[i].role)
    $('.ppShow').append(
      "<div id='"+i+"' class='col s12 m6 l6 showDet-pe'>" +
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
