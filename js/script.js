    link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=0c3519a13c64bc02a7574d9994949f47"
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function () {
      var obj = JSON.parse(this.response);
      console.log(obj);
      document.getElementById('location').innerHTML = obj.name;
      document.getElementById('wImg').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
      document.getElementById('weather').innerHTML = obj.weather[0].description;
      document.getElementById('wind').innerHTML = `Wind Speed = ${obj.wind.speed} km/hr`;
      document.getElementById('humidity').innerHTML = `Humidity = ${obj.main.humidity} %`;
      document.getElementById('temperature').innerHTML = Math.round(obj.main.temp - 273.15);
    }
    if (request.status >= 200 && request.status <= 400) {
      var temp = obj.main.temp;
    } else {
      console.log('The City data is not available');
    }
    request.send();