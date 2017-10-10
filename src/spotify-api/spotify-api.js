var SpotifyWebApi = require('spotify-web-api-node');

let accessToken = "BQC2BkPBrWJlSCrVeLDshemysXQ9cSXjmNBp6KT8--tcmxbvmVzIrBuTOy96gt-eY84zaDOiEOazHBo2OaJ6s7erM6zc-8VlfMdEVPfd9uduQNAF11BJtKW7gN-HXNkg5fqkvEyiL2YHZ_WK8uQS-WPsUtAUGj7RDDfQeLTpfFqc24umvx1h2g0";

var credentials = {
  clientId : 'e55391b719e94dc78334fcdb648cdec6',
  clientSecret : 'a9349597d37b4e3382662df64cffb3d9',
  redirectUri : 'http://localhost:3000/'
};

let spotifyApi = new SpotifyWebApi(credentials);
spotifyApi.setAccessToken(accessToken);
// console.log(spotifyApi);

var scopes = ['user-read-private', 'user-read-email', 'user-library-read', 'user-top-read', 'user-read-recently-played'],
  state = 'some-state-of-my-choice';
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
// console.log(authorizeURL);

/*********************************/

class SpotifyService {
  constructor(){
    let credentials = {
      clientId : 'e55391b719e94dc78334fcdb648cdec6',
      clientSecret : 'a9349597d37b4e3382662df64cffb3d9',
      redirectUri : 'http://localhost:3000/'
    };
    let scopes = ['user-read-private', 'user-read-email', 'user-library-read', 'user-top-read', 'user-read-recently-played'];
    this.accessToken = "";
    this.refreshToek = "";
  }

  getSpotifyRecentlyPlayed(){

  }
}

export default accessToken;