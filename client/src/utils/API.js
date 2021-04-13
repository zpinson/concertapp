// import axios from "axios";

// export default {
//   getEvent: function () {
//     return axios.get(
//       "https://rest.bandsintown.com/v4/artists/Primus/events/?app_id=451f31b2808001d069daed45c32a9dac"
//     );
//   },
// };

import axios from "axios";
const BASEURL = "https://rest.bandsintown.com/v4/artists/";
const APIKEY = "/events/?app_id=451f31b2808001d069daed45c32a9dac";

export default {
  getEvent: function (query) {
    console.log(query)
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all saved books
  getSavedEvents: function() {
    return axios.get("/api/events");
  },
  // Deletes the saved book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves an book to the database
  saveEvent: function(eventData) {
    console.log(eventData)
    return axios.post("/api/events", eventData);
  }
};