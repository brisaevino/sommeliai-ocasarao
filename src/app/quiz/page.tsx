"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ADICIONADO: Interfaces TypeScript
interface OpcaoResposta {
  texto: string;
  tipo: string;
  pontos: number;
}

interface Pergunta {
  id: number;
  pergunta: string;
  opcoes: OpcaoResposta[];
}

// Tipos de vinho com suas características
const tiposVinho = {
  espumante: {
    titulo: "🥂 Espumante – A Alegria da Festa",
    vinho: "Espumante Brut ou Prosecco",
    descricao: "Você é aquela pessoa que levanta o clima só de estar presente. Leve, vibrante, espontâneo. As pessoas te procuram quando precisam de risada, leveza ou só uma desculpa pra celebrar.",
    caracteristicas: [
      "Tem uma energia contagiante, um brilho especial",
      "Sabe que a vida fica melhor com espontaneidade",
      "Levanta o astral só de estar presente",
      "Traz leveza e diversão para qualquer ambiente"
    ],
    personalidade: "Você tem brilho, sua autenticidade faz com que todos queiram estar perto! Você sabe que a vida fica melhor com um pouco de espontaneidade.",
    climaIdeal: "noites de sexta, playlists animadas, gente misturada e boas histórias surgindo do nada",
    frase: "Sério? Depois você me conta. Agora é hora de comemorar!",
    emoji: "🥂"
  },
  pinot_noir: {
    titulo: "🍷 Pinot Noir – O Conselheiro Acolhedor", 
    vinho: "Pinot Noir",
    descricao: "Você tem profundidade sem fazer alarde. Tem quem te veja quieto, mas quem te conhece sabe: seu mundo interior é vasto, acolhedor e atento.",
    caracteristicas: [
      "Escuta de verdade e enxerga detalhes",
      "Oferece conforto e sabe dar espaço quando necessário",
      "Tem uma profundidade que permite entender qualquer situação",
      "Mundo interior vasto e acolhedor"
    ],
    personalidade: "Você escuta de verdade, enxerga detalhes que passam despercebidos e oferece conforto sem pedir palco.",
    climaIdeal: "conversa longa, manta no sofá, riso baixo, conexão alta",
    frase: "Me conta tudo. Não tô aqui pra te julgar, só pra te ouvir.",
    emoji: "🍷"
  },
  malbec: {
    titulo: "🔥 Malbec – O Sincero e Debochado",
    vinho: "Malbec Argentino",
    descricao: "Você é intensidade com personalidade. Não tem paciência pra joguinho nem pra meias palavras. É direto, ácido quando precisa, e hilário (especialmente quando não se esforça pra ser).",
    caracteristicas: [
      "Direto e sem rodeios",
      "Hilário sem se esforçar",
      "Quem te ama, ama de verdade",
      "Intensidade com personalidade"
    ],
    personalidade: "Quem te ama, ama de verdade. Quem não aguenta, que lute.",
    climaIdeal: "papo reto, provocação leve, gente que aguenta a própria opinião",
    frase: "Prefere que eu minta ou que eu diga o que eu tô pensando de verdade?",
    emoji: "🔥"
  },
  rose: {
    titulo: "🌸 Rosé – Moderno e Leve",
    vinho: "Rosé Provençal",
    descricao: "Você flui com charme. Tem estética, leveza, e um pé na simplicidade. Curte dias bonitos, gente interessante e conversas que não precisem provar nada.",
    caracteristicas: [
      "Flui com charme natural",
      "Gosta do novo e quer aproveitar todos os momentos",
      "Seus silêncios têm presença",
      "Companhia tranquila e desejada"
    ],
    personalidade: "Gosta do novo, mas sem pressão. Seus silêncios têm presença. Sua companhia é desejada porque é tranquila.",
    climaIdeal: "almoço despretensioso, luz natural, um som bom no fundo e zero obrigação",
    frase: "A gente não precisa planejar tudo. Vamos só ver onde isso dá?",
    emoji: "🌸"
  }
};

