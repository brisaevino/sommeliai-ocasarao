"use client";
import { useState } from 'react';

export default function TestAPI() {
  const [resultado, setResultado] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testarAPI = async () => {
    setLoading(true);
    setResultado("Testando...");
    
    try {
      console.log("🧪 Iniciando teste da API...");
      
      // Teste 1: API básica
      const testResponse = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teste: "conectividade" })
      });
      
      if (!testResponse.ok) {
        throw new Error(`Teste básico falhou: ${testResponse.status}`);
      }
      
      const testData = await testResponse.json();
      console.log("✅ Teste básico:", testData);
      
      // Teste 2: Health check
      const healthResponse = await fetch("/api/health");
      const healthData = await healthResponse.json();
      console.log("✅ Health check:", healthData);
      
      // Teste 3: ChatGPT API
      const chatResponse = await fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "teste" }]
        })
      });
      
      console.log("📡 ChatGPT Status:", chatResponse.status);
      
      if (!chatResponse.ok) {
        const errorText = await chatResponse.text();
        console.error("❌ ChatGPT erro:", errorText);
        throw new Error(`ChatGPT API falhou: ${chatResponse.status}`);
      }
      
      const chatData = await chatResponse.json();
      console.log("✅ ChatGPT resposta:", chatData);
      
      setResultado(`✅ Todos os testes passaram!
      
🧪 Teste básico: OK
🏥 Health check: ${healthData.status}
🔑 API Key: ${healthData.env?.hasOpenAIKey ? "✅" : "❌"}
💬 ChatGPT: ${chatData.content ? "✅" : "❌"}
      
Resposta do bot: "${chatData.content?.substring(0, 100)}..."`);
      
    } catch (error) {
      console.error("❌ Erro no teste:", error);
      setResultado(`❌ Erro: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 9999,
      background: 'white',
      padding: '20px',
      border: '2px solid #d9a441',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      maxWidth: '400px'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#7a2e1e' }}>🧪 Teste da API</h3>
      
      <button 
        onClick={testarAPI}
        disabled={loading}
        style={{
          background: '#d9a441',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
          marginBottom: '15px'
        }}
      >
        {loading ? "Testando..." : "🚀 Testar API"}
      </button>
      
      {resultado && (
        <div style={{
          background: '#f8f8f8',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-line',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          {resultado}
        </div>
      )}
    </div>
  );
}
