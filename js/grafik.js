$(document).ready(function(){

  var dset = [];

  for (i in progress[Cookies.get('usr-id')]) {
    var r = (Math.floor(Math.random() * (255 - 0)) + 0);
    var g = (Math.floor(Math.random() * (255 - 0)) + 0);
    var b = (Math.floor(Math.random() * (255 - 0)) + 0);
    dset.push(
      {
        label: user[progress[Cookies.get('usr-id')][i].idPelatih].name,
        data: progress[Cookies.get('usr-id')][i].data,
        backgroundColor: 'rgba(' + r + ',' + g + ',' + b + ', 0.2)',
        borderColor: 'rgba(' + r + ',' + g + ',' + b + ', 1)',
        borderWidth: 1
      }
    );
    $(".daftar-pelatih").append(
      "<div class='col s12 m6'>" +
        "<div class='card'>" +
          "<div class='card-content'>" +
            "<h6><b>Pelatih</b></h6>" +
            "<p>"+user[progress[Cookies.get('usr-id')][i].idPelatih].name+"</p>" +
            "<h6><b>Minat/Bakat</b></h6>" +
            "<p>"+user[progress[Cookies.get('usr-id')][i].idPelatih].talent+"</p>" +
            "<h6><b>Deskripsi</b></h6>" +
            "<p>"+progress[Cookies.get('usr-id')][i].desc+"</p>" +
            "<a id='"+i+"' class='waves-effect waves-light btn margin-private-top light-blue progress-det' href='#!'>Detail</a>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  $('.progress-det').click(function() {
    Cookies.set('progress-det', $(this).attr('id'));
    window.location.replace("../nilai");
  });

  var ctx = $('#graph')[0].getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: dset
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
});
