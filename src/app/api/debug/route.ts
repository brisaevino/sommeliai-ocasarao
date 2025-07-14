import { NextRequest } from "next/server";

export async function GET() {
  console.log("🎯 API TEST GET funcionando!");
  return Response.json({ message: "GET funcionando!" });
}

export async function POST(req: NextRequest) {
  console.log("🎯 API TEST POST funcionando!");
  console.log("Headers:", req.headers.get("content-type"));
  
  let body;
  try {
    body = await req.json();
    console.log("Body:", body);
  } catch (e) {
    console.log("Erro ao ler body:", e);
  }
  
  return Response.json({ 
    message: "POST funcionando!",
    timestamp: new Date().toISOString()
  });
}
