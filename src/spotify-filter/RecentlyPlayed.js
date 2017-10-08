import React, { Component } from 'react'
import Square from '../components/Square.js'

import accessToken from '../spotify-api/spotify-api.js'

class RecentlyPlayed extends Component {
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
    const FETCH_URL = BASE_URL + 'player/recently-played?limit=' + this.numOfSquare
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
        <Square item={item.track} key={i}/>
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

export default RecentlyPlayed;