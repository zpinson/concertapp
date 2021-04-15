
import React, { Component } from "react";
import { EventList, ListItem } from "../components/EventList";
import API from "../utils/API";

import UserNav from "../components/UserNav";

class SavedPast extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getPastSavedEvents();
  }

  getPastSavedEvents = () => {
    API.getPastSavedEvents()
      .then((res) => {
        this.setState({
          events: res.data,
        });
        console.log(this.state.events);
      })
      .catch((err) => console.log(err));
  };

  handlePastEventDelete = (id) => {
    console.log(id);
    API.deletePastEvent(id).then((res) => this.getPastSavedEvents());
  };

  render() {
    return (
      <div>
        <UserNav />

        <div className="container">
          {this.state.events ? (
            <EventList className="overflow-container">
              {this.state.events.map((event) => (
                <ListItem key={event.id}>
                  {/* <Card style={{ height: "60px", width: "60px" }}> */}
                  <p>
                    <strong>
                      {event.artist_name} at {event.venue_name}
                    </strong>
                  </p>
                  <p>{event.location}</p>
                  <p>
                    {event.date} at {event.time}
                  </p>
                  <button className="btn btn-light">
                    <a href={event.event_url}>More Info</a>
                  </button>
                 
                  <button
                    onClick={() => this.handlePastEventDelete(event._id)}
                    className="btn btn-light"
                  >
                    Delete
                  </button>
                  {/* </Card> */}
                </ListItem>
              ))}
            </EventList>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    );
  }
}

export default SavedPast;

