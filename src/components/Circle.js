import React, { Component } from 'react'

function createArtistsName(props){
  return props.item.name
}

function createImgUrl(props) {
  return props.item.images[1].url
}


function Circle(props) {
  /* Circle will only show artists*/
  let artistsName = createArtistsName(props);
  let imgUrl = createImgUrl(props);

  return (
    <div className="flex-square">
      <img src={imgUrl} alt=""/>
      <div className="overlay">
        <div className="text">{artistsName}</div>
        {/*<div className="text">songName: </div>*/}
      </div>
    </div>
  );
}


export default Circle;