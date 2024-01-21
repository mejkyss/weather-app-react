import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

import SearchField from "./SearchField";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [hasFetchedDefaultCity, setHasFetchedDefaultCity] = useState(false);

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
  }

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
  }

  function onSearch(city) {
    const apiKey = "f3b08f2120e855cotb88e29725334a5b";

    const weatherDataUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(weatherDataUrl).then(handleResponse);
    const forecastDataUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(forecastDataUrl).then(handleForecastResponse);
  }

  if (weatherData) {
    return (
      <div className="WeatherApp">
        <h1>Weather in {weatherData.cityName}</h1>

        <SearchField onSearch={onSearch} />
        <WeatherInfo weatherData={weatherData} />

        <WeatherForecast forecastData={forecastData} />
      </div>
    );
  } else if (!hasFetchedDefaultCity) {
    onSearch(props.defaultCity);
    setHasFetchedDefaultCity(true);
  }
}
