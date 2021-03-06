$(document).ready(function(){
  var ctx = $('#graph')[0].getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: [
          {
            label: user[progress[Cookies.get('usr-id')][Cookies.get('progress-det')].idPelatih].name,
            data: progress[Cookies.get('usr-id')][Cookies.get('progress-det')].data,
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            borderColor: 'rgba(3, 169, 244,1)',
            borderWidth: 1
        }
      ]
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
