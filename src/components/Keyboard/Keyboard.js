import React from 'react';
import { setKeyStatus } from '../../game-helpers';
import { KEYBOARD } from '../../constants';

function Keyboard({ guessList, answer, keysPressed }) {
  const status = setKeyStatus(guessList, answer);
  return (
    <section className="keyboard">
      {Object.entries(KEYBOARD).map(([row, letters], i) => (
        <Row
          key={row}
          row={row}
          letters={letters}
          status={status}
          keysPressed={keysPressed}
        />
      ))}
    </section>
  );
}

const Row = ({ row, letters, status, keysPressed }) => {
  return (
    <div className={`row ${row}`}>
      {Array.from(letters).map((letter) => (
        <Key
          key={letter}
          letter={letter}
          status={status}
          keysPressed={keysPressed}
        />
      ))}
    </div>
  );
};

const Key = ({ letter, status, keysPressed }) => {
  const key = letter.toUpperCase();

  const className = status[key]
    ? `key ${status[key]}`
    : keysPressed[key]
    ? 'key pressed'
    : 'key';

  return (
    <span key={letter} className={className}>
      {letter.toUpperCase()}
    </span>
  );
};

export default Keyboard;
