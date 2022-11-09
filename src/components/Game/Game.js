import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { WonBanner, LostBanner } from '../Banner';
import Keyboard from '../Keyboard';
import { createKeyMap } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
const keyMap = createKeyMap();

console.info({ answer });

export default function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [keysPressed, setKeysPressed] = React.useState(keyMap);

  const makeKeyPressHandler = (isPressed) => (key) => {
    const nextKeys = { ...keysPressed };
    nextKeys[key.toUpperCase()] = isPressed;
    setKeysPressed(nextKeys);
  };

  const handleKeyDown = makeKeyPressHandler(true);
  const handleKeyUp = makeKeyPressHandler(false);

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
      <GuessInput
        gameStatus={gameStatus}
        submitGuess={submitGuess}
        handleKeyDown={handleKeyDown}
        handleKeyUp={handleKeyUp}
      />
      <Keyboard
        keysPressed={keysPressed}
        guessList={guessList}
        answer={answer}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}
