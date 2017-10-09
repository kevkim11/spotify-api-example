var SpotifyWebApi = require('spotify-web-api-node');

let accessToken = "BQBIgsu5b3DAciP629k2MrNdnWO_SIoLbF7yGZSJZo3o3rsDGl-F22ECojZyUXQmhezcO07mueTZfsFJu0meKep8pXu176-fO8Mfzoo5uVweds_VHSZwLxeGs2YNL9iwZmGahpqua7I7NxOhv_wG6AlnyIOBeQGeIv_ttPbRyOqvc5ysUTtubg0";

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