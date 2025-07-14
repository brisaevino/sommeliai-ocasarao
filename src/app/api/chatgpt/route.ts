export async function POST(req: Request) {
  console.log("🔥 ChatGPT API iniciada");
  
  try {
    // Verificar se é uma requisição válida
    if (!req) {
      console.error("✗ Request inválido");
      return Response.json({ error: "Request inválido" }, { status: 400 });
    }

    let body;
    try {
      body = await req.json();
      console.log("✓ Body recebido:", body);
    } catch (parseError) {
      console.error("✗ Erro ao parsear JSON do body:", parseError);
      return Response.json({ error: "JSON inválido no body da requisição" }, { status: 400 });
    }
    
    const { messages } = body;
    
    if (!messages) {
      console.error("✗ Messages não fornecidas");
      return Response.json({ error: "Campo 'messages' é obrigatório" }, { status: 400 });
    }
    
    if (!Array.isArray(messages)) {
      console.error("✗ Messages inválidas - não é array");
      return Response.json({ error: "Campo 'messages' deve ser um array" }, { status: 400 });
    }

    if (messages.length === 0) {
      console.error("✗ Messages vazio");
      return Response.json({ error: "Array 'messages' não pode estar vazio" }, { status: 400 });
    }

    // Verificar API Key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("✗ API Key não encontrada");
      return Response.json({ error: "Configuração da API inválida - chave não encontrada" }, { status: 500 });
    }

    if (!apiKey.startsWith('sk-')) {
      console.error("✗ API Key formato inválido");
      return Response.json({ error: "Configuração da API inválida - formato incorreto" }, { status: 500 });
    }

    console.log("✓ API Key encontrada:", apiKey.substring(0, 20) + "...");

    // Prompt do sistema aprimorado
    const systemPrompt = `Você é o SommeliAI, sommelier digital especializado em vinhos. Fale com simpatia, bom humor e sem esnobismo. Use linguagem leve e divertida. Sua missão é ajudar qualquer pessoa - mesmo quem não entende nada de vinhos - a fazer uma boa escolha.

REGRA CRÍTICA OBRIGATÓRIA: TODA resposta DEVE terminar com exatamente 3 opções numeradas (1, 2, 3). NUNCA envie uma resposta sem essas 3 opções numeradas. Esta regra é ABSOLUTA e não admite exceções.

REGRA ESPECIAL OBRIGATÓRIA PARA TABELAS: Quando o cliente pedir uma COMPARAÇÃO ENTRE DOIS VINHOS, você DEVE responder usando OBRIGATORIAMENTE o formato de tabela Markdown.

Fluxo de atendimento:
1. Dê as boas-vindas e ofereça estas três opções numeradas ao cliente:
   "Olá! Sou o SommeliAI — posso te ajudar a escolher o vinho ideal. Me conta o que você procura!
   
   1. Tô em dúvida entre dois vinhos
   2. Quero uma sugestão pra uma ocasião especial
   3. Quero um vinho que combine com o prato que eu escolhi"

Lembre-se: você é leve, acessível e divertido. Nada de termos complicados ou linguagem esnobe.`;

    const systemMessage = {
      role: "system",
      content: systemPrompt,
    };

    const fullMessages = [systemMessage, ...messages];
    console.log("✓ Mensagens preparadas");

    // Fazer requisição para OpenAI
    console.log("🚀 Chamando OpenAI...");
    
    let response;
    try {
      response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.7,
          max_tokens: 800,
          messages: fullMessages,
        }),
      });
    } catch (fetchError) {
      console.error("✗ Erro na requisição para OpenAI:", fetchError);
      return Response.json({ 
        error: "Erro de rede ao conectar com OpenAI" 
      }, { status: 503 });
    }

    console.log("✓ Resposta OpenAI:", response.status, response.statusText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (parseError) {
        console.error("✗ Erro ao parsear resposta de erro da OpenAI:", parseError);
        errorData = { 
          error: { 
            message: `HTTP ${response.status}: ${response.statusText}` 
          } 
        };
      }
      
      console.error("✗ Erro OpenAI:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      let errorMessage = "Erro na API da OpenAI";
      if (response.status === 401) {
        errorMessage = "API Key inválida ou expirada";
      } else if (response.status === 429) {
        errorMessage = "Limite de uso da API excedido";
      } else if (response.status === 503) {
        errorMessage = "Serviço da OpenAI temporariamente indisponível";
      } else if (response.status === 400) {
        errorMessage = "Requisição inválida para a OpenAI";
      }
      
      return Response.json({ 
        error: `${errorMessage}: ${errorData?.error?.message || errorData?.message || response.status}` 
      }, { status: response.status });
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error("✗ Erro ao parsear resposta da OpenAI:", parseError);
      return Response.json({ error: "Resposta inválida da OpenAI" }, { status: 500 });
    }
    
    const resposta = data?.choices?.[0]?.message?.content?.trim();
    
    if (!resposta) {
      console.error("✗ Resposta vazia da OpenAI:", data);
      return Response.json({ error: "Resposta vazia da API da OpenAI" }, { status: 500 });
    }

    console.log("✅ Sucesso! Resposta:", resposta.length, "caracteres");
    console.log("📤 Enviando resposta para frontend:", { content: resposta });
    
    return Response.json({ content: resposta });

  } catch (error) {
    console.error("✗ ERRO GERAL:", error);
    return Response.json({ 
      error: `Erro inesperado: ${error instanceof Error ? error.message : "Erro desconhecido"}` 
    }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
