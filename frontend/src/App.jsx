import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListProductPage from './pages/ListProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* Add another pages here */}
        <Route path="/products" element={<ListProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>

  );
}

export default App;
