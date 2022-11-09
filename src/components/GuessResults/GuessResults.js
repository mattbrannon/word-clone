import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} answer={answer} guess={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
