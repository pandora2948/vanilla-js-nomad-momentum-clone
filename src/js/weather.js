const weather = document.querySelector("#superSexyWeatherWidgetWeather");
const city = document.querySelector("#superSexyWeatherWidgetLocation");
const API_KEY = "530ec2af3ce5dd5a947e5f9240e6b1ce";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.name;
      weather.textContent = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Please allow to trace your location for display weather.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);