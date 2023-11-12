import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function updateInfo(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  let [city, setCity] = useState("oslo");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(updateInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayInfo() {
    if (temperature) {
      return (
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
            />
          </li>
        </ul>
      );
    } else {
      return null;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city..." onChange={updateCity} />
      <input type="submit" value="Search" />
      {displayInfo()}
    </form>
  );
}
