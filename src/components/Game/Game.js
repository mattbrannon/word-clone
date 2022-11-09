import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const submitGuess = (guess) => {
    const list = [...guessList, guess];
    setGuessList(list);
  };

  return (
    <>
      <GuessInput submitGuess={submitGuess} />
      <GuessResults guessList={guessList} />
    </>
  );
}

export default Game;
