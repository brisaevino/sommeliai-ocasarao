export async function GET() {
  return new Response("Hello World GET", { status: 200 });
}

export async function POST(req: Request) {
  console.log("🔥 POST recebido na API hello");
  
  try {
    const body = await req.json();
    console.log("🔥 Body:", body);
    
    return Response.json({ 
      message: "POST funcionou!", 
      received: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.log("🔥 Erro:", error);
    return Response.json({ error: "Erro no POST" }, { status: 500 });
  }
}
