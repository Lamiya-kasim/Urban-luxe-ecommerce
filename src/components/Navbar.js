import React from 'react';
import { Link } from 'react-router-dom';
// You can use an icon library like react-icons for icons:
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const brandStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '2rem',
  fontWeight: 700,
  color: '#222',
  letterSpacing: '2px',
  textDecoration: 'none'
};

const navRightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem'
};

const iconBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.3rem',
  color: '#222',
  display: 'flex',
  alignItems: 'center'
};

const Navbar = () => (
  <nav style={navbarStyle}>
    {/* Brand/Logo */}
    <Link to="/" style={brandStyle}>
      Urban Luxe
    </Link>
    {/* Right Side Icons */}
    <div style={navRightStyle}>
      <button style={iconBtnStyle} title="Search">
        <FaSearch />
      </button>
      <Link to="/cart" style={iconBtnStyle} title="Cart">
        <FaShoppingCart />
      </Link>
      <Link to="/account" style={iconBtnStyle} title="Account">
        <FaUser />
      </Link>
    </div>
  </nav>
);

export default Navbar;
