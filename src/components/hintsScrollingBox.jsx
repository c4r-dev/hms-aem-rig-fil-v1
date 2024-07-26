import React from 'react';

import Hints from "../hintsScaffold.json"

export default function HintsScrollingBox() {

  return (
    <div className='scrolling-box'>

      {Hints.map((hint) => (
        <div>
          <h2>{hint.number}. {hint.hint} <br></br></h2>
          <b><h3>Answer: {hint.explanation}</h3></b>
        </div>
      ))}


    </div>
  );
};