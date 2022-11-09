import React from 'react';

function Cell({ results, index }) {
  const letter = results ? results[index].letter : null;
  const status = results ? results[index].status : null;

  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

export default Cell;
