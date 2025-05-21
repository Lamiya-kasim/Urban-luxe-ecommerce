import React from "react";

export default function ShippingReturns() {
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
        Shipping & Returns
      </h2>
      <h4 style={{ marginTop: "1.5rem", color: "#444" }}>Shipping</h4>
      <ul style={{ color: "#555", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
        <li>We offer free standard shipping on all orders over $100.</li>
        <li>Orders are processed within 1-2 business days.</li>
        <li>Delivery times vary by location (typically 3-7 business days).</li>
        <li>Express shipping is available at checkout for an additional fee.</li>
      </ul>
      <h4 style={{ marginTop: "1.5rem", color: "#444" }}>Returns</h4>
      <ul style={{ color: "#555", fontSize: "1.05rem" }}>
        <li>Easy returns within 14 days of delivery.</li>
        <li>Items must be unused, unworn, and in original packaging.</li>
        <li>To initiate a return, contact us at <a href="mailto:returns@urbanluxe.com" style={{ color: "#444" }}>returns@urbanluxe.com</a>.</li>
        <li>Refunds are processed within 5 business days after we receive your return.</li>
      </ul>
      <div style={{ marginTop: "2rem", color: "#777" }}>
        For more details, please <a href="/contact" style={{ color: "#444" }}>contact us</a>.
      </div>
    </div>
  );
}
