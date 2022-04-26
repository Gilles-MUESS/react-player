import React from 'react';

function Song({ currentSong, isPlaying }) {
  return (
    <div className='song-container'>
      <img
        className={isPlaying ? 'is-active' : ''}
        src={currentSong.cover}
        alt='song cover'
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
