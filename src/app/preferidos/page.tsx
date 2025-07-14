"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

// Dados dos posts de vinhos - estilo vlog/scrapbook
const posts = [
  {
    id: 1,
    titulo: "Casal Garcia - Vinho Verde 🌿",
    data: "15 de Janeiro, 2025",
    imagem: "/casal-garcia.jpg",
    imagemPerfil: "/anne.jpg",
    autor: "Anne Gattini",
    categoria: "Indicação",
    tags: ["indicacao", "vinhoverde"],
    preco: "R$ 70,00",
    linkCompra: "https://amzn.to/46LfaC6",
    conteudo: `Esse vinho merece o primeiro post do canal, afinal, foi o primeiro vinho que me encantou! 🍷✨

Ele é extremamente leve e tem um sabor cítrico que combina com tudo. É um coringa total e duvido alguém não gostar dele.

**Por que eu amo:**
- Sabor cítrico refrescante
- Extremamente leve 
- Combina com absolutamente tudo
- Coringa para qualquer ocasião

**Onde encontrar:**
A melhor parte? Você encontra na maioria dos supermercados! Não precisa procurar em lojas especializadas.

**Minha dica:** É aquele vinho que você pode ter sempre na geladeira. Chegou visita? Casal Garcia. Almoço no domingo? Casal Garcia. Não tem erro! 🌱`
  },
  {
    id: 2,
    titulo: "Noite italiana com Chianti San Crispino 🇮🇹",
    data: "12 de Janeiro, 2025",
    imagem: "/jantar-gaby.jpg",
    imagemPerfil: "/gaby.jpeg",
    autor: "Gaby Fernandes",
    categoria: "Harmonização",
    tags: ["Tinto", "Italiano", "Chianti", "Queijos"],
    preco: "R$ 89,90",
    linkCompra: "https://amzn.to/4ltBKnD",
    conteudo: `Pessoal, hoje foi dia de testar uma harmonização clássica italiana: burrata cremosa + tomates frescos + Chianti San Crispino! 🇮🇹

O Chianti é um vinho que eu sempre recomendo para quem quer começar a entender a elegância dos tintos italianos.

**O que testei:**
- Burrata fresca com tomates cereja
- Bruschetta de tomate com manjericão
- Burrata com tomates secos e azeite

**Resultado:**
PERFEITO em todas! A acidez natural do Chianti cortou perfeitamente a cremosidade da burrata, os taninos sedosos equilibraram com a doçura dos tomates, e aquelas notas de cereja italiana complementaram lindamente a combinação.

**Características do vinho:**
- Cor rubi brilhante típica da Toscana
- Aroma de cerejas frescas e especiarias
- Taninos elegantes e bem integrados
- Final persistente com toque de ervas

**Para iniciantes:** Se você tem medo de vinho tinto porque acha amargo, o Chianti San Crispino é IDEAL para começar. Estruturado mas suave, autêntico mas acessível - a porta de entrada perfeita para os vinhos italianos!`
  },
  {
    id: 3,
    titulo: "Indique o seu vinho preferido para nossa comunidade",
    data: "Sempre aberto",
    imagem: "🍷", // Emoji de vinho como imagem do post
    imagemPerfil: "emoji-happy", // Usar emoji de carinha feliz
    autor: "Leitor SommeliAI",
    categoria: "Participação",
    tags: ["Comunidade", "Reviews", "Fotos", "Participação"],
    preco: "Gratuito",
    linkCompra: "#participe",
    conteudo: `Mande pelo instagram e a foto e a mensagem que você quer passar! Vamos amar saber o seu preferido! 🍷❤️`,
    isParticipacao: true
  }
];

