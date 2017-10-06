import React, { Component } from 'react';
import './App.css';
import Square from './components/Square.js'
import RecentlyPlayed from './spotify-filter/RecentlyPlayed.js'
import TopTracks from './spotify-filter/TopTracks.js'
import TopArtists from './spotify-filter/TopArtists.js'


// Filter functions
/**
 * Filter Ideas
 * /v1/users/{user_id}/playlists/{playlist_id}
 * /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * @param accessToken
 */

class Wall extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentItemList: props.itemList,
    // };
    // let itemList = props.itemList
    // this.numOfSquare = 30; //numOfAlbums to retrieve. Max=50
    // this.time_range = 'short_term'
  }

  // componentDidMount(props) {
  //   // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
  //   // console.log('this.state', this.state);
  //   var accessToken = 'BQAJktMR5guiXK0Da2GYZ5cEQvQhX3fVLiwQaymx90peOuT5dpqABNfIBs4ZpZw0ousMk26_ulkoQyr2Kr8j3BguL1Pvvofd3RbrWMP68C46eBRkfC-I_zOh5qPatVfog8Zd6b4Wqfba1hHWNxkF47HYa-4r4D9rsy8sbowpfdGA-cGrzLc&refresh_token=AQC3Cv2BAO1TqIyhSWQ6ojjqwH3hRxT-8URgsRzPXUf8E5pYqmFSBuH5EUFuPtb2M-KGenc-9pkcViKpGxKJDfiJ2S8mOUypVgCCS2tcCQtxvgEbQh7gYpJBER-ic4OJaxE';
  //   // this.getUserSongs(accessToken)
  //   // this.getUserAlbums(accessToken)
  //   this.getUserTopTracks(accessToken)
  // }

  render() {
    let itemNodes = this.props.itemList.map((item, i) => {
      return (
        <Square item={item} key={i}/>
      )
    });
    if(this.props.itemList.length === 0){return <p> {'loading...'} </p>}
    return (
      <div className="flex-container wrap">
        {itemNodes}
      </div>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 1,
    };
    // this.numOfSquare = 30; //numOfAlbums to retrieve. Max=50
    // this.time_range = 'short_term'
  }

  componentDidMount() {
    // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    // console.log('this.state', this.state);
    var accessToken = 'BQCWI1on4UZDflPoJnJ4W2g0Ml--tYm-qzJdYCrDVFn7frB6kJux9hhLSQlGKxoTtcymrl4JodxFqSJknsjR9-e-Wy_oE0BJppQea9DRz704ju9umSRvBH1TKKOLb2BlNwILbKphKVC74qicsxCKAs_2PVrR0xxp9ksm66jLx_HGQGKbpiayN9Y';
  }

  getUserTopTracks(accessToken) {
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
        console.log(songList[0]);
        this.setState({currentItemList: songList});
      })
  }

  render() {
    return (
      // return JSX
      <div className="app-header">
      {/*<Wall itemList={this.state.currentItemList}/>*/}
        <RecentlyPlayed />
        <div>
          ------------------------------------------------
        </div>
        <TopTracks />
        <TopArtists/>
      </div>
    )
  }

}
export default App;
