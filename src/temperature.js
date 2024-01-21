export function getTemperature(unit, celciusAmount) {
  if (unit === "celcius") {
    return `${Math.round(celciusAmount)} °C`;
  } else if (unit === "fahrenheit") {
    return `${Math.round((celciusAmount * 9) / 5) + 32} °F`;
  }
}
