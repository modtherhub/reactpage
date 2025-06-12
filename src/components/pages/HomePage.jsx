// pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