// CORRIGIDO: Perguntas com tipagem + aspas escapadas
const perguntas: Pergunta[] = [
  {
    id: 1,
    pergunta: "Como você costuma ser nos rolês?",
    opcoes: [
      { texto: "Eu quebro o gelo, trago a leveza, puxo o brinde.", tipo: "espumante", pontos: 3 },
      { texto: "Estou nas rodas de conversa, sempre aconselhando a galera.", tipo: "pinot_noir", pontos: 3 },
      { texto: "Se tem uma verdade pra ser dita, eu falo — com ou sem taça na mão.", tipo: "malbec", pontos: 3 },
      { texto: "Tô sempre bem. Chego estiloso, falo com quem quero, saio na hora certa.", tipo: "rose", pontos: 3 }
    ]
  },
  {
    id: 2,
    pergunta: "Sua resposta favorita para &quot;tá tudo bem?&quot;",
    opcoes: [
      { texto: "&quot;Tudo ótimo, e você? Vamos comemorar?&quot;", tipo: "espumante", pontos: 3 },
      { texto: "&quot;Mais ou menos… mas você quer conversar sobre isso?&quot;", tipo: "pinot_noir", pontos: 3 },
      { texto: "&quot;Não, mas também não tô com paciência hoje.&quot;", tipo: "malbec", pontos: 3 },
      { texto: "&quot;Tô vivendo. No meu ritmo. Tá bom assim.&quot;", tipo: "rose", pontos: 3 }
    ]
  },
  {
    id: 3,
    pergunta: "Qual é seu superpoder social?",
    opcoes: [
      { texto: "Fazer todo mundo rir e se sentir à vontade", tipo: "espumante", pontos: 3 },
      { texto: "Escutar com atenção real e dar conselhos bons", tipo: "pinot_noir", pontos: 3 },
      { texto: "Dizer o que ninguém tem coragem, sem rodeio", tipo: "malbec", pontos: 3 },
      { texto: "Ter presença, mesmo sem falar muito", tipo: "rose", pontos: 3 }
    ]
  },
  {
    id: 4,
    pergunta: "O que você procura numa relação?",
    opcoes: [
      { texto: "Leveza, troca e diversão. Não precisa ser intenso o tempo todo.", tipo: "espumante", pontos: 3 },
      { texto: "Aquele lugar seguro pra ser quem a gente é", tipo: "pinot_noir", pontos: 3 },
      { texto: "Química + honestidade. Se não for real, nem me chama.", tipo: "malbec", pontos: 3 },
      { texto: "Liberdade e afinidade. Gosto de espaços sem pressão.", tipo: "rose", pontos: 3 }
    ]
  },
  {
    id: 5,
    pergunta: "Como você reage quando as coisas saem do seu controle?",
    opcoes: [
      { texto: "Tento animar quem tá comigo e seguir no improviso", tipo: "espumante", pontos: 3 },
      { texto: "Respiro, acolho o momento e vejo o que posso aprender", tipo: "pinot_noir", pontos: 3 },
      { texto: "Fico bravo. Depois falo a real e sigo.", tipo: "malbec", pontos: 3 },
      { texto: "Me afasto um pouco e me reorganizo do meu jeito", tipo: "rose", pontos: 3 }
    ]
  }
];

