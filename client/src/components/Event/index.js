import React, { Component } from "react";
import API from "../../utils/API";

class EventTable extends Component {
  state = {
    events: [{}],
  };

  componentDidMount() {
    API.getEvent()
      .then((res) => {
        this.setState({ events: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="container">
        <div className="jumbotron discoverjumbo">
          <h1 className="text-center">Events Directory</h1>
        </div>
        {this.state.events.map((event) => {
          console.log(event);
          return (
            <div>Hello!</div>
          );
        })}
        ;
      </div>
    );
  }
}

export default EventTable;
