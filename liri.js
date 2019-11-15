
// grabs Spotify API keys from '.env' file
require("dotenv").config();

var axios = require("axios");
var fs = require("fs");

var keys = require("./keys.js")
var searchSpotify = require("./spotify.js");
var searchMovies = require("./movies.js");
var searchConcert = require("./concerts.js");


var userSearch = process.argv[2];
// concert-this : search favorite aritist concerts
// spotify-this-song  : search favorite song
// movie-this : search favorite movie
// do-what-it-says : use command from random.txt

var input = process.argv.slice(3).join(" ");

//=======================================================================



 // 4. do-what-it-says
//      LIRI will take the text inside of 'random.txt' and then use it to call one of LIRI's commands.
//      Run 'spotify-this-song' for "I Want it That Way," as follows the text in random.txt.
//      Edit the text in 'random.txt' to test out the feature for 'movie-this' and 'concert-this'.






//=======================================================================
//BONUS
    //  append each command you run to the log.txt file.

