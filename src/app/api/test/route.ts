export async function GET() {
  return Response.json({ 
    message: "API funcionando!",
    timestamp: new Date().toISOString(),
    env: {
      hasOpenAI: !!process.env.OPENAI_API_KEY,
      keyLength: process.env.OPENAI_API_KEY?.length || 0
    }
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Test API received:", body);
    
    return Response.json({ 
      received: body,
      message: "Dados recebidos com sucesso!",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Test API error:", error);
    return Response.json({ 
      error: "Erro no processamento",
      details: error instanceof Error ? error.message : "Erro desconhecido"
    }, { status: 500 });
  }
}
