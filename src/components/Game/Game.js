import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { WonBanner, LostBanner } from '../Banner';
// import * as Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

export default function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const submitGuess = (guess) => {
    const list = [...guessList, guess];

    if (gameStatus !== 'running') {
      return;
    }
    else if (answer === guess) {
      setGameStatus('won');
    }
    else if (list.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    setGuessList(list);
  };

  return (
    <>
      <GuessResults answer={answer} guessList={guessList} />
      <GuessInput gameStatus={gameStatus} submitGuess={submitGuess} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}
