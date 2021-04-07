const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  artist_name: { type: String, required: true },
  location: { type: String, required: true },
  venue_name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  event_url: { type: String, required: true },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
