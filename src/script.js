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
  let city = document.querySelector("#show-current-city");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");
  let descriptionElem = document.querySelector("#description");

  currentTemperature.innerHTML = temperature;

  currentTemperature.innerHTML = Math.round(temperature);
  city.innerHTML = response.data.name;

  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed * 3.6);

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
  descriptionElem.innerHTML = response.data.weather[0].description;
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

function search(city) {
  let apiKey = "d6ee04fc6c97edbbcefb337782707ef1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForCity = document.querySelector("#search-city-form");
searchForCity.addEventListener("submit", changeCity);

search("Berlin");
