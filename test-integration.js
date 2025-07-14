#!/usr/bin/env node

// Script para testar toda a integração do SommeliAI
const https = require('https');
const http = require('http');

console.log('🧪 Testando integração do SommeliAI...\n');

// 1. Verificar se o servidor está rodando
async function testServer() {
  console.log('1️⃣ Verificando servidor local...');
  try {
    const response = await fetch('http://localhost:3000/api/check');
    const data = await response.json();
    console.log('✅ Servidor funcionando:', data);
    return true;
  } catch (error) {
    console.log('❌ Servidor não está rodando. Execute: npm run dev');
    return false;
  }
}

// 2. Testar API do ChatGPT
async function testChatAPI() {
  console.log('\n2️⃣ Testando API do ChatGPT...');
  try {
    const response = await fetch('http://localhost:3000/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: 'Oi, pode me sugerir um vinho tinto suave?'
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('❌ API com erro:', errorData);
      return false;
    }

    const data = await response.json();
    if (data.content) {
      console.log('✅ API funcionando! Preview da resposta:');
      console.log(data.content.substring(0, 100) + '...');
      return true;
    } else {
      console.log('❌ API retornou resposta vazia');
      return false;
    }
  } catch (error) {
    console.log('❌ Erro ao testar API:', error.message);
    return false;
  }
}

// 3. Verificar configurações
async function checkConfig() {
  console.log('\n3️⃣ Verificando configurações...');
  try {
    const response = await fetch('http://localhost:3000/api/check');
    const data = await response.json();
    
    if (data.hasApiKey) {
      console.log('✅ API Key configurada:', data.keyPreview);
    } else {
      console.log('❌ API Key não encontrada no .env.local');
    }
    
    console.log('Environment:', data.env);
    return data.hasApiKey;
  } catch (error) {
    console.log('❌ Erro ao verificar config:', error.message);
    return false;
  }
}

// Executar todos os testes
async function runAllTests() {
  const serverOk = await testServer();
  if (!serverOk) return;
  
  const configOk = await checkConfig();
  if (!configOk) return;
  
  const apiOk = await testChatAPI();
  
  console.log('\n🎯 Resultado final:');
  if (serverOk && configOk && apiOk) {
    console.log('✅ Tudo funcionando! O SommeliAI está pronto!');
  } else {
    console.log('❌ Alguns problemas encontrados. Verifique os logs acima.');
  }
}

// Só executar se chamado diretamente
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { testServer, testChatAPI, checkConfig };
