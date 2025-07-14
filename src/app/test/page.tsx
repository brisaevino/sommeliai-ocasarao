import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#7a2e1e' }}>
          Teste - SommeliAI
        </h1>
        <p className="text-xl" style={{ color: 'rgba(122, 46, 30, 0.8)' }}>
          Esta é uma página de teste para verificar se o servidor está funcionando.
        </p>
        <div className="mt-8 p-4 rounded-lg" style={{ 
          background: 'rgba(217, 164, 65, 0.1)',
          border: '1px solid rgba(217, 164, 65, 0.3)'
        }}>
          <p>✅ Se você está vendo esta página, o servidor está rodando!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
