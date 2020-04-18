

    $(document).ready(function() {

    fetch("https://covid19.mathdro.id/api/")
  .then(response => response.json())
  .then(data => {
            doghnut(data);
  });
  function doghnut(data){
  var ctx = document.getElementById("myPieChart");
      var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: "My First dataset",
            data: [ data.recovered.value, data.deaths.value,data.confirmed.value],
            backgroundColor: [
              '#fa4251',
              '#00b5e9',
              '#00ad5f'
            ],
            hoverBackgroundColor: [
              '#fa4251',
              '#00b5e9',
              '#00ad5f'
            ],
            borderWidth: [
              0, 0
            ],
            hoverBorderColor: [
              'transparent',
              'transparent'
            ]
          }
        ],
        labels: [
          'Deaths',
          'Recovered',
          'Confirmed'
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        cutoutPercentage: 87,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontSize: 14,
            fontFamily: "Poppins,sans-serif"
          }

        },
        tooltips: {
          titleFontFamily: "Poppins",
          xPadding: 15,
          yPadding: 10,
          caretPadding: 0,
          bodyFontSize: 16,
        }
      }
    });
  
}
 });
    