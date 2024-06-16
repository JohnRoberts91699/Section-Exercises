import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Item({ items }) {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) return <Redirect to="/" />;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Item;
