var SpotifyWebApi = require('spotify-web-api-node');

let accessToken = "BQAPcuEtMDE8oZV2DEi3kI0MfYdbspIUK_-hgA7-jGALKcwSyrGIHG3uo_sdx8p5ie4Zo-ff5NRyE-pA1T2MdLYX3qiL8efybtAWzzDMU0HBTb2_Qtwp8Sv0V72yhDnEk0enAoe6tva6X4KvisWmO0jDzd2dP9C8sXjEv80n59gQk64XV7qgfWw";

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