import React, { Component } from 'react';
import './App.css';


function Square(props) {
  return (
    <div className="flex-square">
      <img src={props.imageUrl} alt=""></img>
      {/*<img src={'https://i.scdn.co/image/9954c96d21486da541793eca1d7a338b45509f8c'} alt="boohoo"></img>*/}
    </div>
  );
}

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: []  // my response.
    };
    this.numOfSquare = 30; //numOfAlbums to retrieve. Max=50
  }

  componentDidMount() {
    // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    console.log('this.state', this.state);
    var accessToken = 'BQCjFVSlREaS958VQEad423hwDbjkrZ_7tgcvO-XTkXC3R1jVzvPfkMWb36xtxRHuLOXq4KST6mHliOg-btZfjltLCOnmIERGZwXi5eL8QE7o4j8SDF2W0a_6ocMWbVYNysMx0kfqQRWwtkGDAd7MVB4iQsxSMA71k3xlbS5eTzkGTpGHwE';
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'tracks?limit=' + this.numOfSquare;
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
        const temp_ar = [];
        for (var i=0; i<songList.length; i+=1) {
          temp_ar.push(songList[i].track.album.images[1].url)
        }
        this.setState({songList: temp_ar });
        // const artist = json.artists.items[0];
        // this.setState({ artist });
      })
  }

  render() {
    return (
      <div className="flex-container wrap">
        {this.state.songList.map((url, i) => <Square imageUrl={url} key={i}/>)}
      </div>
    )
  }

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      // return JSX
      <Wall />
    )
  }

}
export default App;
