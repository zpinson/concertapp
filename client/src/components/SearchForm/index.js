
import React from "react";


function SearchForm(props) {
    console.log(props)
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="event">Event:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="event"
          list="events"
          type="text"
          className="form-control"
          placeholder="Type in an artist name"
          id="event"
        />
        {/* <datalist id="events">
          {props.events.map((event) => (
            <option value={event} key={event} />
          ))}
        </datalist> */}
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
