import React from "react";

export default function Contact() {
  return (
    <div style={{
      padding: "2.5rem 1rem",
      maxWidth: "600px",
      margin: "0 auto",
      background:"#f7f5ee",
      borderRadius: "16px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>
        Contact Us
      </h2>
      <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "2rem" }}>
        Have a question, feedback, or need help with an order? We’re here for you! Reach out to us and our team will respond within 24 hours.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "1rem"
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "1rem"
          }}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "6px",
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
            borderRadius: "6px",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            marginTop: "0.5rem"
          }}
        >
          Send Message
        </button>
      </form>
      <div style={{ marginTop: "2rem", color: "#777" }}>
        Or email us directly at <a href="mailto:info@urbanluxe.com" style={{ color: "#444" }}>info@urbanluxe.com</a>
      </div>
    </div>
  );
}
