import React from 'react';
// Components
import LibrarySong from './LibrarySong';

function Library({ songs, setCurrentSong }) {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
