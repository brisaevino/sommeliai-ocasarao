export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    return Response.json({
      hasApiKey: !!apiKey,
      keyPreview: apiKey ? apiKey.substring(0, 20) + "..." : "N/A",
      env: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return Response.json({ 
      error: "Erro ao verificar configuração",
      details: error instanceof Error ? error.message : "Erro desconhecido"
    }, { status: 500 });
  }
}
