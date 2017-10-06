import React, { Component } from 'react'
import Square from '../components/Square.js'

class RecentlyPlayed extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentItemList: []
    };
    this.numOfSquare = 50
  }

  componentDidMount() {
    // Global Variables
    var accessToken = 'BQCWI1on4UZDflPoJnJ4W2g0Ml--tYm-qzJdYCrDVFn7frB6kJux9hhLSQlGKxoTtcymrl4JodxFqSJknsjR9-e-Wy_oE0BJppQea9DRz704ju9umSRvBH1TKKOLb2BlNwILbKphKVC74qicsxCKAs_2PVrR0xxp9ksm66jLx_HGQGKbpiayN9Y';
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