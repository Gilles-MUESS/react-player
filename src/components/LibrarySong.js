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
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // switch active state for current & prev song
    const newSongs = songs.map((state) => {
      if (state.id === song.id) {
        return { ...state, active: true };
      } else {
        return { ...state, active: false };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
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
