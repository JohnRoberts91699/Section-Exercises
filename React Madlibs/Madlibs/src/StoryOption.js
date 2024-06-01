import React from 'react';

function StoryOption({ options, onSelect }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option.id} onClick={() => onSelect(option)}>
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default StoryOption;
