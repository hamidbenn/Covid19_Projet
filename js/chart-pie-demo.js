$(document).ready(function () {
  fetch("https://covid19.mathdro.id/api/")
    .then((response) => response.json())
    .then((data) => {
      Piechart(data);
    });
  function Piechart(data) {
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["recovered", "deaths", "confirmed"],
        datasets: [
          {
            data: [
              data.recovered.value,
              data.deaths.value,
              data.confirmed.value,
            ],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: true,
        },
        cutoutPercentage: 80,
      },
    });
  }
});

