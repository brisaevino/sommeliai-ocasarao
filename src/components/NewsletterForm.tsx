"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  return (
    <div style={{ 
      marginTop: 32, 
      marginBottom: 32, 
      textAlign: "center", 
      maxWidth: 600, 
      marginLeft: "auto", 
      marginRight: "auto" 
    }}>
      {/* Container com fundo vinho */}
      <div style={{
        backgroundColor: '#5f1a25',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(95, 26, 37, 0.3)',
        border: '2px solid #d9a441',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoração de fundo */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #d9a441, #c9932a)',
          borderRadius: '50%',
          opacity: 0.1,
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #d9a441, #c9932a)',
          borderRadius: '50%',
          opacity: 0.1,
          zIndex: 1
        }}></div>
        
        {/* Conteúdo */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Chamada para Newsletter */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ 
              fontSize: 28, 
              fontWeight: "bold", 
              color: "#d9a441", 
              marginBottom: 12,
              textAlign: "center",
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px"
            }}>
              <img 
                src="/cheers.png" 
                alt="Cheers" 
                style={{ width: "28px", height: "28px" }}
              />
              Participe da Newsletter
            </h3>
            <p style={{ 
              fontSize: 16, 
              color: "#f7e7e8", 
              marginBottom: 16,
              lineHeight: 1.6,
              textAlign: "center",
              opacity: 0.9
            }}>
              Receba dicas exclusivas de harmonização, novidades sobre vinhos e ofertas especiais do mundo sommelier diretamente no seu e-mail!
            </p>
          </div>

      {/* Formulário */}
      <form
        onSubmit={async e => {
          e.preventDefault();
          setNewsletterMsg("");
          if (email && email.includes("@")) {
            const res = await fetch("/api/newsletter", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
              setNewsletterMsg("Pronto! Você receberá novidades do SommeliAI em breve.");
              setEmail("");
            } else {
              setNewsletterMsg(data.error || "Erro ao cadastrar e-mail.");
            }
          } else {
            setNewsletterMsg("Digite um e-mail válido.");
          }
        }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
      >
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu melhor e-mail"
          style={{
            padding: "1rem 1.5rem",
            borderRadius: 25,
            border: "2px solid #d9a441",
            width: "100%",
            maxWidth: 400,
            fontSize: 16,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#5f1a25",
            outline: "none",
            transition: "all 0.3s ease",
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onFocus={e => {
            e.target.style.borderColor = '#e6b661';
            e.target.style.boxShadow = '0 4px 16px rgba(217, 164, 65, 0.3)';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#d9a441';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          required
        />
        <button 
          type="submit" 
          style={{ 
            borderRadius: 25, 
            fontSize: 16, 
            fontWeight: "700",
            padding: "1rem 2.5rem", 
            width: "100%",
            maxWidth: 400,
            background: "linear-gradient(135deg, #d9a441 0%, #c9932a 100%)",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            transform: "translateY(0)",
            boxShadow: '0 6px 20px rgba(217, 164, 65, 0.4)',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.background = "linear-gradient(135deg, #e6b661 0%, #d9a441 100%)";
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(217, 164, 65, 0.5)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "linear-gradient(135deg, #d9a441 0%, #c9932a 100%)";
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 164, 65, 0.4)';
          }}
        >
          🍇 Quero receber as novidades!
        </button>
        {newsletterMsg && (
          <div style={{ 
            color: newsletterMsg.startsWith("Pronto") ? "#4ade80" : "#f87171", 
            fontSize: 14, 
            marginTop: 12, 
            textAlign: "center",
            padding: "12px 20px",
            borderRadius: 12,
            backgroundColor: newsletterMsg.startsWith("Pronto") ? "rgba(74, 222, 128, 0.15)" : "rgba(248, 113, 113, 0.15)",
            border: newsletterMsg.startsWith("Pronto") ? "1px solid rgba(74, 222, 128, 0.3)" : "1px solid rgba(248, 113, 113, 0.3)",
            fontWeight: "500"
          }}>
            {newsletterMsg}
          </div>
        )}
      </form>
        </div>
      </div>
    </div>
  );
}
