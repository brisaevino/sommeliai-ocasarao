export default function AnuncieBar() {
  return (
    <div
      style={{
        background: '#f5e5db',
        color: '#7a2e1e',
        border: '1.5px solid #e0bfae',
        borderRadius: 14,
        padding: '0.7rem 1.3rem',
        margin: '0 auto', // Removido margin-top: 20px
        fontWeight: 500,
        fontSize: 17,
        boxShadow: '0 2px 8px rgba(224,191,174,0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100vw',
        letterSpacing: 0.1,
        boxSizing: 'border-box',
      }}
    >
      <span>
        Você pode <span style={{ color: '#b85c1e', fontWeight: 700 }}>anunciar aqui!</span>
      </span>
    </div>
  );
}
