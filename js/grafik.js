$(document).ready(function(){
  var ctx = $('#graph')[0].getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: [
          {
            label: 'Manuel safir',
            data: [6, 7, 7, 8, 9, 5, 6, 6, 3, 5, 6, 7],
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            borderColor: 'rgba(3, 169, 244,1)',
            borderWidth: 1
        },
        {
            label: 'Manuel safir',
            data: [5, 8, 3, 4, 7, 7, 7, 5, 9, 8, 0, 9],
            backgroundColor: 'rgba(255, 87, 34, 0.2)',
            borderColor: 'rgba(255, 87, 34, 1)',
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
