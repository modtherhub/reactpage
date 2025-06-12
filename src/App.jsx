// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '/home/modther/Project/reactpage/src/components/pages/HomePage.jsx';
import AboutPage from '/home/modther/Project/reactpage/src/components/pages/AboutPage.jsx';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
