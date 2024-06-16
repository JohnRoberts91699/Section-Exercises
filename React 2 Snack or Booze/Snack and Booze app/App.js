import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ItemMenu from './ItemMenu';
import Item from './Item';
import NewItemForm from './NewItemForm';
import NotFound from './NotFound';

const snacks = [
  { id: 1, name: "Chips", description: "Crispy and salty." },
  { id: 2, name: "Cookies", description: "Sweet and chewy." }
];

const drinks = [
  { id: 1, name: "Soda", description: "Fizzy and refreshing." },
  { id: 2, name: "Beer", description: "Bitter and cold." }
];

function App() {
  const [allSnacks, setSnacks] = useState(snacks);
  const [allDrinks, setDrinks] = useState(drinks);

  const addItem = (newItem, type) => {
    if (type === 'snack') {
      setSnacks([...allSnacks, newItem]);
    } else if (type === 'drink') {
      setDrinks([...allDrinks, newItem]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HomePage snacks={allSnacks} drinks={allDrinks} />} />
        <Route exact path="/snacks" render={() => <ItemMenu items={allSnacks} type="snack" />} />
        <Route exact path="/drinks" render={() => <ItemMenu items={allDrinks} type="drink" />} />
        <Route path="/snacks/:id" render={(props) => <Item items={allSnacks} {...props} />} />
        <Route path="/drinks/:id" render={(props) => <Item items={allDrinks} {...props} />} />
        <Route path="/new" render={() => <NewItemForm addItem={addItem} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
