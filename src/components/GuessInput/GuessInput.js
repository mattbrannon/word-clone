import React from 'react';

function GuessInput({ submitGuess, gameStatus }) {
  const [value, setValue] = React.useState('');

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    if (value.length < 5) {
      return window.alert('Please enter a 5 character word');
    }
    submitGuess(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        required
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
