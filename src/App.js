import React, { Component } from 'react';
import './App.css';

function createArtistsName(props){
  /*
    Helper Function for
    getUsersTopTracks
   */
  let artistsName = "";
  if(props.item.artists.length > 1) {
    props.item.artists.map((artist)=>{
      artistsName += (artist.name + ', ')
    });
    artistsName = artistsName.replace(/,\s*$/, "");
  } else {
    artistsName = props.item.artists[0].name
  }
  return artistsName
}

function createSongName(props){
  /*
    Helper Function for
    getUsersTopTracks
   */
  return props.item.name
}

function Square(props) {
  let artistsName = createArtistsName(props);
  let songName = createSongName(props);

  return (
    <div className="flex-square">
      <img src={props.item.album.images[1].url} alt=""/>
      <div className="overlay">
        <div className="text">{songName} - {artistsName}</div>
        {/*<div className="text">songName: </div>*/}
      </div>
    </div>
  );
}

class Wall extends Component {
  constructor(props) {
    super(props);
    // this.props = props
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
  //
  // getUserTopTracks(accessToken) {
  //   const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
  //   const FETCH_URL = BASE_URL + 'top/tracks?limit=' + this.numOfSquare + '&time_range=' + this.time_range;
  //   var myOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + accessToken
  //     },
  //     mode: 'cors',
  //     cache: 'default'
  //   };
  //
  //   fetch(FETCH_URL, myOptions)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       const songList = json.items;
  //       console.log(songList[0]);
  //       this.setState({currentItemList: songList});
  //     })
  // }

  // Filter functions
  /**
   * Filter Ideas
   * /v1/users/{user_id}/playlists/{playlist_id}
   * /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * @param accessToken
   */
  // getUserSongs(accessToken) {
  //   const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
  //   const FETCH_URL = BASE_URL + 'tracks?limit=' + this.numOfSquare;
  //   var myOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + accessToken
  //     },
  //     mode: 'cors',
  //     cache: 'default'
  //   };
  //
  //   fetch(FETCH_URL, myOptions)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       const songList = json.items;
  //       console.log(songList[0]);
  //       const temp_ar = [];
  //       for (let i=0; i<songList.length; i+=1) {
  //         temp_ar.push(songList[i].track.album.images[1].url)
  //       }
  //       this.setState({songList: temp_ar });
  //       // const artist = json.artists.items[0];
  //       // this.setState({ artist });
  //     })
  // }

  // getUserAlbums(accessToken) {
  //   const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
  //   const FETCH_URL = BASE_URL + 'albums?limit=' + this.numOfSquare;
  //   var myOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + accessToken
  //     },
  //     mode: 'cors',
  //     cache: 'default'
  //   };
  //
  //   fetch(FETCH_URL, myOptions)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       const albumList = json.items;
  //       // console.log(songList[0]);
  //       const temp_ar = [];
  //       for (let i=0; i<albumList.length; i+=1) {
  //         temp_ar.push(albumList[i].album.images[1].url)
  //       }
  //       this.setState({songList: temp_ar });
  //       // const artist = json.artists.items[0];
  //       // this.setState({ artist });
  //     })
  // }

  // getUserRecentlyPlayedTracks(accessToken) {
  //   const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
  //   const FETCH_URL = BASE_URL + 'albums?limit=' + this.numOfSquare;
  //   var myOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + accessToken
  //     },
  //     mode: 'cors',
  //     cache: 'default'
  //   };
  //
  //   fetch(FETCH_URL, myOptions)
  //     .then(response => {
  //       if(!response.ok) {
  //         throw Error("Network Request Failed")
  //       }
  //       return response
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       const albumList = json.items;
  //       // console.log(songList[0]);
  //       const temp_ar = [];
  //       for (let i=0; i<albumList.length; i+=1) {
  //         temp_ar.push(albumList[i].album.images[1].url)
  //       }
  //       this.setState({songList: temp_ar });
  //       // const artist = json.artists.items[0];
  //       // this.setState({ artist });
  //     })
  // }

  // render() {
  //   let itemNodes = this.state.currentItemList.map((item, i) => {
  //     return (
  //       <Square item={item} key={i}/>
  //     )
  //   });
  //   if(this.state.currentItemList.length === 0){return <p> {'loading...'} </p>}
  //   return (
  //     <div className="flex-container wrap">
  //     {itemNodes}
  //     </div>
  //   )
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
      currentItemList: [],
    };
    this.numOfSquare = 30; //numOfAlbums to retrieve. Max=50
    this.time_range = 'short_term'
  }

  componentDidMount(props) {
    // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    // console.log('this.state', this.state);
    var accessToken = 'BQAJktMR5guiXK0Da2GYZ5cEQvQhX3fVLiwQaymx90peOuT5dpqABNfIBs4ZpZw0ousMk26_ulkoQyr2Kr8j3BguL1Pvvofd3RbrWMP68C46eBRkfC-I_zOh5qPatVfog8Zd6b4Wqfba1hHWNxkF47HYa-4r4D9rsy8sbowpfdGA-cGrzLc&refresh_token=AQC3Cv2BAO1TqIyhSWQ6ojjqwH3hRxT-8URgsRzPXUf8E5pYqmFSBuH5EUFuPtb2M-KGenc-9pkcViKpGxKJDfiJ2S8mOUypVgCCS2tcCQtxvgEbQh7gYpJBER-ic4OJaxE';
    // this.getUserSongs(accessToken)
    // this.getUserAlbums(accessToken)
    this.getUserTopTracks(accessToken)
  }

  getUserTopTracks(accessToken) {
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'top/tracks?limit=' + this.numOfSquare + '&time_range=' + this.time_range;
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
      <Wall itemList={this.state.currentItemList}/>
    )
  }

}
export default App;
