import React from "react";

export default function SearchField() {
  return (
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
  );
}
