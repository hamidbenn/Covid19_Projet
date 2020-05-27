   fetch('https://corona-api.com/timeline').then(function(response){
            return response.json();
            }).then(function(obj){
                var arr = obj.data;
                var confirmed =[];
                var deaths =[];
                var recovered =[];
                var date = [];
                var size =arr.length-1;
                var j=0
                for(var i=size;i>=0;i--){
                    confirmed[j]=arr[i].confirmed;
                    deaths[j]=arr[i].deaths;
                    recovered[j]=arr[i].recovered;
                    date[j]=arr[i].date;
                    j++;
                }    
                donnee=[];
                donnee.push(confirmed);
                donnee.push(recovered);
                donnee.push(deaths);
                labels=["Cases","Recovered","Deaths"];
                var dynamicColors = function() {
                    var r = Math.floor(Math.random() * 255);
                    var g = Math.floor(Math.random() * 255);
                    var b = Math.floor(Math.random() * 255);
                    return "rgb(" + r + "," + g + "," + b + ")";
                 };    
                var ctxgen = document.getElementById('chartdiv').getContext('2d');
                var chartgen = new Chart(ctxgen, {
                    type: 'line',
                    data: {
                        labels: date,
                        
                    },
                    options:{
                        legend:{
                            display: true,
                        }
                    }
                });
                for(let i=0;i<donnee.length;i++){
                    chartgen.data.datasets.push({
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
                chartgen.update();
                
            })
        
