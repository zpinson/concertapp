import React, { Component, Card, useState } from "react";
import { List, ListItem } from "../components/List";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";

class SearchResults extends Component {
  state = {
    search: "",
    events: [],
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getEvent(this.state.search)
      .then((res) => {
        console.log("res.data: ", res.data);
        const events = res.data.map((event) => {
          console.log(event.lineup[0]);
          const id = event.id;
          const artist = event.lineup[0];
          const location = event.venue.location;
          const venue = event.venue.name;
          const date = event.datetime.slice(0, 10);
          const time = event.datetime.slice(11, 16);
          const eventUrl = event.url;
          const latitude = event.venue.latitude;
          const longitude = event.venue.longitude;

          const eventObj = {
            id: id,
            artist: artist,
            location: location,
            venue: venue,
            date: date,
            time: time,
            eventUrl: eventUrl,
            longitude: longitude,
            latitude: latitude,
          };
          console.log(eventObj);
          return eventObj;
        });
        console.log(events);
        this.setState({ events: events });
      })
      .catch((err) => console.log("API.getEvent err: ", err));
  };

  handleEventSave = (id) => {
    const event = this.state.events.find((event) => event.id === id);
    console.log(event);

    API.saveEvent({
      artist_name: event.artist,
      location: event.location,
      venue_name: event.venue,
      date: event.date,
      time: event.time,
      event_url: event.eventUrl,
      longitude: event.longitude,
      latitude: event.latitude,
      eventId: event.id,
    })
      .then(console.log("success!!!!"))
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.events);
    return (
      <div>
        <MainNav />
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <div className="container">
          {this.state.events ? (
            <List className="overflow-container">
              {this.state.events.map((event) => (
                <ListItem key={event.id}>
                  {/* <Card style={{ height: "60px", width: "60px" }}> */}
                  <p>
                    <strong>
                      {event.artist} at {event.venue}
                    </strong>
                  </p>

                  <p>{event.location}</p>
                  <p>
                    {event.date} at {event.time}
                  </p>
                  <button className="btn btn-light">
                    <a href={event.eventUrl}>More Info</a>
                  </button>
                  <button className="btn btn-light">
                    <a
                      href={
                        ("https://www.google.com/maps/search/?api=1&query=" +
                          event.latitude +
                          "," +
                          event.longitude)
                      }
                    >
                      Direction
                    </a>
                  </button>
                  <button
                    onClick={() => this.handleEventSave(event.id)}
                    className="btn btn-light"
                  >
                    Save
                  </button>
                  {/* </Card> */}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchResults;
