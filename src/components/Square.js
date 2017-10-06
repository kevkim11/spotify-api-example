import React, { Component } from 'react'

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


export default Square;