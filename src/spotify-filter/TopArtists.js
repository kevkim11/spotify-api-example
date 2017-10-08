import React, { Component } from 'react'
import Circle from '../components/Circle.js'
import accessToken from '../spotify-api/spotify-api.js'

class TopArtists extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentItemList: []
    };
    this.numOfSquare = 12
  }

  componentDidMount() {
    // Global Variables
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'top/artists?limit=' + this.numOfSquare //+ '&time_range=' + this.time_range;
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
        <Circle item={item} key={i} id={i}/>
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

export default TopArtists;