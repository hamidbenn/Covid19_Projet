  fetch('https://pomber.github.io/covid19/timeseries.json').then(function(response){
            return response.json();
        }).then(function(obj){
            var arr = new Array();
            arr= obj["Afghanistan"];
            var date = new Array();
            for( var i=0;i<arr.length;i++){
                date.push(arr[i].date);
            }
            fetch('https://api.coronastatistics.live/timeline/global').then(function(response){
                return response.json();
            }).then(function(obj){
                var cases =new Array();
                var donnee =new Array();
                var deaths=new Array();
                var recovered = new Array();
                for(var i=0 ; i<date.length;i++){
                    donnee.push(obj[date[i]]);
                }
                for(var i=0 ; i<date.length;i++){
                    cases.push(donnee[i].cases);
                    recovered.push(donnee[i].recovered);
                    deaths.push(donnee[i].deaths);
                }
                         donnee=[];
                donnee.push(cases);
                donnee.push(recovered);
                donnee.push(deaths);
                labels=["Cases","Recovered","Deaths"];
                var dynamicColors = function() {
                    var r = Math.floor(Math.random() * 255);
                    var g = Math.floor(Math.random() * 255);
                    var b = Math.floor(Math.random() * 255);
                    return "rgb(" + r + "," + g + "," + b + ")";
                 };    
                var ctxgen = document.getElementById('myAreaChart').getContext('2d');
                var myAreaChart = new Chart(ctxgen, {
                    type: 'line',
                    data: {
                        labels: date,
                        
                    },
                    options:{
                      maintainAspectRatio: false,
                        legend:{
                            display: true,
                        }
                    },
                    scales: {
      xAxes: [{
        time: {
          unit: 'cases'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
                });
                for(let i=0;i<donnee.length;i++){
                    myAreaChart.data.datasets.push({
                        fill: false,                        
                        data: donnee[i],  
                        label: labels[i],
                        borderColor: dynamicColors(),
                        pointBorderColor: dynamicColors(),
                        pointHoverBackgroundColor: dynamicColors(),
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 2,
                        pointBackgroundColor: dynamicColors(),
                        pointBorderWidth: 0,
                        pointHoverRadius: 3,
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 3,
                        pointRadius: 0,
                        pointHitRadius: 5,

                    });
                }
                myAreaChart.update();
                
            })
        })