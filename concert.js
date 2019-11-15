
// 1. concert-this (Bands in Town Artist Events API)
//      Name of the venue
//      Venue location
//      date of event (use moment to format "MM/DD/YY")

var Concert = function () {
    var divider = "\n------------------------------------------------------------\n\n";
    // this.artist = '';
    //findConcert = searches B.I.T. API
    this.findConcert = function (concert) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" + concert;

        axios.get(URL).then(function (response) {

            // var jsonData = response.data;
            var { data } = response;
            console.log(data);
            //         var showData = [
            //             // "Venue Name: " + jsonData.____,
            //             // "Venue location: " + jsonData.____,
            //             // "Event Date: "  + jsonData.____" (use moment to format "MM/DD/YY")
            //         ].join("\n\n");

            //         // Append findConcert to log.txt
            //         // print findConcert to console
            //         fs.appendFile("log.txt"), findConcert + divider, function (err) {
            //             if (err) throw err;
            //             console.log(findConcert);
            //         });
            // });
        });
    }
}

var concert2 = new Concert();
concert2.findConcert();