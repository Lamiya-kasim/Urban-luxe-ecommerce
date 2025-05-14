import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      {/* Hero Section: Full-width, full-length editorial image */}
      <section
        style={{
          background: "#fff",
          borderRadius: "20px",
          margin: "2rem 0",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0
        }}
      >
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
          alt="Full length luxury fashion model"
          style={{
            width: "100%",
            maxHeight: "540px",
            objectFit: "cover",
            display: "block"
          }}
        />
        <div style={{ padding: "2.5rem 2rem 3rem 2rem", textAlign: "center" }}>
          <h1 style={{
            fontSize: "2.7rem",
            marginBottom: "1rem",
            fontWeight: 700,
            letterSpacing: "1px",
            fontFamily: "'Playfair Display', serif"
          }}>
            Discover Your Style
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "0", color: "#444" }}>
            Elevate your wardrobe with our curated collection of luxury dresses and apparel. Minimalist, modern, and unmistakably exclusive.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {/* Shop Women Card */}
        <Link
          to="/women"
          style={{
            background: "#fff",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            textAlign: "center",
            padding: "2rem",
            transition: "transform 0.2s",
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Shop Women"
            style={{
              width: "100%",
              maxWidth: "320px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "1rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              border: "1px solid #eee"
            }}
          />
          <h2 style={{ marginTop: "0.5rem", fontWeight: 600, fontSize: "1.4rem", fontFamily: "'Playfair Display', serif" }}>
            Shop Women
          </h2>
          <p style={{ color: "#666", marginTop: "0.5rem" }}>Explore the latest luxury dresses and collections</p>
        </Link>
        {/* Shop Men Card */}
        <Link
          to="/men"
          style={{
            background: "#fff",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            textAlign: "center",
            padding: "2rem",
            transition: "transform 0.2s",
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
            alt="Shop Men"
            style={{
              width: "100%",
              maxWidth: "320px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "1rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              border: "1px solid #eee"
            }}
          />
          <h2 style={{ marginTop: "0.5rem", fontWeight: 600, fontSize: "1.4rem", fontFamily: "'Playfair Display', serif" }}>
            Shop Men
          </h2>
          <p style={{ color: "#666", marginTop: "0.5rem" }}>Discover refined menswear and timeless essentials</p>
        </Link>
      </section>
    </div>
  );
}

