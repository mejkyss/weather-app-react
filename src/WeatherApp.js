import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      weatherDescription: response.data.condition.description,
      windSpeed: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconDescription: response.data.condition.icon,
      date: "Wednesday 7:00",
      cityName: response.data.city,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <h1>Weather in {weatherData.cityName}</h1>

        {/* Beginning of search field */}
        <form>
          <div className="row search-field">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="button btn btn-primary"
              />
            </div>
          </div>
        </form>
        {/* End of search field */}

        <div class="container">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">
                  {weatherData.weatherDescription}
                </li>
                <img
                  src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.iconDescription}.png`}
                  alt={weatherData.iconDescription}
                />
                {Math.round(weatherData.temperature)} °C
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels like: {Math.round(weatherData.feelsLike)} °C</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {Math.round(weatherData.windSpeed)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3b08f2120e855cotb88e29725334a5b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
