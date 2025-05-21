import React from "react";

export default function About() {
  return (
    <div style={{
      padding: "2.5rem 1rem",
      maxWidth: "700px",
      margin: "0 auto",
      background: "#f7f5ee",
      borderRadius: "16px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2.2rem", marginBottom: "1rem" }}>
        About Urban Luxe
      </h2>
      <p style={{ color: "#555", fontSize: "1.15rem", lineHeight: 1.7 }}>
        <b>Urban Luxe</b> was born from a passion for timeless fashion and modern elegance. Our mission is to curate collections that blend luxury, comfort, and minimalism for everyone. 
        <br /><br />
        We believe that style should be effortless and accessible. Each piece in our store is handpicked for its quality, aesthetic, and ability to inspire confidence. Whether you're dressing for a special occasion or elevating your everyday look, Urban Luxe is your destination for distinctive, exclusive fashion.
        <br /><br />
        Thank you for making us part of your style journey. We’re here to help you express your individuality with sophistication and ease.
      </p>
      <div style={{ marginTop: "2.5rem", color: "#777", fontSize: "1rem" }}>
        <b>Contact us:</b> <a href="mailto:info@urbanluxe.com" style={{ color: "#444" }}>info@urbanluxe.com</a>
      </div>
    </div>
  );
}
