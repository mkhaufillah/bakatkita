$(document).ready(function() {
  // rec komunitas
  for(i in comunity) {
    if (comunity[i].talent == user[Cookies.get('usr-id')].talent) {
      $('.card-app-r-k').append(
        "<div id='"+i+"' class='col s12 m6 l6 showDet-ko'>" +
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
  }

  // rec pebakat/pelatih
  for(i in user) {
    if (user[i].role != user[Cookies.get('usr-id')].role &&
        user[i].talent == user[Cookies.get('usr-id')].talent) {
          $('.card-app-r-p').append(
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
  }

  // popular category
  for(i in categoryIndexPop) {
    $('.katpop').append(
      "<a id='"+category[categoryIndexPop[i][0]].title[categoryIndexPop[i][1]]+"' href='../cari' class='collection-item avatar'>"+
        "<img src='"+categoryIndexPop[i][2]+"' class='circle'>"+
        "<span class='title overflow-text-set'>"+category[categoryIndexPop[i][0]].category+"</span>"+
        "<p class='overflow-text-set'>"+category[categoryIndexPop[i][0]].title[categoryIndexPop[i][1]]+"</p>"+
        "<p class='overflow-text-set'>"+categoryIndexPop[i][3]+" peminat</p>"+
      "</a>"
    );
  }

  // all category
  for(i in category) {
    var string = "";
    for(j in category[i].title) {
      string = string + "<a id='"+category[i].title[j]+"' class='collection-item overflow-text-set' href='../cari'>"+category[i].title[j]+"</a>";
    }
    $('.katall').append(
      "<li>"+
        "<div class='collapsible-header overflow-text-set'><i class='material-icons'>poll</i>"+category[i].category+"</div>"+
        "<div class='collapsible-body'>"+
          "<ul class='collection'>"+
            string+
          "</ul>"+
        "</div>"+
      "</li>"
    );
  }
});
