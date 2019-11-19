var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
function getArtistsName(artist) {
    return artist.name;
}

function searchSong(userSearch) {
    var song = userSearch;
    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {
            // console.log(response.tracks.items);
            var songs = response.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log("-----------------------\n")
                console.log("Artist Name: " + songs[i].artists.map(getArtistsName));
                console.log("Song Name: " + songs[i].name);
                console.log("The Preview Song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
                console.log("-----------------------\n");

                fs.appendFileSync('log.txt', "\r\n" + "SPOTIFY SEARCH LOG --------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Artist Name: " + songs[i].artists.map(getArtistsName) + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Song Name: " + songs[i].name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "The Preview Song: " + songs[i].preview_url + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', + "Album: " + songs[i].album.name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "----------------------------------" + "\r\n", 'utf8');
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

module.exports = searchSong;


//=======================================================================
// 2. spotify-this-song
//      Artist(s)
//      The song's name
//      A preview link of the song from Spotify
//      The album that the song is from

// DEFAULT SONG: "The Sign" by Ace of Base.
// if (!userSearch) {
//     userSearch = "spotify-this-song";
// }
// if (!userInput) {
//     userInput = "The Sign";
// }
//=======================================================================