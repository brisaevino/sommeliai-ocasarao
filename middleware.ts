import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('🔄 Middleware executado para:', request.url);
  
  // Adicionar headers CORS se necessário
  const response = NextResponse.next();
  
  // Para APIs
  if (request.nextUrl.pathname.startsWith('/api/')) {
    console.log('🔧 Processando API request:', request.nextUrl.pathname);
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  return response;
}

export const config = {
  matcher: ['/api/:path*']
};
