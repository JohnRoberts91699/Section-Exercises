import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Vending Machine</NavLink>
      <NavLink to="/snack1" activeClassName="active">Snack 1</NavLink>
      <NavLink to="/snack2" activeClassName="active">Snack 2</NavLink>
      <NavLink to="/snack3" activeClassName="active">Snack 3</NavLink>
    </nav>
  );
}

export default Navbar;
