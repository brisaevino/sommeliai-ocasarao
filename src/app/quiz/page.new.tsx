"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tipos de vinho com suas características
const tiposVinho = {
  espumante: {
    titulo: "🥂 Espumante – A Alegria da Festa",
    vinho: "Prosecco ou Champagne",
    descricao: "Você é aquela pessoa que levanta o clima só de estar presente. Leve, vibrante, espontâneo. As pessoas te procuram quando precisam de risada, leveza ou só uma desculpa pra brindar.",
    caracteristicas: [
      "Você tem brilho, mas sem exagero",
      "Sabe que a vida fica melhor com espontaneidade",
      "Traz alegria e leveza para qualquer ambiente",
      "Tem o dom de fazer todo mundo se sentir à vontade"
    ],
    personalidade: "Você é aquela pessoa que levanta o clima só de estar presente. Leve, vibrante, espontâneo. As pessoas te procuram quando precisam de risada, leveza ou só uma desculpa pra brindar. Você tem brilho, mas sem exagero — e sabe que a vida fica melhor com um pouco de espontaneidade.",
    climaIdeal: "Noites de sexta, playlists animadas, gente misturada e boas histórias surgindo do nada",
    frase: '"Sério? Depois você me conta. Mas antes, vamos brindar."',
    emoji: "🥂"
  },
  pinot_noir: {
    titulo: "🍷 Pinot Noir – O Conselheiro Acolhedor",
    vinho: "Pinot Noir",
    descricao: "Você tem profundidade sem fazer alarde. Tem quem te veja quieto, mas quem te conhece sabe: seu mundo interior é vasto, acolhedor e atento.",
    caracteristicas: [
      "Escuta de verdade e enxerga detalhes",
      "Oferece conforto sem pedir palco",
      "Tem um mundo interior vasto e acolhedor",
      "É o tipo de pessoa em quem todos confiam"
    ],
    personalidade: "Você tem profundidade sem fazer alarde. Tem quem te veja quieto, mas quem te conhece sabe: seu mundo interior é vasto, acolhedor e atento. Você escuta de verdade, enxerga detalhes que passam despercebidos e oferece conforto sem pedir palco.",
    climaIdeal: "Conversa longa, manta no sofá, riso baixo, conexão alta",
    frase: '"Me conta tudo. Não tô aqui pra te julgar, só pra te ouvir."',
    emoji: "🍷"
  },
  malbec: {
    titulo: "🔥 Malbec – O Sincero e Debochado",
    vinho: "Malbec",
    descricao: "Você é intensidade com personalidade. Não tem paciência pra joguinho nem pra meias palavras. É direto, ácido quando precisa, e hilário (especialmente quando não se esforça pra ser).",
    caracteristicas: [
      "Direto e sem rodeios",
      "Hilário sem se esforçar muito",
      "Quem te ama, ama de verdade",
      "Não tem paciência para jogos ou falsidade"
    ],
    personalidade: "Você é intensidade com personalidade. Não tem paciência pra joguinho nem pra meias palavras. É direto, ácido quando precisa, e hilário (especialmente quando não se esforça pra ser). Quem te ama, ama de verdade. Quem não aguenta, que lute.",
    climaIdeal: "Papo reto, provocação leve, gente que aguenta a própria opinião",
    frase: '"Prefere que eu minta ou que eu diga o que eu tô pensando de verdade?"',
    emoji: "🔥"
  },
  rose: {
    titulo: "🌸 Rosé – Moderno e Leve",
    vinho: "Rosé",
    descricao: "Você flui com charme. Tem estética, leveza, e um pé na simplicidade. Curte dias bonitos, gente interessante e conversas que não precisem provar nada.",
    caracteristicas: [
      "Flui com charme natural",
      "Gosta do novo, mas sem pressão",
      "Seus silêncios têm presença",
      "Sua companhia é desejada porque é tranquila"
    ],
    personalidade: "Você flui com charme. Tem estética, leveza, e um pé na simplicidade. Curte dias bonitos, gente interessante e conversas que não precisem provar nada. Gosta do novo, mas sem pressão. Seus silêncios têm presença. Sua companhia é desejada porque é tranquila.",
    climaIdeal: "Almoço despretensioso, luz natural, um som bom no fundo e zero obrigação",
    frase: '"A gente não precisa planejar tudo. Vamos só ver onde isso dá?"',
    emoji: "🌸"
  }
};

