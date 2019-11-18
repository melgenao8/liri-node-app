var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");

// 1. concert-this (Bands in Town Artist Events API)
//      Name of the venue
//      Venue location
//      date of event (use moment to format "MM/DD/YY")

function searchConcert(userSearch) {
    var artist = userSearch;

    //findConcert = searches B.I.T. API
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(url);
    axios.get(url).then(
        function (response) {
            // console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                var show = response.data[i];
                var date = moment(show.datetime).format("MM/DD/YY");
                console.log(show.venue.city + "," + show.venue.region + "," + show.venue.name + "," + date);
            }
            // "Venue Name: " + ;
            // "Venue location: " + ;
            // "Event Date: "  + ; (use moment to format "MM/DD/YY")

        }
    )
}

module.exports = searchConcert;