export default function Quiz() {
  const router = useRouter();
  const [etapaAtual, setEtapaAtual] = useState("inicio");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [email, setEmail] = useState("");
  const [respostas, setRespostas] = useState<{[key: string]: number}>({
    espumante: 0,
    pinot_noir: 0,
    malbec: 0,
    rose: 0
  });
  const [resultadoFinal, setResultadoFinal] = useState("");

  const iniciarQuiz = () => {
    setEtapaAtual("email");
  };

  const validarEmailEContinuar = async () => {
    if (!email || !email.includes('@')) {
      alert('Por favor, insira um e-mail válido para continuar.');
      return;
    }

    try {
      // CORRIGIDO: API correta
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          origem: 'quiz_personality' 
        }),
      });

      if (response.ok) {
        setEtapaAtual("quiz");
        setPerguntaAtual(0);
        setRespostas({
          espumante: 0,
          pinot_noir: 0,
          malbec: 0,
          rose: 0
        });
      } else {
        console.error('Erro ao cadastrar email:', response.statusText);
        setEtapaAtual("quiz");
        setPerguntaAtual(0);
        setRespostas({
          espumante: 0,
          pinot_noir: 0,
          malbec: 0,
          rose: 0
        });
      }
    } catch (error) {
      console.error('Erro ao cadastrar email:', error);
      setEtapaAtual("quiz");
      setPerguntaAtual(0);
      setRespostas({
        espumante: 0,
        pinot_noir: 0,
        malbec: 0,
        rose: 0
      });
    }
  };

  // CORRIGIDO: Removido tipo 'any'
  const responder = (opcao: OpcaoResposta) => {
    const novasRespostas = { ...respostas };
    novasRespostas[opcao.tipo] += opcao.pontos;
    setRespostas(novasRespostas);

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      const tipoVencedor = Object.keys(novasRespostas).reduce((a, b) => 
        novasRespostas[a] > novasRespostas[b] ? a : b
      );
      setResultadoFinal(tipoVencedor);
      setEtapaAtual("resultado");
    }
  };

  const reiniciarQuiz = () => {
    setEtapaAtual("inicio");
    setPerguntaAtual(0);
    setEmail("");
    setRespostas({
      espumante: 0,
      pinot_noir: 0,
      malbec: 0,
      rose: 0
    });
    setResultadoFinal("");
  };

  const compartilharWhatsApp = () => {
    const resultado = tiposVinho[resultadoFinal as keyof typeof tiposVinho];
    const nomeVinho = resultado.vinho;
    const texto = `🍷 Eu descobri que o vinho que combina com minha personalidade é o ${nomeVinho}! Descubra você também o seu vinho ideal!\n\n✨ Faça o quiz: ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        
        {/* Tela Inicial */}
        {etapaAtual === "inicio" && (
          <div style={{ 
            padding: '60px 20px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8f6f3 0%, #f0ede8 100%)',
              borderRadius: '20px',
              padding: '50px 30px',
              marginBottom: '40px',
              border: '1px solid rgba(217, 164, 65, 0.1)'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#7a2e1e',
                marginBottom: '20px'
              }}>
                Que vinho você seria?
              </h1>
              
              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(122, 46, 30, 0.8)',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto 30px'
              }}>
                Descubra sua personalidade vinícola com nosso quiz divertido e se identifique com um vinho único!
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                margin: '40px 0',
                textAlign: 'center',
                flexWrap: 'wrap'
              }}>
                <div style={{ color: '#7a2e1e' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🥂</div>
                  <div style={{ fontWeight: '600' }}>Espumante</div>
                </div>
                <div style={{ color: '#7a2e1e' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🍷</div>
                  <div style={{ fontWeight: '600' }}>Pinot Noir</div>
                </div>
                <div style={{ color: '#7a2e1e' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔥</div>
                  <div style={{ fontWeight: '600' }}>Malbec</div>
                </div>
                <div style={{ color: '#7a2e1e' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌸</div>
                  <div style={{ fontWeight: '600' }}>Rosé</div>
                </div>
              </div>

              <button
                onClick={iniciarQuiz}
                style={{
                  backgroundColor: '#d9a441',
                  color: 'white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(217, 164, 65, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9932a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d9a441';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                🚀 Começar Quiz
              </button>

              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(122, 46, 30, 0.6)',
                marginTop: '20px'
              }}>
                📝 5 perguntas divertidas • ⏱️ 1 minuto • 🎯 Descubra seu vinho
              </p>
            </div>
          </div>
        )}

        {/* Tela de E-mail */}
        {etapaAtual === "email" && (
          <div style={{ 
            padding: '60px 20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8f6f3 0%, #f0ede8 100%)',
              borderRadius: '20px',
              padding: '50px 30px',
              marginBottom: '40px',
              border: '1px solid rgba(217, 164, 65, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                🍷✨
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: '#7a2e1e',
                marginBottom: '20px'
              }}>
                Antes de descobrir seu vinho...
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(122, 46, 30, 0.8)',
                lineHeight: 1.6,
                marginBottom: '30px'
              }}>
                Deixe seu e-mail para receber dicas exclusivas do SommeliAI e descobrir novos vinhos perfeitos para você!
              </p>

              <div style={{
                marginBottom: '30px'
              }}>
                <input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      validarEmailEContinuar();
                    }
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '15px 20px',
                    borderRadius: '30px',
                    border: '2px solid #f0f0f0',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    marginBottom: '20px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#d9a441';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(217, 164, 65, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#f0f0f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                onClick={validarEmailEContinuar}
                style={{
                  backgroundColor: '#d9a441',
                  color: 'white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(217, 164, 65, 0.3)',
                  marginBottom: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9932a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d9a441';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                🚀 Começar Quiz
              </button>

              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(122, 46, 30, 0.6)',
                lineHeight: 1.4
              }}>
                📧 Prometemos enviar apenas conteúdo relevante<br/>
                🔒 Seus dados estão seguros conosco
              </p>
            </div>
          </div>
        )}

        {/* Tela do Quiz */}
        {etapaAtual === "quiz" && (
          <div style={{
            padding: '40px 20px',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {/* Progress Bar */}
            <div style={{
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              height: '8px',
              marginBottom: '30px',
              overflow: 'hidden'
            }}>
              <div style={{
                backgroundColor: '#d9a441',
                height: '100%',
                width: `${((perguntaAtual + 1) / perguntas.length) * 100}%`,
                transition: 'width 0.3s ease',
                borderRadius: '10px'
              }}></div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              {/* Número da pergunta */}
              <div style={{
                textAlign: 'center',
                marginBottom: '25px'
              }}>
                <span style={{
                  backgroundColor: '#f8f6f3',
                  color: '#7a2e1e',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Pergunta {perguntaAtual + 1} de {perguntas.length}
                </span>
              </div>

              {/* Pergunta */}
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#333',
                textAlign: 'center',
                marginBottom: '35px',
                lineHeight: 1.4
              }}>
                {perguntas[perguntaAtual].pergunta}
              </h2>

              {/* Opções */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                  <button
                    key={index}
                    onClick={() => responder(opcao)}
                    style={{
                      padding: '18px 25px',
                      borderRadius: '15px',
                      border: '2px solid #f0f0f0',
                      backgroundColor: 'white',
                      color: '#333',
                      fontSize: '1rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#d9a441';
                      e.currentTarget.style.backgroundColor = '#fefef9';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f0f0f0';
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ 
                      backgroundColor: '#f8f6f3',
                      color: '#d9a441',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginRight: '12px'
                    }}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    {opcao.texto}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tela de Resultado */}
        {etapaAtual === "resultado" && resultadoFinal && (
          <div style={{
            padding: '40px 20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '50px 40px',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              {/* Resultado */}
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>
                {tiposVinho[resultadoFinal as keyof typeof tiposVinho].emoji}
              </div>

              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: '#7a2e1e',
                marginBottom: '15px'
              }}>
                {tiposVinho[resultadoFinal as keyof typeof tiposVinho].titulo}
              </h2>

              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(122, 46, 30, 0.8)',
                lineHeight: 1.6,
                marginBottom: '30px',
                maxWidth: '600px',
                margin: '0 auto 30px'
              }}>
                {tiposVinho[resultadoFinal as keyof typeof tiposVinho].descricao}
              </p>

              {/* Personalidade */}
              <div style={{
                backgroundColor: '#f8f6f3',
                borderRadius: '15px',
                padding: '25px',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#7a2e1e',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  💫 Sua personalidade:
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  {tiposVinho[resultadoFinal as keyof typeof tiposVinho].personalidade}
                </p>
              </div>

              {/* Características */}
              <div style={{
                backgroundColor: '#f0f8f0',
                borderRadius: '15px',
                padding: '25px',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#7a2e1e',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  🎯 Suas características:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {tiposVinho[resultadoFinal as keyof typeof tiposVinho].caracteristicas.map((caracteristica: string, index: number) => (
                    <li key={index} style={{
                      padding: '6px 0',
                      color: '#333',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ color: '#d9a441', fontSize: '1.1rem' }}>✓</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clima Ideal */}
              <div style={{
                backgroundColor: '#fff8f0',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#7a2e1e',
                  marginBottom: '10px'
                }}>
                  🌟 Seu clima ideal:
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  {tiposVinho[resultadoFinal as keyof typeof tiposVinho].climaIdeal}
                </p>
              </div>

              {/* Frase Característica */}
              <div style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#7a2e1e',
                  marginBottom: '10px'
                }}>
                  💬 Sua frase:
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#d9a441',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  &quot;{tiposVinho[resultadoFinal as keyof typeof tiposVinho].frase}&quot;
                </p>
              </div>

              {/* Recomendação */}
              <div style={{
                backgroundColor: '#f0f8f0',
                border: '2px solid #d9a441',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#7a2e1e',
                  marginBottom: '10px'
                }}>
                  🍷 Você seria este vinho:
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#d9a441',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {tiposVinho[resultadoFinal as keyof typeof tiposVinho].vinho}
                </p>
              </div>

              {/* Botões */}
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '30px'
              }}>
                <button
                  onClick={compartilharWhatsApp}
                  style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1da851';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#25D366';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  📱 Compartilhar no WhatsApp
                </button>

                <button
                  onClick={reiniciarQuiz}
                  style={{
                    backgroundColor: 'white',
                    color: '#7a2e1e',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    border: '2px solid #7a2e1e',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#7a2e1e';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#7a2e1e';
                  }}
                >
                  🔄 Refazer Quiz
                </button>
              </div>

              {/* Call to Action */}
              <div style={{
                marginTop: '30px',
                padding: '25px',
                backgroundColor: '#f8f6f3',
                borderRadius: '15px',
                border: '1px solid rgba(217, 164, 65, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#7a2e1e',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  ✨ Quer experimentar o vinho que tem tudo a ver com você?
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(122, 46, 30, 0.8)',
                  marginBottom: '20px'
                }}>
                  Deixa o SommeliAI te indicar — é só chamar no chat.
                </p>
                <button
                  onClick={() => {
                    router.push('/#hero-chat');
                    // Pequeno delay para garantir que a navegação aconteça antes do scroll
                    setTimeout(() => {
                      const heroElement = document.getElementById('hero-chat');
                      if (heroElement) {
                        heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 200);
                  }}
                  style={{
                    backgroundColor: '#7a2e1e',
                    color: 'white',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5a1f14';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7a2e1e';
                  }}
                >
                  🤖 Conversar com SommeliAI
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
