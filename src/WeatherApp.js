import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

import SearchField from "./SearchField";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      celsius: response.data.temperature.current,
      weatherDescription: response.data.condition.description,
      windSpeed: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconDescription: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      cityName: response.data.city,
    });
    setReady(true);
  }

  function onSearch(city) {
    const apiKey = "f3b08f2120e855cotb88e29725334a5b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <h1>Weather in {weatherData.cityName}</h1>

        <SearchField onSearch={onSearch} />
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    onSearch(props.defaultCity);
  }
}
