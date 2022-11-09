import React from 'react';
import { range } from '../../utils';
import Cell from '../Cell';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((index) => {
        return <Cell key={index} index={index} results={results} />;
      })}
    </p>
  );
}

export default Guess;
