import React, { useState } from 'react';

function NewItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('snack');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      description
    };
    addItem(newItem, type);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewItemForm;
