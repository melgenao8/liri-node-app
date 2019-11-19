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

                console.log("-----------------------\n")
                console.log("Artist: " + artist);
                console.log("Location: " + show.venue.city + ", " + show.venue.region);
                console.log("Venue Name: " + show.venue.name);
                console.log("Concert Date: " + date);
                console.log("-----------------------\n")

                fs.appendFileSync('log.txt', "\r\n" + "CONCERT SEARCH LOG --------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Artist: " + artist + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Location: " + show.venue.city + ", " + show.venue.region + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Venue Name: " + show.venue.name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Concert Date: " + date + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "----------------------------------" + "\r\n", 'utf8');
            }
        }
    )
}

module.exports = searchConcert;