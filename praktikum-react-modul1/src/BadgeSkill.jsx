// src/BadgeSkill.jsx
import React from "react";

function BadgeSkill({ namaSkill, level }) {
  // Pemetaan warna dinamis berdasarkan prop level
  const skemaWarna = {
    Pemula: {
      bg: "#E2E3E5",
      text: "#383D41",
      border: "#D6D8DB",
    },
    Menengah: {
      bg: "#CCE5FF",
      text: "#004085",
      border: "#B8DAFF",
    },
    Mahir: {
      bg: "#D4EDDA",
      text: "#155724",
      border: "#C3E6CB",
    },
  };

  // Gunakan skema Pemula jika level yang dioper tidak sesuai daftar
  const tema = skemaWarna[level] || skemaWarna.Pemula;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        margin: "4px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: tema.bg,
        color: tema.text,
        border: `1px solid ${tema.border}`,
      }}
    >
      {namaSkill} • {level}
    </span>
  );
}

export default BadgeSkill;
