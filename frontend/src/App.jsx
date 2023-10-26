// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import HomePage from './pages/HomePage';


function App() {
  const [isLoading] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route exact path="home" element={<HomePage isLoading={isLoading} />} />
        {/* Add another pages here */}
      </Routes>
    </Router>

  );
}

export default App;
