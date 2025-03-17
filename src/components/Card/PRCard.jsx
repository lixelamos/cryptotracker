import React from "react";

const PRCard = ({ title, price, features, buttonText }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        textAlign: "left",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827" }}>
        {title}
      </h2>
      <p style={{ fontSize: "1.25rem", fontWeight: "600", color: "#4f46e5", margin: "10px 0" }}>
        {price}
      </p>
      <ul style={{ listStyle: "none", padding: "0", margin: "20px 0" }}>
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
              fontSize: "0.875rem",
              color: "#374151",
            }}
          >
            <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "white",
          fontSize: "0.875rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#4338ca")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4f46e5")}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PRCard;