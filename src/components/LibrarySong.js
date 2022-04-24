import React from 'react';

function LibrarySong({
  audioRef,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) {
  // Handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    // switch active state for current & prev song
    const newSongs = songs.map((state) => {
      if (state.id === song.id) {
        return { ...state, active: true };
      } else {
        return { ...state, active: false };
      }
    });
    setSongs(newSongs);
    // check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => audioRef.current.play());
      }
    }
  };

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt='song cover'></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
