import React from 'react';
import { Link } from 'react-router-dom';

function ItemMenu({ items, type }) {
  return (
    <div>
      <h1>{type === 'snack' ? 'Snacks' : 'Drinks'}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/${type}s/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemMenu;
