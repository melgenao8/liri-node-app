
// grabs Spotify API keys from '.env' file
require("dotenv").config();

var axios = require("axios");
var fs = require("fs");

var keys = require("./keys.js")
// var searchSpotify = require("./spotify.js");
var searchMovies = require("./movies.js");
// var searchConcert = require("./concerts.js");


var userSearch = process.argv[2];
// concert-this : search favorite aritist concerts
// spotify-this-song  : search favorite song
// movie-this : search favorite movie
// do-what-it-says : use command from random.txt


switch (userSearch) {

    case "concert-this":
        var concert = process.argv.slice(3).join(" ");
        break;

    case "spotify-this-song":
        var song = process.argv.slice(3).join(" ");
        break;

    case "movie-this":
        var movie = process.argv.slice(3).join(" ");
        // DEFAULT MOVIE: 'Mr. Nobody.'
        if (!movie) {
            movie = "Mr.Nobody";
        }
        searchMovies(movie);
        break;

    case "do-what-it-says":
        break;
}

// function searchMovies(userSearch) {
//     var movie = userSearch;


//     var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

//     axios.get(url).then(
//         function (response) {
//             console.log("-----------------------\n")
//             console.log("Movie Title: " + response.data.Title);
//             console.log("Year: " + response.data.Year);
//             console.log("IMDB Rating: " + response.data.imdbRating);
//             console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
//             console.log("Country: " + response.data.Country);
//             console.log("Languages: " + response.data.Language);
//             console.log("Plot: " + response.data.Plot);
//             console.log("Actors: " + response.data.Actors);
//             console.log("\n-----------------------\n")

//             //add text to log.txt
//             fs.appendFileSync('log.txt', "\r\n" + "MOVIE SEARCH LOG --------------" + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Movie Title: " + response.data.Title + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Year: " + response.data.Year + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "IMDB Rating: " + response.data.imdbRating + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Rotten Tomatoes: " + response.data.Ratings[1].Value + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Country: " + response.data.Country + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Languages: " + response.data.Language + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', + "Plot: " + response.data.Plot + "\r\n", 'utf8') + "\r\n", 'utf8';
//             fs.appendFileSync('log.txt', + "Actors: " + response.data.Actors + "\r\n", 'utf8');
//             fs.appendFileSync('log.txt', "\r\n" + "----------------------------------" + "\r\n", 'utf8');
//         }
//     )
// }

//=======================================================================

// 4. do-what-it-says
//      LIRI will take the text inside of 'random.txt' and then use it to call one of LIRI's commands.
//      Run 'spotify-this-song' for "I Want it That Way," as follows the text in random.txt.
//      Edit the text in 'random.txt' to test out the feature for 'movie-this' and 'concert-this'.

//=======================================================================
//BONUS
    //  append each command you run to the log.txt file.

