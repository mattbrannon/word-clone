import React from 'react';
import { range } from '../../utils';
import Cell from '../Cell';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        const letter = guess ? guess[index] : null;
        return <Cell key={index} letter={letter} />;
      })}
    </p>
  );
}

export default Guess;
