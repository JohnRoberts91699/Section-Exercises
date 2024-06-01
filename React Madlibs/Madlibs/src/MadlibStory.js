import React from 'react';

function MadlibStory({ data, onRestart }) {
  const { noun1, verb, adjective, noun2 } = data;
  const story = `Once upon a time, there was a ${adjective} ${noun1} who loved to ${verb} every day with a ${noun2}.`;

  return (
    <div>
      <p>{story}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
