
// grabs Spotify API keys from '.env' file
require("dotenv").config();


// ????? IN CORRECT FILE ????
var axios = require("axios");
var fs = require("fs");

// Links to keys.js // ????? IN CORRECT FILE ????
var Commands = require("./keys");

// comment type argument
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

/////////////////////////////////////////////////////////////////////////
//   liri.js argv[2] commands 1 - 4:
//=======================================================================
// 1. concert-this (Bands in Town Artist Events API)
//      Name of the venue
//      Venue location
//      date of event (use moment to format "MM/DD/YY")

var Concert = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    //findConcert = searches B.I.T. API
    this.findConcert = function (concert) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" + concert;

        axios.get(URL).then(function (response) {

            var jsonData = response.data;
            var showData = [
                // "Venue Name: " + jsonData.____,
                // "Venue location: " + jsonData.____,
                // "Event Date: "  + jsonData.____" (use moment to format "MM/DD/YY")
            ].join("\n\n");

            // Append findConcert to log.txt
            // print findConcert to console
            fs.appendFile("log.txt"), findConcert + divider, function (err) {
                if (err) throw err;
                console.log(findConcert);
            });
    });
};

//=======================================================================
// 2. spotify-this-song
//      Artist(s)
//      The song's name
//      A preview link of the song from Spotify
//      The album that the song is from

// DEFAULT SONG: "The Sign" by Ace of Base.
if (!search) {
    search = "spotify-this-song";
}
if (!term) {
    term = "The Sign";
}
//=======================================================================
// 3. movie-this
//      output following info in terminal
//      Title of the movie.
//      Year the movie came out.
//      IMDB Rating of the movie.
//      Rotten Tomatoes Rating of the movie.
//      Country where the movie was produced.
//      Language of the movie.
//      Plot of the movie.
//      Actors in the movie.

// DEFAULT MOVIE: 'Mr. Nobody.'
if (!search) {
    search = "movie-this";
}
if (!term) {
    term = "Mr.Nobody";
}

//=======================================================================
 // 4. do-what-it-says
//      LIRI will take the text inside of 'random.txt' and then use it to call one of LIRI's commands.
//      Run 'spotify-this-song' for "I Want it That Way," as follows the text in random.txt.
//      Edit the text in 'random.txt' to test out the feature for 'movie-this' and 'concert-this'.






/////////////////////////////////////////////////////////////////////////
//BONUS
    //  append each command you run to the log.txt file.






