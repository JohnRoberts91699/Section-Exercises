import React from 'react';

function HomePage({ snacks, drinks }) {
  return (
    <div>
      <h1>Welcome to Snack or Booze!</h1>
      <p>We have {snacks.length} snacks and {drinks.length} drinks available.</p>
    </div>
  );
}

export default HomePage;
