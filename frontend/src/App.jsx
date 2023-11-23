// import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListProductPage from "./pages/ListProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import UserCartPage from "./pages/UserCartPage";
import ShippingCost from "./pages/ShippingCost";
import Guarantee from "./pages/Guarantee";
import SearchPage from "./pages/SearchPage";
import MainLayout from "./components/MainLayout/MainLayout";
import MissingPage from "./pages/MissingPage";
import HistoryPage from "./pages/HistoryPage";
function App() {
  // const [isLoading] = useState(false);
  return (
    <Router>
      <Routes>

        <Route  element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products/:categoryid" element={<ListProductPage />} />

          <Route path="/products/:categoryid/:productid" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user-cart" element={<UserCartPage />} />
          <Route path="/shipping-cost" element={<ShippingCost />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/products/search" element={<SearchPage />} />
          <Route path="/order-history" element={<HistoryPage />} />
          <Route path="/404" element={<MissingPage />} />
        </Route>

        {/* Add another pages here */}
      </Routes >
    </Router >
  );
}

export default App;
