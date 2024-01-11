import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function getDay(timestamp) {
    let index = new Date(timestamp).getDay();
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[index];
  }
  if (props.forecastData) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">
              {getDay(props.forecastData[0].time)}
            </div>
            <img
              className="forecast-icon"
              src={props.forecastData[0].condition.icon_url}
              alt="Current weather icon"
            />{" "}
            <div className="forecast-temperature">
              <span className="forecast-temperature-max">
                {Math.round(props.forecastData[0].temperature.maximum)}°C
              </span>
              <span className="forecast-temperature-min">
                {" "}
                {Math.round(props.forecastData[0].temperature.minimum)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Hello";
  }
}
