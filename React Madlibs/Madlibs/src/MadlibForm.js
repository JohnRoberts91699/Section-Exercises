import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    noun1: '',
    verb: '',
    adjective: '',
    noun2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValues).some(value => value.trim() === '')) {
      alert('Please fill out all fields');
    } else {
      onSubmit(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun 1:
        <input
          type="text"
          name="noun1"
          value={formValues.noun1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={formValues.verb}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={formValues.adjective}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Noun 2:
        <input
          type="text"
          name="noun2"
          value={formValues.noun2}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
