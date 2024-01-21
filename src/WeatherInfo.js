import React from "react";
import "./WeatherApp.css";
import Conversion from "./Conversion";

import FormattedDate from "./FormattedDate";
import { getTemperature } from "./temperature";

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

              <h2 style={{ display: "inline" }}>
                {getTemperature(props.tempUnit, props.weatherData.celsius)}
              </h2>
              <Conversion
                weatherData={props.weatherData}
                tempUnit={props.tempUnit}
                setTempUnit={props.setTempUnit}
              />
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Feels like:{" "}
                {getTemperature(props.tempUnit, props.weatherData.feelsLike)}{" "}
              </li>
              <li>Humidity: {props.weatherData.humidity} %</li>
              <li>Wind: {Math.round(props.weatherData.windSpeed)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
