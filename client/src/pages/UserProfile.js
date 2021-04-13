import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import MainNav from "../components/MainNav";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Card from "@material-ui/core/Card";

class Saved extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getSavedEvents();
  }

  getSavedEvents = () => {
    API.getSavedEvents()
      .then((res) => {
        this.setState({
          events: res.data,
        });
        console.log(this.state.events);
      })
      .catch((err) => console.log(err));
  };

  handleEventDelete = (id) => {
    API.deleteEvent(id).then((res) => this.getSavedEvents());
  };

  render() {
    return (
        <div>
        <MainNav />
       
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
                  <button  className="btn btn-light">
                    <a href={event.eventUrl}>
                       More Info
                    </a>
                  
                  </button>
                  <button
                    onClick={() => this.handleEventDelete(event.id)}
                    className="btn btn-light"
                  >
                    Delete
                  </button>
                  {/* </Card> */}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Saved;
