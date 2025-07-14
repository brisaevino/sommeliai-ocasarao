// Test completo do fluxo da API
console.log("🧪 Iniciando teste completo da API...");

// Função para testar a API de saúde
async function testarHealth() {
  try {
    console.log("🏥 Testando endpoint de saúde...");
    const response = await fetch("/api/health");
    const data = await response.json();
    console.log("✅ Health check:", data);
    return data;
  } catch (error) {
    console.error("❌ Erro no health check:", error);
    return null;
  }
}

// Função para testar a API do ChatGPT
async function testarChatGPT() {
  try {
    console.log("💬 Testando API do ChatGPT...");
    
    const testData = {
      messages: [
        {
          role: "user",
          content: "Oi"
        }
      ]
    };

    console.log("📤 Enviando dados:", testData);

    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData)
    });

    console.log("📡 Status da resposta:", response.status, response.statusText);
    console.log("📡 Headers da resposta:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.error("❌ Resposta não OK");
      const errorText = await response.text();
      console.error("❌ Texto do erro:", errorText);
      
      try {
        const errorJson = JSON.parse(errorText);
        console.error("❌ JSON do erro:", errorJson);
      } catch (e) {
        console.error("❌ Erro não é JSON válido");
      }
      return null;
    }

    const data = await response.json();
    console.log("✅ Resposta da API:", data);
    return data;

  } catch (error) {
    console.error("❌ Erro no teste do ChatGPT:", error);
    return null;
  }
}

// Executar testes
async function executarTestes() {
  console.log("🚀 Iniciando testes...");
  
  // Teste 1: Health check
  const healthResult = await testarHealth();
  
  // Teste 2: ChatGPT API
  const chatResult = await testarChatGPT();
  
  console.log("📊 Resumo dos testes:");
  console.log("- Health:", healthResult ? "✅" : "❌");
  console.log("- ChatGPT:", chatResult ? "✅" : "❌");
  
  if (healthResult) {
    console.log("🔑 API Key configurada:", healthResult.env?.hasOpenAIKey ? "✅" : "❌");
  }
}

// Executar quando o DOM estiver pronto
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', executarTestes);
  } else {
    executarTestes();
  }
}
