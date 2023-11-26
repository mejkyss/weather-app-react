import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");
  let celsius = Math.round(props.weatherData.celsius);
  let fahrenheit = Math.round((props.weatherData.celsius * 9) / 5) + 32;
  let temperature = unit === "celsius" ? celsius : fahrenheit;

  function displayCelsius() {
    setUnit("celsius");
  }
  function displayFahrenheit() {
    setUnit("fahrenheit");
  }

  return (
    <span>
      <h2 style={{ display: "inline" }}>{temperature}°</h2>
      <div className="two-buttons">
        <button className="btn btn-primary" onClick={displayCelsius}>
          °C
        </button>
        <button className="btn btn-primary" onClick={displayFahrenheit}>
          °F
        </button>
      </div>
    </span>
  );
}
