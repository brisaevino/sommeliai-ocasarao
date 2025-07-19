import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f3edea",
        borderTop: "1.5px solid #e0bfae",
        padding: "32px 12px 18px 12px",
        textAlign: "center",
        marginTop: 48,
        color: "#7a2e1e",
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        left: 0,
        bottom: 0,
        zIndex: 10,
        position: 'relative',
        boxSizing: 'border-box',
        minHeight: 120,
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
        SommeliAI + Casarão Lavras
      </div>
      <div style={{ fontSize: 15, color: "#6d4c41", marginBottom: 12 }}>
        Sua experiência com vinhos, mais inteligente e divertida.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <a
          href="https://instagram.com/_sommeliai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram SommeliAI + Casarão Lavras"
          style={{ display: 'inline-flex', alignItems: 'center', color: '#7a2e1e', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7a2e1e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.2" cy="6.8" r="1.2" fill="#7a2e1e" />
          </svg>
          Instagram
        </a>
      </div>
      <div style={{ fontSize: 13, color: "#b85c1e", marginTop: 18 }}>
        © {new Date().getFullYear()} SommeliAI + Casarão Lavras. Todos os direitos reservados.
      </div>
    </footer>
  );
}
