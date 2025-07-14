import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log("=== API TEST INICIADA ===");
  
  try {
    // Teste simples sem OpenAI primeiro
    const body = await req.json();
    console.log("Body recebido:", body);

    // Resposta de teste sem chamar OpenAI
    const testResponse = {
      content: `Olá! Esta é uma resposta de teste do SommeliAI.

Vou te ajudar a escolher o vinho perfeito! Me conte mais sobre o que você procura.

1. Quero um vinho para um jantar especial
2. Estou procurando algo para o dia a dia
3. Quero comparar dois vinhos específicos`
    };

    console.log("Enviando resposta de teste");
    return Response.json(testResponse);

  } catch (error) {
    console.error("ERRO NA API TEST:", error);
    return Response.json({ 
      error: `Erro na API test: ${error instanceof Error ? error.message : "Erro desconhecido"}` 
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
