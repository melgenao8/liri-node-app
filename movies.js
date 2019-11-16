// import Axios from "axios";
// import { fstat } from "fs";

var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

// 3. movie-this


function searchMovies(userSearch) {
    var movie = userSearch;


    var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(url).then(
        function (response) {
            console.log("-----------------------\n")
            console.log("Movie Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Languages: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("\n-----------------------\n")

            //add text to log.txt
            fs.appendFileSync('log.txt', "\r\n" + "MOVIE SEARCH LOG --------------" + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Movie Title: " + response.data.Title + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Year: " + response.data.Year + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "IMDB Rating: " + response.data.imdbRating + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Rotten Tomatoes: " + response.data.Ratings[1].Value + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Country: " + response.data.Country + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Languages: " + response.data.Language + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', + "Plot: " + response.data.Plot + "\r\n", 'utf8') + "\r\n", 'utf8';
            fs.appendFileSync('log.txt', + "Actors: " + response.data.Actors + "\r\n", 'utf8');
            fs.appendFileSync('log.txt', "\r\n" + "----------------------------------" + "\r\n", 'utf8');
        }
    )
}

module.exports = searchMovies;

//      output following info in terminal
//      Title of the movie.
//      Year the movie came out.
//      IMDB Rating of the movie.
//      Rotten Tomatoes Rating of the movie.
//      Country where the movie was produced.
//      Language of the movie.
//      Plot of the movie.
//      Actors in the movie.
