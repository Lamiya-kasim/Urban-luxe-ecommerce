import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Import Footer
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import Home from './pages/Home';

function CartPage() {
  return <h1>Cart</h1>;
}

function AccountPage() {
  return <h1>Account</h1>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer /> {/* <-- Add Footer here */}
    </div>
  );
}

export default App;

