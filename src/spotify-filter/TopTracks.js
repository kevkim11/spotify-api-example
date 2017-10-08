import React, { Component } from 'react'
import Square from '../components/Square.js'
import accessToken from '../spotify-api/spotify-api.js'

class TopTracks extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentItemList: []
    };
    this.numOfSquare = 12
  }

  componentDidMount() {
    // Global Variables
    // var accessToken = 'BQCxlfvWw4P_hKNo_ItguW8bBa3dndN6Helshve8Sp78XewtMDi2IZ3bi9sbKWJWGCb5HP87xelswjFO3juQWHAcXt5s7Vj0jXfzOnQS_F7-I_jwknakYH3UVx7Q7xyMEvFcyQQiw4UjmyDukgqPxmVWzp0IDOK28DSc2uJiIv1_DpJVVczYAdA';
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'top/tracks?limit=' + this.numOfSquare //+ '&time_range=' + this.time_range;
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const songList = json.items;
        this.setState({currentItemList: songList});
      })
  }

  render() {
    let itemNodes = this.state.currentItemList.map((item, i) => {
      return (
        <Square item={item} key={i}/>
      )
    });
    if(this.state.currentItemList.length === 0){return <p> {'loading...'} </p>}
    return (
      <div className="flex-container wrap">
        {itemNodes}
      </div>
    )
  }
}

export default TopTracks;