let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();

let currentDateTime = document.querySelector("#show-current-date");
currentDateTime.innerHTML = `${day} ${hour}:${minute}`;

//
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = temperature;
}

//function Changes the current city and temperature of the city
function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity");
  let currentCity = document.querySelector("#show-current-city");
  let apiKey = "d6ee04fc6c97edbbcefb337782707ef1";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(weatherUrl).then(showTemperature);
  currentCity.innerHTML = city.value;
}

let searchForCity = document.querySelector("#search-city-form");
searchForCity.addEventListener("submit", changeCity);

//Bonus Feature: converting celsius into fahrenheit and fahrenheit into celsius

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let currentTemperature = document.querySelector("#current-temp");
//   let fahrenheit = (currentTemperature * 9) / 5 + 32;
//   return (currentTemperature.innerHTML = fahrenheit);
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let currentTemperature = document.querySelector("#current-temp");
//   let celsius = ((currentTemperature - 32) * 5) / 9;
//   return (currentTemperature.innerHTML = celsius);
// }
// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", convertToCelsius(currentTemperature));

// let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit.addEventListener("click", convertToFahrenheit);
