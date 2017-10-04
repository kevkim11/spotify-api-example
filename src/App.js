import React, { Component } from 'react';
import './App.css';


function Square(props) {
  return (
    <div className="flex-square">
      <img src={props.item.album.images[1].url} alt=""/>
      <div className="overlay">
        <div className="text">hello love</div>
      </div>
      {/*<img src={'https://i.scdn.co/image/9954c96d21486da541793eca1d7a338b45509f8c'} alt="boohoo"></img>*/}
    </div>
  );
}

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemList: [],
    };
    this.numOfSquare = 30; //numOfAlbums to retrieve. Max=50
  }

  componentDidMount(props) {
    // Why fetch in componentDidMount --> https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    console.log('this.state', this.state);
    var accessToken = 'BQCRpx80UDEkqTdql2ibRg_2CG8t9Rc_wB_AMs-LKEV3vicFNnxKwBSzl60tvxSI1jtyDVgBiKNfOMAc4whljTFVttlcg8FMkK8ORggEJLdLRFPLi7VZiLJJcwUdT6b5TsEpBrB9RuPeBfnFPLKnFlgaThQHrU6Zt-Mc_g3F_9VBv3mWpgQ';
    // this.getUserSongs(accessToken)
    // this.getUserAlbums(accessToken)
    this.getUserTopTracks(accessToken)
  }

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

  getUserTopTracks(accessToken) {
    const BASE_URL = 'https://api.spotify.com/v1/me/'; //https://api.spotify.com/v1/albums/
    const FETCH_URL = BASE_URL + 'top/tracks?limit=' + this.numOfSquare;
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
        // this.setState({songList: temp_ar, artistList: temp_ar2 });
      })
  }

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

  render() {
    var itemNodes = this.state.currentItemList.map((item, i) => {
      return (
        <Square item={item} key={i}/>
      )
    });

    console.log("!!!!this.state.currentItemList: " );
    console.log(this.state.currentItemList);
    if(this.state.currentItemList.length === 0){return <p> {'loading...'} </p>}
    return (
      <div className="flex-container wrap">
      {itemNodes}
      </div>
    )
  }
}
{/*{this.state.currentItemList.map((currentItem, i) => <Square imageUrl={currentItem} key={i}/>)}*/}
class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     'currentState': 'songs'
  //   }
  // }

  render() {

    return (
      // return JSX
      <Wall />
    )
  }

}
export default App;
