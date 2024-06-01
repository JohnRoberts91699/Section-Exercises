import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import StoryOption from './StoryOption';

const stories = [
  { id: 1, name: 'Story 1' },
  { id: 2, name: 'Story 2' },
  // Add more story templates here if needed
];

function Madlib() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleRestart = () => {
    setFormData(null);
    setSelectedStory(null);
  };

  return (
    <div>
      {!selectedStory ? (
        <StoryOption options={stories} onSelect={handleStorySelect} />
      ) : !formData ? (
        <MadlibForm onSubmit={handleFormSubmit} />
      ) : (
        <MadlibStory data={formData} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default Madlib;
