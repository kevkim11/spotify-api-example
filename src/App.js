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
    this.numOfSquare = 50; //numOfAlbums to retrieve. Max=50
  }

  componentDidMount(props) {
    // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    console.log('this.state', this.state);
    var accessToken = 'BQDKGD-61r21vghk7qbx_pez0I_3qTmKRwmSvS2hJxAZqFYqiDo6RfZTshsKv_0rVNe56_tYJsYR-vGoicIjgaIbNTU9nLIEaucNp8jwgb93i4tNVBMKJNhgaUwDqoMGX2Y6iNdBi6zobFtAVR2sUkIEmyDpZ3d31jmeV7Te6qHun1O9Ly4';
    // this.getUserSongs(accessToken)
    // this.getUserAlbums(accessToken)
    this.getUserTopTracks(accessToken)
  }

  // Filter functions
  getUserSongs(accessToken) {
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
        for (let i=0; i<songList.length; i+=1) {
          temp_ar.push(songList[i].track.album.images[1].url)
        }
        this.setState({songList: temp_ar });
        // const artist = json.artists.items[0];
        // this.setState({ artist });
      })
  }

  getUserAlbums(accessToken) {
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'albums?limit=' + this.numOfSquare;
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
        const albumList = json.items;
        // console.log(songList[0]);
        const temp_ar = [];
        for (let i=0; i<albumList.length; i+=1) {
          temp_ar.push(albumList[i].album.images[1].url)
        }
        this.setState({songList: temp_ar });
        // const artist = json.artists.items[0];
        // this.setState({ artist });
      })
  }

  getUserTopTracks(accessToken) {
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'top/tracks';
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
        for (let i=0; i<songList.length; i+=1) {
          temp_ar.push(songList[i].album.images[1].url)
        }
        this.setState({songList: temp_ar });
      })
  }

  getUserRecentlyPlayedTracks(accessToken) {
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'albums?limit=' + this.numOfSquare;
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
        const albumList = json.items;
        // console.log(songList[0]);
        const temp_ar = [];
        for (let i=0; i<albumList.length; i+=1) {
          temp_ar.push(albumList[i].album.images[1].url)
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
      'currentState': 'songs'
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
