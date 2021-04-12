import React, { Component, Card } from "react";
import { List, ListItem } from "../components/List";
import MainNav from "../components/MainNav";
import API from "../utils/API";
import SearchForm from "../components/SearchForm/index";

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
          const date = event.datetimeslice(0, 10);
          const time = event.datetime.slice(11, 16);
          const eventUrl = event.url;

          const eventObj = {
            id: id,
            artist: artist,
            location: location,
            venue: venue,
            date: date,
            time: time,
            eventUrl: eventUrl,
          };
          console.log(eventObj);
          return eventObj;
        });
        console.log(events);
        this.setState({ events: events });
      })
      .catch((err) => console.log("API.getEvent err: ", err));
  };

  handleEventkSave = (id) => {
    const event = this.state.events.find((event) => event.id === id);
    console.log(event);

    API.saveEvent({
      artist_name: event.lineup[0],
      location: event.venue.location,
      venue_name: event.venue.name,
      date: event.datetime.slice(0, 10),
      time: event.datetime.slice(11, 16),
      event_url: event.url,
      eventId: event.id,
    }).then(() => this.getEvent());
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
                  <Card style={{ height: "60px", width: "60px" }}>
                    <p to={"/searchresult/" + event.id}>
                      <strong>
                        {event.artist} at {event.venue}
                      </strong>
                    </p>
                    <button
                      onClick={() => this.handleEventSave(event.id)}
                      className="btn btn-light"
                    >
                      Save
                    </button>
                  </Card>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          ;
        </div>
      </div>
    );
  }
}

export default SearchResults;
