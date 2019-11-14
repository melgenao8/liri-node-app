console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// imports the keys.js file -- stored it in "keys" variable
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Bands in Town Artist Events API 
    // ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
