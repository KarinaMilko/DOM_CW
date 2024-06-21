"use strict";

// const users = [
//   { id: 1, name: "Test", isMale: false, birthday: null },
//   { id: 2, name: "John" },
// ];

// // js -> json
// const usersInJson = JSON.stringify(users);
// console.log(usersInJson);
// //[{"id":1,"name":"Test","isMale":false,"birthday":null},{"id":2,"name":"John"}]

// // json -> js
// const usersFromJson = JSON.parse(usersInJson);
// console.log(usersFromJson);

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,wind_speed_10m&timezone=auto";

let isCelsij = true;

const tempUnitBtn = document.querySelector(".tempUnitBtn");
tempUnitBtn.textContent = `Switch to ${isCelsij ? "F" : "C"}`;

tempUnitBtn.addEventListener("click", changeTempUnit);

function changeTempUnit() {
  isCelsij = !isCelsij;
  tempUnitBtn.textContent = `Switch to ${isCelsij ? "F" : "C"}`;

  fetch(`${WEATHER_URL}${isCelsij ? "" : "&temperature_unit=fahrenheit"}`)
    .then((response) => response.json())
    .then((data) => updateWeather(data))
    .catch((error) => console.log("error :>> ", error));
}

// Задати URL
// Використати data
fetch(WEATHER_URL)
  .then((response) => response.json())
  .then((data) => updateWeather(data))
  .catch((error) => console.log("error :>> ", error));

function updateWeather(weatherData) {
  const {
    current: { temperature_2m, precipitation, wind_speed_10m },
    current_units: {
      temperature_2m: temperature_2m_units,
      precipitation: precipitation_units,
      wind_speed_10m: wind_speed_10m_units,
    },
  } = weatherData;

  console.log(weatherData);

  const weatherArticle = document.querySelector(".weather");

  weatherArticle.innerHTML = `
      <p style="color: ${calcTemperatureColor(temperature_2m)}">
        ${temperature_2m} ${temperature_2m_units}
      </p>
      <p> ${precipitation} ${precipitation_units}</p>
      <p> ${wind_speed_10m} ${wind_speed_10m_units}</p>
     `;

  //   const tempEl = document.querySelector(".temp");
  //   tempEl.textContent = `${temperature_2m} ${temperature_2m_units}`;
  //   tempEl.style.color = calcTemperatureColor(temperature_2m);
}

function calcTemperatureColor(t) {
  if (t <= 0) {
    return "blue";
  } else if (t > 0 && t <= 25) {
    return "green";
  } else {
    return "red";
  }
}
