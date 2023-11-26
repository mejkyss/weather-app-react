import React from "react";
import "./WeatherApp.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <FormattedDate date={props.weatherData.date} />
              </li>
              <li className="text-capitalize">
                {props.weatherData.weatherDescription}
              </li>
              <img
                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.weatherData.iconDescription}.png`}
                alt={props.weatherData.iconDescription}
              />
              {Math.round(props.weatherData.temperature)} °C
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(props.weatherData.feelsLike)} °C</li>
              <li>Humidity: {props.weatherData.humidity} %</li>
              <li>Wind: {Math.round(props.weatherData.windSpeed)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
