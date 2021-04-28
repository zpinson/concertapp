const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  artist_name: { type: String, required: true },
  location: { type: String, required: true },
  venue_name: { type: String, required: true },
  datetime: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  event_url: { type: String, required: true },
  latLng: { type: Number, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  eventId: { type: String, required: true, unique: true },
  artistImg: { type: String, required: false, unique: false },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

