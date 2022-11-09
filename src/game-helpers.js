import { KEYBOARD } from './constants';

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    }
    else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    }
    else {
      status = 'incorrect';
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

export const createKeyMap = () => {
  const keyMap = [...Object.values(KEYBOARD).join('').toUpperCase()].reduce(
    (acc, value) => {
      acc[value] = null;
      return acc;
    },
    {}
  );
  return keyMap;
};

const flattenResults = (guesses, answer) => {
  return guesses.map((guess) => checkGuess(guess, answer)).flat();
};

export const setKeyStatus = (guesses, answer) => {
  const keyMap = createKeyMap();
  const results = flattenResults(guesses, answer);

  return results.reduce((acc, { status, letter }) => {
    acc[letter] =
      acc[letter] === 'correct' || acc[letter] === 'incorrect'
        ? acc[letter]
        : status;
    return acc;
  }, keyMap);
};
