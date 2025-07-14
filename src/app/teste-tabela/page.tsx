"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TesteTabela() {
  const markdownWithTable = `
# Teste de Tabela

| Critério | Vinho A | Vinho B |
|----------|---------|---------|
| Tipo de uva | Malbec | Cabernet Sauvignon |
| Região | Mendoza, Argentina | Bordeaux, França |
| Corpo | Encorpado | Muito encorpado |
| Acidez | Média | Alta |
| Taninos | Macios | Firmes |
| Sabor | Frutado, chocolate | Frutas escuras, especiarias |
| Teor alcoólico | 14% | 13,5% |
| Harmonização | Carnes grelhadas | Carnes vermelhas, queijos |
| Ocasião | Jantar informal | Ocasiões especiais |
| Preço médio | R$ 40-60 | R$ 80-120 |

Esta é uma tabela de teste.
  `;

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#f3edea' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#7a2e1e' }}>
          Teste de Renderização de Tabelas
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({...props}) => (
                <div className="wine-table-container">
                  <table className="sommelier-table" {...props} />
                </div>
              ),
            }}
          >
            {markdownWithTable}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
