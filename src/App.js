import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import KidsPage from './pages/KidsPage'; // <-- ADD THIS LINE
import About from './pages/About';
import Contact from './pages/Contact';
import ShippingReturns from './pages/ShippingReturns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShoesPage from './pages/ShoesPage';

function CartPage() {
  return <h1 style={{ padding: "2rem", textAlign: "center" }}>Cart</h1>;
}

function AccountPage() {
  return <h1 style={{ padding: "2rem", textAlign: "center" }}>Account</h1>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} /> {/* <-- ADD THIS LINE */}
        <Route path="/footwear" element={<ShoesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        {/* Info pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
