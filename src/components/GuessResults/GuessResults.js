import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, i) => (
        <p key={i} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
