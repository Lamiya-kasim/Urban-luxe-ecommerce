// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#f5f3ee",
      borderTop: "1px solid #e5e1da",
      padding: "2.5rem 0 1.5rem 0",
      marginTop: "3rem",
      color: "#444",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "2rem"
      }}>
        {/* Brand and short about */}
        <div style={{ flex: "1 1 220px", minWidth: "220px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Urban Luxe
          </div>
          <p style={{ fontSize: "1rem", color: "#777" }}>
            Elevate your wardrobe with curated luxury. Modern, minimalist, and exclusive fashion for all.
          </p>
        </div>
        {/* Navigation */}
        <div style={{ flex: "1 1 160px", minWidth: "160px" }}>
          <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>Shop</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="/women" style={{ color: "#444", textDecoration: "none" }}>Women</a></li>
            <li><a href="/men" style={{ color: "#444", textDecoration: "none" }}>Men</a></li>
            <li><a href="/cart" style={{ color: "#444", textDecoration: "none" }}>Cart</a></li>
            <li><a href="/account" style={{ color: "#444", textDecoration: "none" }}>Account</a></li>
          </ul>
        </div>
        {/* Info */}
        <div style={{ flex: "1 1 160px", minWidth: "160px" }}>
          <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>Info</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "#444", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#" style={{ color: "#444", textDecoration: "none" }}>Contact</a></li>
            <li><a href="#" style={{ color: "#444", textDecoration: "none" }}>Shipping & Returns</a></li>
            <li><a href="#" style={{ color: "#444", textDecoration: "none" }}>Privacy Policy</a></li>
          </ul>
        </div>
        {/* Newsletter & Social */}
        <div style={{ flex: "1 1 220px", minWidth: "220px" }}>
          <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>Stay in Touch</h4>
          <form style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "1rem"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#222",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "0.5rem 1.2rem",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Subscribe
            </button>
          </form>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#444" }} aria-label="Instagram">
              <i className="fab fa-instagram" />
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#444" }} aria-label="Facebook">
              <i className="fab fa-facebook" />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: "center",
        color: "#aaa",
        fontSize: "0.95rem",
        marginTop: "2rem"
      }}>
        &copy; {new Date().getFullYear()} Urban Luxe. All rights reserved.
      </div>
    </footer>
  );
}
