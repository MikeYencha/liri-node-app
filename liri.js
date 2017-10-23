// Basic global variables I'll need within the app

var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var request = require('request');
var fs = require('fs');

// I started using and 'if' then 'if' then 'if' etc and realized it was pretty stupid to write my code that way, even though it would have worked.

//allows for first argument to be passed in node.js
var arg = process.argv[2];
switch(arg) {
  case 'my-tweets':
    console.log('myTweets();');
    myTweets();
    break;
  case 'spotify-this-song':
    console.log('spotifySong();');
    spotifySong();
    break;
  case 'movie-this':
    console.log('movieThis();');
    break;
  case 'do-what-it-says':
    console.log('doIt();');
    break;

  default:
    console.log('Maybe I should actually include some directions for the app, but right now I don\'t have time for that because, as usual I\'m last.');
    break;
}

function myTweets() {

  var client = new Twitter(keys.twitterKeys);
  var params = {screen_name: 'MikeyDoughnuts'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      // console.log(JSON.stringify(tweets[0].text,null,2));
      //i will have to iterate from the value above so I can output to the command line
      for(var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
      }
    } else {
      console.log(error);
    }
  });
}

//Here is where my 'spotifySong()' will be defined

// function spotifySong() {
//   console.log('This is where song information should go')
// }

function spotifySong() {
    var spotClient = new Spotify(keys.spotify);
    var song = process.argv[3];
    spotClient.search({ type: 'track', query: song }, function(err, data) {
      if (!err) {
        console.log(JSON.stringify(data,null,2));
      } else {
        return console.log(err);m
    }
  })
}

//Here is where my 'movieThis()' will be defined

function movieThis() {
  console.log('This is where the Movie Information will go');
}

//Here is where my 'doIt()' will be defined

function doIt() {
  console.log('This is where node will read a txt file and follow the instructions');
}