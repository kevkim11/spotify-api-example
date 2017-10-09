import React, { Component } from 'react'
import Square from '../components/Square.js'

// import accessToken from '../spotify-api/spotify-api.js'

var SpotifyWebApi = require('spotify-web-api-node');

// import SpotifyWebApi from 'spotify-web-api-node'



let accessToken = "BQD0Q9OnyqmOTClxHn9lUs6TuDQ0qYxw6kCqkGgaFalmoB8lGejDi29nUxSoa-puaQ5Hs53S0oVh-uPUkOadzNtJVHOQsM_JbR_dA3-NEeGHWW2dZcjJDDWMNvqaRnAwVu1ld9FbHLvSFE0i0Vnfv0SnT_HAc5SlnCtZOlG1PPcIjlsMh2wIiSI";
let refresh_token = "AQCVHmUW-IFVM3_9Wz055yIfJ8f-LD2cVKRho-LoyUOiA5O-6js5sxS_qDrYBqNlMpLPxGvDazUzmt_LZRO7_2rA6Jd6yBvxC47fHSC_i7E1dBJJMuvHJbUWjqfcXFccmf0>";

var client_id = 'e55391b719e94dc78334fcdb648cdec6'; // Your client id
var client_secret = 'a9349597d37b4e3382662df64cffb3d9'; // Your secret
var redirect_uri = 'http://localhost:3000/callback/'; // Your redirect uri

class RecentlyPlayed extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentItemList: [],
      requestFailed: false,

      refresh_token: "AQCVHmUW-IFVM3_9Wz055yIfJ8f-LD2cVKRho-LoyUOiA5O-6js5sxS_qDrYBqNlMpLPxGvDazUzmt_LZRO7_2rA6Jd6yBvxC47fHSC_i7E1dBJJMuvHJbUWjqfcXFccmf0>"
    };
    this.numOfSquare = 12;
    this.accessToken = "";
  }

  refreshToken() {
    console.log("inside refreshToken");
    const FETCH_URL = 'https://accounts.spotify.com/api/token'; //https://api.spotify.com/v1/albums/
    var myOptions = {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
      forms: {
        grant_type: 'refresh_token',
        refresh_token: this.state.refresh_token,
      }
      // json: true
    };

    fetch(FETCH_URL, myOptions)
      .then(response => {
        if(!response.ok){
          console.log(response);
          throw Error("Request to Spotify failed")
        }
        // console.log(response);
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({accessToken: ""})
        // const songList = json.items;
        // this.setState({currentItemList: songList});
      })
  }

  componentDidMount() {

    // Global Variables
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'player/recently-played?limit=' + this.numOfSquare;
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => {
        console.log(response.status === 401);
        if(response.status===401) {
          // reset
          console.log("response is 401!!!!");
        }
        if(!response.ok){
          console.log(response);
          // throw Error("Request to Spotify failed")
          this.refreshToken();
        }
        // console.log(response);
        return response
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const songList = json.items;
        this.setState({currentItemList: songList});
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    let itemNodes = this.state.currentItemList.map((item, i) => {
      return (
        <Square item={item.track} id={i} key={i}/>
      )
    });
    if(this.state.requestFailed){return <p> {'Failed!'} </p>}
    if(this.state.currentItemList.length === 0){return <p> {'loading...'} </p>}
    return (
      <div className="flex-container wrap">
        {itemNodes}
      </div>
    )
  }
}

export default RecentlyPlayed;