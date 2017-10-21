var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: 'd9d598f3e33244f5ad0e1d08d4439bf4',
    secret: 'b203de95bf8d47699dc1149435fcce9b'
  });
var omdb = require('omdb');
var request = require('request');
var fs = require('fs');
//allows for first argument to be passed in node.js
var arg = process.argv[2];
// I started using and 'if' then 'if' then 'if' etc and realized it was pretty stupid to write my code that way, even though it would have worked.
switch(arg) {

  case 'my-tweets':
    myTweets();
    break;

  case 'spotifiy-this-song':
    spotifySong();
    break;

  case 'movie-this':
    movieThis();
    break;

  case 'do-what-it-says':
    doIt();
    break;

  default:
    console.log('Maybe I should actually include some directions for the app, but right now I don\'t have time for that because, as usual I\'m last.');
    break;
};

//Here is where i'm trying to figure out my 'myTweets()' function

// function myTweets() {
//   var Client = new Twitter(keys.twitter);
//   var params = {q: 'MikeDoughnuts'};
//   Client.get('search/tweets', params, function (error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//     } else {
//       console.log(error);
//     }
//   })
// }


//Here is where my 'spotifySong()' will be defined

function spotifySong(song) {
  song = process.argv[3];
  spotify.search({ type: 'track', query: strong }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {

  
  console.log(data); 
  }
})
}