// Perguntas do quiz
const perguntas = [
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
    pergunta: 'Sua resposta favorita para "tá tudo bem?"',
    opcoes: [
      { texto: '"Tudo ótimo, e você? Vamos brindar?"', tipo: "espumante", pontos: 3 },
      { texto: '"Mais ou menos… mas você quer conversar sobre isso?"', tipo: "pinot_noir", pontos: 3 },
      { texto: '"Não, mas também não tô com paciência hoje."', tipo: "malbec", pontos: 3 },
      { texto: '"Tô vivendo. No meu ritmo. Tá bom assim."', tipo: "rose", pontos: 3 }
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
  const [etapaAtual, setEtapaAtual] = useState("inicio");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<{[key: string]: number}>({
    espumante: 0,
    pinot_noir: 0,
    malbec: 0,
    rose: 0
  });
  const [resultadoFinal, setResultadoFinal] = useState("");

  const iniciarQuiz = () => {
    setEtapaAtual("quiz");
    setPerguntaAtual(0);
    setRespostas({
      espumante: 0,
      pinot_noir: 0,
      malbec: 0,
      rose: 0
    });
  };

  const responder = (opcao: any) => {
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
    const texto = `Acabei de descobrir meu perfil vinícola! Sou um ${resultado.vinho}! 🍷\n\n${resultado.frase}\n\nFaça o quiz do SommeliAI e descubra qual vinho combina com você!`;
    const url = `https://wa.me/?text=${encodeURIComponent(texto + ' ' + window.location.href)}`;
    window.open(url, '_blank');
  };

  const compartilhar = () => {
    const resultado = tiposVinho[resultadoFinal as keyof typeof tiposVinho];
    const texto = `Acabei de descobrir meu perfil vinícola! Sou um ${resultado.vinho}! 🍷 Faça o quiz do SommeliAI e descubra qual vinho combina com você!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Quiz SommeliAI',
        text: texto,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${texto} ${window.location.href}`);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (etapaAtual === "inicio") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🍷 Que tipo de vinho você seria?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubra sua personalidade vinícola através de 5 perguntas sobre como você é nos rolês e relacionamentos!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥂</div>
                  <div className="font-semibold">Espumante</div>
                  <div className="text-sm text-gray-500">A Alegria da Festa</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🍷</div>
                  <div className="font-semibold">Pinot Noir</div>
                  <div className="text-sm text-gray-500">O Conselheiro</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="font-semibold">Malbec</div>
                  <div className="text-sm text-gray-500">O Sincero</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌸</div>
                  <div className="font-semibold">Rosé</div>
                  <div className="text-sm text-gray-500">Moderno e Leve</div>
                </div>
              </div>

              <button
                onClick={iniciarQuiz}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Começar Quiz 🚀
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (etapaAtual === "quiz") {
    const pergunta = perguntas[perguntaAtual];
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Pergunta {perguntaAtual + 1} de {perguntas.length}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round(progresso)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                {pergunta.pergunta}
              </h2>

              <div className="space-y-4">
                {pergunta.opcoes.map((opcao, index) => (
                  <button
                    key={index}
                    onClick={() => responder(opcao)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-purple-50 rounded-xl border-2 border-transparent hover:border-purple-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-full flex items-center justify-center mr-4 text-purple-600 font-semibold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800 group-hover:text-gray-900 font-medium">
                        {opcao.texto}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const resultado = tiposVinho[resultadoFinal as keyof typeof tiposVinho];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-6xl mb-6">{resultado.emoji}</div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {resultado.titulo}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {resultado.descricao}
            </p>

            <div className="text-left mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suas características:</h3>
              <ul className="space-y-2">
                {resultado.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✓</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sua vibe:</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                {resultado.personalidade}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Clima ideal:</strong> {resultado.climaIdeal}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💬 Sua frase:</h3>
              <p className="text-gray-800 font-medium italic text-lg">
                {resultado.frase}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={compartilharWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>📱</span> Compartilhar no WhatsApp
              </button>
              
              <button
                onClick={compartilhar}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Compartilhar Resultado 📤
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reiniciarQuiz}
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Fazer Novamente 🔄
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ✨ Quer experimentar o vinho que tem tudo a ver com você?
            </h3>
            <p className="text-gray-600 mb-4">
              Deixa o SommeliAI te indicar — é só chamar no chat.
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Conversar com o SommeliAI 🤖
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}