$(document).ready(function() {

  //komunitas kamu
  for(i in user[Cookies.get('usr-id')].comunity) {
    var string = "";
    if (i == user[Cookies.get('usr-id')].comunity.length-1) {
      string = "<a href='#buat-komunitas' class='modal-trigger overflow-text-set btn light-blue col s12 waves-effect waves-dark margin-private-bottom'>"+
                      "Buat komunitas baru"+
                    "</a>";
    }
    $('#wadah').append(
      "<div class='col s12'>"+
        "<div class='col s12 card'>"+
          "<div class='col s12 m4 l4 card-image waves-effect waves-block waves-light no-margin-padding'>"+
            "<img class='activator section' src='"+comunity[user[Cookies.get('usr-id')].comunity[i]]['img-url']+"'>"+
          "</div>"+
          "<div class='col s12 m8 l8'>"+
            "<h5>"+comunity[user[Cookies.get('usr-id')].comunity[i]].name+"</h5>"+
            "<p class='justify-text'>"+comunity[user[Cookies.get('usr-id')].comunity[i]].desc+"</p>"+
          "</div>"+
          "<a href='#!' class='management-btn overflow-text-set btn deep-orange col s12 margin-private-bottom waves-effect waves-light'>Manajemen</a>"+
          string +
        "</div>"+
      "</div>"
    );
  }

  for(i in comunity) {
    $('.konten-kom').append(
      "<div class='col s12 m6 l6'>" +
        "<div class='card sticky-action'>" +
          "<div class='card-image waves-effect waves-block waves-light'>" +
            "<img class='activator' src='"+comunity[i]['img-url']+"'>" +
          "</div>" +
          "<div class='card-content'>" +
            "<span class='card-title activator grey-text text-darken-4 overflow-text-set'>"+comunity[i].name+"</span>" +
            "<p class='overflow-text-set'>"+comunity[i].desc+"</p>" +
          "</div>" +
          "<div class='card-action'>" +
            "<a href='#!' class='overflow-text-set'>Bergabung</a>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  //konfigurasi manajemen komunitas
  var conMan = false;
  var firstLoad = true;
  var ec = $('#content-comunity');
  var em = $('#content-management');
  $('.management-btn').click(function() {
    if (!conMan) {
      ec.css('display', 'none');
      if (firstLoad) {
        em.load('../assets/page-sniff/sniff-content-m-comunity.html');
        firstLoad = false;
      } else {
        em.css('display', 'block');
      }
      conMan = true;
    } else {
      ec.css('display', 'block');
      em.css('display', 'none');
      conMan = false;
    }
  });

});
