import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{
      padding: "2.5rem 1rem",
      maxWidth: "700px",
      margin: "0 auto",
      background: "#f7f5ee",
      borderRadius: "16px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>
        Privacy Policy
      </h2>
      <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Your privacy is important to us. Urban Luxe is committed to protecting your personal information and using it responsibly.
      </p>
      <ul style={{ color: "#555", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
        <li>We collect only the information necessary to process your orders and improve your shopping experience.</li>
        <li>Your data is never sold or shared with third parties except as required to fulfill your order (e.g., shipping providers).</li>
        <li>All transactions are processed securely using industry-standard encryption.</li>
        <li>You may request to view, update, or delete your personal data at any time by contacting us.</li>
      </ul>
      <p style={{ color: "#555", fontSize: "1.05rem" }}>
        For questions or concerns about your privacy, please email us at <a href="mailto:privacy@urbanluxe.com" style={{ color: "#444" }}>privacy@urbanluxe.com</a>.
      </p>
      <div style={{ marginTop: "2rem", color: "#777", fontSize: "0.97rem" }}>
        Last updated: May 2025
      </div>
    </div>
  );
}
