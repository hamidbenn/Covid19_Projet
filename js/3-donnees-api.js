fetch("https://api.covid19api.com/summary").then(function(response){
        return response.json();
    }).then(function(obj){
            var arr=obj.Global;
            var confirmed=arr.TotalConfirmed;
            var recovered=arr.TotalRecovered;
            var death=arr.TotalDeaths;
            $('#recovered').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: recovered
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('#death').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: death
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('#confirmed').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: confirmed
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        })