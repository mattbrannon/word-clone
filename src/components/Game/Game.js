import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  return (
    <>
      <GuessInput />
    </>
  );
}

export default Game;
