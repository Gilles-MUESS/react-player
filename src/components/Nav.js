import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Nav({ libraryStatus, setLibraryStatus, isDarkMode, setIsDarkMode }) {
  // Handler

  return (
    <nav>
      <h1>
        Good Vibes
        <br />
        Music Player
      </h1>
      <div className='nav-buttons'>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library <FontAwesomeIcon icon={faMusic} />
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className='dark-mode'
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
