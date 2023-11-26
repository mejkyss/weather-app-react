// import React, { useState } from "react";
// import axios from "axios";
import "./WeatherApp.css";
import React from "react";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1>Weather in Lisbon</h1>

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
              <li>Wednesday 7:00</li>
              <li>Mostly Cloudy</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
              />
              6°C
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
