import React, { useState } from "react";

export default function SearchField(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); //Search for a city
    props.onSearch(city);
  }

  function handleChange(event) {
    setCity(event.target.value); //Updates the value of the city entered in the search field
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row search-field">
        <div className="col-9">
          <input
            type="search"
            placeholder="Search for a city"
            className="form-control"
            onChange={handleChange}
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
  );
}