export default function Preferidos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtros
  const categories = ["Todos", "Indicação", "Harmonização", "Participação"];
  
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.conteudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "Todos" || post.categoria === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        {/* Hero Section */}
        <div className="hero-section" style={{ 
          background: 'linear-gradient(180deg, #f8f6f3 0%, #f0ede8 100%)',
          padding: '60px 20px 50px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(217, 164, 65, 0.1)'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '600', 
            marginBottom: '15px',
            color: '#7a2e1e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <img src="/diary.png" alt="Diary" style={{ width: '48px', height: '48px' }} />
            Recomendações Colaborativas
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(122, 46, 30, 0.7)', 
            maxWidth: '500px', 
            margin: '0 auto 35px',
            lineHeight: 1.5,
            fontWeight: '400'
          }}>
            Descobertas, harmonizações e experiências autênticas
          </p>
          
          {/* Search Bar */}
          <div style={{ 
            maxWidth: '450px', 
            margin: '0 auto',
            position: 'relative'
          }}>
            <input
              type="text"
              placeholder="Buscar vinhos, harmonizações, ocasiões..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 45px 14px 20px',
                borderRadius: '25px',
                border: '2px solid rgba(217, 164, 65, 0.2)',
                fontSize: '1rem',
                backgroundColor: 'white',
                color: '#333',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#d9a441';
                e.target.style.boxShadow = '0 0 0 3px rgba(217, 164, 65, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(217, 164, 65, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <div style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.1rem',
              color: '#d9a441'
            }}>
              🔍
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ 
          padding: '25px 20px',
          backgroundColor: 'white',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: selectedCategory === category ? 'none' : '1px solid #e0e0e0',
                  backgroundColor: selectedCategory === category ? '#d9a441' : 'white',
                  color: selectedCategory === category ? 'white' : '#666',
                  fontWeight: selectedCategory === category ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#f8f8f8';
                    e.currentTarget.style.borderColor = '#d9a441';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div style={{ 
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fafafa'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {filteredPosts.map((post) => (
              <article key={post.id} style={{
                backgroundColor: post.isParticipacao ? 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%)' : 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                border: post.isParticipacao ? '2px solid #d9a441' : '1px solid #f0f0f0',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                position: 'relative',
                background: post.isParticipacao ? 'linear-gradient(135deg, #fff9e6 0%, #ffffff 100%)' : 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = post.isParticipacao ? '0 8px 25px rgba(217, 164, 65, 0.2)' : '0 8px 25px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = post.isParticipacao ? '#c9932a' : '#e0e0e0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = post.isParticipacao ? '#d9a441' : '#f0f0f0';
              }}>
                
                {/* Post Header */}
                <div style={{ padding: '20px 20px 15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                    {post.imagemPerfil === "emoji-happy" ? (
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: '#f8f6f3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem',
                        border: '2px solid rgba(217, 164, 65, 0.2)'
                      }}>
                        😊
                      </div>
                    ) : (
                      <img 
                        src={post.imagemPerfil} 
                        alt={post.autor}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #f0f0f0'
                        }}
                      />
                    )}
                    <div>
                      <div style={{ fontWeight: '600', color: '#333', fontSize: '0.95rem' }}>
                        {post.autor}
                      </div>
                      <div style={{ color: '#888', fontSize: '0.8rem' }}>
                        {post.data}
                      </div>
                    </div>
                    <div style={{ 
                      marginLeft: 'auto',
                      backgroundColor: '#f8f8f8',
                      color: '#666',
                      padding: '3px 10px',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {post.categoria}
                    </div>
                  </div>

                  <h2 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '18px',
                    lineHeight: 1.4,
                    marginTop: '8px'
                  }}>
                    {post.titulo}
                  </h2>
                </div>

                {/* Wine Image & Info */}
                <div style={{ 
                  padding: '0 20px 20px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start'
                }}>
                  {post.imagem === "🍷" ? (
                    <div style={{
                      width: '85px',
                      height: '125px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      border: '1px solid rgba(240, 240, 240, 0.8)',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      backgroundColor: '#f8f6f3',
                      fontSize: '3rem'
                    }}>
                      🍷
                    </div>
                  ) : (
                    <img 
                      src={post.imagem} 
                      alt={post.titulo}
                      style={{
                        width: '85px',
                        height: '125px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        border: '1px solid rgba(240, 240, 240, 0.8)',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                      }}
                    />
                  )}
                  <div style={{ flex: 1, paddingTop: '5px' }}>
                    <div style={{
                      display: 'flex',
                      gap: '4px',
                      flexWrap: 'wrap',
                      marginBottom: '8px'
                    }}>
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} style={{
                          backgroundColor: 'rgba(217, 164, 65, 0.08)',
                          color: 'rgba(122, 46, 30, 0.6)',
                          padding: '2px 6px',
                          borderRadius: '6px',
                          fontSize: '0.7rem',
                          fontWeight: '400'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '700', 
                        color: '#d9a441' 
                      }}>
                        {post.preco}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Post Content Preview */}
                <div style={{ 
                  padding: '0 20px 25px',
                  color: '#555',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}>
                  {post.conteudo.split('\n').slice(0, 4).map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} style={{ 
                        marginBottom: '10px',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: index >= 2 ? 3 : 'none',
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>

                {/* Post Footer */}
                <div style={{
                  padding: '15px 20px',
                  borderTop: '1px solid rgba(240, 240, 240, 0.6)',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: '#fafbfc'
                }}>
                  <a 
                    href={post.linkCompra}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: post.isParticipacao ? '#7a2e1e' : '#d9a441',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = post.isParticipacao ? '#5a1f14' : '#c9932a';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = post.isParticipacao ? '#7a2e1e' : '#d9a441';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={post.isParticipacao ? (e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      // Aqui você pode adicionar lógica para abrir um modal ou redirecionar
                    } : undefined}
                  >
                    {post.isParticipacao ? '📸 Enviar Review' : '🛒 Compre pela Amazon'}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '50px 20px',
              color: '#888'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#666' }}>
                Nenhum post encontrado
              </h3>
              <p style={{ fontSize: '0.9rem' }}>Tente ajustar sua pesquisa ou categoria selecionada.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '50px 20px',
          textAlign: 'center',
          borderTop: '1px solid #f0f0f0'
        }}>
          <div style={{ maxWidth: '450px', margin: '0 auto' }}>
            <h3 style={{
              color: '#333',
              fontSize: '1.6rem',
              fontWeight: '600',
              marginBottom: '15px'
            }}>
              📧 Receba novos posts no seu email
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '25px',
              fontSize: '0.95rem',
              lineHeight: 1.5
            }}>
              Seja o primeiro a saber sobre nossas descobertas, harmonizações e posts da comunidade!
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Call to Action - Participação */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f6f3 0%, #f0ede8 100%)',
          padding: '50px 20px',
          textAlign: 'center',
          borderTop: '1px solid rgba(217, 164, 65, 0.2)'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📸</div>
            <h3 style={{
              color: '#7a2e1e',
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '15px'
            }}>
              Sua experiência com vinhos importa!
            </h3>
            <p style={{
              color: 'rgba(122, 46, 30, 0.8)',
              marginBottom: '30px',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              Compartilhe suas descobertas, harmonizações e momentos especiais. 
              Ajude outros amantes do vinho a descobrirem novos favoritos!
            </p>
            
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '25px'
            }}>
              <a 
                href="https://instagram.com/sommeliai" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#7a2e1e',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5a1f14';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7a2e1e';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                📷 Instagram
              </a>
              
              <a 
                href="mailto:participe@sommeliai.com" 
                style={{
                  backgroundColor: '#d9a441',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
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
                ✉️ Email
              </a>
              
              <button
                onClick={() => window.location.href = '/'}
                style={{
                  backgroundColor: 'white',
                  color: '#7a2e1e',
                  border: '2px solid #7a2e1e',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7a2e1e';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#7a2e1e';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                💬 Chat SommeliAI
              </button>
            </div>
            
            <p style={{
              color: 'rgba(122, 46, 30, 0.6)',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              Não precisa ser expert, precisa ser autêntico! 🤗
            </p>
          </div>
        </div>
      </main>
      
      {/* Disclaimer discreto */}
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p style={{
          color: 'rgba(122, 46, 30, 0.5)',
          fontSize: '0.75rem',
          margin: 0,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.4
        }}>
          Para manter o SommeliAI ativo, somos participantes do Programa de Associados da Amazon, sendo remunerados pelas compras qualificadas efetuadas
        </p>
      </div>
      
      <Footer />
    </>
  );
}