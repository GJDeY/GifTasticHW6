//initializing JavaScript upon user button click
//delegating class

//declaring variables which I'll use later
var topics = ["sports", "baseball", "cubs", "win", "golf", "birdie", "bulls", "blackhawks", "sox", "bears"]
var gifsAdded = [""];
// var key = "_ _ _ _"//still unclear on this and don't want to publicly submit a private key 

/*
abondoning this tedious method

 q = query URL's listed in variables below & results set to 10 per query. Rating ===PG-13
var sportsAddress = "https://api.giphy.com/v1/gifs/search?api_key=yay3WdNExNBFLM96MkDZVNXU8xwrocly&q=sports&limit=10&offset=0&rating=PG-13&lang=en";
var baseballAddress = "https://api.giphy.com/v1/gifs/search?api_key=yay3WdNExNBFLM96MkDZVNXU8xwrocly&q=baseball&limit=10&offset=0&rating=PG-13&lang=en"
var cubsAddress = "https://api.giphy.com/v1/gifs/search?api_key=yay3WdNExNBFLM96MkDZVNXU8xwrocly&q=cubs&limit=10&offset=0&rating=PG-13&lang=en";
var winAddress =""
var golfAddress = ""
var worldAddress = ""
var homeAddress = ""
var birdieAddress = ""
var holeAddress = ""
var bullsAddress = ""
var blackhawksAddress = ""
var whiteAddress = "https://api.giphy.com/v1/gifs/search?api_key=yay3WdNExNBFLM96MkDZVNXU8xwrocly&q=white sox&limit=10&offset=0&rating=PG-13&lang=en"
var bearsAddress = ""
*/
//link addresses to the topic buttons








$(document).on("click", "button.btn-success", function () { //will run this function upon button click

    var gifsAdded = $("#gifs-input").val().trim()
    //create button from form using GET method

    //write function to add topic upon form submission

    $.ajax({
        url: queryURL, //
        method: "GET"
    }).then(function (response) {
        document.write(response);
    });


})
