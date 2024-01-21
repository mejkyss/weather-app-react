import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function getDay(timestamp) {
    let index = new Date(timestamp * 1000).getDay();
    console.log(new Date(timestamp * 1000));
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
          {props.forecastData.slice(0, 4).map(function (dailyForecast) {
            return (
              <div className="col">
                <div className="forecast-day">{getDay(dailyForecast.time)}</div>
                <img
                  className="forecast-icon"
                  src={dailyForecast.condition.icon_url}
                  alt="Current weather icon"
                />{" "}
                <div className="forecast-temperature">
                  <span className="forecast-temperature-max">
                    {Math.round(dailyForecast.temperature.maximum)}°C
                  </span>
                  <span className="forecast-temperature-min">
                    {" "}
                    {Math.round(dailyForecast.temperature.minimum)}°C
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return "Hello";
  }
}
