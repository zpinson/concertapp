import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Home extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    API.getEvent()
      .then((res) => {
        console.log("res.data: ", res.data);
        const events = res.data.map((event) => {
          console.log(event.lineup[0]);
          const id = event.id;
          const artist = event.lineup[0];
          const location = event.venue.location;
          const venue = event.venue.name;
          const date = event.datetime;
          const eventUrl = event.url;

          const eventObj = {
            id: id,
            artist: artist,
            location: location,
            venue: venue,
            date: date,
            eventUrl: eventUrl
          }
          console.log(eventObj);
          return eventObj;
        })
        console.log(events);
        this.setState({ events: events });
      })
      // .catch((err) => console.log("API.getEvent err: ", err));
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="container">
        <div className="jumbotron discoverjumbo">
          <h1 className="text-center">Events Directory</h1>
        </div>
        {this.state.events ? (
          <List>
            {this.state.events.map((event) => (
              <ListItem key={event.id}>
                <p to={"/events/" + event.id}>
                  <strong>
                  {event.artist} at {event.venue} 
                  </strong>
                </p>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        ;
      </div>
    );
  }
}

export default Home;
