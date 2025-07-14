// Test API functionality
const testAPI = async () => {
  try {
    console.log("🧪 Testando API ChatGPT...");
    
    const testMessages = [
      {
        role: "user",
        content: "teste simples"
      }
    ];

    const response = await fetch("http://localhost:3000/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: testMessages,
      }),
    });

    console.log("📡 Status:", response.status);
    console.log("📡 Headers:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.error("❌ Response não OK:", response.status, response.statusText);
      
      let errorText;
      try {
        errorText = await response.text();
        console.error("❌ Response body:", errorText);
        
        try {
          const errorJson = JSON.parse(errorText);
          console.error("❌ Error JSON:", errorJson);
        } catch (e) {
          console.error("❌ Não é JSON válido");
        }
      } catch (e) {
        console.error("❌ Erro ao ler response:", e);
      }
      return;
    }

    const data = await response.json();
    console.log("✅ Sucesso:", data);

  } catch (error) {
    console.error("❌ Erro no teste:", error);
  }
};

// Executar teste
testAPI();
