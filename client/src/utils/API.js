import axios from "axios";

export default {
  getEvent: function () {
    return axios.get(
      "https://rest.bandsintown.com/v4/artists/Primus/events/?app_id=451f31b2808001d069daed45c32a9dac"
    );
  },
};

// import axios from "axios";
// const BASEURL = "https://rest.bandsintown.com/v4/artists/";
// const APIKEY = "/events/?app_id=451f31b2808001d069daed45c32a9dac";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   },
// };
