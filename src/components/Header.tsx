"use client";
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
      <div className="header-buttons">
        <button className="button modern-button" onClick={() => {
          window.location.href = '/';
        }}>
          <span className="button-text">Página Inicial</span>
        </button>
        <button className="button modern-button" onClick={() => {
          window.location.href = '/preferidos';
        }}>
          <span className="button-text">Nossos Preferidos</span>
        </button>
        <button className="button modern-button" onClick={() => {
          window.location.href = '/quiz';
        }}>
          <span className="button-text">QUIZ DE PERSONALIDADE</span>
        </button>
        <button className="button modern-button primary-button" onClick={() => {
          const chatSection = document.querySelector('.hero');
          if (chatSection) {
            chatSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <span className="button-text">Teste o chat!</span>
        </button>
      </div>
    </header>
  );
}
