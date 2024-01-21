import React from "react";

export default function Conversion(props) {
  function displayCelsius() {
    props.setTempUnit("celcius");
  }
  function displayFahrenheit() {
    props.setTempUnit("fahrenheit");
  }

  return (
    <div className="two-buttons">
      <button className="btn btn-primary" onClick={displayCelsius}>
        °C
      </button>
      <button className="btn btn-primary" onClick={displayFahrenheit}>
        °F
      </button>
    </div>
  );
}
