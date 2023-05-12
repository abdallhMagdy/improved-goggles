
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}


var API_KEY = '6bf4d7b8901adf32f9a09e12a45f7d8b';
var weatherCard = document.querySelector('.weather-card');
var cityName = document.querySelector('.city-name');
var tempValue = document.querySelector('.temp-value');
var tempUnit = document.querySelector('.temp-unit');
var description = document.querySelector('.description');
var humidityValue = document.querySelector('.humidity-value');
var windSpeedValue = document.querySelector('.wind-speed-value');


function getWeather(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      cityName.textContent = data.name;
      tempValue.textContent = data.main.temp
      description.textContent = data.weather[0].description;
      humidityValue.textContent = data.main.humidity;
      windSpeedValue.textContent = data.wind.speed
      
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

window.onload = getLocation

