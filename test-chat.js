// Test script para verificar a integração do chat
console.log("🧪 Iniciando teste do chat...");

// Simular teste do handleSubmit
const testHandleSubmit = async () => {
  try {
    console.log("✅ Função handleSubmit pode ser executada");
    
    const testMessages = [
      {
        role: "user",
        content: "teste"
      }
    ];

    console.log("🚀 Testando fetch para API...");
    
    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: testMessages,
      }),
    });

    console.log("📡 Resposta:", response.status, response.statusText);
    
    if (response.ok) {
      const data = await response.json();
      console.log("✅ API funcionando:", data);
    } else {
      console.error("❌ API com erro:", response.status);
    }
    
  } catch (error) {
    console.error("❌ Erro no teste:", error);
  }
};

// Executar teste quando o DOM estiver pronto
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM carregado, executando teste...");
    testHandleSubmit();
  });
} else {
  console.log("Executando teste no servidor...");
  testHandleSubmit();
}
