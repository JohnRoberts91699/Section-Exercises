import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/snacks">Snacks</Link>
      <Link to="/drinks">Drinks</Link>
      <Link to="/new">Add New Item</Link>
    </nav>
  );
}

export default Navbar;
