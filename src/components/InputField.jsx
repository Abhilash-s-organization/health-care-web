import React from "react";

export default function InputField({ label, type="text", value, onChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
