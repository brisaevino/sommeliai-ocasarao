export default function ComoFuncionaSteps() {
  return (
    <section className="py-16 px-8" style={{ backgroundColor: '#f8f5f2' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#7a2e1e' }}>
          Como funciona o SommeliAI?
        </h2>
        
        {/* Fluxo dos 3 passos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {/* Passo 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
              style={{ 
                background: '#e0bfae',
                color: '#7a2e1e'
              }}
            >
              1
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#7a2e1e' }}>
              Converse
            </h3>
            <p className="text-sm" style={{ color: '#6d4c41' }}>
              Diga ao SommeliAI suas preferências, dúvidas ou ocasião.
            </p>
          </div>

          {/* Seta 1-2 */}
          <div className="hidden md:block">
            <span className="text-3xl" style={{ color: '#b85c1e' }}>→</span>
          </div>
          <div className="md:hidden">
            <span className="text-3xl rotate-90 inline-block" style={{ color: '#b85c1e' }}>→</span>
          </div>

          {/* Passo 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
              style={{ 
                background: '#e0bfae',
                color: '#7a2e1e'
              }}
            >
              2
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#7a2e1e' }}>
              A IA analisa
            </h3>
            <p className="text-sm" style={{ color: '#6d4c41' }}>
              O SommeliAI entende seu perfil e analisa seus gostos.
            </p>
          </div>

          {/* Seta 2-3 */}
          <div className="hidden md:block">
            <span className="text-3xl" style={{ color: '#b85c1e' }}>→</span>
          </div>
          <div className="md:hidden">
            <span className="text-3xl rotate-90 inline-block" style={{ color: '#b85c1e' }}>→</span>
          </div>

          {/* Passo 3 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
              style={{ 
                background: '#e0bfae',
                color: '#7a2e1e'
              }}
            >
              3
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#7a2e1e' }}>
              Recomendações
            </h3>
            <p className="text-sm" style={{ color: '#6d4c41' }}>
              Receba sugestões de vinhos personalizadas para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
