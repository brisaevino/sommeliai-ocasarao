"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header" style={{ marginBottom: 0, borderRadius: "0 0 0 0", position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, marginBottom: 6 }}>
        {/* Avatar removido */}
        <h1 style={{
          margin: 0,
          fontSize: 48, // Aumentado de 36 para 48 para ficar mais proporcional
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: 0.5
        }}>
          SommeliAI
        </h1>
      </div>
      <p>Seu sommelier de bolso inteligente</p>
      <div className="header-buttons" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center',
        width: '100%'
      }}>
        <button className="button modern-button" onClick={() => {
          window.location.href = '/';
        }} style={{ width: '100%', maxWidth: '280px' }}>
          <span className="button-text">Página Inicial</span>
        </button>
        <button className="button modern-button" onClick={() => {
          window.location.href = '/preferidos';
        }} style={{ width: '100%', maxWidth: '280px' }}>
          <span className="button-text">Nossos Preferidos</span>
        </button>
        <button className="button modern-button" onClick={() => {
          window.location.href = '/quiz';
        }} style={{ width: '100%', maxWidth: '280px' }}>
          <span className="button-text">QUIZ DE PERSONALIDADE</span>
        </button>
        {/* Botão "Teste o chat" com estilo amarelo/dourado especial */}
        <Link 
          href="/?chat=true" 
          className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #d9a441 0%, #c9932a 100%)',
            color: 'white',
            boxShadow: '0 2px 8px rgba(217, 164, 65, 0.3)',
            textDecoration: 'none',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '280px'
          }}
        >
          Teste o chat
        </Link>
      </div>
    </header>
  );
}
