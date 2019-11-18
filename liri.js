
// grabs Spotify API keys from '.env' file
require("dotenv").config();


var axios = require("axios");
var fs = require("fs");

var keys = require("./keys.js")
var searchSpotify = require("./spotify.js");
var searchMovies = require("./movies.js");
var searchConcert = require("./concert.js");


var userSearch = process.argv[2];
// concert-this : search favorite aritist concerts
// spotify-this-song  : search favorite song
// movie-this : search favorite movie
// do-what-it-says : use command from random.txt

var userInput = process.argv.slice(3).join(" ");
switchFunc(userSearch, userInput);

function whatsIt() {
    fs.readFile('random.txt', "utf8", function (err, data) {
        console.log(data);
        var dataArray = data.split(",");
        switchFunc(dataArray[0], dataArray[1]);
    })
}

function switchFunc(userSearch, userInput) {

    switch (userSearch) {

        case "concert-this":
            var concert = userInput;
            searchConcert(concert);
            break;

        case "spotify-this-song":
            var song = userInput;
            if (!song) {
                song = "The Sign";
            }
            searchSpotify(song);
            break;

        case "movie-this":
            var movie = userInput;
            // DEFAULT MOVIE: 'Mr. Nobody.'
            if (!movie) {
                movie = "Mr.Nobody";
            }
            searchMovies(movie);
            break;

        case "do-what-it-says":
            whatsIt();
            break;
    }

}




//=======================================================================

// 4. do-what-it-says
//      LIRI will take the text inside of 'random.txt' and then use it to call one of LIRI's commands.
//      Run 'spotify-this-song' for "I Want it That Way," as follows the text in random.txt.
//      Edit the text in 'random.txt' to test out the feature for 'movie-this' and 'concert-this'.

//=======================================================================
//BONUS
    //  append each command you run to the log.txt file.

