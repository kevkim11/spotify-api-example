var SpotifyWebApi = require('spotify-web-api-node');

// From authorization_code
const express = require('express');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

const {createServer} = require('http');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

// configure the express server
const CLIENT_ID = 'e55391b719e94dc78334fcdb648cdec6'//process.env.client_id;
const CLIENT_SECRET = 'a9349597d37b4e3382662df64cffb3d9' //process.env.client_secret;
// const REDIRECT_URI = process.env.redirect_uri || 'http://localhost:3000/callback';
const STATE_KEY = 'spotify_auth_state';
// your application requests authorization
var scopes = ['user-read-private', 'user-read-email', 'user-library-read', 'user-top-read', 'user-read-recently-played'];



var credentials = {
  clientId : 'e55391b719e94dc78334fcdb648cdec6',
  clientSecret : 'a9349597d37b4e3382662df64cffb3d9',
  redirectUri : 'http://localhost:8888/callback/'
};


var spotifyApi = new SpotifyWebApi(credentials);
var tokenExpirationEpoch;
const authorizationCode = 'AQCagPAqM3GEbSMV213Ygs3AZbC41ebhrIa22EioCwlElBNOIBwiwr_EvaNOwv9_CufMvW3g1T9BE3FCQpoyc0UsTx0bLLMW19Nj9Fj44n1i_mlO0PzKjItYTjhPWNO2XUJRRW26-psc90RIqQuF7h3b1gmnsmFbFqykT9vres1UZ6w0PyV88_jMXyAMSDFahzoMOnVEECMlbyMDcl-usnNoihlq9VYWUh8TPAvci-zJrm_U9hSA74K1RogTuoVTBcZjb71TFmBEDpbnMSoyW6_vDwdIZvVNegv-m3kXKcMI5xu1c60s2tPupasdbg86GYNIObhZ'


var app = express();
const dev = app.get('env') !== 'production'; // so test or development environment

// Production setting
if(!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
  // The production static files will be in the build directory of the react app
  app.use(express.static(path.resolve(__dirname, 'build')));
  // on every request that comes in.
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'build', 'index.html'))
  })
}

// Development settings
if(dev){
  app.use(morgan('dev'))
}

/**********************************************************************/
// First retrieve an access token

// spotifyApi.authorizationCodeGrant(authorizationCode)
//   .then(function(data) {
//
//     // Set the access token and refresh token
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//
//     // Save the amount of seconds until the access token expired
//     tokenExpirationEpoch = (new Date().getTime() / 1000) + data.body['expires_in'];
//     console.log('Retrieved token. It expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');
//   }, function(err) {
//     console.log('Something went wrong when retrieving the access token!', err.message);
//   });
//
// // Continually print out the time left until the token expires..
// var numberOfTimesUpdated = 0;
//
// setInterval(function() {
//   console.log('Time left: ' + Math.floor((tokenExpirationEpoch - new Date().getTime() / 1000)) + ' seconds left!');
//
//   // OK, we need to refresh the token. Stop printing and refresh.
//   if (++numberOfTimesUpdated > 5) {
//     clearInterval(this);
//
//     // Refresh token and print the new time to expiration.
//     spotifyApi.refreshAccessToken()
//       .then(function(data) {
//         tokenExpirationEpoch = (new Date().getTime() / 1000) + data.body['expires_in'];
//         console.log('Refreshed token. It now expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');
//       }, function(err) {
//         console.log('Could not refresh the token!', err.message);
//       });
//   }
// }, 1000);



const server = createServer(app);
server.listen(PORT, error =>{
  if(error) throw error;
  console.log('Server started!');
});

var client_id = 'e55391b719e94dc78334fcdb648cdec6'; // Your client id
var client_secret = 'a9349597d37b4e3382662df64cffb3d9'; // Your secret
var redirect_uri = 'http://localhost:8888/callback/'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


/**
 * This was like all for production basically.
 * From the ultimate intro
 * */
// app.set('port', (process.env.PORT || 3000));
//
// // app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/build'));
// app.use(cookieParser());
//
// app.get('*', function(request, response) {
//   response.sendFile(__dirname + '/build/index.html')
// });
//
// app.listen(app.get('port'), function() {
//   console.log("Express server started on port", app.get('port'))
// });